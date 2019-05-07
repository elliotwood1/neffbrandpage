/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = hasClass;
/* harmony export (immutable) */ __webpack_exports__["a"] = addClass;
/* harmony export (immutable) */ __webpack_exports__["f"] = removeClass;
/* unused harmony export toggleClass */
/* unused harmony export getElement */
/* unused harmony export getElements */
/* unused harmony export dispatchEvent */
/* harmony export (immutable) */ __webpack_exports__["e"] = preventEventDefault;
/* unused harmony export doesElementExist */
/* unused harmony export createElement */
/* unused harmony export insertBefore */
/* unused harmony export appendTo */
/* unused harmony export insertPlaceholder */
/* harmony export (immutable) */ __webpack_exports__["d"] = moveElement;
/* harmony export (immutable) */ __webpack_exports__["b"] = getClosest;
/* unused harmony export getParents */
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function hasClass(element, className) {
	if (element instanceof HTMLElement && typeof className === "string") {
		return element.classList.contains(className);
	} else {
		throw new Error("The element passed in to hasClass is not a valid HTML element");
	}
}

function addClass(element, className) {
	if (element instanceof HTMLElement && typeof className === 'string') {
		element.classList.add(className);
		return true;
	} else {
		throw new Error("The element passed in to addClass is not a valid HTML element");
	}
}

function removeClass(element, className) {
	if (element instanceof HTMLElement && typeof className === 'string') {
		element.classList.remove(className);
		return true;
	} else {
		throw new Error("The element passed in to removeClass is not a valid HTML element");
	}
}

function toggleClass(element, className) {
	if (element instanceof HTMLElement && typeof className === 'string') {
		element.classList.toggle(className);
		return true;
	} else {
		throw new Error("The element passed in to removeClass is not a valid HTML element");
	}
}

function getElement(context, target) {
	return (context || document).querySelector(target);
}

function getElements(context, target) {
	return (context || document).querySelectorAll(target);
}

function dispatchEvent(evt, data) {
	var event = document.createEvent('Event');
	event.initEvent(evt, true, true);

	if (typeof data !== 'undefined') {
		Object.keys(data).forEach(function (p) {
			event[p] = data[p];
		});
	}

	window.dispatchEvent(event);
}

function preventEventDefault(evt) {
	if (evt.preventDefault) {
		evt.preventDefault();
	} else {
		evt.returnValue = false;
	}
}

function doesElementExist(element) {
	return document.querySelector(element);
}

/*
 EXAMPLE:

 createElement({element: 'div', class: 'className', content: false});
 */

function createElement(obj) {
	if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) !== 'object') {
		throw new Error("createElement expects a config object passed in to define the element's properties");
	}
	var newElem = document.createElement(obj.element);
	newElem.setAttribute('class', obj.class);
	if (obj.content !== false) {
		newElem.innerHTML = obj.content;
	}
	return newElem;
}

function insertBefore(elem, parent, before) {
	var elemNode;
	var parentNode;
	var beforeNode;

	// Check element is a HTML element, if it is a string then query it. Otherwise set it as null.
	if (elem instanceof HTMLElement) {
		elemNode = elem;
	} else {
		elemNode = null;
	}

	// Check parent is a HTML element, if it is a string then query it. Otherwise set it as null.
	if (parent instanceof HTMLElement) {
		parentNode = parent;
	} else if (typeof parent === 'string') {
		parentNode = document.querySelector(parent);
	} else {
		parentNode = null;
	}

	// Null will append it to the end of parents childnodes.
	if (before instanceof HTMLElement) {
		beforeNode = before;
	} else {
		beforeNode = null;
	}

	// Only insert element if parentNode and elementNode are HTML nodes.
	if (parentNode !== null && elemNode !== null) {
		parentNode.insertBefore(elem, before);
		return true;
	} else {
		throw new Error("insertBefore expects a valid element, parent and before target");
	}
}

function appendTo(elem, parent) {
	var parentNode;

	// Check parent is a HTML element, if it is a string then query it. Otherwise set it as null.
	if (parent instanceof HTMLElement) {
		parentNode = parent;
	} else if (typeof parent === 'string') {
		parentNode = document.querySelector(parent);
	} else {
		parentNode = null;
	}

	if (parentNode !== null && elem instanceof HTMLElement) {
		document.querySelector(parentNode).appendTo(elem);
		return true;
	} else {
		throw new Error("appendTo expects a valid element and parent");
	}
}

function insertPlaceholder(el) {
	var placeHolder = document.createElement('div');
	placeHolder.classList.add('placeholder');
	placeHolder.setAttribute('data-elreplaced', el.id);

	el.parentNode.insertBefore(placeHolder, el);
	el.parentNode.removeChild(el);
}

function moveElement(el, to) {
	var placeHolder = document.querySelector('.placeholder[data-elreplaced=' + el.id + ']');
	if (placeHolder) {
		placeHolder.parentNode.insertBefore(el, placeHolder);
		placeHolder.parentNode.removeChild(placeHolder);
	} else if (to) {
		insertPlaceholder(el);
		to.appendChild(el);
	}
}

/**
 * getClosest
 * @author Robin O'Neill
 *
 * Find the closest element to the target element
 *
 * @param target - dom element which is the current element
 * @param selector - the element you are looking for
 * @param scope - limit the search to a containing element
 * @returns {*}
 */
function getClosest(target, selector, scope) {
	var matches = (scope || document).querySelectorAll(selector);
	var i;
	var el = target;

	do {
		i = matches.length;
		while (--i >= 0 && matches.item(i) !== el) {};
	} while (i < 0 && (el = el.parentElement));
	return el;
}

/**
 * Get all DOM element up the tree that contain a class, ID, or data attribute
 *
 * Credit: https://github.com/happyBanshee/JS-helpers/wiki/.closest(),-.parents(),-.parentsUntil(),-.find()-in-JS
 *
 * @param  {Node} elem The base element
 * @param  {String} selector The class, id, data attribute, or tag to look for
 * @return {Array} Null if no match
 */
function getParents(elem, selector) {

	var parents = [];
	var firstChar;
	if (selector) {
		firstChar = selector.charAt(0);
	}

	// Get matches
	for (; elem && elem !== document; elem = elem.parentNode) {
		if (selector) {

			// If selector is a class
			if (firstChar === '.') {
				if (elem.classList.contains(selector.substr(1))) {
					parents.push(elem);
				}
			}

			// If selector is an ID
			if (firstChar === '#') {
				if (elem.id === selector.substr(1)) {
					parents.push(elem);
				}
			}

			// If selector is a data attribute
			if (firstChar === '[') {
				if (elem.hasAttribute(selector.substr(1, selector.length - 1))) {
					parents.push(elem);
				}
			}

			// If selector is a tag
			if (elem.tagName.toLowerCase() === selector) {
				parents.push(elem);
			}
		} else {
			parents.push(elem);
		}
	}

	// Return parents if any exist
	if (parents.length === 0) {
		return null;
	}
	return parents;
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ao_internal_marketing_globals_modules_AoStickyNav__ = __webpack_require__(2);


Object(__WEBPACK_IMPORTED_MODULE_0__ao_internal_marketing_globals_modules_AoStickyNav__["a" /* default */])('#AoStickyNav');

var paginationContainer = document.querySelector('.pagination-container');
var carouselOuter = document.querySelector('.carousel-outer');

var slide1 = document.getElementById('slide1');
var slide2 = document.getElementById('slide2');
var slide3 = document.getElementById('slide3');
var slide4 = document.getElementById('slide4');

var slideSelect = function slideSelect(slide) {
	var slideArray = [slide1, slide2, slide3, slide4];

	for (var i = 0; i < slideArray.length; i++) {
		if (slide === slideArray[i]) {
			slide.classList.add('current');
		} else {
			slideArray[i].classList.remove('current');
		}
	}
};

paginationContainer.addEventListener('click', function (e) {
	if (e.target.hasAttribute('data-slide-number')) {
		console.log(e.target.getAttribute('data-slide-number'));
		switch (e.target.getAttribute('data-slide-number')) {
			case '1':
				carouselOuter.style.transform = 'translateX(0)';
				slideSelect(slide1);
				break;
			case '2':
				carouselOuter.style.transform = 'translateX(-100vw)';
				slideSelect(slide2);
				break;
			case '3':
				carouselOuter.style.transform = 'translateX(-200vw)';
				slideSelect(slide3);
				break;
			case '4':
				carouselOuter.style.transform = 'translateX(-300vw)';
				slideSelect(slide4);
				break;
			default:
				carouselOuter.style.transform = 'translateX(0)';
				slide1.classList.add('current');
		}
	}
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = navInit;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_utils_dom_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_utils_general_utils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_utils_aoSmoothScroll__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_utils_translator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__translations__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__translations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__translations__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Created by tutech on 07/07/2016.
 */







var element = void 0,
    stickyElement = void 0;
// let menus = [];
var maxDepth = 0;
var panelsOpen = 0;
var breakpointEventListeners = [];
var isTouch = false;
var touchListener = null;
var lastOpenedMenu = void 0;
var lang = document.head.getAttribute('lang');
lang = lang === 'en' ? 'en-GB' : lang;
__WEBPACK_IMPORTED_MODULE_3__js_utils_translator__["a" /* default */].set('translations', __WEBPACK_IMPORTED_MODULE_4__translations___default.a);
__WEBPACK_IMPORTED_MODULE_3__js_utils_translator__["a" /* default */].setLang(lang);
var getTranslation = Object(__WEBPACK_IMPORTED_MODULE_3__js_utils_translator__["b" /* namespacedTranslator */])('translations');
/**
 * Calculates the number of panels to create.
 */
function calcSubMenus(topUl) {
	var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

	var menus = [];

	maxDepth = Math.max(maxDepth, depth);

	Array.prototype.forEach.call(topUl.children, function (child) {
		if (child.hasAttribute('data-subMenu')) {
			var menuChild = child.querySelector('ul');
			menus.push({ id: child.getAttribute('data-subMenu'), menus: calcSubMenus(menuChild, depth + 1) });
		}
	});

	return menus;
}

/**
 * Handles closing of menus on mobile.
 * @param {number} [panel] - ID Number of panel, if not supplied all panels are closed.
 */
function close(panel) {
	if (panel) {
		var panelElement = document.getElementById('aosnPanel' + panel);
		var movedElement = panelElement.querySelector('.navContainer').children[0];
		Object(__WEBPACK_IMPORTED_MODULE_0__js_utils_dom_utils__["d" /* moveElement */])(movedElement);
		Object(__WEBPACK_IMPORTED_MODULE_0__js_utils_dom_utils__["f" /* removeClass */])(panelElement, 'open');
		panelsOpen--;
	} else {
		var allOpenPanels = document.querySelectorAll('.aosnMobilePanel.open');
		Array.prototype.forEach.call(allOpenPanels, function (pnl) {
			var movedElement = pnl.querySelector('.navContainer').children[0];
			Object(__WEBPACK_IMPORTED_MODULE_0__js_utils_dom_utils__["d" /* moveElement */])(movedElement);
			Object(__WEBPACK_IMPORTED_MODULE_0__js_utils_dom_utils__["f" /* removeClass */])(pnl, 'open');
			panelsOpen--;
		});
	}

	if (!panelsOpen) {
		Object(__WEBPACK_IMPORTED_MODULE_0__js_utils_dom_utils__["f" /* removeClass */])(document.body, 'aosnOpen');
		__WEBPACK_IMPORTED_MODULE_1__js_utils_general_utils__["a" /* scrollLock */].unlock('aosnMobileOverlay');
	}
}

/**
 * Handles opening of menus on mobile.
 * @param {number} panel - ID Number of panel.
 * @param {string} menuSelector - ID of menu to move into panel.
 */

function open(panel, menuSelector) {
	var panelElement = document.getElementById('aosnPanel' + panel);
	var panelContentContainer = panelElement.querySelector('.navContainer');
	var menuElement = document.getElementById(menuSelector);

	Object(__WEBPACK_IMPORTED_MODULE_0__js_utils_dom_utils__["d" /* moveElement */])(menuElement, panelContentContainer);

	Object(__WEBPACK_IMPORTED_MODULE_0__js_utils_dom_utils__["a" /* addClass */])(panelElement, 'open');

	panelsOpen++;

	if (panelsOpen === 1) {
		Object(__WEBPACK_IMPORTED_MODULE_0__js_utils_dom_utils__["a" /* addClass */])(document.body, 'aosnOpen');
		__WEBPACK_IMPORTED_MODULE_1__js_utils_general_utils__["a" /* scrollLock */].lock('navContainer');
	}
}

/**
 * Closes all menu levels if clicking outside the menu.
 * @param evt - Passed in from Event Listener.
 */
function tapAway(evt) {
	var target = evt.target;
	var realTarget = evt.target;

	var isMenu = false;

	while (target !== document.body) {
		if (target.id === 'AoStickyNav') {
			isMenu = true;
			break;
		}
		target = target.parentNode;
	}
	if (!isMenu) {
		var openMenus = document.getElementById('AoStickyNav').querySelectorAll('.open');
		Array.prototype.forEach.call(openMenus, function (menu) {
			Object(__WEBPACK_IMPORTED_MODULE_0__js_utils_dom_utils__["f" /* removeClass */])(menu, 'open');
		});
		document.body.removeEventListener('touchstart', tapAway);
		lastOpenedMenu = null;
	} else {

		var closestLi = getClosest(realTarget, 'drgdf', stickyElement); //realTarget.closest('li');
		var closestLiWithSubmenu = getClosest(realTarget, 'li[data-submenu]', stickyElement); //realTarget.closest('li[data-submenu]');

		if (closestLiWithSubmenu && closestLiWithSubmenu.hasAttribute('data-submenu') && closestLiWithSubmenu.getAttribute('data-submenu') !== lastOpenedMenu) {
			var childMenus = document.getElementById(lastOpenedMenu);
			childMenus.classList.remove('open');
		} else if (closestLi && closestLi.hasAttribute('data-submenu')) {
			var _childMenus = document.getElementById(closestLi.getAttribute('data-submenu'));
			_childMenus.classList.add('open');
		}
	}
}

/**
 * A scoped pollyfil of .closest() which accepts a scope param
 * to limit the number of nodes being searched
 *
 * @param target
 * @param selector
 * @param scope defaults to the document.body
 * @returns {*}
 */
function getClosest(target, selector, scope) {
	var matches = (scope || this.document || this.ownerDocument).querySelectorAll(selector),
	    i,
	    el = target;
	do {
		i = matches.length;
		while (--i >= 0 && matches.item(i) !== el) {};
	} while (i < 0 && (el = el.parentElement));
	return el;
}

/**
 * Handles hover events on desktop.
 * @param {HTMLElement} targetMenu
 * @param {String} method=close - Pass in open or close.
 */
function hover(targetMenu, method, evt) {
	if (method === 'open') {
		Object(__WEBPACK_IMPORTED_MODULE_0__js_utils_dom_utils__["a" /* addClass */])(targetMenu, 'open');
	} else {
		Object(__WEBPACK_IMPORTED_MODULE_0__js_utils_dom_utils__["f" /* removeClass */])(targetMenu, 'open');
	}
}

function touch(evt) {
	var target = evt.target;
	var realTarget = getClosest(target, 'li', stickyElement); //target.closest('li');
	var targetMenu = realTarget.getAttribute('data-submenu');
	var targetMenuEl = document.getElementById(targetMenu);

	if (targetMenu) {
		if (lastOpenedMenu) {
			var previousMenuLevel = document.getElementById(lastOpenedMenu).getAttribute('data-menulevel');
			var newMenuLevel = targetMenuEl.getAttribute('data-menulevel');
			if (newMenuLevel <= previousMenuLevel) {
				var topLevelElement = element.querySelector('.open[data-menulevel="' + newMenuLevel + '"]');
				if (topLevelElement) {
					var openSubMenus = topLevelElement.querySelectorAll('.open');
					if (openSubMenus) {
						Array.prototype.forEach.call(openSubMenus, function (menu) {
							menu.classList.remove('open');
						});
					}
					topLevelElement.classList.remove('open');
				}
			}
		} else {
			document.body.addEventListener('touchstart', tapAway);
			document.body.addEventListener('mouseover', tapAway);
			// document.body.addEventListener('mouseleave', tapAway);
		}

		if (_typeof(targetMenuEl.classList) === 'object') {
			targetMenuEl.classList.add('open');
		}

		lastOpenedMenu = targetMenu;
	}
}

/**
 * Checks to see if the clicked element or it's descendants have a reference to a sub-menu.
 * @param evt - Passed in from click event.
 */
function handleSubMenuClick(evt) {
	var node = evt.target;
	var subMenuSelector = '';
	var maxBubble = 1;
	var isAnchor = node.getAttribute('href') ? node.getAttribute('href').match(/^#/) : false;

	if (isAnchor) {
		close();
		return false;
	}

	while (node.parentNode) {
		var attrSubMenu = node.getAttribute('data-submenu');
		if (attrSubMenu) {
			subMenuSelector = attrSubMenu;
			break;
		}
		node = node.parentNode;
	}

	if (subMenuSelector.length) {
		var panelToOpen = panelsOpen + 1;
		open(panelToOpen, subMenuSelector);
	}
}

/**
 * Adds a scroll event listener to the window
 * When the top of the root element is off the top of the screen,
 * adds a class of fixed to the container element.
 */
function setupStickyMenu() {
	window.addEventListener('scroll', function () {
		var navDockTop = element.getBoundingClientRect().top;
		if (navDockTop <= 0) {
			Object(__WEBPACK_IMPORTED_MODULE_0__js_utils_dom_utils__["a" /* addClass */])(stickyElement, 'fixed');
		} else {
			Object(__WEBPACK_IMPORTED_MODULE_0__js_utils_dom_utils__["f" /* removeClass */])(stickyElement, 'fixed');
		}
	});
}

/**
 * Adds breakpointChanged event listener to handle menu setup
 * for both mobile and desktop states.
 */
function setupBreakpointHandling() {
	window.addEventListener('breakpointChanged', function (evt) {
		removeBreakpointEventListeners();
		if (evt.breakpoint === 'mobile') {
			setupMobile();
		} else {
			if (evt.previousBreakpoint === 'mobile') {
				close();
				removeMobileElements();
			}
			setupDesktop();
		}
	});
}

/**
 * For caching event listeners that need to be removed once a breakpoint has changed.
 * @param {String} evtType
 * @param {HTMLElement} evtTarget
 * @param functionReference
 */
function addBreakpointEventListener(evtType, evtTarget, functionReference) {
	evtTarget.addEventListener(evtType, functionReference);
	breakpointEventListeners.push({ type: evtType, target: evtTarget, fctn: functionReference });
}

/**
 * Removes all breakpoint specific event listeners.
 */
function removeBreakpointEventListeners() {
	if (breakpointEventListeners.length) {
		breakpointEventListeners.forEach(function (evtListener) {
			evtListener.target.removeEventListener(evtListener.type, evtListener.fctn);
		});
		breakpointEventListeners = [];
	}
}

/**
 * Removes elements from the dom that are specifically for mobile.
 */
function removeMobileElements() {
	var mobileElements = document.body.querySelectorAll('[class^="aosnMobile"]');
	Array.prototype.forEach.call(mobileElements, function (el) {
		el.parentNode.removeChild(el);
	});
}

/**
 * Initialises the menu ready for mobile.
 */
function setupMobile() {
	//Add mobile elements.

	createOverlay();

	for (var i = 1; i <= maxDepth; i++) {
		createPanel(i);
	}

	//Add click event to branding to open mobile menu.
	var navControl = element.querySelector('.aosnBranding');
	addBreakpointEventListener('click', navControl, open.bind(null, 1, 'aosnTopLevelMenu'));
}

/**
 * Initialises the menu ready for desktop.
 */
function setupDesktop() {
	isTouch = typeof window.ontouchstart !== 'undefined';

	if (isTouch) {
		var firstFirstLevelMenus = document.getElementById('aosnTopLevelMenu').children;
		Array.prototype.forEach.call(firstFirstLevelMenus, function (menuItem) {
			addBreakpointEventListener('touchstart', menuItem, touch);
			addBreakpointEventListener('mouseover', menuItem, touch);
		});
	} else {
		//Setup mouseover && mouse leave
		var elementsWithSubMenu = element.querySelectorAll('[data-submenu]');

		if (elementsWithSubMenu.length) {
			Array.prototype.forEach.call(elementsWithSubMenu, function (menuItem) {
				var targetMenu = document.getElementById(menuItem.getAttribute('data-submenu'));
				addBreakpointEventListener('mouseover', menuItem, hover.bind(null, targetMenu, 'open'));
				addBreakpointEventListener('mouseleave', menuItem, hover.bind(null, targetMenu, 'close'));
			});
		}
	}
}

/**
 * Creates a panel element and appends it to the body.
 * @param {number} id
 */
function createPanel(id) {
	//Create panel.
	var panel = document.createElement('div');
	panel.id = 'aosnPanel' + id;
	Object(__WEBPACK_IMPORTED_MODULE_0__js_utils_dom_utils__["a" /* addClass */])(panel, 'aosnMobilePanel');

	//Create back button.
	var backButton = document.createElement('div');
	Object(__WEBPACK_IMPORTED_MODULE_0__js_utils_dom_utils__["a" /* addClass */])(backButton, 'btnBack');
	backButton.innerHTML = getTranslation('back');
	addBreakpointEventListener('click', backButton, close.bind(null, id));

	//Create container for menu items.
	var navContainer = document.createElement('div');
	Object(__WEBPACK_IMPORTED_MODULE_0__js_utils_dom_utils__["a" /* addClass */])(navContainer, 'navContainer');
	addBreakpointEventListener('click', navContainer, handleSubMenuClick);

	//Append elements.
	panel.appendChild(navContainer);
	panel.appendChild(backButton);
	document.body.appendChild(panel);
}

/**
 * Creates an overlay element and appends it to the body.
 * */
function createOverlay() {
	var overlay = document.createElement('div');
	Object(__WEBPACK_IMPORTED_MODULE_0__js_utils_dom_utils__["a" /* addClass */])(overlay, 'aosnMobileOverlay');
	Object(__WEBPACK_IMPORTED_MODULE_0__js_utils_dom_utils__["a" /* addClass */])(overlay, 'disable-scrolling');

	addBreakpointEventListener('click', overlay, close.bind(null, 0));

	document.body.appendChild(overlay);
}

/**
 * Initialises the standard sticky nav used across brand pages.
 * @param {HTMLElement} container - The outer node of the sticky nav.
 */
function navInit(container) {
	var jumpOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 35;

	//Setup common elements:
	if (typeof container === 'string') {
		element = document.querySelector(container);
	} else {
		element = container;
	}
	stickyElement = element.children[0];
	var topUl = element.querySelector('#aosnTopLevelMenu');
	calcSubMenus(topUl);

	//Setup event listeners
	setupStickyMenu();
	setupBreakpointHandling();

	function init() {
		window.removeEventListener('breakpointChanged', init);
		if (window.breakpoint.value === 'mobile') {
			setupMobile();
		} else {
			setupDesktop();
		}

		var anchors = topUl.querySelectorAll('a[href^="#"]');

		Array.from(anchors).forEach(function (anchor) {
			anchor.addEventListener('click', function (e) {
				var href = e.target.getAttribute('href');
				e.preventDefault();
				Object(__WEBPACK_IMPORTED_MODULE_2__js_utils_aoSmoothScroll__["a" /* jump */])(href, {
					duration: 900,
					offset: window.breakpoint.value === 'mobile' ? 0 : jumpOffset
				});
			});
		});
	}

	if (typeof window.breakpoint !== 'undefined') {
		init();
	} else {
		window.addEventListener('breakpointChanged', init);
	}
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return scrollLock; });
/* unused harmony export formatString */
/* unused harmony export fireOnce */
/* unused harmony export ready */
/* unused harmony export getUrlParameters */
/* unused harmony export debounce */
/* unused harmony export supportsTransitions */
/* unused harmony export isInStock */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_utils__ = __webpack_require__(0);


var scrollLock = {
	locked: false,
	enabledElementClass: '',
	eventListener: {},

	/**
  * Prevents background scroll on mobile.
  * @param {string} enabledElementClass - Selector of the element you wish to leave scrolling enabled.
  * @param {Array.<string>} [disabledElements=['body']] - Selectors of the elements you wish to disable scroll.
  */
	lock: function lock(enabledElementClass, disabledElements) {
		this.locked = true;
		this.enabledElementClass = enabledElementClass;
		disabledElements = Array.isArray(disabledElements) ? disabledElements : ['body'];
		disabledElements.forEach(function (selector) {
			var el = document.querySelector(selector);
			Object(__WEBPACK_IMPORTED_MODULE_0__dom_utils__["a" /* addClass */])(el, 'disable-scrolling');
		});
		this.eventListener = this.preventDefault.bind(this);
		document.body.addEventListener('touchmove', this.eventListener);
	},
	unlock: function unlock() {
		var els = document.querySelectorAll('.disable-scrolling');
		Array.prototype.forEach.call(els, function (element) {
			Object(__WEBPACK_IMPORTED_MODULE_0__dom_utils__["f" /* removeClass */])(element, 'disable-scrolling');
		});
		document.body.removeEventListener('touchmove', this.eventListener);
		this.locked = false;
	},
	preventDefault: function preventDefault(evt) {
		var target = evt.target;
		var hasVerticalScrollbar = target.scrollHeight > target.clientHeight;
		if (Object(__WEBPACK_IMPORTED_MODULE_0__dom_utils__["c" /* hasClass */])(target, 'disable-scrolling')) {
			Object(__WEBPACK_IMPORTED_MODULE_0__dom_utils__["e" /* preventEventDefault */])(evt);
		} else {
			while (!Object(__WEBPACK_IMPORTED_MODULE_0__dom_utils__["c" /* hasClass */])(target, this.enabledElementClass)) {
				target = target.parentNode;
				if (target === document.body) {
					break;
				}
			}
			hasVerticalScrollbar = target.scrollHeight > target.clientHeight;
			if (!hasVerticalScrollbar) {
				Object(__WEBPACK_IMPORTED_MODULE_0__dom_utils__["e" /* preventEventDefault */])(evt);
			}
		}
	}
};

var formatString = function formatString(format, args) {
	var matches = format.match(/{.*?}/gmi);
	if (matches) {
		matches.forEach(function (m) {
			var k = m.substr(1, m.length - 2);
			format = format.replace(m, args[k] || '');
		});
	}

	return format;
};

var fireOnce = function fireOnce(fn) {
	var hasFired = false;
	return function (e) {
		if (!hasFired) {
			fn();
			hasFired = true;
		}
	};
};

function ready(fn) {
	if (document.readyState === 'complete') {
		fn();
	} else {
		var fireFnOnce = fireOnce(fn);
		document.addEventListener('DOMContentLoaded', fireOnce);
		document.addEventListener('readystatechange', function () {
			if (document.readyState === 'complete') {
				fireFnOnce();
			}
		});
	}
}

function getUrlParameters() {
	/*
 const search = window.location.search.substring(1);
 
 if (!search) {
 	return {};
 }
 
 const params = search.split('&');
 const paramSplit = params.map(function(param){
 	const match = param.match(/^[^=\s]+=[^=\s]+$/gmi);
 	console.log('match', match);
 	return match ? match[0];
 });
 */
	var search = window.location.search.substring(1);
	var obj = {};
	search.replace(/([^=&]+)=([^&]*)/g, function (m, key, value) {
		obj[decodeURIComponent(key)] = decodeURIComponent(value);
	});

	return obj;
}

function debounce(fn) {
	var animationFrameRequested = false;
	return function () {
		if (!animationFrameRequested) {
			animationFrameRequested = true;
			requestAnimationFrame(function () {
				fn();
				animationFrameRequested = false;
			});
		}
	};
}

function supportsTransitions() {
	var b = document.body || document.documentElement,
	    s = b.style,
	    p = 'transition';

	if (typeof s[p] == 'string') {
		return true;
	}

	// Tests for vendor specific prop
	var v = ['Moz', 'webkit', 'Webkit', 'Khtml', 'O', 'ms'];
	p = p.charAt(0).toUpperCase() + p.substr(1);

	for (var i = 0; i < v.length; i++) {
		if (typeof s[v[i] + p] == 'string') {
			return true;
		}
	}

	return false;
}

/**
 * Check the product is in stock
 * Accepts the product object returned by the product handler
 *
 * @param {object} product
 */
function isInStock(product) {
	return product.State.toString().toLowerCase().indexOf('discontinued') === -1;
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isSmartPhone */
/* unused harmony export default */
/* unused harmony export initLinkHijack */
/* unused harmony export onClick */
/* unused harmony export isInPageLink */
/* unused harmony export stripHash */
/* unused harmony export isCssSmoothSCrollSupported */
/* unused harmony export deinitialiseElements */
/* unused harmony export canUseRequestAnimationFrame */
/* harmony export (immutable) */ __webpack_exports__["a"] = jump;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__polyfills_request_animation_frame_polyfill__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__polyfills_request_animation_frame_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__polyfills_request_animation_frame_polyfill__);



var initialisedElements = [];
var pageUrl = location.hash ? stripHash(location.href) : location.href;

function isSmartPhone() {
	return window.breakpoint.value === 'mobile' ? true : false;
}

function initSmoothScrolling(overrideOffset) {
	var allowPropagation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	var offset = window.breakpoint.value === 'desktop' ? 35 : 0;
	var offsetInt = !isNaN(overrideOffset) ? overrideOffset : offset;
	initLinkHijack(offsetInt, allowPropagation);
}

function initLinkHijack(offsetInt) {
	var allowPropagation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


	// Remove all the event listeners.
	deinitialiseElements();

	if (canUseRequestAnimationFrame()) {
		var links = document.querySelectorAll('a');
		links = [].slice.call(links);

		links.forEach(function (link) {
			link.addEventListener('click', function (e) {
				onClick(e, offsetInt, allowPropagation);
			});
			initialisedElements.push({ el: link, handler: onClick });
		});
	}
}

function onClick(e, offsetInt) {
	var allowPropagation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	// if the target is not an anchor link, find the closest parent anchor.
	var target = void 0;
	if (e.target.nodeName === 'A') {
		target = e.target;
	} else {
		target = Object(__WEBPACK_IMPORTED_MODULE_0__dom_utils__["b" /* getClosest */])(e.target, 'a');
	}

	if (!isInPageLink(target) || isSmartPhone()) {
		return;
	}

	if (!allowPropagation) {
		e.stopPropagation();
	}
	e.preventDefault();

	jump(target.hash, {
		offset: offsetInt
	});
}

function isInPageLink(target) {
	return target.tagName.toLowerCase() === 'a' && target.hash.length > 0 && stripHash(target.href) === pageUrl;
}

function stripHash(url) {
	return url.slice(0, url.lastIndexOf('#'));
}

function isCssSmoothSCrollSupported() {
	return 'scrollBehavior' in document.documentElement.style;
}

function deinitialiseElements() {
	initialisedElements.forEach(function (item) {
		item.el.removeEventListener('click', item.handler);
	});

	initialisedElements = [];
}

function canUseRequestAnimationFrame() {
	return !!window.requestAnimationFrame;
}

function jump(target, options) {
	var start = window.pageYOffset;
	var opt = {
		duration: options && options.duration ? options.duration : 900,
		offset: options && options.offset ? options.offset : 0,
		easing: options && options.easing ? options.easing : easeInOutQuad
	};

	var distance = typeof target === 'string' ? document.querySelector(target).getBoundingClientRect().top - opt.offset : target;
	var duration = typeof opt.duration === 'function' ? opt.duration(distance) : opt.duration;
	var timeStart;
	var timeElapsed;

	requestAnimationFrame(function (time) {
		timeStart = time;
		loop(time);
	});

	function loop(time) {
		timeElapsed = time - timeStart;

		window.scrollTo(0, opt.easing(timeElapsed, start, distance, duration));

		if (timeElapsed < duration) {
			requestAnimationFrame(loop);
		}
	}

	// Robert Penner's easeInOutQuad - http://robertpenner.com/easing/
	function easeInOutQuad(t, b, c, d) {
		t /= d / 2;
		if (t < 1) {
			return c / 2 * t * t + b;
		}
		t--;
		return -c / 2 * (t * (t - 2) - 1) + b;
	}
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

(function requestAnimationPolyfill() {
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
	}

	if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
		var currTime = new Date().getTime();
		var timeToCall = Math.max(0, 16 - (currTime - lastTime));
		var id = window.setTimeout(function () {
			callback(currTime + timeToCall);
		}, timeToCall);
		lastTime = currTime + timeToCall;
		return id;
	};

	if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
		clearTimeout(id);
	};
})();

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = namespacedTranslator;
var translations = {};
var lang = 'en-gb';
var client = '';

var translator = {
	setLang: function setLang(value) {
		lang = value;
	},

	setClient: function setClient(value) {
		client = value;
	},
	set: function set(resource, value) {
		var additions = {};
		additions[resource] = value;

		translations = Object.assign(translations, additions);
	},
	get: function get(resource, name) {
		resource = resource || 'default';

		if (client && translations[resource] && translations[resource][client] && translations[resource][client][lang] && translations[resource][client][lang][name]) {
			return translations[resource][client][lang][name];
		} else if (translations[resource] && translations[resource][lang] && translations[resource][lang][name]) {
			return translations[resource][lang][name];
		}
		return '';
	}
};

/* harmony default export */ __webpack_exports__["a"] = (translator);

function namespacedTranslator(resource) {
	return translator.get.bind(translator, resource);
}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {"en-GB":{"back":"Back"},"nl-NL":{"back":"Sluiten"},"de-DE":{"back":"Zurück"}}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmRiMTA4OWE4MzBhYjhhYTFkNjMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bhby1pbnRlcm5hbC9tYXJrZXRpbmctZ2xvYmFscy9qcy91dGlscy9kb20tdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFvLWludGVybmFsL21hcmtldGluZy1nbG9iYWxzL21vZHVsZXMvQW9TdGlja3lOYXYvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bhby1pbnRlcm5hbC9tYXJrZXRpbmctZ2xvYmFscy9qcy91dGlscy9nZW5lcmFsLXV0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYW8taW50ZXJuYWwvbWFya2V0aW5nLWdsb2JhbHMvanMvdXRpbHMvYW9TbW9vdGhTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bhby1pbnRlcm5hbC9tYXJrZXRpbmctZ2xvYmFscy9qcy9wb2x5ZmlsbHMvcmVxdWVzdC1hbmltYXRpb24tZnJhbWUtcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bhby1pbnRlcm5hbC9tYXJrZXRpbmctZ2xvYmFscy9qcy91dGlscy90cmFuc2xhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYW8taW50ZXJuYWwvbWFya2V0aW5nLWdsb2JhbHMvbW9kdWxlcy9Bb1N0aWNreU5hdi90cmFuc2xhdGlvbnMuanNvbiJdLCJuYW1lcyI6WyJoYXNDbGFzcyIsImVsZW1lbnQiLCJjbGFzc05hbWUiLCJIVE1MRWxlbWVudCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiRXJyb3IiLCJhZGRDbGFzcyIsImFkZCIsInJlbW92ZUNsYXNzIiwicmVtb3ZlIiwidG9nZ2xlQ2xhc3MiLCJ0b2dnbGUiLCJnZXRFbGVtZW50IiwiY29udGV4dCIsInRhcmdldCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldEVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImRpc3BhdGNoRXZlbnQiLCJldnQiLCJkYXRhIiwiZXZlbnQiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwicCIsIndpbmRvdyIsInByZXZlbnRFdmVudERlZmF1bHQiLCJwcmV2ZW50RGVmYXVsdCIsInJldHVyblZhbHVlIiwiZG9lc0VsZW1lbnRFeGlzdCIsImNyZWF0ZUVsZW1lbnQiLCJvYmoiLCJuZXdFbGVtIiwic2V0QXR0cmlidXRlIiwiY2xhc3MiLCJjb250ZW50IiwiaW5uZXJIVE1MIiwiaW5zZXJ0QmVmb3JlIiwiZWxlbSIsInBhcmVudCIsImJlZm9yZSIsImVsZW1Ob2RlIiwicGFyZW50Tm9kZSIsImJlZm9yZU5vZGUiLCJhcHBlbmRUbyIsImluc2VydFBsYWNlaG9sZGVyIiwiZWwiLCJwbGFjZUhvbGRlciIsImlkIiwicmVtb3ZlQ2hpbGQiLCJtb3ZlRWxlbWVudCIsInRvIiwiYXBwZW5kQ2hpbGQiLCJnZXRDbG9zZXN0Iiwic2VsZWN0b3IiLCJzY29wZSIsIm1hdGNoZXMiLCJpIiwibGVuZ3RoIiwiaXRlbSIsInBhcmVudEVsZW1lbnQiLCJnZXRQYXJlbnRzIiwicGFyZW50cyIsImZpcnN0Q2hhciIsImNoYXJBdCIsInN1YnN0ciIsInB1c2giLCJoYXNBdHRyaWJ1dGUiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJuYXZJbml0IiwicGFnaW5hdGlvbkNvbnRhaW5lciIsImNhcm91c2VsT3V0ZXIiLCJzbGlkZTEiLCJnZXRFbGVtZW50QnlJZCIsInNsaWRlMiIsInNsaWRlMyIsInNsaWRlNCIsInNsaWRlU2VsZWN0Iiwic2xpZGVBcnJheSIsInNsaWRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb25zb2xlIiwibG9nIiwiZ2V0QXR0cmlidXRlIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJzdGlja3lFbGVtZW50IiwibWF4RGVwdGgiLCJwYW5lbHNPcGVuIiwiYnJlYWtwb2ludEV2ZW50TGlzdGVuZXJzIiwiaXNUb3VjaCIsInRvdWNoTGlzdGVuZXIiLCJsYXN0T3BlbmVkTWVudSIsImxhbmciLCJoZWFkIiwidHJhbnNsYXRvciIsInNldCIsInRyYW5zbGF0aW9ucyIsInNldExhbmciLCJnZXRUcmFuc2xhdGlvbiIsIm5hbWVzcGFjZWRUcmFuc2xhdG9yIiwiY2FsY1N1Yk1lbnVzIiwidG9wVWwiLCJkZXB0aCIsIm1lbnVzIiwiTWF0aCIsIm1heCIsIkFycmF5IiwicHJvdG90eXBlIiwiY2FsbCIsImNoaWxkcmVuIiwiY2hpbGQiLCJtZW51Q2hpbGQiLCJjbG9zZSIsInBhbmVsIiwicGFuZWxFbGVtZW50IiwibW92ZWRFbGVtZW50IiwiYWxsT3BlblBhbmVscyIsInBubCIsImJvZHkiLCJzY3JvbGxMb2NrIiwidW5sb2NrIiwib3BlbiIsIm1lbnVTZWxlY3RvciIsInBhbmVsQ29udGVudENvbnRhaW5lciIsIm1lbnVFbGVtZW50IiwibG9jayIsInRhcEF3YXkiLCJyZWFsVGFyZ2V0IiwiaXNNZW51Iiwib3Blbk1lbnVzIiwibWVudSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbG9zZXN0TGkiLCJjbG9zZXN0TGlXaXRoU3VibWVudSIsImNoaWxkTWVudXMiLCJvd25lckRvY3VtZW50IiwiaG92ZXIiLCJ0YXJnZXRNZW51IiwibWV0aG9kIiwidG91Y2giLCJ0YXJnZXRNZW51RWwiLCJwcmV2aW91c01lbnVMZXZlbCIsIm5ld01lbnVMZXZlbCIsInRvcExldmVsRWxlbWVudCIsIm9wZW5TdWJNZW51cyIsImhhbmRsZVN1Yk1lbnVDbGljayIsIm5vZGUiLCJzdWJNZW51U2VsZWN0b3IiLCJtYXhCdWJibGUiLCJpc0FuY2hvciIsIm1hdGNoIiwiYXR0clN1Yk1lbnUiLCJwYW5lbFRvT3BlbiIsInNldHVwU3RpY2t5TWVudSIsIm5hdkRvY2tUb3AiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJzZXR1cEJyZWFrcG9pbnRIYW5kbGluZyIsInJlbW92ZUJyZWFrcG9pbnRFdmVudExpc3RlbmVycyIsImJyZWFrcG9pbnQiLCJzZXR1cE1vYmlsZSIsInByZXZpb3VzQnJlYWtwb2ludCIsInJlbW92ZU1vYmlsZUVsZW1lbnRzIiwic2V0dXBEZXNrdG9wIiwiYWRkQnJlYWtwb2ludEV2ZW50TGlzdGVuZXIiLCJldnRUeXBlIiwiZXZ0VGFyZ2V0IiwiZnVuY3Rpb25SZWZlcmVuY2UiLCJ0eXBlIiwiZmN0biIsImV2dExpc3RlbmVyIiwibW9iaWxlRWxlbWVudHMiLCJjcmVhdGVPdmVybGF5IiwiY3JlYXRlUGFuZWwiLCJuYXZDb250cm9sIiwiYmluZCIsIm9udG91Y2hzdGFydCIsImZpcnN0Rmlyc3RMZXZlbE1lbnVzIiwibWVudUl0ZW0iLCJlbGVtZW50c1dpdGhTdWJNZW51IiwiYmFja0J1dHRvbiIsIm5hdkNvbnRhaW5lciIsIm92ZXJsYXkiLCJjb250YWluZXIiLCJqdW1wT2Zmc2V0IiwiaW5pdCIsInZhbHVlIiwiYW5jaG9ycyIsImZyb20iLCJhbmNob3IiLCJocmVmIiwianVtcCIsImR1cmF0aW9uIiwib2Zmc2V0IiwibG9ja2VkIiwiZW5hYmxlZEVsZW1lbnRDbGFzcyIsImV2ZW50TGlzdGVuZXIiLCJkaXNhYmxlZEVsZW1lbnRzIiwiaXNBcnJheSIsImVscyIsImhhc1ZlcnRpY2FsU2Nyb2xsYmFyIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiZm9ybWF0U3RyaW5nIiwiZm9ybWF0IiwiYXJncyIsImsiLCJtIiwicmVwbGFjZSIsImZpcmVPbmNlIiwiZm4iLCJoYXNGaXJlZCIsInJlYWR5IiwicmVhZHlTdGF0ZSIsImZpcmVGbk9uY2UiLCJnZXRVcmxQYXJhbWV0ZXJzIiwic2VhcmNoIiwibG9jYXRpb24iLCJzdWJzdHJpbmciLCJrZXkiLCJkZWNvZGVVUklDb21wb25lbnQiLCJkZWJvdW5jZSIsImFuaW1hdGlvbkZyYW1lUmVxdWVzdGVkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic3VwcG9ydHNUcmFuc2l0aW9ucyIsImIiLCJkb2N1bWVudEVsZW1lbnQiLCJzIiwidiIsInRvVXBwZXJDYXNlIiwiaXNJblN0b2NrIiwicHJvZHVjdCIsIlN0YXRlIiwidG9TdHJpbmciLCJpbmRleE9mIiwiaW5pdGlhbGlzZWRFbGVtZW50cyIsInBhZ2VVcmwiLCJoYXNoIiwic3RyaXBIYXNoIiwiaXNTbWFydFBob25lIiwiaW5pdFNtb290aFNjcm9sbGluZyIsIm92ZXJyaWRlT2Zmc2V0IiwiYWxsb3dQcm9wYWdhdGlvbiIsIm9mZnNldEludCIsImlzTmFOIiwiaW5pdExpbmtIaWphY2siLCJkZWluaXRpYWxpc2VFbGVtZW50cyIsImNhblVzZVJlcXVlc3RBbmltYXRpb25GcmFtZSIsImxpbmtzIiwic2xpY2UiLCJsaW5rIiwib25DbGljayIsImhhbmRsZXIiLCJub2RlTmFtZSIsImlzSW5QYWdlTGluayIsInN0b3BQcm9wYWdhdGlvbiIsInVybCIsImxhc3RJbmRleE9mIiwiaXNDc3NTbW9vdGhTQ3JvbGxTdXBwb3J0ZWQiLCJvcHRpb25zIiwic3RhcnQiLCJwYWdlWU9mZnNldCIsIm9wdCIsImVhc2luZyIsImVhc2VJbk91dFF1YWQiLCJkaXN0YW5jZSIsInRpbWVTdGFydCIsInRpbWVFbGFwc2VkIiwidGltZSIsImxvb3AiLCJzY3JvbGxUbyIsInQiLCJjIiwiZCIsInJlcXVlc3RBbmltYXRpb25Qb2x5ZmlsbCIsImxhc3RUaW1lIiwidmVuZG9ycyIsIngiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwiY3VyclRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsInRpbWVUb0NhbGwiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiY2xpZW50Iiwic2V0Q2xpZW50IiwicmVzb3VyY2UiLCJhZGRpdGlvbnMiLCJhc3NpZ24iLCJnZXQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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cyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDJkYjEwODlhODMwYWI4YWExZDYzIiwiZXhwb3J0IGZ1bmN0aW9uIGhhc0NsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xyXG5cdGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgdHlwZW9mIGNsYXNzTmFtZSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0cmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlIGVsZW1lbnQgcGFzc2VkIGluIHRvIGhhc0NsYXNzIGlzIG5vdCBhIHZhbGlkIEhUTUwgZWxlbWVudFwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcclxuXHRpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIHR5cGVvZiBjbGFzc05hbWUgPT09ICdzdHJpbmcnKSB7XHJcblx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZWxlbWVudCBwYXNzZWQgaW4gdG8gYWRkQ2xhc3MgaXMgbm90IGEgdmFsaWQgSFRNTCBlbGVtZW50XCIpXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XHJcblx0aWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiB0eXBlb2YgY2xhc3NOYW1lID09PSAnc3RyaW5nJykge1xyXG5cdFx0ZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlIGVsZW1lbnQgcGFzc2VkIGluIHRvIHJlbW92ZUNsYXNzIGlzIG5vdCBhIHZhbGlkIEhUTUwgZWxlbWVudFwiKVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xyXG5cdGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgdHlwZW9mIGNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIHtcclxuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpO1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fSBlbHNlIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIlRoZSBlbGVtZW50IHBhc3NlZCBpbiB0byByZW1vdmVDbGFzcyBpcyBub3QgYSB2YWxpZCBIVE1MIGVsZW1lbnRcIilcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50KGNvbnRleHQsIHRhcmdldCkge1xyXG5cdHJldHVybiAoY29udGV4dCB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudHMoY29udGV4dCwgdGFyZ2V0KSB7XHJcblx0cmV0dXJuIChjb250ZXh0IHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KGV2dCwgZGF0YSkge1xyXG5cdHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xyXG5cdGV2ZW50LmluaXRFdmVudChldnQsIHRydWUsIHRydWUpO1xyXG5cclxuXHRpZiAodHlwZW9mIGRhdGEgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKHAgPT4ge1xyXG5cdFx0XHRldmVudFtwXSA9IGRhdGFbcF07XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByZXZlbnRFdmVudERlZmF1bHQoZXZ0KSB7XHJcblx0aWYgKGV2dC5wcmV2ZW50RGVmYXVsdCkge1xyXG5cdFx0ZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGV2dC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRvZXNFbGVtZW50RXhpc3QoZWxlbWVudCkge1xyXG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpO1xyXG59XHJcblxyXG4vKlxyXG4gRVhBTVBMRTpcclxuXHJcbiBjcmVhdGVFbGVtZW50KHtlbGVtZW50OiAnZGl2JywgY2xhc3M6ICdjbGFzc05hbWUnLCBjb250ZW50OiBmYWxzZX0pO1xyXG4gKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KG9iaikge1xyXG5cdGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiY3JlYXRlRWxlbWVudCBleHBlY3RzIGEgY29uZmlnIG9iamVjdCBwYXNzZWQgaW4gdG8gZGVmaW5lIHRoZSBlbGVtZW50J3MgcHJvcGVydGllc1wiKTtcclxuXHR9XHJcblx0dmFyIG5ld0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG9iai5lbGVtZW50KTtcclxuXHRuZXdFbGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBvYmouY2xhc3MpO1xyXG5cdGlmIChvYmouY29udGVudCAhPT0gZmFsc2UpIHtcclxuXHRcdG5ld0VsZW0uaW5uZXJIVE1MID0gb2JqLmNvbnRlbnQ7XHJcblx0fVxyXG5cdHJldHVybiBuZXdFbGVtO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0QmVmb3JlKGVsZW0sIHBhcmVudCwgYmVmb3JlKSB7XHJcblx0dmFyIGVsZW1Ob2RlO1xyXG5cdHZhciBwYXJlbnROb2RlO1xyXG5cdHZhciBiZWZvcmVOb2RlO1xyXG5cclxuXHQvLyBDaGVjayBlbGVtZW50IGlzIGEgSFRNTCBlbGVtZW50LCBpZiBpdCBpcyBhIHN0cmluZyB0aGVuIHF1ZXJ5IGl0LiBPdGhlcndpc2Ugc2V0IGl0IGFzIG51bGwuXHJcblx0aWYgKGVsZW0gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG5cdFx0ZWxlbU5vZGUgPSBlbGVtO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRlbGVtTm9kZSA9IG51bGw7XHJcblx0fVxyXG5cclxuXHQvLyBDaGVjayBwYXJlbnQgaXMgYSBIVE1MIGVsZW1lbnQsIGlmIGl0IGlzIGEgc3RyaW5nIHRoZW4gcXVlcnkgaXQuIE90aGVyd2lzZSBzZXQgaXQgYXMgbnVsbC5cclxuXHRpZiAocGFyZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcclxuXHRcdHBhcmVudE5vZGUgPSBwYXJlbnQ7XHJcblx0fSBlbHNlIGlmICh0eXBlb2YgcGFyZW50ID09PSAnc3RyaW5nJykge1xyXG5cdFx0cGFyZW50Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyZW50KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cGFyZW50Tm9kZSA9IG51bGw7XHJcblx0fVxyXG5cclxuXHQvLyBOdWxsIHdpbGwgYXBwZW5kIGl0IHRvIHRoZSBlbmQgb2YgcGFyZW50cyBjaGlsZG5vZGVzLlxyXG5cdGlmIChiZWZvcmUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG5cdFx0YmVmb3JlTm9kZSA9IGJlZm9yZTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0YmVmb3JlTm9kZSA9IG51bGw7XHJcblx0fVxyXG5cclxuXHQvLyBPbmx5IGluc2VydCBlbGVtZW50IGlmIHBhcmVudE5vZGUgYW5kIGVsZW1lbnROb2RlIGFyZSBIVE1MIG5vZGVzLlxyXG5cdGlmIChwYXJlbnROb2RlICE9PSBudWxsICYmIGVsZW1Ob2RlICE9PSBudWxsKSB7XHJcblx0XHRwYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtLCBiZWZvcmUpO1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fSBlbHNlIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcImluc2VydEJlZm9yZSBleHBlY3RzIGEgdmFsaWQgZWxlbWVudCwgcGFyZW50IGFuZCBiZWZvcmUgdGFyZ2V0XCIpO1xyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRUbyhlbGVtLCBwYXJlbnQpIHtcclxuXHR2YXIgcGFyZW50Tm9kZTtcclxuXHJcblx0Ly8gQ2hlY2sgcGFyZW50IGlzIGEgSFRNTCBlbGVtZW50LCBpZiBpdCBpcyBhIHN0cmluZyB0aGVuIHF1ZXJ5IGl0LiBPdGhlcndpc2Ugc2V0IGl0IGFzIG51bGwuXHJcblx0aWYgKHBhcmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XHJcblx0XHRwYXJlbnROb2RlID0gcGFyZW50O1xyXG5cclxuXHR9IGVsc2UgaWYgKHR5cGVvZiBwYXJlbnQgPT09ICdzdHJpbmcnKSB7XHJcblx0XHRwYXJlbnROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJlbnQpO1xyXG5cclxuXHR9IGVsc2Uge1xyXG5cdFx0cGFyZW50Tm9kZSA9IG51bGw7XHJcblxyXG5cdH1cclxuXHJcblx0aWYgKHBhcmVudE5vZGUgIT09IG51bGwgJiYgZWxlbSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmVudE5vZGUpLmFwcGVuZFRvKGVsZW0pO1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblxyXG5cdH0gZWxzZSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJhcHBlbmRUbyBleHBlY3RzIGEgdmFsaWQgZWxlbWVudCBhbmQgcGFyZW50XCIpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnRQbGFjZWhvbGRlcihlbCkge1xyXG5cdHZhciBwbGFjZUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHBsYWNlSG9sZGVyLmNsYXNzTGlzdC5hZGQoJ3BsYWNlaG9sZGVyJyk7XHJcblx0cGxhY2VIb2xkZXIuc2V0QXR0cmlidXRlKCdkYXRhLWVscmVwbGFjZWQnLCBlbC5pZCk7XHJcblxyXG5cdGVsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHBsYWNlSG9sZGVyLCBlbCk7XHJcblx0ZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtb3ZlRWxlbWVudChlbCwgdG8pIHtcclxuXHR2YXIgcGxhY2VIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxhY2Vob2xkZXJbZGF0YS1lbHJlcGxhY2VkPScgKyBlbC5pZCArICddJyk7XHJcblx0aWYgKHBsYWNlSG9sZGVyKSB7XHJcblx0XHRwbGFjZUhvbGRlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbCwgcGxhY2VIb2xkZXIpO1xyXG5cdFx0cGxhY2VIb2xkZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwbGFjZUhvbGRlcik7XHJcblx0fSBlbHNlIGlmICh0bykge1xyXG5cdFx0aW5zZXJ0UGxhY2Vob2xkZXIoZWwpO1xyXG5cdFx0dG8uYXBwZW5kQ2hpbGQoZWwpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBnZXRDbG9zZXN0XHJcbiAqIEBhdXRob3IgUm9iaW4gTydOZWlsbFxyXG4gKlxyXG4gKiBGaW5kIHRoZSBjbG9zZXN0IGVsZW1lbnQgdG8gdGhlIHRhcmdldCBlbGVtZW50XHJcbiAqXHJcbiAqIEBwYXJhbSB0YXJnZXQgLSBkb20gZWxlbWVudCB3aGljaCBpcyB0aGUgY3VycmVudCBlbGVtZW50XHJcbiAqIEBwYXJhbSBzZWxlY3RvciAtIHRoZSBlbGVtZW50IHlvdSBhcmUgbG9va2luZyBmb3JcclxuICogQHBhcmFtIHNjb3BlIC0gbGltaXQgdGhlIHNlYXJjaCB0byBhIGNvbnRhaW5pbmcgZWxlbWVudFxyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDbG9zZXN0KHRhcmdldCwgc2VsZWN0b3IsIHNjb3BlKXtcclxuXHR2YXIgbWF0Y2hlcyA9IChzY29wZSB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcblx0dmFyIGk7XHJcblx0dmFyIGVsID0gdGFyZ2V0O1xyXG5cclxuXHRkbyB7XHJcblx0XHRpID0gbWF0Y2hlcy5sZW5ndGg7XHJcblx0XHR3aGlsZSAoLS1pID49IDAgJiYgbWF0Y2hlcy5pdGVtKGkpICE9PSBlbCkge307XHJcblx0fSB3aGlsZSAoKGkgPCAwKSAmJiAoZWwgPSBlbC5wYXJlbnRFbGVtZW50KSk7XHJcblx0cmV0dXJuIGVsO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEdldCBhbGwgRE9NIGVsZW1lbnQgdXAgdGhlIHRyZWUgdGhhdCBjb250YWluIGEgY2xhc3MsIElELCBvciBkYXRhIGF0dHJpYnV0ZVxyXG4gKlxyXG4gKiBDcmVkaXQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9oYXBweUJhbnNoZWUvSlMtaGVscGVycy93aWtpLy5jbG9zZXN0KCksLS5wYXJlbnRzKCksLS5wYXJlbnRzVW50aWwoKSwtLmZpbmQoKS1pbi1KU1xyXG4gKlxyXG4gKiBAcGFyYW0gIHtOb2RlfSBlbGVtIFRoZSBiYXNlIGVsZW1lbnRcclxuICogQHBhcmFtICB7U3RyaW5nfSBzZWxlY3RvciBUaGUgY2xhc3MsIGlkLCBkYXRhIGF0dHJpYnV0ZSwgb3IgdGFnIHRvIGxvb2sgZm9yXHJcbiAqIEByZXR1cm4ge0FycmF5fSBOdWxsIGlmIG5vIG1hdGNoXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFyZW50cyhlbGVtLCBzZWxlY3Rvcikge1xyXG5cclxuXHR2YXIgcGFyZW50cyA9IFtdO1xyXG5cdHZhciBmaXJzdENoYXI7XHJcblx0aWYgKHNlbGVjdG9yKSB7XHJcblx0XHRmaXJzdENoYXIgPSBzZWxlY3Rvci5jaGFyQXQoMCk7XHJcblx0fVxyXG5cclxuXHQvLyBHZXQgbWF0Y2hlc1xyXG5cdGZvciAoOyBlbGVtICYmIGVsZW0gIT09IGRvY3VtZW50OyBlbGVtID0gZWxlbS5wYXJlbnROb2RlKSB7XHJcblx0XHRpZiAoc2VsZWN0b3IpIHtcclxuXHJcblx0XHRcdC8vIElmIHNlbGVjdG9yIGlzIGEgY2xhc3NcclxuXHRcdFx0aWYgKGZpcnN0Q2hhciA9PT0gJy4nKSB7XHJcblx0XHRcdFx0aWYgKGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGVjdG9yLnN1YnN0cigxKSkpIHtcclxuXHRcdFx0XHRcdHBhcmVudHMucHVzaChlbGVtKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIElmIHNlbGVjdG9yIGlzIGFuIElEXHJcblx0XHRcdGlmIChmaXJzdENoYXIgPT09ICcjJykge1xyXG5cdFx0XHRcdGlmIChlbGVtLmlkID09PSBzZWxlY3Rvci5zdWJzdHIoMSkpIHtcclxuXHRcdFx0XHRcdHBhcmVudHMucHVzaChlbGVtKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIElmIHNlbGVjdG9yIGlzIGEgZGF0YSBhdHRyaWJ1dGVcclxuXHRcdFx0aWYgKGZpcnN0Q2hhciA9PT0gJ1snKSB7XHJcblx0XHRcdFx0aWYgKGVsZW0uaGFzQXR0cmlidXRlKHNlbGVjdG9yLnN1YnN0cigxLCBzZWxlY3Rvci5sZW5ndGggLSAxKSkpIHtcclxuXHRcdFx0XHRcdHBhcmVudHMucHVzaChlbGVtKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIElmIHNlbGVjdG9yIGlzIGEgdGFnXHJcblx0XHRcdGlmIChlbGVtLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gc2VsZWN0b3IpIHtcclxuXHRcdFx0XHRwYXJlbnRzLnB1c2goZWxlbSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRwYXJlbnRzLnB1c2goZWxlbSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm4gcGFyZW50cyBpZiBhbnkgZXhpc3RcclxuXHRpZiAocGFyZW50cy5sZW5ndGggPT09IDApIHtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHRyZXR1cm4gcGFyZW50cztcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvQGFvLWludGVybmFsL21hcmtldGluZy1nbG9iYWxzL2pzL3V0aWxzL2RvbS11dGlscy5qcyIsImltcG9ydCBuYXZJbml0IGZyb20gJ0Bhby1pbnRlcm5hbC9tYXJrZXRpbmctZ2xvYmFscy9tb2R1bGVzL0FvU3RpY2t5TmF2JztcblxubmF2SW5pdCgnI0FvU3RpY2t5TmF2Jyk7XG5cbmNvbnN0IHBhZ2luYXRpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnaW5hdGlvbi1jb250YWluZXInKTtcbmNvbnN0IGNhcm91c2VsT3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwtb3V0ZXInKTtcblxuY29uc3Qgc2xpZGUxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWRlMScpO1xuY29uc3Qgc2xpZGUyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWRlMicpO1xuY29uc3Qgc2xpZGUzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWRlMycpO1xuY29uc3Qgc2xpZGU0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWRlNCcpO1xuXG5jb25zdCBzbGlkZVNlbGVjdCA9IHNsaWRlID0+IHtcblx0bGV0IHNsaWRlQXJyYXkgPSBbc2xpZGUxLCBzbGlkZTIsIHNsaWRlMywgc2xpZGU0XTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlQXJyYXkubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAoc2xpZGUgPT09IHNsaWRlQXJyYXlbaV0pIHtcblx0XHRcdHNsaWRlLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2xpZGVBcnJheVtpXS5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XG5cdFx0fVxuXHR9XG59O1xuXG5wYWdpbmF0aW9uQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRpZiAoZS50YXJnZXQuaGFzQXR0cmlidXRlKCdkYXRhLXNsaWRlLW51bWJlcicpKSB7XG5cdFx0Y29uc29sZS5sb2coZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlLW51bWJlcicpKTtcblx0XHRzd2l0Y2ggKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZS1udW1iZXInKSkge1xuXHRcdFx0Y2FzZSAnMSc6XG5cdFx0XHRcdGNhcm91c2VsT3V0ZXIuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMCknO1xuXHRcdFx0XHRzbGlkZVNlbGVjdChzbGlkZTEpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzInOlxuXHRcdFx0XHRjYXJvdXNlbE91dGVyLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC0xMDB2dyknO1xuXHRcdFx0XHRzbGlkZVNlbGVjdChzbGlkZTIpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzMnOlxuXHRcdFx0XHRjYXJvdXNlbE91dGVyLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC0yMDB2dyknO1xuXHRcdFx0XHRzbGlkZVNlbGVjdChzbGlkZTMpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJzQnOlxuXHRcdFx0XHRjYXJvdXNlbE91dGVyLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC0zMDB2dyknO1xuXHRcdFx0XHRzbGlkZVNlbGVjdChzbGlkZTQpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGNhcm91c2VsT3V0ZXIuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMCknO1xuXHRcdFx0XHRzbGlkZTEuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuXHRcdH1cblx0fVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9tYWluLmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdHV0ZWNoIG9uIDA3LzA3LzIwMTYuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzLCBtb3ZlRWxlbWVudCB9IGZyb20gJy4uLy4uL2pzL3V0aWxzL2RvbS11dGlscyc7XHJcbmltcG9ydCB7IHNjcm9sbExvY2sgfSBmcm9tICcuLi8uLi9qcy91dGlscy9nZW5lcmFsLXV0aWxzJztcclxuaW1wb3J0IHsganVtcCB9IGZyb20gJy4uLy4uL2pzL3V0aWxzL2FvU21vb3RoU2Nyb2xsJztcclxuaW1wb3J0IHRyYW5zbGF0b3IsIHsgbmFtZXNwYWNlZFRyYW5zbGF0b3IgfSBmcm9tICcuLi8uLi9qcy91dGlscy90cmFuc2xhdG9yJztcclxuaW1wb3J0IHRyYW5zbGF0aW9ucyBmcm9tICcuL3RyYW5zbGF0aW9ucyc7XHJcblxyXG5sZXQgZWxlbWVudCwgc3RpY2t5RWxlbWVudDtcclxuLy8gbGV0IG1lbnVzID0gW107XHJcbmxldCBtYXhEZXB0aCA9IDA7XHJcbmxldCBwYW5lbHNPcGVuID0gMDtcclxubGV0IGJyZWFrcG9pbnRFdmVudExpc3RlbmVycyA9IFtdO1xyXG5sZXQgaXNUb3VjaCA9IGZhbHNlO1xyXG5sZXQgdG91Y2hMaXN0ZW5lciA9IG51bGw7XHJcbmxldCBsYXN0T3BlbmVkTWVudTtcclxubGV0IGxhbmcgPSBkb2N1bWVudC5oZWFkLmdldEF0dHJpYnV0ZSgnbGFuZycpO1xyXG5sYW5nID0gbGFuZyA9PT0gJ2VuJyA/ICdlbi1HQicgOiBsYW5nO1xyXG50cmFuc2xhdG9yLnNldCgndHJhbnNsYXRpb25zJywgdHJhbnNsYXRpb25zKTtcclxudHJhbnNsYXRvci5zZXRMYW5nKGxhbmcpO1xyXG5jb25zdCBnZXRUcmFuc2xhdGlvbiA9IG5hbWVzcGFjZWRUcmFuc2xhdG9yKCd0cmFuc2xhdGlvbnMnKTtcclxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIG51bWJlciBvZiBwYW5lbHMgdG8gY3JlYXRlLlxyXG4gKi9cclxuZnVuY3Rpb24gY2FsY1N1Yk1lbnVzKHRvcFVsLCBkZXB0aCA9IDEpIHtcclxuXHRsZXQgbWVudXMgPSBbXTtcclxuXHJcblx0bWF4RGVwdGggPSBNYXRoLm1heChtYXhEZXB0aCwgZGVwdGgpO1xyXG5cclxuXHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHRvcFVsLmNoaWxkcmVuLCAoY2hpbGQpID0+IHtcclxuXHRcdGlmIChjaGlsZC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc3ViTWVudScpKSB7XHJcblx0XHRcdGxldCBtZW51Q2hpbGQgPSBjaGlsZC5xdWVyeVNlbGVjdG9yKCd1bCcpO1xyXG5cdFx0XHRtZW51cy5wdXNoKHtpZDogY2hpbGQuZ2V0QXR0cmlidXRlKCdkYXRhLXN1Yk1lbnUnKSwgbWVudXM6IGNhbGNTdWJNZW51cyhtZW51Q2hpbGQsIGRlcHRoICsgMSl9KTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIG1lbnVzO1xyXG59XHJcblxyXG4vKipcclxuICogSGFuZGxlcyBjbG9zaW5nIG9mIG1lbnVzIG9uIG1vYmlsZS5cclxuICogQHBhcmFtIHtudW1iZXJ9IFtwYW5lbF0gLSBJRCBOdW1iZXIgb2YgcGFuZWwsIGlmIG5vdCBzdXBwbGllZCBhbGwgcGFuZWxzIGFyZSBjbG9zZWQuXHJcbiAqL1xyXG5mdW5jdGlvbiBjbG9zZShwYW5lbCkge1xyXG5cdGlmIChwYW5lbCkge1xyXG5cdFx0bGV0IHBhbmVsRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhb3NuUGFuZWwnICsgcGFuZWwpO1xyXG5cdFx0bGV0IG1vdmVkRWxlbWVudCA9IHBhbmVsRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubmF2Q29udGFpbmVyJykuY2hpbGRyZW5bMF07XHJcblx0XHRtb3ZlRWxlbWVudChtb3ZlZEVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlQ2xhc3MocGFuZWxFbGVtZW50LCAnb3BlbicpO1xyXG5cdFx0cGFuZWxzT3Blbi0tO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRsZXQgYWxsT3BlblBhbmVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hb3NuTW9iaWxlUGFuZWwub3BlbicpO1xyXG5cdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhbGxPcGVuUGFuZWxzLCBmdW5jdGlvbihwbmwpIHtcclxuXHRcdFx0bGV0IG1vdmVkRWxlbWVudCA9IHBubC5xdWVyeVNlbGVjdG9yKCcubmF2Q29udGFpbmVyJykuY2hpbGRyZW5bMF07XHJcblx0XHRcdG1vdmVFbGVtZW50KG1vdmVkRWxlbWVudCk7XHJcblx0XHRcdHJlbW92ZUNsYXNzKHBubCwgJ29wZW4nKTtcclxuXHRcdFx0cGFuZWxzT3Blbi0tO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRpZiAoIXBhbmVsc09wZW4pIHtcclxuXHRcdHJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksICdhb3NuT3BlbicpO1xyXG5cdFx0c2Nyb2xsTG9jay51bmxvY2soJ2Fvc25Nb2JpbGVPdmVybGF5Jyk7XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICogSGFuZGxlcyBvcGVuaW5nIG9mIG1lbnVzIG9uIG1vYmlsZS5cclxuICogQHBhcmFtIHtudW1iZXJ9IHBhbmVsIC0gSUQgTnVtYmVyIG9mIHBhbmVsLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVudVNlbGVjdG9yIC0gSUQgb2YgbWVudSB0byBtb3ZlIGludG8gcGFuZWwuXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gb3BlbihwYW5lbCwgbWVudVNlbGVjdG9yKSB7XHJcblx0bGV0IHBhbmVsRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhb3NuUGFuZWwnICsgcGFuZWwpO1xyXG5cdGxldCBwYW5lbENvbnRlbnRDb250YWluZXIgPSBwYW5lbEVsZW1lbnQucXVlcnlTZWxlY3RvcignLm5hdkNvbnRhaW5lcicpO1xyXG5cdGxldCBtZW51RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1lbnVTZWxlY3Rvcik7XHJcblxyXG5cdG1vdmVFbGVtZW50KG1lbnVFbGVtZW50LCBwYW5lbENvbnRlbnRDb250YWluZXIpO1xyXG5cclxuXHRhZGRDbGFzcyhwYW5lbEVsZW1lbnQsICdvcGVuJyk7XHJcblxyXG5cdHBhbmVsc09wZW4rKztcclxuXHJcblx0aWYgKHBhbmVsc09wZW4gPT09IDEpIHtcclxuXHRcdGFkZENsYXNzKGRvY3VtZW50LmJvZHksICdhb3NuT3BlbicpO1xyXG5cdFx0c2Nyb2xsTG9jay5sb2NrKCduYXZDb250YWluZXInKTtcclxuXHR9XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQ2xvc2VzIGFsbCBtZW51IGxldmVscyBpZiBjbGlja2luZyBvdXRzaWRlIHRoZSBtZW51LlxyXG4gKiBAcGFyYW0gZXZ0IC0gUGFzc2VkIGluIGZyb20gRXZlbnQgTGlzdGVuZXIuXHJcbiAqL1xyXG5mdW5jdGlvbiB0YXBBd2F5KGV2dCkge1xyXG5cdGxldCB0YXJnZXQgPSBldnQudGFyZ2V0O1xyXG5cdGxldCByZWFsVGFyZ2V0ID0gZXZ0LnRhcmdldDtcclxuXHJcblx0bGV0IGlzTWVudSA9IGZhbHNlO1xyXG5cclxuXHR3aGlsZSAodGFyZ2V0ICE9PSBkb2N1bWVudC5ib2R5KSB7XHJcblx0XHRpZiAodGFyZ2V0LmlkID09PSAnQW9TdGlja3lOYXYnKSB7XHJcblx0XHRcdGlzTWVudSA9IHRydWU7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0dGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7XHJcblx0fVxyXG5cdGlmICghaXNNZW51KSB7XHJcblx0XHRsZXQgb3Blbk1lbnVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0FvU3RpY2t5TmF2JykucXVlcnlTZWxlY3RvckFsbCgnLm9wZW4nKTtcclxuXHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwob3Blbk1lbnVzLCBmdW5jdGlvbihtZW51KSB7XHJcblx0XHRcdHJlbW92ZUNsYXNzKG1lbnUsICdvcGVuJyk7XHJcblx0XHR9KTtcclxuXHRcdGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRhcEF3YXkpO1xyXG5cdFx0bGFzdE9wZW5lZE1lbnUgPSBudWxsO1xyXG5cdH0gZWxzZSB7XHJcblxyXG5cdFx0bGV0IGNsb3Nlc3RMaSA9IGdldENsb3Nlc3QocmVhbFRhcmdldCwgJ2RyZ2RmJywgc3RpY2t5RWxlbWVudCk7Ly9yZWFsVGFyZ2V0LmNsb3Nlc3QoJ2xpJyk7XHJcblx0XHRsZXQgY2xvc2VzdExpV2l0aFN1Ym1lbnUgPSBnZXRDbG9zZXN0KHJlYWxUYXJnZXQsICdsaVtkYXRhLXN1Ym1lbnVdJywgc3RpY2t5RWxlbWVudCk7Ly9yZWFsVGFyZ2V0LmNsb3Nlc3QoJ2xpW2RhdGEtc3VibWVudV0nKTtcclxuXHJcblx0XHRpZiAoY2xvc2VzdExpV2l0aFN1Ym1lbnUgJiYgY2xvc2VzdExpV2l0aFN1Ym1lbnUuaGFzQXR0cmlidXRlKCdkYXRhLXN1Ym1lbnUnKSAmJiBjbG9zZXN0TGlXaXRoU3VibWVudS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3VibWVudScpICE9PSBsYXN0T3BlbmVkTWVudSkge1xyXG5cdFx0XHRsZXQgY2hpbGRNZW51cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxhc3RPcGVuZWRNZW51KTtcclxuXHRcdFx0Y2hpbGRNZW51cy5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcblx0XHR9IGVsc2UgaWYgKGNsb3Nlc3RMaSAmJiBjbG9zZXN0TGkuaGFzQXR0cmlidXRlKCdkYXRhLXN1Ym1lbnUnKSkge1xyXG5cdFx0XHRsZXQgY2hpbGRNZW51cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNsb3Nlc3RMaS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3VibWVudScpKTtcclxuXHRcdFx0Y2hpbGRNZW51cy5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEEgc2NvcGVkIHBvbGx5ZmlsIG9mIC5jbG9zZXN0KCkgd2hpY2ggYWNjZXB0cyBhIHNjb3BlIHBhcmFtXHJcbiAqIHRvIGxpbWl0IHRoZSBudW1iZXIgb2Ygbm9kZXMgYmVpbmcgc2VhcmNoZWRcclxuICpcclxuICogQHBhcmFtIHRhcmdldFxyXG4gKiBAcGFyYW0gc2VsZWN0b3JcclxuICogQHBhcmFtIHNjb3BlIGRlZmF1bHRzIHRvIHRoZSBkb2N1bWVudC5ib2R5XHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0Q2xvc2VzdCh0YXJnZXQsIHNlbGVjdG9yLCBzY29wZSl7XHJcblx0dmFyIG1hdGNoZXMgPSAoc2NvcGUgfHwgdGhpcy5kb2N1bWVudCB8fCB0aGlzLm93bmVyRG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLFxyXG5cdFx0aSxcclxuXHRcdGVsID0gdGFyZ2V0O1xyXG5cdGRvIHtcclxuXHRcdGkgPSBtYXRjaGVzLmxlbmd0aDtcclxuXHRcdHdoaWxlICgtLWkgPj0gMCAmJiBtYXRjaGVzLml0ZW0oaSkgIT09IGVsKSB7fTtcclxuXHR9IHdoaWxlICgoaSA8IDApICYmIChlbCA9IGVsLnBhcmVudEVsZW1lbnQpKTtcclxuXHRyZXR1cm4gZWw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBIYW5kbGVzIGhvdmVyIGV2ZW50cyBvbiBkZXNrdG9wLlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRNZW51XHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2Q9Y2xvc2UgLSBQYXNzIGluIG9wZW4gb3IgY2xvc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBob3Zlcih0YXJnZXRNZW51LCBtZXRob2QsIGV2dCkge1xyXG5cdGlmIChtZXRob2QgPT09ICdvcGVuJykge1xyXG5cdFx0YWRkQ2xhc3ModGFyZ2V0TWVudSwgJ29wZW4nKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmVtb3ZlQ2xhc3ModGFyZ2V0TWVudSwgJ29wZW4nKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvdWNoKGV2dCkge1xyXG5cdGxldCB0YXJnZXQgPSBldnQudGFyZ2V0O1xyXG5cdGxldCByZWFsVGFyZ2V0ID0gZ2V0Q2xvc2VzdCh0YXJnZXQsICdsaScsIHN0aWNreUVsZW1lbnQpOy8vdGFyZ2V0LmNsb3Nlc3QoJ2xpJyk7XHJcblx0bGV0IHRhcmdldE1lbnUgPSByZWFsVGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1zdWJtZW51Jyk7XHJcblx0bGV0IHRhcmdldE1lbnVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldE1lbnUpO1xyXG5cclxuXHRpZiAodGFyZ2V0TWVudSkge1xyXG5cdFx0aWYgKGxhc3RPcGVuZWRNZW51KSB7XHJcblx0XHRcdGxldCBwcmV2aW91c01lbnVMZXZlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxhc3RPcGVuZWRNZW51KS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWVudWxldmVsJyk7XHJcblx0XHRcdGxldCBuZXdNZW51TGV2ZWwgPSB0YXJnZXRNZW51RWwuZ2V0QXR0cmlidXRlKCdkYXRhLW1lbnVsZXZlbCcpO1xyXG5cdFx0XHRpZiAobmV3TWVudUxldmVsIDw9IHByZXZpb3VzTWVudUxldmVsKSB7XHJcblx0XHRcdFx0bGV0IHRvcExldmVsRWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW5bZGF0YS1tZW51bGV2ZWw9XCInICsgbmV3TWVudUxldmVsICsgJ1wiXScpO1xyXG5cdFx0XHRcdGlmICh0b3BMZXZlbEVsZW1lbnQpIHtcclxuXHRcdFx0XHRcdGxldCBvcGVuU3ViTWVudXMgPSB0b3BMZXZlbEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9wZW4nKTtcclxuXHRcdFx0XHRcdGlmIChvcGVuU3ViTWVudXMpIHtcclxuXHRcdFx0XHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChvcGVuU3ViTWVudXMsIGZ1bmN0aW9uKG1lbnUpIHtcclxuXHRcdFx0XHRcdFx0XHRtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0b3BMZXZlbEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGFwQXdheSk7XHJcblx0XHRcdGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgdGFwQXdheSk7XHJcblx0XHRcdC8vIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRhcEF3YXkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0eXBlb2YgdGFyZ2V0TWVudUVsLmNsYXNzTGlzdCA9PT0gJ29iamVjdCcpIHtcclxuXHRcdFx0dGFyZ2V0TWVudUVsLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcclxuXHRcdH1cclxuXHJcblx0XHRsYXN0T3BlbmVkTWVudSA9IHRhcmdldE1lbnU7XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgY2xpY2tlZCBlbGVtZW50IG9yIGl0J3MgZGVzY2VuZGFudHMgaGF2ZSBhIHJlZmVyZW5jZSB0byBhIHN1Yi1tZW51LlxyXG4gKiBAcGFyYW0gZXZ0IC0gUGFzc2VkIGluIGZyb20gY2xpY2sgZXZlbnQuXHJcbiAqL1xyXG5mdW5jdGlvbiBoYW5kbGVTdWJNZW51Q2xpY2soZXZ0KSB7XHJcblx0bGV0IG5vZGUgPSBldnQudGFyZ2V0O1xyXG5cdGxldCBzdWJNZW51U2VsZWN0b3IgPSAnJztcclxuXHRsZXQgbWF4QnViYmxlID0gMTtcclxuXHRsZXQgaXNBbmNob3IgPSBub2RlLmdldEF0dHJpYnV0ZSgnaHJlZicpID8gbm9kZS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5tYXRjaCgvXiMvKSA6IGZhbHNlO1xyXG5cclxuXHRpZiAoaXNBbmNob3IpIHtcclxuXHRcdGNsb3NlKCk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHR3aGlsZSAobm9kZS5wYXJlbnROb2RlKSB7XHJcblx0XHRsZXQgYXR0clN1Yk1lbnUgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1zdWJtZW51Jyk7XHJcblx0XHRpZiAoYXR0clN1Yk1lbnUpIHtcclxuXHRcdFx0c3ViTWVudVNlbGVjdG9yID0gYXR0clN1Yk1lbnU7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0bm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcclxuXHR9XHJcblxyXG5cdGlmIChzdWJNZW51U2VsZWN0b3IubGVuZ3RoKSB7XHJcblx0XHRsZXQgcGFuZWxUb09wZW4gPSBwYW5lbHNPcGVuICsgMTtcclxuXHRcdG9wZW4ocGFuZWxUb09wZW4sIHN1Yk1lbnVTZWxlY3Rvcik7XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICogQWRkcyBhIHNjcm9sbCBldmVudCBsaXN0ZW5lciB0byB0aGUgd2luZG93XHJcbiAqIFdoZW4gdGhlIHRvcCBvZiB0aGUgcm9vdCBlbGVtZW50IGlzIG9mZiB0aGUgdG9wIG9mIHRoZSBzY3JlZW4sXHJcbiAqIGFkZHMgYSBjbGFzcyBvZiBmaXhlZCB0byB0aGUgY29udGFpbmVyIGVsZW1lbnQuXHJcbiAqL1xyXG5mdW5jdGlvbiBzZXR1cFN0aWNreU1lbnUoKSB7XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IG5hdkRvY2tUb3AgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuXHRcdGlmIChuYXZEb2NrVG9wIDw9IDApIHtcclxuXHRcdFx0YWRkQ2xhc3Moc3RpY2t5RWxlbWVudCwgJ2ZpeGVkJyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZW1vdmVDbGFzcyhzdGlja3lFbGVtZW50LCAnZml4ZWQnKTtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZHMgYnJlYWtwb2ludENoYW5nZWQgZXZlbnQgbGlzdGVuZXIgdG8gaGFuZGxlIG1lbnUgc2V0dXBcclxuICogZm9yIGJvdGggbW9iaWxlIGFuZCBkZXNrdG9wIHN0YXRlcy5cclxuICovXHJcbmZ1bmN0aW9uIHNldHVwQnJlYWtwb2ludEhhbmRsaW5nKCkge1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdicmVha3BvaW50Q2hhbmdlZCcsIGZ1bmN0aW9uKGV2dCkge1xyXG5cdFx0cmVtb3ZlQnJlYWtwb2ludEV2ZW50TGlzdGVuZXJzKCk7XHJcblx0XHRpZiAoZXZ0LmJyZWFrcG9pbnQgPT09ICdtb2JpbGUnKSB7XHJcblx0XHRcdHNldHVwTW9iaWxlKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAoZXZ0LnByZXZpb3VzQnJlYWtwb2ludCA9PT0gJ21vYmlsZScpIHtcclxuXHRcdFx0XHRjbG9zZSgpO1xyXG5cdFx0XHRcdHJlbW92ZU1vYmlsZUVsZW1lbnRzKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0c2V0dXBEZXNrdG9wKCk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGb3IgY2FjaGluZyBldmVudCBsaXN0ZW5lcnMgdGhhdCBuZWVkIHRvIGJlIHJlbW92ZWQgb25jZSBhIGJyZWFrcG9pbnQgaGFzIGNoYW5nZWQuXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldnRUeXBlXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGV2dFRhcmdldFxyXG4gKiBAcGFyYW0gZnVuY3Rpb25SZWZlcmVuY2VcclxuICovXHJcbmZ1bmN0aW9uIGFkZEJyZWFrcG9pbnRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGV2dFRhcmdldCwgZnVuY3Rpb25SZWZlcmVuY2UpIHtcclxuXHRldnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBmdW5jdGlvblJlZmVyZW5jZSk7XHJcblx0YnJlYWtwb2ludEV2ZW50TGlzdGVuZXJzLnB1c2goe3R5cGU6IGV2dFR5cGUsIHRhcmdldDogZXZ0VGFyZ2V0LCBmY3RuOiBmdW5jdGlvblJlZmVyZW5jZX0pO1xyXG59XHJcblxyXG4vKipcclxuICogUmVtb3ZlcyBhbGwgYnJlYWtwb2ludCBzcGVjaWZpYyBldmVudCBsaXN0ZW5lcnMuXHJcbiAqL1xyXG5mdW5jdGlvbiByZW1vdmVCcmVha3BvaW50RXZlbnRMaXN0ZW5lcnMoKSB7XHJcblx0aWYgKGJyZWFrcG9pbnRFdmVudExpc3RlbmVycy5sZW5ndGgpIHtcclxuXHRcdGJyZWFrcG9pbnRFdmVudExpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uKGV2dExpc3RlbmVyKSB7XHJcblx0XHRcdGV2dExpc3RlbmVyLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2dExpc3RlbmVyLnR5cGUsIGV2dExpc3RlbmVyLmZjdG4pO1xyXG5cdFx0fSk7XHJcblx0XHRicmVha3BvaW50RXZlbnRMaXN0ZW5lcnMgPSBbXTtcclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmVzIGVsZW1lbnRzIGZyb20gdGhlIGRvbSB0aGF0IGFyZSBzcGVjaWZpY2FsbHkgZm9yIG1vYmlsZS5cclxuICovXHJcbmZ1bmN0aW9uIHJlbW92ZU1vYmlsZUVsZW1lbnRzKCkge1xyXG5cdGxldCBtb2JpbGVFbGVtZW50cyA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbCgnW2NsYXNzXj1cImFvc25Nb2JpbGVcIl0nKTtcclxuXHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG1vYmlsZUVsZW1lbnRzLCBmdW5jdGlvbihlbCkge1xyXG5cdFx0ZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XHJcblx0fSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXNlcyB0aGUgbWVudSByZWFkeSBmb3IgbW9iaWxlLlxyXG4gKi9cclxuZnVuY3Rpb24gc2V0dXBNb2JpbGUoKSB7XHJcblx0Ly9BZGQgbW9iaWxlIGVsZW1lbnRzLlxyXG5cclxuXHRjcmVhdGVPdmVybGF5KCk7XHJcblxyXG5cdGZvciAodmFyIGkgPSAxOyBpIDw9IG1heERlcHRoOyBpKyspIHtcclxuXHRcdGNyZWF0ZVBhbmVsKGkpO1xyXG5cdH1cclxuXHJcblx0Ly9BZGQgY2xpY2sgZXZlbnQgdG8gYnJhbmRpbmcgdG8gb3BlbiBtb2JpbGUgbWVudS5cclxuXHRsZXQgbmF2Q29udHJvbCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFvc25CcmFuZGluZycpO1xyXG5cdGFkZEJyZWFrcG9pbnRFdmVudExpc3RlbmVyKCdjbGljaycsIG5hdkNvbnRyb2wsIG9wZW4uYmluZChudWxsLCAxLCAnYW9zblRvcExldmVsTWVudScpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpc2VzIHRoZSBtZW51IHJlYWR5IGZvciBkZXNrdG9wLlxyXG4gKi9cclxuZnVuY3Rpb24gc2V0dXBEZXNrdG9wKCkge1xyXG5cdGlzVG91Y2ggPSB0eXBlb2Ygd2luZG93Lm9udG91Y2hzdGFydCAhPT0gJ3VuZGVmaW5lZCc7XHJcblxyXG5cdGlmIChpc1RvdWNoKSB7XHJcblx0XHRsZXQgZmlyc3RGaXJzdExldmVsTWVudXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW9zblRvcExldmVsTWVudScpLmNoaWxkcmVuO1xyXG5cdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChmaXJzdEZpcnN0TGV2ZWxNZW51cywgZnVuY3Rpb24obWVudUl0ZW0pIHtcclxuXHRcdFx0YWRkQnJlYWtwb2ludEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBtZW51SXRlbSwgdG91Y2gpO1xyXG5cdFx0XHRhZGRCcmVha3BvaW50RXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgbWVudUl0ZW0sIHRvdWNoKTtcclxuXHRcdH0pO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQvL1NldHVwIG1vdXNlb3ZlciAmJiBtb3VzZSBsZWF2ZVxyXG5cdFx0bGV0IGVsZW1lbnRzV2l0aFN1Yk1lbnUgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXN1Ym1lbnVdJyk7XHJcblxyXG5cdFx0aWYgKGVsZW1lbnRzV2l0aFN1Yk1lbnUubGVuZ3RoKSB7XHJcblx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZWxlbWVudHNXaXRoU3ViTWVudSwgZnVuY3Rpb24obWVudUl0ZW0pIHtcclxuXHRcdFx0XHRsZXQgdGFyZ2V0TWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1lbnVJdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zdWJtZW51JykpO1xyXG5cdFx0XHRcdGFkZEJyZWFrcG9pbnRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBtZW51SXRlbSwgaG92ZXIuYmluZChudWxsLCB0YXJnZXRNZW51LCAnb3BlbicpKTtcclxuXHRcdFx0XHRhZGRCcmVha3BvaW50RXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIG1lbnVJdGVtLCBob3Zlci5iaW5kKG51bGwsIHRhcmdldE1lbnUsICdjbG9zZScpKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhbmVsIGVsZW1lbnQgYW5kIGFwcGVuZHMgaXQgdG8gdGhlIGJvZHkuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpZFxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlUGFuZWwoaWQpIHtcclxuXHQvL0NyZWF0ZSBwYW5lbC5cclxuXHRsZXQgcGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRwYW5lbC5pZCA9ICdhb3NuUGFuZWwnICsgaWQ7XHJcblx0YWRkQ2xhc3MocGFuZWwsICdhb3NuTW9iaWxlUGFuZWwnKTtcclxuXHJcblx0Ly9DcmVhdGUgYmFjayBidXR0b24uXHJcblx0bGV0IGJhY2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRhZGRDbGFzcyhiYWNrQnV0dG9uLCAnYnRuQmFjaycpO1xyXG5cdGJhY2tCdXR0b24uaW5uZXJIVE1MID0gZ2V0VHJhbnNsYXRpb24oJ2JhY2snKTtcclxuXHRhZGRCcmVha3BvaW50RXZlbnRMaXN0ZW5lcignY2xpY2snLCBiYWNrQnV0dG9uLCBjbG9zZS5iaW5kKG51bGwsIGlkKSk7XHJcblxyXG5cdC8vQ3JlYXRlIGNvbnRhaW5lciBmb3IgbWVudSBpdGVtcy5cclxuXHRsZXQgbmF2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0YWRkQ2xhc3MobmF2Q29udGFpbmVyLCAnbmF2Q29udGFpbmVyJyk7XHJcblx0YWRkQnJlYWtwb2ludEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmF2Q29udGFpbmVyLCBoYW5kbGVTdWJNZW51Q2xpY2spO1xyXG5cclxuXHQvL0FwcGVuZCBlbGVtZW50cy5cclxuXHRwYW5lbC5hcHBlbmRDaGlsZChuYXZDb250YWluZXIpO1xyXG5cdHBhbmVsLmFwcGVuZENoaWxkKGJhY2tCdXR0b24pO1xyXG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFuZWwpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhbiBvdmVybGF5IGVsZW1lbnQgYW5kIGFwcGVuZHMgaXQgdG8gdGhlIGJvZHkuXHJcbiAqICovXHJcbmZ1bmN0aW9uIGNyZWF0ZU92ZXJsYXkoKSB7XHJcblx0bGV0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRhZGRDbGFzcyhvdmVybGF5LCAnYW9zbk1vYmlsZU92ZXJsYXknKTtcclxuXHRhZGRDbGFzcyhvdmVybGF5LCAnZGlzYWJsZS1zY3JvbGxpbmcnKTtcclxuXHJcblx0YWRkQnJlYWtwb2ludEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3ZlcmxheSwgY2xvc2UuYmluZChudWxsLCAwKSk7XHJcblxyXG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXNlcyB0aGUgc3RhbmRhcmQgc3RpY2t5IG5hdiB1c2VkIGFjcm9zcyBicmFuZCBwYWdlcy5cclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyIC0gVGhlIG91dGVyIG5vZGUgb2YgdGhlIHN0aWNreSBuYXYuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYXZJbml0KGNvbnRhaW5lciwganVtcE9mZnNldCA9IDM1KSB7XHJcblx0Ly9TZXR1cCBjb21tb24gZWxlbWVudHM6XHJcblx0aWYgKHR5cGVvZiBjb250YWluZXIgPT09ICdzdHJpbmcnKSB7XHJcblx0XHRlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRlbGVtZW50ID0gY29udGFpbmVyO1xyXG5cdH1cclxuXHRzdGlja3lFbGVtZW50ID0gZWxlbWVudC5jaGlsZHJlblswXTtcclxuXHRsZXQgdG9wVWwgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhb3NuVG9wTGV2ZWxNZW51Jyk7XHJcblx0Y2FsY1N1Yk1lbnVzKHRvcFVsKTtcclxuXHJcblx0Ly9TZXR1cCBldmVudCBsaXN0ZW5lcnNcclxuXHRzZXR1cFN0aWNreU1lbnUoKTtcclxuXHRzZXR1cEJyZWFrcG9pbnRIYW5kbGluZygpO1xyXG5cclxuXHRmdW5jdGlvbiBpbml0KCl7XHJcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignYnJlYWtwb2ludENoYW5nZWQnLCBpbml0KTtcclxuXHRcdGlmICh3aW5kb3cuYnJlYWtwb2ludC52YWx1ZSA9PT0gJ21vYmlsZScpIHtcclxuXHRcdFx0c2V0dXBNb2JpbGUoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNldHVwRGVza3RvcCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBhbmNob3JzID0gdG9wVWwucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmXj1cIiNcIl0nKTtcclxuXHJcblx0XHRBcnJheS5mcm9tKGFuY2hvcnMpLmZvckVhY2goZnVuY3Rpb24oYW5jaG9yKXtcclxuXHRcdFx0YW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0bGV0IGhyZWYgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0anVtcChocmVmLCB7XHJcblx0XHRcdFx0XHRkdXJhdGlvbjogOTAwLFxyXG5cdFx0XHRcdFx0b2Zmc2V0OiB3aW5kb3cuYnJlYWtwb2ludC52YWx1ZSA9PT0gJ21vYmlsZScgPyAwIDoganVtcE9mZnNldFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0aWYgKHR5cGVvZiB3aW5kb3cuYnJlYWtwb2ludCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdGluaXQoKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JyZWFrcG9pbnRDaGFuZ2VkJywgaW5pdCk7XHJcblx0fVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9AYW8taW50ZXJuYWwvbWFya2V0aW5nLWdsb2JhbHMvbW9kdWxlcy9Bb1N0aWNreU5hdi9pbmRleC5qcyIsImltcG9ydCB7XHJcblx0aGFzQ2xhc3MsXHJcblx0YWRkQ2xhc3MsXHJcblx0cmVtb3ZlQ2xhc3MsXHJcblx0cHJldmVudEV2ZW50RGVmYXVsdFxyXG59IGZyb20gJy4vZG9tLXV0aWxzJztcclxuXHJcbmV4cG9ydCB2YXIgc2Nyb2xsTG9jayA9IHtcclxuXHRsb2NrZWQ6IGZhbHNlLFxyXG5cdGVuYWJsZWRFbGVtZW50Q2xhc3M6ICcnLFxyXG5cdGV2ZW50TGlzdGVuZXI6IHt9LFxyXG5cclxuXHQvKipcclxuXHQgKiBQcmV2ZW50cyBiYWNrZ3JvdW5kIHNjcm9sbCBvbiBtb2JpbGUuXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGVuYWJsZWRFbGVtZW50Q2xhc3MgLSBTZWxlY3RvciBvZiB0aGUgZWxlbWVudCB5b3Ugd2lzaCB0byBsZWF2ZSBzY3JvbGxpbmcgZW5hYmxlZC5cclxuXHQgKiBAcGFyYW0ge0FycmF5LjxzdHJpbmc+fSBbZGlzYWJsZWRFbGVtZW50cz1bJ2JvZHknXV0gLSBTZWxlY3RvcnMgb2YgdGhlIGVsZW1lbnRzIHlvdSB3aXNoIHRvIGRpc2FibGUgc2Nyb2xsLlxyXG5cdCAqL1xyXG5cdGxvY2soZW5hYmxlZEVsZW1lbnRDbGFzcywgZGlzYWJsZWRFbGVtZW50cykge1xyXG5cdFx0dGhpcy5sb2NrZWQgPSB0cnVlO1xyXG5cdFx0dGhpcy5lbmFibGVkRWxlbWVudENsYXNzID0gZW5hYmxlZEVsZW1lbnRDbGFzcztcclxuXHRcdGRpc2FibGVkRWxlbWVudHMgPSBBcnJheS5pc0FycmF5KGRpc2FibGVkRWxlbWVudHMpXHJcblx0XHRcdD8gZGlzYWJsZWRFbGVtZW50c1xyXG5cdFx0XHQ6IFsnYm9keSddO1xyXG5cdFx0ZGlzYWJsZWRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKHNlbGVjdG9yKSB7XHJcblx0XHRcdHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG5cdFx0XHRhZGRDbGFzcyhlbCwgJ2Rpc2FibGUtc2Nyb2xsaW5nJyk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuZXZlbnRMaXN0ZW5lciA9IHRoaXMucHJldmVudERlZmF1bHQuYmluZCh0aGlzKTtcclxuXHRcdGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5ldmVudExpc3RlbmVyKTtcclxuXHR9LFxyXG5cdHVubG9jaygpIHtcclxuXHRcdHZhciBlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGlzYWJsZS1zY3JvbGxpbmcnKTtcclxuXHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZWxzLCBmdW5jdGlvbihlbGVtZW50KSB7XHJcblx0XHRcdHJlbW92ZUNsYXNzKGVsZW1lbnQsICdkaXNhYmxlLXNjcm9sbGluZycpO1xyXG5cdFx0fSk7XHJcblx0XHRkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuZXZlbnRMaXN0ZW5lcik7XHJcblx0XHR0aGlzLmxvY2tlZCA9IGZhbHNlO1xyXG5cdH0sXHJcblx0cHJldmVudERlZmF1bHQoZXZ0KSB7XHJcblx0XHR2YXIgdGFyZ2V0ID0gZXZ0LnRhcmdldDtcclxuXHRcdHZhciBoYXNWZXJ0aWNhbFNjcm9sbGJhciA9IHRhcmdldC5zY3JvbGxIZWlnaHQgPiB0YXJnZXQuY2xpZW50SGVpZ2h0O1xyXG5cdFx0aWYgKGhhc0NsYXNzKHRhcmdldCwgJ2Rpc2FibGUtc2Nyb2xsaW5nJykpIHtcclxuXHRcdFx0cHJldmVudEV2ZW50RGVmYXVsdChldnQpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0d2hpbGUgKCFoYXNDbGFzcyh0YXJnZXQsIHRoaXMuZW5hYmxlZEVsZW1lbnRDbGFzcykpIHtcclxuXHRcdFx0XHR0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcclxuXHRcdFx0XHRpZiAodGFyZ2V0ID09PSBkb2N1bWVudC5ib2R5KSB7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0aGFzVmVydGljYWxTY3JvbGxiYXIgPSB0YXJnZXQuc2Nyb2xsSGVpZ2h0ID4gdGFyZ2V0LmNsaWVudEhlaWdodDtcclxuXHRcdFx0aWYgKCFoYXNWZXJ0aWNhbFNjcm9sbGJhcikge1xyXG5cdFx0XHRcdHByZXZlbnRFdmVudERlZmF1bHQoZXZ0KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXRTdHJpbmcgPSBmdW5jdGlvbihmb3JtYXQsIGFyZ3MpIHtcclxuXHR2YXIgbWF0Y2hlcyA9IGZvcm1hdC5tYXRjaCgvey4qP30vZ21pKTtcclxuXHRpZiAobWF0Y2hlcykge1xyXG5cdFx0bWF0Y2hlcy5mb3JFYWNoKG0gPT4ge1xyXG5cdFx0XHRsZXQgayA9IG0uc3Vic3RyKDEsIG0ubGVuZ3RoIC0gMik7XHJcblx0XHRcdGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKG0sIGFyZ3Nba10gfHwgJycpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gZm9ybWF0O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZpcmVPbmNlID0gZnVuY3Rpb24oZm4pIHtcclxuXHRsZXQgaGFzRmlyZWQgPSBmYWxzZTtcclxuXHRyZXR1cm4gZSA9PiB7XHJcblx0XHRpZiAoIWhhc0ZpcmVkKSB7XHJcblx0XHRcdGZuKCk7XHJcblx0XHRcdGhhc0ZpcmVkID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlYWR5KGZuKSB7XHJcblx0aWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcclxuXHRcdGZuKCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGxldCBmaXJlRm5PbmNlID0gZmlyZU9uY2UoZm4pO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZpcmVPbmNlKTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCAoKSA9PiB7XHJcblx0XHRcdGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XHJcblx0XHRcdFx0ZmlyZUZuT25jZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVcmxQYXJhbWV0ZXJzKCkge1xyXG5cdC8qXHJcblx0Y29uc3Qgc2VhcmNoID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7XHJcblxyXG5cdGlmICghc2VhcmNoKSB7XHJcblx0XHRyZXR1cm4ge307XHJcblx0fVxyXG5cclxuXHRjb25zdCBwYXJhbXMgPSBzZWFyY2guc3BsaXQoJyYnKTtcclxuXHRjb25zdCBwYXJhbVNwbGl0ID0gcGFyYW1zLm1hcChmdW5jdGlvbihwYXJhbSl7XHJcblx0XHRjb25zdCBtYXRjaCA9IHBhcmFtLm1hdGNoKC9eW149XFxzXSs9W149XFxzXSskL2dtaSk7XHJcblx0XHRjb25zb2xlLmxvZygnbWF0Y2gnLCBtYXRjaCk7XHJcblx0XHRyZXR1cm4gbWF0Y2ggPyBtYXRjaFswXTtcclxuXHR9KTtcclxuXHQqL1xyXG5cdGNvbnN0IHNlYXJjaCA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpO1xyXG5cdHZhciBvYmogPSB7fTtcclxuXHRzZWFyY2gucmVwbGFjZSgvKFtePSZdKyk9KFteJl0qKS9nLCBmdW5jdGlvbihtLCBrZXksIHZhbHVlKSB7XHJcblx0XHRvYmpbZGVjb2RlVVJJQ29tcG9uZW50KGtleSldID0gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIG9iajtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlKGZuKSB7XHJcblx0bGV0IGFuaW1hdGlvbkZyYW1lUmVxdWVzdGVkID0gZmFsc2U7XHJcblx0cmV0dXJuIGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKCFhbmltYXRpb25GcmFtZVJlcXVlc3RlZCkge1xyXG5cdFx0XHRhbmltYXRpb25GcmFtZVJlcXVlc3RlZCA9IHRydWU7XHJcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe1xyXG5cdFx0XHRcdGZuKCk7XHJcblx0XHRcdFx0YW5pbWF0aW9uRnJhbWVSZXF1ZXN0ZWQgPSBmYWxzZTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvcnRzVHJhbnNpdGlvbnMoKSB7XHJcblx0dmFyIGIgPSBkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcclxuXHRcdHMgPSBiLnN0eWxlLFxyXG5cdFx0cCA9ICd0cmFuc2l0aW9uJztcclxuXHJcblx0aWYgKHR5cGVvZiBzW3BdID09ICdzdHJpbmcnKSB7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdC8vIFRlc3RzIGZvciB2ZW5kb3Igc3BlY2lmaWMgcHJvcFxyXG5cdHZhciB2ID0gWydNb3onLCAnd2Via2l0JywgJ1dlYmtpdCcsICdLaHRtbCcsICdPJywgJ21zJ107XHJcblx0cCA9IHAuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwLnN1YnN0cigxKTtcclxuXHJcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB2Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRpZiAodHlwZW9mIHNbdltpXSArIHBdID09ICdzdHJpbmcnKSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2sgdGhlIHByb2R1Y3QgaXMgaW4gc3RvY2tcclxuICogQWNjZXB0cyB0aGUgcHJvZHVjdCBvYmplY3QgcmV0dXJuZWQgYnkgdGhlIHByb2R1Y3QgaGFuZGxlclxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvZHVjdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSW5TdG9jayhwcm9kdWN0KSB7XHJcblx0cmV0dXJuIHByb2R1Y3QuU3RhdGUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2Rpc2NvbnRpbnVlZCcpID09PSAtMTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvQGFvLWludGVybmFsL21hcmtldGluZy1nbG9iYWxzL2pzL3V0aWxzL2dlbmVyYWwtdXRpbHMuanMiLCJpbXBvcnQgeyBoYXNDbGFzcywgZ2V0Q2xvc2VzdCB9IGZyb20gJy4vZG9tLXV0aWxzJztcclxuaW1wb3J0IHsgcmVxdWVzdEFuaW1hdGlvbkZyYW1lUG9seWZpbGwgfSBmcm9tICcuLi9wb2x5ZmlsbHMvcmVxdWVzdC1hbmltYXRpb24tZnJhbWUtcG9seWZpbGwnO1xyXG5cclxudmFyIGluaXRpYWxpc2VkRWxlbWVudHMgPSBbXTtcclxudmFyIHBhZ2VVcmwgPSBsb2NhdGlvbi5oYXNoID8gc3RyaXBIYXNoKGxvY2F0aW9uLmhyZWYpIDogbG9jYXRpb24uaHJlZjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1NtYXJ0UGhvbmUoKSB7XHJcblx0cmV0dXJuIHdpbmRvdy5icmVha3BvaW50LnZhbHVlID09PSAnbW9iaWxlJyA/IHRydWUgOiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdFNtb290aFNjcm9sbGluZyhvdmVycmlkZU9mZnNldCwgYWxsb3dQcm9wYWdhdGlvbiA9IGZhbHNlKSB7XHJcblx0dmFyIG9mZnNldCA9IHdpbmRvdy5icmVha3BvaW50LnZhbHVlID09PSAnZGVza3RvcCcgPyAzNSA6IDA7XHJcblx0bGV0IG9mZnNldEludCA9ICFpc05hTihvdmVycmlkZU9mZnNldCkgPyBvdmVycmlkZU9mZnNldCA6IG9mZnNldDtcclxuXHRpbml0TGlua0hpamFjayhvZmZzZXRJbnQsIGFsbG93UHJvcGFnYXRpb24pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdExpbmtIaWphY2sob2Zmc2V0SW50LCBhbGxvd1Byb3BhZ2F0aW9uID0gZmFsc2UpIHtcclxuXHJcblx0Ly8gUmVtb3ZlIGFsbCB0aGUgZXZlbnQgbGlzdGVuZXJzLlxyXG5cdGRlaW5pdGlhbGlzZUVsZW1lbnRzKCk7XHJcblxyXG5cdGlmIChjYW5Vc2VSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKSkge1xyXG5cdFx0dmFyIGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpO1xyXG5cdFx0bGlua3MgPSBbXS5zbGljZS5jYWxsKGxpbmtzKTtcclxuXHJcblx0XHRsaW5rcy5mb3JFYWNoKGZ1bmN0aW9uKGxpbmspIHtcclxuXHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRvbkNsaWNrKGUsIG9mZnNldEludCwgYWxsb3dQcm9wYWdhdGlvbik7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRpbml0aWFsaXNlZEVsZW1lbnRzLnB1c2goeyBlbDogbGluaywgaGFuZGxlcjogb25DbGljayB9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uQ2xpY2soZSwgb2Zmc2V0SW50LCBhbGxvd1Byb3BhZ2F0aW9uID0gZmFsc2UpIHtcclxuXHQvLyBpZiB0aGUgdGFyZ2V0IGlzIG5vdCBhbiBhbmNob3IgbGluaywgZmluZCB0aGUgY2xvc2VzdCBwYXJlbnQgYW5jaG9yLlxyXG5cdGxldCB0YXJnZXQ7XHJcblx0aWYgKGUudGFyZ2V0Lm5vZGVOYW1lID09PSAnQScpIHtcclxuXHRcdHRhcmdldCA9IGUudGFyZ2V0O1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0YXJnZXQgPSBnZXRDbG9zZXN0KGUudGFyZ2V0LCAnYScpO1xyXG5cdH1cclxuXHJcblx0aWYgKCFpc0luUGFnZUxpbmsodGFyZ2V0KSB8fCBpc1NtYXJ0UGhvbmUoKSkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0aWYgKCFhbGxvd1Byb3BhZ2F0aW9uKSB7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdH1cclxuXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdGp1bXAodGFyZ2V0Lmhhc2gsIHtcclxuXHRcdG9mZnNldDogb2Zmc2V0SW50XHJcblx0fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0luUGFnZUxpbmsodGFyZ2V0KSB7XHJcblx0cmV0dXJuIHRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdhJyAmJiB0YXJnZXQuaGFzaC5sZW5ndGggPiAwICYmIHN0cmlwSGFzaCh0YXJnZXQuaHJlZikgPT09IHBhZ2VVcmw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHJpcEhhc2godXJsKSB7XHJcblx0cmV0dXJuIHVybC5zbGljZSgwLCB1cmwubGFzdEluZGV4T2YoJyMnKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Nzc1Ntb290aFNDcm9sbFN1cHBvcnRlZCgpIHtcclxuXHRyZXR1cm4gJ3Njcm9sbEJlaGF2aW9yJyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWluaXRpYWxpc2VFbGVtZW50cygpIHtcclxuXHRpbml0aWFsaXNlZEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG5cdFx0aXRlbS5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGl0ZW0uaGFuZGxlcik7XHJcblx0fSk7XHJcblxyXG5cdGluaXRpYWxpc2VkRWxlbWVudHMgPSBbXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhblVzZVJlcXVlc3RBbmltYXRpb25GcmFtZSgpIHtcclxuXHRyZXR1cm4gISF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24ganVtcCh0YXJnZXQsIG9wdGlvbnMpIHtcclxuXHR2YXIgc3RhcnQgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblx0dmFyIG9wdCA9IHtcclxuXHRcdGR1cmF0aW9uOiAob3B0aW9ucyAmJiBvcHRpb25zLmR1cmF0aW9uKSA/IG9wdGlvbnMuZHVyYXRpb24gOiA5MDAsXHJcblx0XHRvZmZzZXQ6IChvcHRpb25zICYmIG9wdGlvbnMub2Zmc2V0KSA/IG9wdGlvbnMub2Zmc2V0IDogMCxcclxuXHRcdGVhc2luZzogKG9wdGlvbnMgJiYgb3B0aW9ucy5lYXNpbmcpID8gb3B0aW9ucy5lYXNpbmcgOiBlYXNlSW5PdXRRdWFkXHJcblx0fTtcclxuXHJcblx0dmFyIGRpc3RhbmNlID1cclxuXHRcdHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIG9wdC5vZmZzZXQgOiB0YXJnZXQ7XHJcblx0dmFyIGR1cmF0aW9uID0gdHlwZW9mIG9wdC5kdXJhdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IG9wdC5kdXJhdGlvbihkaXN0YW5jZSkgOiBvcHQuZHVyYXRpb247XHJcblx0dmFyIHRpbWVTdGFydDtcclxuXHR2YXIgdGltZUVsYXBzZWQ7XHJcblxyXG5cdHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbih0aW1lKSB7XHJcblx0XHR0aW1lU3RhcnQgPSB0aW1lO1xyXG5cdFx0bG9vcCh0aW1lKTtcclxuXHR9KTtcclxuXHJcblx0ZnVuY3Rpb24gbG9vcCh0aW1lKSB7XHJcblx0XHR0aW1lRWxhcHNlZCA9IHRpbWUgLSB0aW1lU3RhcnQ7XHJcblxyXG5cdFx0d2luZG93LnNjcm9sbFRvKDAsIG9wdC5lYXNpbmcodGltZUVsYXBzZWQsIHN0YXJ0LCBkaXN0YW5jZSwgZHVyYXRpb24pKTtcclxuXHJcblx0XHRpZiAodGltZUVsYXBzZWQgPCBkdXJhdGlvbikge1xyXG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBSb2JlcnQgUGVubmVyJ3MgZWFzZUluT3V0UXVhZCAtIGh0dHA6Ly9yb2JlcnRwZW5uZXIuY29tL2Vhc2luZy9cclxuXHRmdW5jdGlvbiBlYXNlSW5PdXRRdWFkKHQsIGIsIGMsIGQpIHtcclxuXHRcdHQgLz0gZCAvIDI7XHJcblx0XHRpZiAodCA8IDEpIHtcclxuXHRcdFx0cmV0dXJuIGMgLyAyICogdCAqIHQgKyBiO1xyXG5cdFx0fVxyXG5cdFx0dC0tO1xyXG5cdFx0cmV0dXJuIC1jIC8gMiAqICh0ICogKHQgLSAyKSAtIDEpICsgYjtcclxuXHR9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL0Bhby1pbnRlcm5hbC9tYXJrZXRpbmctZ2xvYmFscy9qcy91dGlscy9hb1Ntb290aFNjcm9sbC5qcyIsIihmdW5jdGlvbiByZXF1ZXN0QW5pbWF0aW9uUG9seWZpbGwoKSB7XHJcblx0dmFyIGxhc3RUaW1lID0gMDtcclxuXHR2YXIgdmVuZG9ycyA9IFsnbXMnLCAnbW96JywgJ3dlYmtpdCcsICdvJ107XHJcblx0Zm9yICh2YXIgeCA9IDA7IHggPCB2ZW5kb3JzLmxlbmd0aCAmJiAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTsgKyt4KSB7XHJcblx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbeF0gKyAnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XHJcblx0XHR3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1t4XSArICdDYW5jZWxBbmltYXRpb25GcmFtZSddIHx8IHdpbmRvd1t2ZW5kb3JzW3hdICsgJ0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSddO1xyXG5cdH1cclxuXHJcblx0aWYgKCF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKVxyXG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uIChjYWxsYmFjaywgZWxlbWVudCkge1xyXG5cdFx0XHR2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHRcdFx0dmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSk7XHJcblx0XHRcdHZhciBpZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR0aW1lVG9DYWxsKTtcclxuXHRcdFx0bGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XHJcblx0XHRcdHJldHVybiBpZDtcclxuXHRcdH07XHJcblxyXG5cdGlmICghd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKVxyXG5cdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGlkKSB7XHJcblx0XHRcdGNsZWFyVGltZW91dChpZCk7XHJcblx0XHR9O1xyXG59KCkpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvQGFvLWludGVybmFsL21hcmtldGluZy1nbG9iYWxzL2pzL3BvbHlmaWxscy9yZXF1ZXN0LWFuaW1hdGlvbi1mcmFtZS1wb2x5ZmlsbC5qcyIsImxldCB0cmFuc2xhdGlvbnMgPSB7fTtcclxubGV0IGxhbmcgPSAnZW4tZ2InO1xyXG5sZXQgY2xpZW50ID0gJyc7XHJcblxyXG5jb25zdCB0cmFuc2xhdG9yID0ge1xyXG5cdHNldExhbmc6IGZ1bmN0aW9uKHZhbHVlKXtcclxuXHRcdGxhbmcgPSB2YWx1ZTtcclxuXHR9LFxyXG5cclxuXHRzZXRDbGllbnQ6IGZ1bmN0aW9uKHZhbHVlKXtcclxuXHRcdGNsaWVudCA9IHZhbHVlO1xyXG5cdH0sXHJcblx0c2V0OiBmdW5jdGlvbihyZXNvdXJjZSwgdmFsdWUpe1xyXG5cdFx0dmFyIGFkZGl0aW9ucyA9IHt9O1xyXG5cdFx0YWRkaXRpb25zW3Jlc291cmNlXSA9IHZhbHVlO1xyXG5cclxuXHRcdHRyYW5zbGF0aW9ucyA9IE9iamVjdC5hc3NpZ24odHJhbnNsYXRpb25zLCBhZGRpdGlvbnMpO1xyXG5cdH0sXHJcblx0Z2V0OiBmdW5jdGlvbihyZXNvdXJjZSwgbmFtZSl7XHJcblx0XHRyZXNvdXJjZSA9IHJlc291cmNlIHx8ICdkZWZhdWx0JztcclxuXHJcblx0XHRpZiAoY2xpZW50ICYmXHJcblx0XHRcdHRyYW5zbGF0aW9uc1tyZXNvdXJjZV0gJiZcclxuXHRcdFx0dHJhbnNsYXRpb25zW3Jlc291cmNlXVtjbGllbnRdICYmXHJcblx0XHRcdHRyYW5zbGF0aW9uc1tyZXNvdXJjZV1bY2xpZW50XVtsYW5nXSAmJlxyXG5cdFx0XHR0cmFuc2xhdGlvbnNbcmVzb3VyY2VdW2NsaWVudF1bbGFuZ11bbmFtZV0pIHtcclxuXHRcdFx0cmV0dXJuIHRyYW5zbGF0aW9uc1tyZXNvdXJjZV1bY2xpZW50XVtsYW5nXVtuYW1lXTtcclxuXHRcdH0gZWxzZSBpZiAodHJhbnNsYXRpb25zW3Jlc291cmNlXSAmJlxyXG5cdFx0XHRcdFx0dHJhbnNsYXRpb25zW3Jlc291cmNlXVtsYW5nXSAmJlxyXG5cdFx0XHRcdFx0dHJhbnNsYXRpb25zW3Jlc291cmNlXVtsYW5nXVtuYW1lXSkge1xyXG5cdFx0XHRyZXR1cm4gdHJhbnNsYXRpb25zW3Jlc291cmNlXVtsYW5nXVtuYW1lXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiAnJztcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0cmFuc2xhdG9yO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBuYW1lc3BhY2VkVHJhbnNsYXRvcihyZXNvdXJjZSkge1xyXG5cdHJldHVybiB0cmFuc2xhdG9yLmdldC5iaW5kKHRyYW5zbGF0b3IsIHJlc291cmNlKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvQGFvLWludGVybmFsL21hcmtldGluZy1nbG9iYWxzL2pzL3V0aWxzL3RyYW5zbGF0b3IuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcImVuLUdCXCI6e1wiYmFja1wiOlwiQmFja1wifSxcIm5sLU5MXCI6e1wiYmFja1wiOlwiU2x1aXRlblwifSxcImRlLURFXCI6e1wiYmFja1wiOlwiWnVyw7xja1wifX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AYW8taW50ZXJuYWwvbWFya2V0aW5nLWdsb2JhbHMvbW9kdWxlcy9Bb1N0aWNreU5hdi90cmFuc2xhdGlvbnMuanNvblxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9