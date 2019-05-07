/* eslint-disable no-console */

require('colors');
const path = require('path');
const fs = require('fs');
const sharp = require('sharp');
const readChunk = require('read-chunk'); // npm install read-chunk
const imageType = require('image-type');
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const jimp = require('jimp');
const globby = require('globby');
const { map } = require('async');
const mkdirp = require('mkdirp');
const rimraf = require('rimraf');

const config = {
	srcGlobPattern: ['src/img/**/*.+(jpg|png)'],
	tempDir: '.temp',
	distDir: 'dist',
	chunkSize: 30
};

const flattenArray = arr => arr.reduce(
	(a, b) => a.concat(Array.isArray(b) ? flattenArray(b) : b), []
);

/**
 * Return the first, top-level directory of a file path.
 *
 * Example input:
 * > getFirstAncestorDirFromPath('my/to/file')
 * > getFirstAncestorDirFromPath('/my/to/file')
 * > getFirstAncestorDirFromPath('./my/to/file')
 *
 * Example output:
 * > 'my'
 * > 'my'
 * > 'my'
 *
 * @param {String} filePath
 */
function getFirstAncestorDirFromPath(filePath) {
	return path.dirname(filePath)
		.split('/')
		.filter(dirPath => dirPath !== '.')[0];
}

/**
 * Test whether a path is newer than another
 *
 * @param {*} originalPath
 * @param {*} newerPath
 */
async function isNewer(originalPath, newerPath) {
	return new Promise(async (resolve, reject) => {
		const originalPathExists = await fs.existsSync(originalPath);
		const newerPathExists = await fs.existsSync(newerPath);

		if (originalPathExists && newerPathExists) {
			const originalPathStat = await fs.statSync(originalPath);
			const newerPathStat = await fs.statSync(newerPath);

			if (Date.parse(originalPathStat.mtime) > Date.parse(newerPathStat.mtime)) {
				return resolve(true);
			}
		}
		if (originalPathExists && !newerPathExists) {
			return resolve(true);
		}
		return resolve(false);
	});
}

(async () => {

	console.log('Processing images...');

	await rimraf.sync(config.tempDir);

	await globby(config.srcGlobPattern).then(async imageFiles => {
		await map(imageFiles, async filePath => {

			const fileExt = path.extname(filePath);
			const fileName = path.basename(filePath, fileExt);

			const srcFirstAncestorDir = getFirstAncestorDirFromPath(filePath);

			const tempDirPath = path.dirname(filePath).replace(`${srcFirstAncestorDir}/`, `${config.tempDir}/`);
			const distDirPath = path.dirname(filePath).replace(`${srcFirstAncestorDir}/`, `${config.distDir}/`);

			const imagePath2x = `${tempDirPath}/${fileName}_2x${fileExt}`;
			const imagePath1x = `${tempDirPath}/${fileName}${fileExt}`;
			const filePathDist = `${distDirPath}/${fileName}${fileExt}`;

			let shouldResize = true;
			if (await fs.existsSync(filePathDist)) {
				shouldResize = await isNewer(filePath, filePathDist).then(result => result) ? true : false;
			}

			if (shouldResize) {

				mkdirp(distDirPath);

				const buffer = await readChunk.sync(filePath, 0, 12);
				const mimeType = imageType(buffer);

				return await jimp.read(filePath)
					.then(async image => {

						await image
							.write(imagePath2x)
							.scale(0.5)
							.write(imagePath1x);

						console.log('--', filePath.cyan);

						return [{
							mimeType: mimeType.mime,
							resolutions: [{
								input: imagePath1x,
								output: `${distDirPath}/${fileName}${fileExt}`,
								outputWebp: `${distDirPath}/${fileName}.webp`
							},
							{
								input: imagePath2x,
								output: `${distDirPath}/${fileName}_2x${fileExt}`,
								outputWebp: `${distDirPath}/${fileName}_2x.webp`
							}]
						}];
					});
			}

			return [];

		}, async function imagesWrittenCallback(err, files) {

			files = flattenArray(files);

			if (files.length) {
				// Slight delay otherwise images get skipped!
				setTimeout(async () => {

					console.log('Optimising images...');

					// Sort all input/output image file paths into easy to handle arrays
					const allFiles = files.reduce((acc, file) => acc.concat(file.resolutions), []);
					const jpegFiles = files.filter(file => file.mimeType === 'image/jpeg').reduce((acc, file) => acc.concat(file.resolutions), []);
					const pngFiles = files.filter(file => file.mimeType === 'image/png').reduce((acc, file) => acc.concat(file.resolutions), []);

					// TODO: Check outputted files all exist
					const allOutputFilePaths = flattenArray(allFiles.map(file => {
						// eslint-disable-next-line max-nested-callbacks
						return [file.output, file.outputWebp].reduce((acc, filePath) => acc.concat(filePath), []);
					}));

					let webpPromises, jpegPromises, pngPromises;

					webpPromises = allFiles.reduce((acc, file) => {
						acc.push(sharp(file.input)
							.webp({
								quality: 75
							})
							.toFile(file.outputWebp));
						return acc;
					}, []);

					jpegPromises = jpegFiles.reduce((acc, file) => {
						acc.push(imagemin([file.input], path.dirname(file.output), {
							use: [imageminMozjpeg({ quality: 85 })]
						}));
						return acc;
					}, []);

					pngPromises = pngFiles.reduce((acc, file) => {
						acc.push(imagemin([file.input], path.dirname(file.output), {
							use: [imageminPngquant({ quality: 100 })]
						}));
						return acc;
					}, []);

					await Promise.all(webpPromises, jpegPromises, pngPromises);

					// Slight delay otherwise images get skipped!
					setTimeout(async () => {
						// Tidy up
						// eslint-disable-next-line max-nested-callbacks
						rimraf(config.tempDir, () => {
							console.log(`${files.length} file(s) processed`.cyan);
							console.log('Processing images...', 'FINISHED'.green);
						});
					}, 50);

				}, 50);
			} else {
				console.log('0 files processed'.cyan);
				console.log('Processing images...', 'FINISHED'.green);
			}
		});
	});

})();
