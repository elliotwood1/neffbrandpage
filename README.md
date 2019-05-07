# AO Brand Base Project

A boilerplate for brand pages in marketing.


## Installation

```
yarn
```

----

## Getting started

### Development build

```
yarn run dev
```

- Serve files locally at `localhost:3000`
- Compile nunjucks templates to HTML
- Compile SCSS to CSS
- Transpile JS using Webpack & Babel
- Generate `.webp` images ([more info](#images))
- Generate 2x and 1x resolution images ([more info](#images))

### Production build

```
yarn run prod
```

Same as development build, plus:

 - Compress HTML (stripping white space)
 - Compress/minify CSS and JS
 - Compress images
 - Rewrite certain asset URLs within HTML to be absolute paths, e.g.

```.html
<link href="css/example.css">

<img src="img/example.jpg" />

<div style="background-image: url(img/example.jpg)">
```

Would become the following (where `//media.ao.com/uk/brandPages/samsung/` is the `PROJECT_SERVER_PATH` variable set inside [gulpfile.js](#gulp)).

```.html
<link href="//media.ao.com/uk/brandPages/samsung/css/example.css">

<img src="//media.ao.com/uk/brandPages/samsung/img/example.jpg" />

<div style="background-image: url(//media.ao.com/uk/brandPages/samsung/img/example.jpg)">
```


----

## Gulp

The main build entry point is `gulpfile.js`, which contains two variables at the top of the file.

These should be the only variables you need to change on a per project basis.

**gulpfile.js**

```.js
const PROJECT_NAME = 'sample-project-name'; // The filename of both the compiled CSS and JS files.
const PROJECT_SERVER_PATH = '//media.ao.com/uk/qa/sample-project-name/'; // Where the page assets will be hosted
```


----

## Templating

Pages are built using [Nunjucks](https://mozilla.github.io/nunjucks/) templates and `JSON` data.

The data for each `src/templates/*.njk` template is piped from a `.json` file located within `src/configs/`.

Generally, each section of the page should have a corresponding `.njk` template file located within `src/templates/partials/`, for example:

### Example configuration

**src/configs/index.json**

```.json
{
    "config": {
        "lang": "en-GB",
        "title": "Meta title",
        "description": "Meta description"
    },
    "layout": [
        {
            "sectionId": "my-example",
            "templateId": "example",
            "data": {
                "title": "Hello World"
            }
        }
    ]
}
```

**src/templates/example.njk**

```.html
<div id="{{ section.sectionId }}">
    <h1>{{ data.title }}</h1>
</div>
```

**build/index.html**

```.html
<div id="my-example">
    <h1>Hello World</h1>
</div>
```

### Translations

Multiple config files are allowed within `src/configs/` and the compiled HTML file will retain the name of the `json` file. This means you can translate pages for different territories or create pages with completely different data and section ordering.

Given the following config files:

- `src/configs/index-UK.json`
- `src/configs/index-DE.json`

The compiled HTML would become:

- `build/index-UK.html`
- `build/index-DE.html`


----

## Images

Images are copied from `src/img/` to `build/img/`.

### Webp
Webp versions of each image are generated for use in `<source>` elements for browsers which support the file type.

### Sizes

1x and 2x resolutions of all images are generated. For example, given an image `src/img/example.jpg` **(200 x 200px)**, the following files would be generated:

  - `buid/img/example.jpg` **(100 x 100px)**
  - `buid/img/example_2x.jpg` **(200 x 200px)**

This is primarily useful for `<picture>` elements.

#### Example

```.html
<picture>
    <!--[if IE 9]><video style="display: none;"><![endif]-->
        <source type="image/webp" srcset="img/example.webp 1x, img/example_2x.webp 2x">
    <!--[if IE 9]></video><![endif]-->
    <img srcset="img/example.jpg 1x, img/example_2x.jpg 2x">
</picture>
```

### Compression

Compression is run only in the [production build](#production-build), which is handled by `images.js`. Compression was originally handled by Gulp, but had to be taken out because it was too slow with lots of images.

### Naming conventions

If an image will need to be responsive using a `srcset`, it is encouraged to suffix the name of the image with two hyphens followed by the [breakpoint](#breakpoints) at which it will be used. For example: `example--landscape.jpg`.

#### Example

- `src/img/example--mobile.jpg` - To be used at **mobile (0px)** and above.
- `src/img/example--desktop.jpg` - To be used at **desktop (990px)** and above.

```.html
<picture>
    <!--[if IE 9]><video style="display: none;"><![endif]-->
        <source type="image/webp" srcset="img/example--desktop.webp 1x, img/example--desktop_2x.webp 2x" media="(min-width: 990px)">
        <source type="image/jpeg" srcset="img/example--desktop.jpg 1x, img/example--desktop_2x.jpg 2x" media="(min-width: 990px)">
        <source type="image/webp" srcset="img/example--mobile.webp 1x, img/example--mobile_2x.webp 2x">
    <!--[if IE 9]></video><![endif]-->
    <img srcset="img/example--mobile.jpg 1x, img/example--mobile_2x.jpg 2x">
</picture>
```


----

## SCSS

### Breakpoints

**Four** breakpoints are available in SCSS (five, if you include mobile). These are as follows:

| Size | Name | SCSS variable |
| - | - | - |
| 0px | Mobile | N/A (we do things mobile-first so there is no variable) |
| 544px | Landscape | $landscape |
| 768px | Tablet | $tablet |
| 990px | Desktop | $desktop |
| 1200px | Uber | $uber |

Media queries should use the breakpoint variables as follows:

```.scss
.foo {
    @media (min-width: $tablet) {
        ...
    }
}
```
