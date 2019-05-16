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
			carouselOuter.style.display = 'hidden';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTIyNWM2NDAxYmI1ODU1YjM4MTUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bhby1pbnRlcm5hbC9tYXJrZXRpbmctZ2xvYmFscy9qcy91dGlscy9kb20tdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFvLWludGVybmFsL21hcmtldGluZy1nbG9iYWxzL21vZHVsZXMvQW9TdGlja3lOYXYvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bhby1pbnRlcm5hbC9tYXJrZXRpbmctZ2xvYmFscy9qcy91dGlscy9nZW5lcmFsLXV0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYW8taW50ZXJuYWwvbWFya2V0aW5nLWdsb2JhbHMvanMvdXRpbHMvYW9TbW9vdGhTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bhby1pbnRlcm5hbC9tYXJrZXRpbmctZ2xvYmFscy9qcy9wb2x5ZmlsbHMvcmVxdWVzdC1hbmltYXRpb24tZnJhbWUtcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bhby1pbnRlcm5hbC9tYXJrZXRpbmctZ2xvYmFscy9qcy91dGlscy90cmFuc2xhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYW8taW50ZXJuYWwvbWFya2V0aW5nLWdsb2JhbHMvbW9kdWxlcy9Bb1N0aWNreU5hdi90cmFuc2xhdGlvbnMuanNvbiJdLCJuYW1lcyI6WyJoYXNDbGFzcyIsImVsZW1lbnQiLCJjbGFzc05hbWUiLCJIVE1MRWxlbWVudCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiRXJyb3IiLCJhZGRDbGFzcyIsImFkZCIsInJlbW92ZUNsYXNzIiwicmVtb3ZlIiwidG9nZ2xlQ2xhc3MiLCJ0b2dnbGUiLCJnZXRFbGVtZW50IiwiY29udGV4dCIsInRhcmdldCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldEVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImRpc3BhdGNoRXZlbnQiLCJldnQiLCJkYXRhIiwiZXZlbnQiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwicCIsIndpbmRvdyIsInByZXZlbnRFdmVudERlZmF1bHQiLCJwcmV2ZW50RGVmYXVsdCIsInJldHVyblZhbHVlIiwiZG9lc0VsZW1lbnRFeGlzdCIsImNyZWF0ZUVsZW1lbnQiLCJvYmoiLCJuZXdFbGVtIiwic2V0QXR0cmlidXRlIiwiY2xhc3MiLCJjb250ZW50IiwiaW5uZXJIVE1MIiwiaW5zZXJ0QmVmb3JlIiwiZWxlbSIsInBhcmVudCIsImJlZm9yZSIsImVsZW1Ob2RlIiwicGFyZW50Tm9kZSIsImJlZm9yZU5vZGUiLCJhcHBlbmRUbyIsImluc2VydFBsYWNlaG9sZGVyIiwiZWwiLCJwbGFjZUhvbGRlciIsImlkIiwicmVtb3ZlQ2hpbGQiLCJtb3ZlRWxlbWVudCIsInRvIiwiYXBwZW5kQ2hpbGQiLCJnZXRDbG9zZXN0Iiwic2VsZWN0b3IiLCJzY29wZSIsIm1hdGNoZXMiLCJpIiwibGVuZ3RoIiwiaXRlbSIsInBhcmVudEVsZW1lbnQiLCJnZXRQYXJlbnRzIiwicGFyZW50cyIsImZpcnN0Q2hhciIsImNoYXJBdCIsInN1YnN0ciIsInB1c2giLCJoYXNBdHRyaWJ1dGUiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJuYXZJbml0IiwicGFnaW5hdGlvbkNvbnRhaW5lciIsImNhcm91c2VsT3V0ZXIiLCJzbGlkZTEiLCJnZXRFbGVtZW50QnlJZCIsInNsaWRlMiIsInNsaWRlMyIsInNsaWRlNCIsInNsaWRlU2VsZWN0Iiwic2xpZGVBcnJheSIsInNsaWRlIiwic3R5bGUiLCJkaXNwbGF5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb25zb2xlIiwibG9nIiwiZ2V0QXR0cmlidXRlIiwidHJhbnNmb3JtIiwic3RpY2t5RWxlbWVudCIsIm1heERlcHRoIiwicGFuZWxzT3BlbiIsImJyZWFrcG9pbnRFdmVudExpc3RlbmVycyIsImlzVG91Y2giLCJ0b3VjaExpc3RlbmVyIiwibGFzdE9wZW5lZE1lbnUiLCJsYW5nIiwiaGVhZCIsInRyYW5zbGF0b3IiLCJzZXQiLCJ0cmFuc2xhdGlvbnMiLCJzZXRMYW5nIiwiZ2V0VHJhbnNsYXRpb24iLCJuYW1lc3BhY2VkVHJhbnNsYXRvciIsImNhbGNTdWJNZW51cyIsInRvcFVsIiwiZGVwdGgiLCJtZW51cyIsIk1hdGgiLCJtYXgiLCJBcnJheSIsInByb3RvdHlwZSIsImNhbGwiLCJjaGlsZHJlbiIsImNoaWxkIiwibWVudUNoaWxkIiwiY2xvc2UiLCJwYW5lbCIsInBhbmVsRWxlbWVudCIsIm1vdmVkRWxlbWVudCIsImFsbE9wZW5QYW5lbHMiLCJwbmwiLCJib2R5Iiwic2Nyb2xsTG9jayIsInVubG9jayIsIm9wZW4iLCJtZW51U2VsZWN0b3IiLCJwYW5lbENvbnRlbnRDb250YWluZXIiLCJtZW51RWxlbWVudCIsImxvY2siLCJ0YXBBd2F5IiwicmVhbFRhcmdldCIsImlzTWVudSIsIm9wZW5NZW51cyIsIm1lbnUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xvc2VzdExpIiwiY2xvc2VzdExpV2l0aFN1Ym1lbnUiLCJjaGlsZE1lbnVzIiwib3duZXJEb2N1bWVudCIsImhvdmVyIiwidGFyZ2V0TWVudSIsIm1ldGhvZCIsInRvdWNoIiwidGFyZ2V0TWVudUVsIiwicHJldmlvdXNNZW51TGV2ZWwiLCJuZXdNZW51TGV2ZWwiLCJ0b3BMZXZlbEVsZW1lbnQiLCJvcGVuU3ViTWVudXMiLCJoYW5kbGVTdWJNZW51Q2xpY2siLCJub2RlIiwic3ViTWVudVNlbGVjdG9yIiwibWF4QnViYmxlIiwiaXNBbmNob3IiLCJtYXRjaCIsImF0dHJTdWJNZW51IiwicGFuZWxUb09wZW4iLCJzZXR1cFN0aWNreU1lbnUiLCJuYXZEb2NrVG9wIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwic2V0dXBCcmVha3BvaW50SGFuZGxpbmciLCJyZW1vdmVCcmVha3BvaW50RXZlbnRMaXN0ZW5lcnMiLCJicmVha3BvaW50Iiwic2V0dXBNb2JpbGUiLCJwcmV2aW91c0JyZWFrcG9pbnQiLCJyZW1vdmVNb2JpbGVFbGVtZW50cyIsInNldHVwRGVza3RvcCIsImFkZEJyZWFrcG9pbnRFdmVudExpc3RlbmVyIiwiZXZ0VHlwZSIsImV2dFRhcmdldCIsImZ1bmN0aW9uUmVmZXJlbmNlIiwidHlwZSIsImZjdG4iLCJldnRMaXN0ZW5lciIsIm1vYmlsZUVsZW1lbnRzIiwiY3JlYXRlT3ZlcmxheSIsImNyZWF0ZVBhbmVsIiwibmF2Q29udHJvbCIsImJpbmQiLCJvbnRvdWNoc3RhcnQiLCJmaXJzdEZpcnN0TGV2ZWxNZW51cyIsIm1lbnVJdGVtIiwiZWxlbWVudHNXaXRoU3ViTWVudSIsImJhY2tCdXR0b24iLCJuYXZDb250YWluZXIiLCJvdmVybGF5IiwiY29udGFpbmVyIiwianVtcE9mZnNldCIsImluaXQiLCJ2YWx1ZSIsImFuY2hvcnMiLCJmcm9tIiwiYW5jaG9yIiwiaHJlZiIsImp1bXAiLCJkdXJhdGlvbiIsIm9mZnNldCIsImxvY2tlZCIsImVuYWJsZWRFbGVtZW50Q2xhc3MiLCJldmVudExpc3RlbmVyIiwiZGlzYWJsZWRFbGVtZW50cyIsImlzQXJyYXkiLCJlbHMiLCJoYXNWZXJ0aWNhbFNjcm9sbGJhciIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsImZvcm1hdFN0cmluZyIsImZvcm1hdCIsImFyZ3MiLCJrIiwibSIsInJlcGxhY2UiLCJmaXJlT25jZSIsImZuIiwiaGFzRmlyZWQiLCJyZWFkeSIsInJlYWR5U3RhdGUiLCJmaXJlRm5PbmNlIiwiZ2V0VXJsUGFyYW1ldGVycyIsInNlYXJjaCIsImxvY2F0aW9uIiwic3Vic3RyaW5nIiwia2V5IiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZGVib3VuY2UiLCJhbmltYXRpb25GcmFtZVJlcXVlc3RlZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInN1cHBvcnRzVHJhbnNpdGlvbnMiLCJiIiwiZG9jdW1lbnRFbGVtZW50IiwicyIsInYiLCJ0b1VwcGVyQ2FzZSIsImlzSW5TdG9jayIsInByb2R1Y3QiLCJTdGF0ZSIsInRvU3RyaW5nIiwiaW5kZXhPZiIsImluaXRpYWxpc2VkRWxlbWVudHMiLCJwYWdlVXJsIiwiaGFzaCIsInN0cmlwSGFzaCIsImlzU21hcnRQaG9uZSIsImluaXRTbW9vdGhTY3JvbGxpbmciLCJvdmVycmlkZU9mZnNldCIsImFsbG93UHJvcGFnYXRpb24iLCJvZmZzZXRJbnQiLCJpc05hTiIsImluaXRMaW5rSGlqYWNrIiwiZGVpbml0aWFsaXNlRWxlbWVudHMiLCJjYW5Vc2VSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJsaW5rcyIsInNsaWNlIiwibGluayIsIm9uQ2xpY2siLCJoYW5kbGVyIiwibm9kZU5hbWUiLCJpc0luUGFnZUxpbmsiLCJzdG9wUHJvcGFnYXRpb24iLCJ1cmwiLCJsYXN0SW5kZXhPZiIsImlzQ3NzU21vb3RoU0Nyb2xsU3VwcG9ydGVkIiwib3B0aW9ucyIsInN0YXJ0IiwicGFnZVlPZmZzZXQiLCJvcHQiLCJlYXNpbmciLCJlYXNlSW5PdXRRdWFkIiwiZGlzdGFuY2UiLCJ0aW1lU3RhcnQiLCJ0aW1lRWxhcHNlZCIsInRpbWUiLCJsb29wIiwic2Nyb2xsVG8iLCJ0IiwiYyIsImQiLCJyZXF1ZXN0QW5pbWF0aW9uUG9seWZpbGwiLCJsYXN0VGltZSIsInZlbmRvcnMiLCJ4IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJjYWxsYmFjayIsImN1cnJUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJ0aW1lVG9DYWxsIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImNsaWVudCIsInNldENsaWVudCIsInJlc291cmNlIiwiYWRkaXRpb25zIiwiYXNzaWduIiwiZ2V0IiwibmFtZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdETyxTQUFTQSxRQUFULENBQWtCQyxPQUFsQixFQUEyQkMsU0FBM0IsRUFBc0M7QUFDNUMsS0FBSUQsbUJBQW1CRSxXQUFuQixJQUFrQyxPQUFPRCxTQUFQLEtBQXFCLFFBQTNELEVBQXFFO0FBQ3BFLFNBQU9ELFFBQVFHLFNBQVIsQ0FBa0JDLFFBQWxCLENBQTJCSCxTQUEzQixDQUFQO0FBQ0EsRUFGRCxNQUdLO0FBQ0osUUFBTSxJQUFJSSxLQUFKLENBQVUsK0RBQVYsQ0FBTjtBQUNBO0FBQ0Q7O0FBRU0sU0FBU0MsUUFBVCxDQUFrQk4sT0FBbEIsRUFBMkJDLFNBQTNCLEVBQXNDO0FBQzVDLEtBQUlELG1CQUFtQkUsV0FBbkIsSUFBa0MsT0FBT0QsU0FBUCxLQUFxQixRQUEzRCxFQUFxRTtBQUNwRUQsVUFBUUcsU0FBUixDQUFrQkksR0FBbEIsQ0FBc0JOLFNBQXRCO0FBQ0EsU0FBTyxJQUFQO0FBQ0EsRUFIRCxNQUdPO0FBQ04sUUFBTSxJQUFJSSxLQUFKLENBQVUsK0RBQVYsQ0FBTjtBQUNBO0FBQ0Q7O0FBRU0sU0FBU0csV0FBVCxDQUFxQlIsT0FBckIsRUFBOEJDLFNBQTlCLEVBQXlDO0FBQy9DLEtBQUlELG1CQUFtQkUsV0FBbkIsSUFBa0MsT0FBT0QsU0FBUCxLQUFxQixRQUEzRCxFQUFxRTtBQUNwRUQsVUFBUUcsU0FBUixDQUFrQk0sTUFBbEIsQ0FBeUJSLFNBQXpCO0FBQ0EsU0FBTyxJQUFQO0FBQ0EsRUFIRCxNQUdPO0FBQ04sUUFBTSxJQUFJSSxLQUFKLENBQVUsa0VBQVYsQ0FBTjtBQUNBO0FBQ0Q7O0FBRU0sU0FBU0ssV0FBVCxDQUFxQlYsT0FBckIsRUFBOEJDLFNBQTlCLEVBQXlDO0FBQy9DLEtBQUlELG1CQUFtQkUsV0FBbkIsSUFBa0MsT0FBT0QsU0FBUCxLQUFxQixRQUEzRCxFQUFxRTtBQUNwRUQsVUFBUUcsU0FBUixDQUFrQlEsTUFBbEIsQ0FBeUJWLFNBQXpCO0FBQ0EsU0FBTyxJQUFQO0FBQ0EsRUFIRCxNQUdPO0FBQ04sUUFBTSxJQUFJSSxLQUFKLENBQVUsa0VBQVYsQ0FBTjtBQUNBO0FBQ0Q7O0FBRU0sU0FBU08sVUFBVCxDQUFvQkMsT0FBcEIsRUFBNkJDLE1BQTdCLEVBQXFDO0FBQzNDLFFBQU8sQ0FBQ0QsV0FBV0UsUUFBWixFQUFzQkMsYUFBdEIsQ0FBb0NGLE1BQXBDLENBQVA7QUFDQTs7QUFFTSxTQUFTRyxXQUFULENBQXFCSixPQUFyQixFQUE4QkMsTUFBOUIsRUFBc0M7QUFDNUMsUUFBTyxDQUFDRCxXQUFXRSxRQUFaLEVBQXNCRyxnQkFBdEIsQ0FBdUNKLE1BQXZDLENBQVA7QUFDQTs7QUFFTSxTQUFTSyxhQUFULENBQXVCQyxHQUF2QixFQUE0QkMsSUFBNUIsRUFBa0M7QUFDeEMsS0FBSUMsUUFBUVAsU0FBU1EsV0FBVCxDQUFxQixPQUFyQixDQUFaO0FBQ0FELE9BQU1FLFNBQU4sQ0FBZ0JKLEdBQWhCLEVBQXFCLElBQXJCLEVBQTJCLElBQTNCOztBQUVBLEtBQUksT0FBT0MsSUFBUCxLQUFnQixXQUFwQixFQUFpQztBQUNoQ0ksU0FBT0MsSUFBUCxDQUFZTCxJQUFaLEVBQWtCTSxPQUFsQixDQUEwQixhQUFLO0FBQzlCTCxTQUFNTSxDQUFOLElBQVdQLEtBQUtPLENBQUwsQ0FBWDtBQUNBLEdBRkQ7QUFHQTs7QUFFREMsUUFBT1YsYUFBUCxDQUFxQkcsS0FBckI7QUFDQTs7QUFFTSxTQUFTUSxtQkFBVCxDQUE2QlYsR0FBN0IsRUFBa0M7QUFDeEMsS0FBSUEsSUFBSVcsY0FBUixFQUF3QjtBQUN2QlgsTUFBSVcsY0FBSjtBQUNBLEVBRkQsTUFFTztBQUNOWCxNQUFJWSxXQUFKLEdBQWtCLEtBQWxCO0FBQ0E7QUFDRDs7QUFFTSxTQUFTQyxnQkFBVCxDQUEwQmpDLE9BQTFCLEVBQW1DO0FBQ3pDLFFBQU9lLFNBQVNDLGFBQVQsQ0FBdUJoQixPQUF2QixDQUFQO0FBQ0E7O0FBRUQ7Ozs7OztBQU1PLFNBQVNrQyxhQUFULENBQXVCQyxHQUF2QixFQUE0QjtBQUNsQyxLQUFJLFFBQU9BLEdBQVAseUNBQU9BLEdBQVAsT0FBZSxRQUFuQixFQUE2QjtBQUM1QixRQUFNLElBQUk5QixLQUFKLENBQVUsb0ZBQVYsQ0FBTjtBQUNBO0FBQ0QsS0FBSStCLFVBQVVyQixTQUFTbUIsYUFBVCxDQUF1QkMsSUFBSW5DLE9BQTNCLENBQWQ7QUFDQW9DLFNBQVFDLFlBQVIsQ0FBcUIsT0FBckIsRUFBOEJGLElBQUlHLEtBQWxDO0FBQ0EsS0FBSUgsSUFBSUksT0FBSixLQUFnQixLQUFwQixFQUEyQjtBQUMxQkgsVUFBUUksU0FBUixHQUFvQkwsSUFBSUksT0FBeEI7QUFDQTtBQUNELFFBQU9ILE9BQVA7QUFDQTs7QUFFTSxTQUFTSyxZQUFULENBQXNCQyxJQUF0QixFQUE0QkMsTUFBNUIsRUFBb0NDLE1BQXBDLEVBQTRDO0FBQ2xELEtBQUlDLFFBQUo7QUFDQSxLQUFJQyxVQUFKO0FBQ0EsS0FBSUMsVUFBSjs7QUFFQTtBQUNBLEtBQUlMLGdCQUFnQnhDLFdBQXBCLEVBQWlDO0FBQ2hDMkMsYUFBV0gsSUFBWDtBQUNBLEVBRkQsTUFFTztBQUNORyxhQUFXLElBQVg7QUFDQTs7QUFFRDtBQUNBLEtBQUlGLGtCQUFrQnpDLFdBQXRCLEVBQW1DO0FBQ2xDNEMsZUFBYUgsTUFBYjtBQUNBLEVBRkQsTUFFTyxJQUFJLE9BQU9BLE1BQVAsS0FBa0IsUUFBdEIsRUFBZ0M7QUFDdENHLGVBQWEvQixTQUFTQyxhQUFULENBQXVCMkIsTUFBdkIsQ0FBYjtBQUNBLEVBRk0sTUFFQTtBQUNORyxlQUFhLElBQWI7QUFDQTs7QUFFRDtBQUNBLEtBQUlGLGtCQUFrQjFDLFdBQXRCLEVBQW1DO0FBQ2xDNkMsZUFBYUgsTUFBYjtBQUNBLEVBRkQsTUFFTztBQUNORyxlQUFhLElBQWI7QUFDQTs7QUFFRDtBQUNBLEtBQUlELGVBQWUsSUFBZixJQUF1QkQsYUFBYSxJQUF4QyxFQUE4QztBQUM3Q0MsYUFBV0wsWUFBWCxDQUF3QkMsSUFBeEIsRUFBOEJFLE1BQTlCO0FBQ0EsU0FBTyxJQUFQO0FBQ0EsRUFIRCxNQUdPO0FBQ04sUUFBTSxJQUFJdkMsS0FBSixDQUFVLGdFQUFWLENBQU47QUFDQTtBQUVEOztBQUVNLFNBQVMyQyxRQUFULENBQWtCTixJQUFsQixFQUF3QkMsTUFBeEIsRUFBZ0M7QUFDdEMsS0FBSUcsVUFBSjs7QUFFQTtBQUNBLEtBQUlILGtCQUFrQnpDLFdBQXRCLEVBQW1DO0FBQ2xDNEMsZUFBYUgsTUFBYjtBQUVBLEVBSEQsTUFHTyxJQUFJLE9BQU9BLE1BQVAsS0FBa0IsUUFBdEIsRUFBZ0M7QUFDdENHLGVBQWEvQixTQUFTQyxhQUFULENBQXVCMkIsTUFBdkIsQ0FBYjtBQUVBLEVBSE0sTUFHQTtBQUNORyxlQUFhLElBQWI7QUFFQTs7QUFFRCxLQUFJQSxlQUFlLElBQWYsSUFBdUJKLGdCQUFnQnhDLFdBQTNDLEVBQXdEO0FBQ3ZEYSxXQUFTQyxhQUFULENBQXVCOEIsVUFBdkIsRUFBbUNFLFFBQW5DLENBQTRDTixJQUE1QztBQUNBLFNBQU8sSUFBUDtBQUVBLEVBSkQsTUFJTztBQUNOLFFBQU0sSUFBSXJDLEtBQUosQ0FBVSw2Q0FBVixDQUFOO0FBQ0E7QUFDRDs7QUFHTSxTQUFTNEMsaUJBQVQsQ0FBMkJDLEVBQTNCLEVBQStCO0FBQ3JDLEtBQUlDLGNBQWNwQyxTQUFTbUIsYUFBVCxDQUF1QixLQUF2QixDQUFsQjtBQUNBaUIsYUFBWWhELFNBQVosQ0FBc0JJLEdBQXRCLENBQTBCLGFBQTFCO0FBQ0E0QyxhQUFZZCxZQUFaLENBQXlCLGlCQUF6QixFQUE0Q2EsR0FBR0UsRUFBL0M7O0FBRUFGLElBQUdKLFVBQUgsQ0FBY0wsWUFBZCxDQUEyQlUsV0FBM0IsRUFBd0NELEVBQXhDO0FBQ0FBLElBQUdKLFVBQUgsQ0FBY08sV0FBZCxDQUEwQkgsRUFBMUI7QUFDQTs7QUFFTSxTQUFTSSxXQUFULENBQXFCSixFQUFyQixFQUF5QkssRUFBekIsRUFBNkI7QUFDbkMsS0FBSUosY0FBY3BDLFNBQVNDLGFBQVQsQ0FBdUIsa0NBQWtDa0MsR0FBR0UsRUFBckMsR0FBMEMsR0FBakUsQ0FBbEI7QUFDQSxLQUFJRCxXQUFKLEVBQWlCO0FBQ2hCQSxjQUFZTCxVQUFaLENBQXVCTCxZQUF2QixDQUFvQ1MsRUFBcEMsRUFBd0NDLFdBQXhDO0FBQ0FBLGNBQVlMLFVBQVosQ0FBdUJPLFdBQXZCLENBQW1DRixXQUFuQztBQUNBLEVBSEQsTUFHTyxJQUFJSSxFQUFKLEVBQVE7QUFDZE4sb0JBQWtCQyxFQUFsQjtBQUNBSyxLQUFHQyxXQUFILENBQWVOLEVBQWY7QUFDQTtBQUNEOztBQUdEOzs7Ozs7Ozs7OztBQVdPLFNBQVNPLFVBQVQsQ0FBb0IzQyxNQUFwQixFQUE0QjRDLFFBQTVCLEVBQXNDQyxLQUF0QyxFQUE0QztBQUNsRCxLQUFJQyxVQUFVLENBQUNELFNBQVM1QyxRQUFWLEVBQW9CRyxnQkFBcEIsQ0FBcUN3QyxRQUFyQyxDQUFkO0FBQ0EsS0FBSUcsQ0FBSjtBQUNBLEtBQUlYLEtBQUtwQyxNQUFUOztBQUVBLElBQUc7QUFDRitDLE1BQUlELFFBQVFFLE1BQVo7QUFDQSxTQUFPLEVBQUVELENBQUYsSUFBTyxDQUFQLElBQVlELFFBQVFHLElBQVIsQ0FBYUYsQ0FBYixNQUFvQlgsRUFBdkMsRUFBMkMsQ0FBRTtBQUM3QyxFQUhELFFBR1VXLElBQUksQ0FBTCxLQUFZWCxLQUFLQSxHQUFHYyxhQUFwQixDQUhUO0FBSUEsUUFBT2QsRUFBUDtBQUNBOztBQUdEOzs7Ozs7Ozs7QUFTTyxTQUFTZSxVQUFULENBQW9CdkIsSUFBcEIsRUFBMEJnQixRQUExQixFQUFvQzs7QUFFMUMsS0FBSVEsVUFBVSxFQUFkO0FBQ0EsS0FBSUMsU0FBSjtBQUNBLEtBQUlULFFBQUosRUFBYztBQUNiUyxjQUFZVCxTQUFTVSxNQUFULENBQWdCLENBQWhCLENBQVo7QUFDQTs7QUFFRDtBQUNBLFFBQU8xQixRQUFRQSxTQUFTM0IsUUFBeEIsRUFBa0MyQixPQUFPQSxLQUFLSSxVQUE5QyxFQUEwRDtBQUN6RCxNQUFJWSxRQUFKLEVBQWM7O0FBRWI7QUFDQSxPQUFJUyxjQUFjLEdBQWxCLEVBQXVCO0FBQ3RCLFFBQUl6QixLQUFLdkMsU0FBTCxDQUFlQyxRQUFmLENBQXdCc0QsU0FBU1csTUFBVCxDQUFnQixDQUFoQixDQUF4QixDQUFKLEVBQWlEO0FBQ2hESCxhQUFRSSxJQUFSLENBQWE1QixJQUFiO0FBQ0E7QUFDRDs7QUFFRDtBQUNBLE9BQUl5QixjQUFjLEdBQWxCLEVBQXVCO0FBQ3RCLFFBQUl6QixLQUFLVSxFQUFMLEtBQVlNLFNBQVNXLE1BQVQsQ0FBZ0IsQ0FBaEIsQ0FBaEIsRUFBb0M7QUFDbkNILGFBQVFJLElBQVIsQ0FBYTVCLElBQWI7QUFDQTtBQUNEOztBQUVEO0FBQ0EsT0FBSXlCLGNBQWMsR0FBbEIsRUFBdUI7QUFDdEIsUUFBSXpCLEtBQUs2QixZQUFMLENBQWtCYixTQUFTVyxNQUFULENBQWdCLENBQWhCLEVBQW1CWCxTQUFTSSxNQUFULEdBQWtCLENBQXJDLENBQWxCLENBQUosRUFBZ0U7QUFDL0RJLGFBQVFJLElBQVIsQ0FBYTVCLElBQWI7QUFDQTtBQUNEOztBQUVEO0FBQ0EsT0FBSUEsS0FBSzhCLE9BQUwsQ0FBYUMsV0FBYixPQUErQmYsUUFBbkMsRUFBNkM7QUFDNUNRLFlBQVFJLElBQVIsQ0FBYTVCLElBQWI7QUFDQTtBQUVELEdBNUJELE1BNEJPO0FBQ053QixXQUFRSSxJQUFSLENBQWE1QixJQUFiO0FBQ0E7QUFDRDs7QUFFRDtBQUNBLEtBQUl3QixRQUFRSixNQUFSLEtBQW1CLENBQXZCLEVBQTBCO0FBQ3pCLFNBQU8sSUFBUDtBQUNBO0FBQ0QsUUFBT0ksT0FBUDtBQUNBLEM7Ozs7Ozs7QUM1UEQ7QUFBQTtBQUFBOztBQUVBUSwyR0FBT0EsQ0FBQyxjQUFSOztBQUVBLElBQU1DLHNCQUFzQjVELFNBQVNDLGFBQVQsQ0FBdUIsdUJBQXZCLENBQTVCO0FBQ0EsSUFBTTRELGdCQUFnQjdELFNBQVNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQXRCOztBQUVBLElBQU02RCxTQUFTOUQsU0FBUytELGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBLElBQU1DLFNBQVNoRSxTQUFTK0QsY0FBVCxDQUF3QixRQUF4QixDQUFmO0FBQ0EsSUFBTUUsU0FBU2pFLFNBQVMrRCxjQUFULENBQXdCLFFBQXhCLENBQWY7QUFDQSxJQUFNRyxTQUFTbEUsU0FBUytELGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjs7QUFFQSxJQUFNSSxjQUFjLFNBQWRBLFdBQWMsUUFBUztBQUM1QixLQUFJQyxhQUFhLENBQUNOLE1BQUQsRUFBU0UsTUFBVCxFQUFpQkMsTUFBakIsRUFBeUJDLE1BQXpCLENBQWpCOztBQUVBLE1BQUssSUFBSXBCLElBQUksQ0FBYixFQUFnQkEsSUFBSXNCLFdBQVdyQixNQUEvQixFQUF1Q0QsR0FBdkMsRUFBNEM7QUFDM0MsTUFBSXVCLFVBQVVELFdBQVd0QixDQUFYLENBQWQsRUFBNkI7QUFDNUJ1QixTQUFNakYsU0FBTixDQUFnQkksR0FBaEIsQ0FBb0IsU0FBcEI7QUFDQSxHQUZELE1BRU87QUFDTjRFLGNBQVd0QixDQUFYLEVBQWMxRCxTQUFkLENBQXdCTSxNQUF4QixDQUErQixTQUEvQjtBQUNBbUUsaUJBQWNTLEtBQWQsQ0FBb0JDLE9BQXBCLEdBQThCLFFBQTlCO0FBQ0E7QUFDRDtBQUNELENBWEQ7O0FBYUFYLG9CQUFvQlksZ0JBQXBCLENBQXFDLE9BQXJDLEVBQThDLFVBQVNDLENBQVQsRUFBWTtBQUN6RCxLQUFJQSxFQUFFMUUsTUFBRixDQUFTeUQsWUFBVCxDQUFzQixtQkFBdEIsQ0FBSixFQUFnRDtBQUMvQ2tCLFVBQVFDLEdBQVIsQ0FBWUYsRUFBRTFFLE1BQUYsQ0FBUzZFLFlBQVQsQ0FBc0IsbUJBQXRCLENBQVo7QUFDQSxVQUFRSCxFQUFFMUUsTUFBRixDQUFTNkUsWUFBVCxDQUFzQixtQkFBdEIsQ0FBUjtBQUNDLFFBQUssR0FBTDtBQUNDZixrQkFBY1MsS0FBZCxDQUFvQk8sU0FBcEIsR0FBZ0MsZUFBaEM7QUFDQVYsZ0JBQVlMLE1BQVo7QUFDQTtBQUNELFFBQUssR0FBTDtBQUNDRCxrQkFBY1MsS0FBZCxDQUFvQk8sU0FBcEIsR0FBZ0Msb0JBQWhDO0FBQ0FWLGdCQUFZSCxNQUFaO0FBQ0E7QUFDRCxRQUFLLEdBQUw7QUFDQ0gsa0JBQWNTLEtBQWQsQ0FBb0JPLFNBQXBCLEdBQWdDLG9CQUFoQztBQUNBVixnQkFBWUYsTUFBWjtBQUNBO0FBQ0QsUUFBSyxHQUFMO0FBQ0NKLGtCQUFjUyxLQUFkLENBQW9CTyxTQUFwQixHQUFnQyxvQkFBaEM7QUFDQVYsZ0JBQVlELE1BQVo7QUFDQTtBQUNEO0FBQ0NMLGtCQUFjUyxLQUFkLENBQW9CTyxTQUFwQixHQUFnQyxlQUFoQztBQUNBZixXQUFPMUUsU0FBUCxDQUFpQkksR0FBakIsQ0FBcUIsU0FBckI7QUFuQkY7QUFxQkE7QUFDRCxDQXpCRCxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJUCxnQkFBSjtBQUFBLElBQWE2RixzQkFBYjtBQUNBO0FBQ0EsSUFBSUMsV0FBVyxDQUFmO0FBQ0EsSUFBSUMsYUFBYSxDQUFqQjtBQUNBLElBQUlDLDJCQUEyQixFQUEvQjtBQUNBLElBQUlDLFVBQVUsS0FBZDtBQUNBLElBQUlDLGdCQUFnQixJQUFwQjtBQUNBLElBQUlDLHVCQUFKO0FBQ0EsSUFBSUMsT0FBT3JGLFNBQVNzRixJQUFULENBQWNWLFlBQWQsQ0FBMkIsTUFBM0IsQ0FBWDtBQUNBUyxPQUFPQSxTQUFTLElBQVQsR0FBZ0IsT0FBaEIsR0FBMEJBLElBQWpDO0FBQ0FFLHFFQUFVQSxDQUFDQyxHQUFYLENBQWUsY0FBZixFQUErQkMscURBQS9CO0FBQ0FGLHFFQUFVQSxDQUFDRyxPQUFYLENBQW1CTCxJQUFuQjtBQUNBLElBQU1NLGlCQUFpQkMsMEZBQW9CQSxDQUFDLGNBQXJCLENBQXZCO0FBQ0E7OztBQUdBLFNBQVNDLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQXdDO0FBQUEsS0FBWEMsS0FBVyx1RUFBSCxDQUFHOztBQUN2QyxLQUFJQyxRQUFRLEVBQVo7O0FBRUFqQixZQUFXa0IsS0FBS0MsR0FBTCxDQUFTbkIsUUFBVCxFQUFtQmdCLEtBQW5CLENBQVg7O0FBRUFJLE9BQU1DLFNBQU4sQ0FBZ0J4RixPQUFoQixDQUF3QnlGLElBQXhCLENBQTZCUCxNQUFNUSxRQUFuQyxFQUE2QyxVQUFDQyxLQUFELEVBQVc7QUFDdkQsTUFBSUEsTUFBTS9DLFlBQU4sQ0FBbUIsY0FBbkIsQ0FBSixFQUF3QztBQUN2QyxPQUFJZ0QsWUFBWUQsTUFBTXRHLGFBQU4sQ0FBb0IsSUFBcEIsQ0FBaEI7QUFDQStGLFNBQU16QyxJQUFOLENBQVcsRUFBQ2xCLElBQUlrRSxNQUFNM0IsWUFBTixDQUFtQixjQUFuQixDQUFMLEVBQXlDb0IsT0FBT0gsYUFBYVcsU0FBYixFQUF3QlQsUUFBUSxDQUFoQyxDQUFoRCxFQUFYO0FBQ0E7QUFDRCxFQUxEOztBQU9BLFFBQU9DLEtBQVA7QUFDQTs7QUFFRDs7OztBQUlBLFNBQVNTLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUNyQixLQUFJQSxLQUFKLEVBQVc7QUFDVixNQUFJQyxlQUFlM0csU0FBUytELGNBQVQsQ0FBd0IsY0FBYzJDLEtBQXRDLENBQW5CO0FBQ0EsTUFBSUUsZUFBZUQsYUFBYTFHLGFBQWIsQ0FBMkIsZUFBM0IsRUFBNENxRyxRQUE1QyxDQUFxRCxDQUFyRCxDQUFuQjtBQUNBL0Qsa0ZBQVdBLENBQUNxRSxZQUFaO0FBQ0FuSCxrRkFBV0EsQ0FBQ2tILFlBQVosRUFBMEIsTUFBMUI7QUFDQTNCO0FBQ0EsRUFORCxNQU1PO0FBQ04sTUFBSTZCLGdCQUFnQjdHLFNBQVNHLGdCQUFULENBQTBCLHVCQUExQixDQUFwQjtBQUNBZ0csUUFBTUMsU0FBTixDQUFnQnhGLE9BQWhCLENBQXdCeUYsSUFBeEIsQ0FBNkJRLGFBQTdCLEVBQTRDLFVBQVNDLEdBQVQsRUFBYztBQUN6RCxPQUFJRixlQUFlRSxJQUFJN0csYUFBSixDQUFrQixlQUFsQixFQUFtQ3FHLFFBQW5DLENBQTRDLENBQTVDLENBQW5CO0FBQ0EvRCxtRkFBV0EsQ0FBQ3FFLFlBQVo7QUFDQW5ILG1GQUFXQSxDQUFDcUgsR0FBWixFQUFpQixNQUFqQjtBQUNBOUI7QUFDQSxHQUxEO0FBTUE7O0FBRUQsS0FBSSxDQUFDQSxVQUFMLEVBQWlCO0FBQ2hCdkYsa0ZBQVdBLENBQUNPLFNBQVMrRyxJQUFyQixFQUEyQixVQUEzQjtBQUNBQyw2RUFBVUEsQ0FBQ0MsTUFBWCxDQUFrQixtQkFBbEI7QUFDQTtBQUNEOztBQUVEOzs7Ozs7QUFNQSxTQUFTQyxJQUFULENBQWNSLEtBQWQsRUFBcUJTLFlBQXJCLEVBQW1DO0FBQ2xDLEtBQUlSLGVBQWUzRyxTQUFTK0QsY0FBVCxDQUF3QixjQUFjMkMsS0FBdEMsQ0FBbkI7QUFDQSxLQUFJVSx3QkFBd0JULGFBQWExRyxhQUFiLENBQTJCLGVBQTNCLENBQTVCO0FBQ0EsS0FBSW9ILGNBQWNySCxTQUFTK0QsY0FBVCxDQUF3Qm9ELFlBQXhCLENBQWxCOztBQUVBNUUsaUZBQVdBLENBQUM4RSxXQUFaLEVBQXlCRCxxQkFBekI7O0FBRUE3SCw4RUFBUUEsQ0FBQ29ILFlBQVQsRUFBdUIsTUFBdkI7O0FBRUEzQjs7QUFFQSxLQUFJQSxlQUFlLENBQW5CLEVBQXNCO0FBQ3JCekYsK0VBQVFBLENBQUNTLFNBQVMrRyxJQUFsQixFQUF3QixVQUF4QjtBQUNBQyw2RUFBVUEsQ0FBQ00sSUFBWCxDQUFnQixjQUFoQjtBQUNBO0FBRUQ7O0FBRUQ7Ozs7QUFJQSxTQUFTQyxPQUFULENBQWlCbEgsR0FBakIsRUFBc0I7QUFDckIsS0FBSU4sU0FBU00sSUFBSU4sTUFBakI7QUFDQSxLQUFJeUgsYUFBYW5ILElBQUlOLE1BQXJCOztBQUVBLEtBQUkwSCxTQUFTLEtBQWI7O0FBRUEsUUFBTzFILFdBQVdDLFNBQVMrRyxJQUEzQixFQUFpQztBQUNoQyxNQUFJaEgsT0FBT3NDLEVBQVAsS0FBYyxhQUFsQixFQUFpQztBQUNoQ29GLFlBQVMsSUFBVDtBQUNBO0FBQ0E7QUFDRDFILFdBQVNBLE9BQU9nQyxVQUFoQjtBQUNBO0FBQ0QsS0FBSSxDQUFDMEYsTUFBTCxFQUFhO0FBQ1osTUFBSUMsWUFBWTFILFNBQVMrRCxjQUFULENBQXdCLGFBQXhCLEVBQXVDNUQsZ0JBQXZDLENBQXdELE9BQXhELENBQWhCO0FBQ0FnRyxRQUFNQyxTQUFOLENBQWdCeEYsT0FBaEIsQ0FBd0J5RixJQUF4QixDQUE2QnFCLFNBQTdCLEVBQXdDLFVBQVNDLElBQVQsRUFBZTtBQUN0RGxJLG1GQUFXQSxDQUFDa0ksSUFBWixFQUFrQixNQUFsQjtBQUNBLEdBRkQ7QUFHQTNILFdBQVMrRyxJQUFULENBQWNhLG1CQUFkLENBQWtDLFlBQWxDLEVBQWdETCxPQUFoRDtBQUNBbkMsbUJBQWlCLElBQWpCO0FBQ0EsRUFQRCxNQU9POztBQUVOLE1BQUl5QyxZQUFZbkYsV0FBVzhFLFVBQVgsRUFBdUIsT0FBdkIsRUFBZ0MxQyxhQUFoQyxDQUFoQixDQUZNLENBRXlEO0FBQy9ELE1BQUlnRCx1QkFBdUJwRixXQUFXOEUsVUFBWCxFQUF1QixrQkFBdkIsRUFBMkMxQyxhQUEzQyxDQUEzQixDQUhNLENBRytFOztBQUVyRixNQUFJZ0Qsd0JBQXdCQSxxQkFBcUJ0RSxZQUFyQixDQUFrQyxjQUFsQyxDQUF4QixJQUE2RXNFLHFCQUFxQmxELFlBQXJCLENBQWtDLGNBQWxDLE1BQXNEUSxjQUF2SSxFQUF1SjtBQUN0SixPQUFJMkMsYUFBYS9ILFNBQVMrRCxjQUFULENBQXdCcUIsY0FBeEIsQ0FBakI7QUFDQTJDLGNBQVczSSxTQUFYLENBQXFCTSxNQUFyQixDQUE0QixNQUE1QjtBQUNBLEdBSEQsTUFHTyxJQUFJbUksYUFBYUEsVUFBVXJFLFlBQVYsQ0FBdUIsY0FBdkIsQ0FBakIsRUFBeUQ7QUFDL0QsT0FBSXVFLGNBQWEvSCxTQUFTK0QsY0FBVCxDQUF3QjhELFVBQVVqRCxZQUFWLENBQXVCLGNBQXZCLENBQXhCLENBQWpCO0FBQ0FtRCxlQUFXM0ksU0FBWCxDQUFxQkksR0FBckIsQ0FBeUIsTUFBekI7QUFDQTtBQUNEO0FBRUQ7O0FBRUQ7Ozs7Ozs7OztBQVNBLFNBQVNrRCxVQUFULENBQW9CM0MsTUFBcEIsRUFBNEI0QyxRQUE1QixFQUFzQ0MsS0FBdEMsRUFBNEM7QUFDM0MsS0FBSUMsVUFBVSxDQUFDRCxTQUFTLEtBQUs1QyxRQUFkLElBQTBCLEtBQUtnSSxhQUFoQyxFQUErQzdILGdCQUEvQyxDQUFnRXdDLFFBQWhFLENBQWQ7QUFBQSxLQUNDRyxDQUREO0FBQUEsS0FFQ1gsS0FBS3BDLE1BRk47QUFHQSxJQUFHO0FBQ0YrQyxNQUFJRCxRQUFRRSxNQUFaO0FBQ0EsU0FBTyxFQUFFRCxDQUFGLElBQU8sQ0FBUCxJQUFZRCxRQUFRRyxJQUFSLENBQWFGLENBQWIsTUFBb0JYLEVBQXZDLEVBQTJDLENBQUU7QUFDN0MsRUFIRCxRQUdVVyxJQUFJLENBQUwsS0FBWVgsS0FBS0EsR0FBR2MsYUFBcEIsQ0FIVDtBQUlBLFFBQU9kLEVBQVA7QUFDQTs7QUFFRDs7Ozs7QUFLQSxTQUFTOEYsS0FBVCxDQUFlQyxVQUFmLEVBQTJCQyxNQUEzQixFQUFtQzlILEdBQW5DLEVBQXdDO0FBQ3ZDLEtBQUk4SCxXQUFXLE1BQWYsRUFBdUI7QUFDdEI1SSwrRUFBUUEsQ0FBQzJJLFVBQVQsRUFBcUIsTUFBckI7QUFDQSxFQUZELE1BRU87QUFDTnpJLGtGQUFXQSxDQUFDeUksVUFBWixFQUF3QixNQUF4QjtBQUNBO0FBQ0Q7O0FBRUQsU0FBU0UsS0FBVCxDQUFlL0gsR0FBZixFQUFvQjtBQUNuQixLQUFJTixTQUFTTSxJQUFJTixNQUFqQjtBQUNBLEtBQUl5SCxhQUFhOUUsV0FBVzNDLE1BQVgsRUFBbUIsSUFBbkIsRUFBeUIrRSxhQUF6QixDQUFqQixDQUZtQixDQUVzQztBQUN6RCxLQUFJb0QsYUFBYVYsV0FBVzVDLFlBQVgsQ0FBd0IsY0FBeEIsQ0FBakI7QUFDQSxLQUFJeUQsZUFBZXJJLFNBQVMrRCxjQUFULENBQXdCbUUsVUFBeEIsQ0FBbkI7O0FBRUEsS0FBSUEsVUFBSixFQUFnQjtBQUNmLE1BQUk5QyxjQUFKLEVBQW9CO0FBQ25CLE9BQUlrRCxvQkFBb0J0SSxTQUFTK0QsY0FBVCxDQUF3QnFCLGNBQXhCLEVBQXdDUixZQUF4QyxDQUFxRCxnQkFBckQsQ0FBeEI7QUFDQSxPQUFJMkQsZUFBZUYsYUFBYXpELFlBQWIsQ0FBMEIsZ0JBQTFCLENBQW5CO0FBQ0EsT0FBSTJELGdCQUFnQkQsaUJBQXBCLEVBQXVDO0FBQ3RDLFFBQUlFLGtCQUFrQnZKLFFBQVFnQixhQUFSLENBQXNCLDJCQUEyQnNJLFlBQTNCLEdBQTBDLElBQWhFLENBQXRCO0FBQ0EsUUFBSUMsZUFBSixFQUFxQjtBQUNwQixTQUFJQyxlQUFlRCxnQkFBZ0JySSxnQkFBaEIsQ0FBaUMsT0FBakMsQ0FBbkI7QUFDQSxTQUFJc0ksWUFBSixFQUFrQjtBQUNqQnRDLFlBQU1DLFNBQU4sQ0FBZ0J4RixPQUFoQixDQUF3QnlGLElBQXhCLENBQTZCb0MsWUFBN0IsRUFBMkMsVUFBU2QsSUFBVCxFQUFlO0FBQ3pEQSxZQUFLdkksU0FBTCxDQUFlTSxNQUFmLENBQXNCLE1BQXRCO0FBQ0EsT0FGRDtBQUdBO0FBQ0Q4SSxxQkFBZ0JwSixTQUFoQixDQUEwQk0sTUFBMUIsQ0FBaUMsTUFBakM7QUFDQTtBQUNEO0FBQ0QsR0FmRCxNQWVPO0FBQ05NLFlBQVMrRyxJQUFULENBQWN2QyxnQkFBZCxDQUErQixZQUEvQixFQUE2QytDLE9BQTdDO0FBQ0F2SCxZQUFTK0csSUFBVCxDQUFjdkMsZ0JBQWQsQ0FBK0IsV0FBL0IsRUFBNEMrQyxPQUE1QztBQUNBO0FBQ0E7O0FBRUQsTUFBSSxRQUFPYyxhQUFhakosU0FBcEIsTUFBa0MsUUFBdEMsRUFBZ0Q7QUFDL0NpSixnQkFBYWpKLFNBQWIsQ0FBdUJJLEdBQXZCLENBQTJCLE1BQTNCO0FBQ0E7O0FBRUQ0RixtQkFBaUI4QyxVQUFqQjtBQUNBO0FBQ0Q7O0FBRUQ7Ozs7QUFJQSxTQUFTUSxrQkFBVCxDQUE0QnJJLEdBQTVCLEVBQWlDO0FBQ2hDLEtBQUlzSSxPQUFPdEksSUFBSU4sTUFBZjtBQUNBLEtBQUk2SSxrQkFBa0IsRUFBdEI7QUFDQSxLQUFJQyxZQUFZLENBQWhCO0FBQ0EsS0FBSUMsV0FBV0gsS0FBSy9ELFlBQUwsQ0FBa0IsTUFBbEIsSUFBNEIrRCxLQUFLL0QsWUFBTCxDQUFrQixNQUFsQixFQUEwQm1FLEtBQTFCLENBQWdDLElBQWhDLENBQTVCLEdBQW9FLEtBQW5GOztBQUVBLEtBQUlELFFBQUosRUFBYztBQUNickM7QUFDQSxTQUFPLEtBQVA7QUFDQTs7QUFFRCxRQUFPa0MsS0FBSzVHLFVBQVosRUFBd0I7QUFDdkIsTUFBSWlILGNBQWNMLEtBQUsvRCxZQUFMLENBQWtCLGNBQWxCLENBQWxCO0FBQ0EsTUFBSW9FLFdBQUosRUFBaUI7QUFDaEJKLHFCQUFrQkksV0FBbEI7QUFDQTtBQUNBO0FBQ0RMLFNBQU9BLEtBQUs1RyxVQUFaO0FBQ0E7O0FBRUQsS0FBSTZHLGdCQUFnQjdGLE1BQXBCLEVBQTRCO0FBQzNCLE1BQUlrRyxjQUFjakUsYUFBYSxDQUEvQjtBQUNBa0MsT0FBSytCLFdBQUwsRUFBa0JMLGVBQWxCO0FBQ0E7QUFDRDs7QUFFRDs7Ozs7QUFLQSxTQUFTTSxlQUFULEdBQTJCO0FBQzFCcEksUUFBTzBELGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQVc7QUFDNUMsTUFBSTJFLGFBQWFsSyxRQUFRbUsscUJBQVIsR0FBZ0NDLEdBQWpEO0FBQ0EsTUFBSUYsY0FBYyxDQUFsQixFQUFxQjtBQUNwQjVKLGdGQUFRQSxDQUFDdUYsYUFBVCxFQUF3QixPQUF4QjtBQUNBLEdBRkQsTUFFTztBQUNOckYsbUZBQVdBLENBQUNxRixhQUFaLEVBQTJCLE9BQTNCO0FBQ0E7QUFDRCxFQVBEO0FBUUE7O0FBRUQ7Ozs7QUFJQSxTQUFTd0UsdUJBQVQsR0FBbUM7QUFDbEN4SSxRQUFPMEQsZ0JBQVAsQ0FBd0IsbUJBQXhCLEVBQTZDLFVBQVNuRSxHQUFULEVBQWM7QUFDMURrSjtBQUNBLE1BQUlsSixJQUFJbUosVUFBSixLQUFtQixRQUF2QixFQUFpQztBQUNoQ0M7QUFDQSxHQUZELE1BRU87QUFDTixPQUFJcEosSUFBSXFKLGtCQUFKLEtBQTJCLFFBQS9CLEVBQXlDO0FBQ3hDakQ7QUFDQWtEO0FBQ0E7QUFDREM7QUFDQTtBQUNELEVBWEQ7QUFZQTs7QUFFRDs7Ozs7O0FBTUEsU0FBU0MsMEJBQVQsQ0FBb0NDLE9BQXBDLEVBQTZDQyxTQUE3QyxFQUF3REMsaUJBQXhELEVBQTJFO0FBQzFFRCxXQUFVdkYsZ0JBQVYsQ0FBMkJzRixPQUEzQixFQUFvQ0UsaUJBQXBDO0FBQ0EvRSwwQkFBeUIxQixJQUF6QixDQUE4QixFQUFDMEcsTUFBTUgsT0FBUCxFQUFnQi9KLFFBQVFnSyxTQUF4QixFQUFtQ0csTUFBTUYsaUJBQXpDLEVBQTlCO0FBQ0E7O0FBRUQ7OztBQUdBLFNBQVNULDhCQUFULEdBQTBDO0FBQ3pDLEtBQUl0RSx5QkFBeUJsQyxNQUE3QixFQUFxQztBQUNwQ2tDLDJCQUF5QnJFLE9BQXpCLENBQWlDLFVBQVN1SixXQUFULEVBQXNCO0FBQ3REQSxlQUFZcEssTUFBWixDQUFtQjZILG1CQUFuQixDQUF1Q3VDLFlBQVlGLElBQW5ELEVBQXlERSxZQUFZRCxJQUFyRTtBQUNBLEdBRkQ7QUFHQWpGLDZCQUEyQixFQUEzQjtBQUNBO0FBQ0Q7O0FBRUQ7OztBQUdBLFNBQVMwRSxvQkFBVCxHQUFnQztBQUMvQixLQUFJUyxpQkFBaUJwSyxTQUFTK0csSUFBVCxDQUFjNUcsZ0JBQWQsQ0FBK0IsdUJBQS9CLENBQXJCO0FBQ0FnRyxPQUFNQyxTQUFOLENBQWdCeEYsT0FBaEIsQ0FBd0J5RixJQUF4QixDQUE2QitELGNBQTdCLEVBQTZDLFVBQVNqSSxFQUFULEVBQWE7QUFDekRBLEtBQUdKLFVBQUgsQ0FBY08sV0FBZCxDQUEwQkgsRUFBMUI7QUFDQSxFQUZEO0FBR0E7O0FBRUQ7OztBQUdBLFNBQVNzSCxXQUFULEdBQXVCO0FBQ3RCOztBQUVBWTs7QUFFQSxNQUFLLElBQUl2SCxJQUFJLENBQWIsRUFBZ0JBLEtBQUtpQyxRQUFyQixFQUErQmpDLEdBQS9CLEVBQW9DO0FBQ25Dd0gsY0FBWXhILENBQVo7QUFDQTs7QUFFRDtBQUNBLEtBQUl5SCxhQUFhdEwsUUFBUWdCLGFBQVIsQ0FBc0IsZUFBdEIsQ0FBakI7QUFDQTRKLDRCQUEyQixPQUEzQixFQUFvQ1UsVUFBcEMsRUFBZ0RyRCxLQUFLc0QsSUFBTCxDQUFVLElBQVYsRUFBZ0IsQ0FBaEIsRUFBbUIsa0JBQW5CLENBQWhEO0FBQ0E7O0FBRUQ7OztBQUdBLFNBQVNaLFlBQVQsR0FBd0I7QUFDdkIxRSxXQUFVLE9BQU9wRSxPQUFPMkosWUFBZCxLQUErQixXQUF6Qzs7QUFFQSxLQUFJdkYsT0FBSixFQUFhO0FBQ1osTUFBSXdGLHVCQUF1QjFLLFNBQVMrRCxjQUFULENBQXdCLGtCQUF4QixFQUE0Q3VDLFFBQXZFO0FBQ0FILFFBQU1DLFNBQU4sQ0FBZ0J4RixPQUFoQixDQUF3QnlGLElBQXhCLENBQTZCcUUsb0JBQTdCLEVBQW1ELFVBQVNDLFFBQVQsRUFBbUI7QUFDckVkLDhCQUEyQixZQUEzQixFQUF5Q2MsUUFBekMsRUFBbUR2QyxLQUFuRDtBQUNBeUIsOEJBQTJCLFdBQTNCLEVBQXdDYyxRQUF4QyxFQUFrRHZDLEtBQWxEO0FBQ0EsR0FIRDtBQUlBLEVBTkQsTUFNTztBQUNOO0FBQ0EsTUFBSXdDLHNCQUFzQjNMLFFBQVFrQixnQkFBUixDQUF5QixnQkFBekIsQ0FBMUI7O0FBRUEsTUFBSXlLLG9CQUFvQjdILE1BQXhCLEVBQWdDO0FBQy9Cb0QsU0FBTUMsU0FBTixDQUFnQnhGLE9BQWhCLENBQXdCeUYsSUFBeEIsQ0FBNkJ1RSxtQkFBN0IsRUFBa0QsVUFBU0QsUUFBVCxFQUFtQjtBQUNwRSxRQUFJekMsYUFBYWxJLFNBQVMrRCxjQUFULENBQXdCNEcsU0FBUy9GLFlBQVQsQ0FBc0IsY0FBdEIsQ0FBeEIsQ0FBakI7QUFDQWlGLCtCQUEyQixXQUEzQixFQUF3Q2MsUUFBeEMsRUFBa0QxQyxNQUFNdUMsSUFBTixDQUFXLElBQVgsRUFBaUJ0QyxVQUFqQixFQUE2QixNQUE3QixDQUFsRDtBQUNBMkIsK0JBQTJCLFlBQTNCLEVBQXlDYyxRQUF6QyxFQUFtRDFDLE1BQU11QyxJQUFOLENBQVcsSUFBWCxFQUFpQnRDLFVBQWpCLEVBQTZCLE9BQTdCLENBQW5EO0FBQ0EsSUFKRDtBQUtBO0FBQ0Q7QUFDRDs7QUFFRDs7OztBQUlBLFNBQVNvQyxXQUFULENBQXFCakksRUFBckIsRUFBeUI7QUFDeEI7QUFDQSxLQUFJcUUsUUFBUTFHLFNBQVNtQixhQUFULENBQXVCLEtBQXZCLENBQVo7QUFDQXVGLE9BQU1yRSxFQUFOLEdBQVcsY0FBY0EsRUFBekI7QUFDQTlDLDhFQUFRQSxDQUFDbUgsS0FBVCxFQUFnQixpQkFBaEI7O0FBRUE7QUFDQSxLQUFJbUUsYUFBYTdLLFNBQVNtQixhQUFULENBQXVCLEtBQXZCLENBQWpCO0FBQ0E1Qiw4RUFBUUEsQ0FBQ3NMLFVBQVQsRUFBcUIsU0FBckI7QUFDQUEsWUFBV3BKLFNBQVgsR0FBdUJrRSxlQUFlLE1BQWYsQ0FBdkI7QUFDQWtFLDRCQUEyQixPQUEzQixFQUFvQ2dCLFVBQXBDLEVBQWdEcEUsTUFBTStELElBQU4sQ0FBVyxJQUFYLEVBQWlCbkksRUFBakIsQ0FBaEQ7O0FBRUE7QUFDQSxLQUFJeUksZUFBZTlLLFNBQVNtQixhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQ0E1Qiw4RUFBUUEsQ0FBQ3VMLFlBQVQsRUFBdUIsY0FBdkI7QUFDQWpCLDRCQUEyQixPQUEzQixFQUFvQ2lCLFlBQXBDLEVBQWtEcEMsa0JBQWxEOztBQUVBO0FBQ0FoQyxPQUFNakUsV0FBTixDQUFrQnFJLFlBQWxCO0FBQ0FwRSxPQUFNakUsV0FBTixDQUFrQm9JLFVBQWxCO0FBQ0E3SyxVQUFTK0csSUFBVCxDQUFjdEUsV0FBZCxDQUEwQmlFLEtBQTFCO0FBQ0E7O0FBRUQ7OztBQUdBLFNBQVMyRCxhQUFULEdBQXlCO0FBQ3hCLEtBQUlVLFVBQVUvSyxTQUFTbUIsYUFBVCxDQUF1QixLQUF2QixDQUFkO0FBQ0E1Qiw4RUFBUUEsQ0FBQ3dMLE9BQVQsRUFBa0IsbUJBQWxCO0FBQ0F4TCw4RUFBUUEsQ0FBQ3dMLE9BQVQsRUFBa0IsbUJBQWxCOztBQUVBbEIsNEJBQTJCLE9BQTNCLEVBQW9Da0IsT0FBcEMsRUFBNkN0RSxNQUFNK0QsSUFBTixDQUFXLElBQVgsRUFBaUIsQ0FBakIsQ0FBN0M7O0FBRUF4SyxVQUFTK0csSUFBVCxDQUFjdEUsV0FBZCxDQUEwQnNJLE9BQTFCO0FBQ0E7O0FBRUQ7Ozs7QUFJZSxTQUFTcEgsT0FBVCxDQUFpQnFILFNBQWpCLEVBQTZDO0FBQUEsS0FBakJDLFVBQWlCLHVFQUFKLEVBQUk7O0FBQzNEO0FBQ0EsS0FBSSxPQUFPRCxTQUFQLEtBQXFCLFFBQXpCLEVBQW1DO0FBQ2xDL0wsWUFBVWUsU0FBU0MsYUFBVCxDQUF1QitLLFNBQXZCLENBQVY7QUFDQSxFQUZELE1BRU87QUFDTi9MLFlBQVUrTCxTQUFWO0FBQ0E7QUFDRGxHLGlCQUFnQjdGLFFBQVFxSCxRQUFSLENBQWlCLENBQWpCLENBQWhCO0FBQ0EsS0FBSVIsUUFBUTdHLFFBQVFnQixhQUFSLENBQXNCLG1CQUF0QixDQUFaO0FBQ0E0RixjQUFhQyxLQUFiOztBQUVBO0FBQ0FvRDtBQUNBSTs7QUFFQSxVQUFTNEIsSUFBVCxHQUFlO0FBQ2RwSyxTQUFPOEcsbUJBQVAsQ0FBMkIsbUJBQTNCLEVBQWdEc0QsSUFBaEQ7QUFDQSxNQUFJcEssT0FBTzBJLFVBQVAsQ0FBa0IyQixLQUFsQixLQUE0QixRQUFoQyxFQUEwQztBQUN6QzFCO0FBQ0EsR0FGRCxNQUVPO0FBQ05HO0FBQ0E7O0FBRUQsTUFBSXdCLFVBQVV0RixNQUFNM0YsZ0JBQU4sQ0FBdUIsY0FBdkIsQ0FBZDs7QUFFQWdHLFFBQU1rRixJQUFOLENBQVdELE9BQVgsRUFBb0J4SyxPQUFwQixDQUE0QixVQUFTMEssTUFBVCxFQUFnQjtBQUMzQ0EsVUFBTzlHLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFVBQVNDLENBQVQsRUFBVztBQUMzQyxRQUFJOEcsT0FBTzlHLEVBQUUxRSxNQUFGLENBQVM2RSxZQUFULENBQXNCLE1BQXRCLENBQVg7QUFDQUgsTUFBRXpELGNBQUY7QUFDQXdLLGtGQUFJQSxDQUFDRCxJQUFMLEVBQVc7QUFDVkUsZUFBVSxHQURBO0FBRVZDLGFBQVE1SyxPQUFPMEksVUFBUCxDQUFrQjJCLEtBQWxCLEtBQTRCLFFBQTVCLEdBQXVDLENBQXZDLEdBQTJDRjtBQUZ6QyxLQUFYO0FBSUEsSUFQRDtBQVFBLEdBVEQ7QUFVQTs7QUFFRCxLQUFJLE9BQU9uSyxPQUFPMEksVUFBZCxLQUE2QixXQUFqQyxFQUE4QztBQUM3QzBCO0FBQ0EsRUFGRCxNQUVPO0FBQ05wSyxTQUFPMEQsZ0JBQVAsQ0FBd0IsbUJBQXhCLEVBQTZDMEcsSUFBN0M7QUFDQTtBQUNELEM7Ozs7Ozs7QUM1YUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBT08sSUFBSWxFLGFBQWE7QUFDdkIyRSxTQUFRLEtBRGU7QUFFdkJDLHNCQUFxQixFQUZFO0FBR3ZCQyxnQkFBZSxFQUhROztBQUt2Qjs7Ozs7QUFLQXZFLEtBVnVCLGdCQVVsQnNFLG1CQVZrQixFQVVHRSxnQkFWSCxFQVVxQjtBQUMzQyxPQUFLSCxNQUFMLEdBQWMsSUFBZDtBQUNBLE9BQUtDLG1CQUFMLEdBQTJCQSxtQkFBM0I7QUFDQUUscUJBQW1CM0YsTUFBTTRGLE9BQU4sQ0FBY0QsZ0JBQWQsSUFDaEJBLGdCQURnQixHQUVoQixDQUFDLE1BQUQsQ0FGSDtBQUdBQSxtQkFBaUJsTCxPQUFqQixDQUF5QixVQUFTK0IsUUFBVCxFQUFtQjtBQUMzQyxPQUFJUixLQUFLbkMsU0FBU0MsYUFBVCxDQUF1QjBDLFFBQXZCLENBQVQ7QUFDQXBELHVFQUFRQSxDQUFDNEMsRUFBVCxFQUFhLG1CQUFiO0FBQ0EsR0FIRDtBQUlBLE9BQUswSixhQUFMLEdBQXFCLEtBQUs3SyxjQUFMLENBQW9Cd0osSUFBcEIsQ0FBeUIsSUFBekIsQ0FBckI7QUFDQXhLLFdBQVMrRyxJQUFULENBQWN2QyxnQkFBZCxDQUErQixXQUEvQixFQUE0QyxLQUFLcUgsYUFBakQ7QUFDQSxFQXRCc0I7QUF1QnZCNUUsT0F2QnVCLG9CQXVCZDtBQUNSLE1BQUkrRSxNQUFNaE0sU0FBU0csZ0JBQVQsQ0FBMEIsb0JBQTFCLENBQVY7QUFDQWdHLFFBQU1DLFNBQU4sQ0FBZ0J4RixPQUFoQixDQUF3QnlGLElBQXhCLENBQTZCMkYsR0FBN0IsRUFBa0MsVUFBUy9NLE9BQVQsRUFBa0I7QUFDbkRRLDBFQUFXQSxDQUFDUixPQUFaLEVBQXFCLG1CQUFyQjtBQUNBLEdBRkQ7QUFHQWUsV0FBUytHLElBQVQsQ0FBY2EsbUJBQWQsQ0FBa0MsV0FBbEMsRUFBK0MsS0FBS2lFLGFBQXBEO0FBQ0EsT0FBS0YsTUFBTCxHQUFjLEtBQWQ7QUFDQSxFQTlCc0I7QUErQnZCM0ssZUEvQnVCLDBCQStCUlgsR0EvQlEsRUErQkg7QUFDbkIsTUFBSU4sU0FBU00sSUFBSU4sTUFBakI7QUFDQSxNQUFJa00sdUJBQXVCbE0sT0FBT21NLFlBQVAsR0FBc0JuTSxPQUFPb00sWUFBeEQ7QUFDQSxNQUFJbk4sb0VBQVFBLENBQUNlLE1BQVQsRUFBaUIsbUJBQWpCLENBQUosRUFBMkM7QUFDMUNnQixrRkFBbUJBLENBQUNWLEdBQXBCO0FBQ0EsR0FGRCxNQUVPO0FBQ04sVUFBTyxDQUFDckIsb0VBQVFBLENBQUNlLE1BQVQsRUFBaUIsS0FBSzZMLG1CQUF0QixDQUFSLEVBQW9EO0FBQ25EN0wsYUFBU0EsT0FBT2dDLFVBQWhCO0FBQ0EsUUFBSWhDLFdBQVdDLFNBQVMrRyxJQUF4QixFQUE4QjtBQUM3QjtBQUNBO0FBQ0Q7QUFDRGtGLDBCQUF1QmxNLE9BQU9tTSxZQUFQLEdBQXNCbk0sT0FBT29NLFlBQXBEO0FBQ0EsT0FBSSxDQUFDRixvQkFBTCxFQUEyQjtBQUMxQmxMLG1GQUFtQkEsQ0FBQ1YsR0FBcEI7QUFDQTtBQUNEO0FBQ0Q7QUFoRHNCLENBQWpCOztBQW1EQSxJQUFNK0wsZUFBZSxTQUFmQSxZQUFlLENBQVNDLE1BQVQsRUFBaUJDLElBQWpCLEVBQXVCO0FBQ2xELEtBQUl6SixVQUFVd0osT0FBT3RELEtBQVAsQ0FBYSxVQUFiLENBQWQ7QUFDQSxLQUFJbEcsT0FBSixFQUFhO0FBQ1pBLFVBQVFqQyxPQUFSLENBQWdCLGFBQUs7QUFDcEIsT0FBSTJMLElBQUlDLEVBQUVsSixNQUFGLENBQVMsQ0FBVCxFQUFZa0osRUFBRXpKLE1BQUYsR0FBVyxDQUF2QixDQUFSO0FBQ0FzSixZQUFTQSxPQUFPSSxPQUFQLENBQWVELENBQWYsRUFBa0JGLEtBQUtDLENBQUwsS0FBVyxFQUE3QixDQUFUO0FBQ0EsR0FIRDtBQUlBOztBQUVELFFBQU9GLE1BQVA7QUFDQSxDQVZNOztBQVlBLElBQU1LLFdBQVcsU0FBWEEsUUFBVyxDQUFTQyxFQUFULEVBQWE7QUFDcEMsS0FBSUMsV0FBVyxLQUFmO0FBQ0EsUUFBTyxhQUFLO0FBQ1gsTUFBSSxDQUFDQSxRQUFMLEVBQWU7QUFDZEQ7QUFDQUMsY0FBVyxJQUFYO0FBQ0E7QUFDRCxFQUxEO0FBTUEsQ0FSTTs7QUFVQSxTQUFTQyxLQUFULENBQWVGLEVBQWYsRUFBbUI7QUFDekIsS0FBSTNNLFNBQVM4TSxVQUFULEtBQXdCLFVBQTVCLEVBQXdDO0FBQ3ZDSDtBQUNBLEVBRkQsTUFFTztBQUNOLE1BQUlJLGFBQWFMLFNBQVNDLEVBQVQsQ0FBakI7QUFDQTNNLFdBQVN3RSxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOENrSSxRQUE5QztBQUNBMU0sV0FBU3dFLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ25ELE9BQUl4RSxTQUFTOE0sVUFBVCxLQUF3QixVQUE1QixFQUF3QztBQUN2Q0M7QUFDQTtBQUNELEdBSkQ7QUFLQTtBQUNEOztBQUVNLFNBQVNDLGdCQUFULEdBQTRCO0FBQ2xDOzs7Ozs7Ozs7Ozs7OztBQWNBLEtBQU1DLFNBQVNuTSxPQUFPb00sUUFBUCxDQUFnQkQsTUFBaEIsQ0FBdUJFLFNBQXZCLENBQWlDLENBQWpDLENBQWY7QUFDQSxLQUFJL0wsTUFBTSxFQUFWO0FBQ0E2TCxRQUFPUixPQUFQLENBQWUsbUJBQWYsRUFBb0MsVUFBU0QsQ0FBVCxFQUFZWSxHQUFaLEVBQWlCakMsS0FBakIsRUFBd0I7QUFDM0QvSixNQUFJaU0sbUJBQW1CRCxHQUFuQixDQUFKLElBQStCQyxtQkFBbUJsQyxLQUFuQixDQUEvQjtBQUNBLEVBRkQ7O0FBSUEsUUFBTy9KLEdBQVA7QUFDQTs7QUFFTSxTQUFTa00sUUFBVCxDQUFrQlgsRUFBbEIsRUFBc0I7QUFDNUIsS0FBSVksMEJBQTBCLEtBQTlCO0FBQ0EsUUFBTyxZQUFXO0FBQ2pCLE1BQUksQ0FBQ0EsdUJBQUwsRUFBOEI7QUFDN0JBLDZCQUEwQixJQUExQjtBQUNBQyx5QkFBc0IsWUFBVTtBQUMvQmI7QUFDQVksOEJBQTBCLEtBQTFCO0FBQ0EsSUFIRDtBQUlBO0FBQ0QsRUFSRDtBQVNBOztBQUVNLFNBQVNFLG1CQUFULEdBQStCO0FBQ3JDLEtBQUlDLElBQUkxTixTQUFTK0csSUFBVCxJQUFpQi9HLFNBQVMyTixlQUFsQztBQUFBLEtBQ0NDLElBQUlGLEVBQUVwSixLQURQO0FBQUEsS0FFQ3pELElBQUksWUFGTDs7QUFJQSxLQUFJLE9BQU8rTSxFQUFFL00sQ0FBRixDQUFQLElBQWUsUUFBbkIsRUFBNkI7QUFDNUIsU0FBTyxJQUFQO0FBQ0E7O0FBRUQ7QUFDQSxLQUFJZ04sSUFBSSxDQUFDLEtBQUQsRUFBUSxRQUFSLEVBQWtCLFFBQWxCLEVBQTRCLE9BQTVCLEVBQXFDLEdBQXJDLEVBQTBDLElBQTFDLENBQVI7QUFDQWhOLEtBQUlBLEVBQUV3QyxNQUFGLENBQVMsQ0FBVCxFQUFZeUssV0FBWixLQUE0QmpOLEVBQUV5QyxNQUFGLENBQVMsQ0FBVCxDQUFoQzs7QUFFQSxNQUFLLElBQUlSLElBQUksQ0FBYixFQUFnQkEsSUFBSStLLEVBQUU5SyxNQUF0QixFQUE4QkQsR0FBOUIsRUFBbUM7QUFDbEMsTUFBSSxPQUFPOEssRUFBRUMsRUFBRS9LLENBQUYsSUFBT2pDLENBQVQsQ0FBUCxJQUFzQixRQUExQixFQUFvQztBQUNuQyxVQUFPLElBQVA7QUFDQTtBQUNEOztBQUVELFFBQU8sS0FBUDtBQUNBOztBQUVEOzs7Ozs7QUFNTyxTQUFTa04sU0FBVCxDQUFtQkMsT0FBbkIsRUFBNEI7QUFDbEMsUUFBT0EsUUFBUUMsS0FBUixDQUFjQyxRQUFkLEdBQXlCeEssV0FBekIsR0FBdUN5SyxPQUF2QyxDQUErQyxjQUEvQyxNQUFtRSxDQUFDLENBQTNFO0FBQ0EsQzs7Ozs7OztBQ2pLRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUEsSUFBSUMsc0JBQXNCLEVBQTFCO0FBQ0EsSUFBSUMsVUFBVW5CLFNBQVNvQixJQUFULEdBQWdCQyxVQUFVckIsU0FBUzNCLElBQW5CLENBQWhCLEdBQTJDMkIsU0FBUzNCLElBQWxFOztBQUVPLFNBQVNpRCxZQUFULEdBQXdCO0FBQzlCLFFBQU8xTixPQUFPMEksVUFBUCxDQUFrQjJCLEtBQWxCLEtBQTRCLFFBQTVCLEdBQXVDLElBQXZDLEdBQThDLEtBQXJEO0FBQ0E7O0FBRWMsU0FBU3NELG1CQUFULENBQTZCQyxjQUE3QixFQUF1RTtBQUFBLEtBQTFCQyxnQkFBMEIsdUVBQVAsS0FBTzs7QUFDckYsS0FBSWpELFNBQVM1SyxPQUFPMEksVUFBUCxDQUFrQjJCLEtBQWxCLEtBQTRCLFNBQTVCLEdBQXdDLEVBQXhDLEdBQTZDLENBQTFEO0FBQ0EsS0FBSXlELFlBQVksQ0FBQ0MsTUFBTUgsY0FBTixDQUFELEdBQXlCQSxjQUF6QixHQUEwQ2hELE1BQTFEO0FBQ0FvRCxnQkFBZUYsU0FBZixFQUEwQkQsZ0JBQTFCO0FBQ0E7O0FBRU0sU0FBU0csY0FBVCxDQUF3QkYsU0FBeEIsRUFBNkQ7QUFBQSxLQUExQkQsZ0JBQTBCLHVFQUFQLEtBQU87OztBQUVuRTtBQUNBSTs7QUFFQSxLQUFJQyw2QkFBSixFQUFtQztBQUNsQyxNQUFJQyxRQUFRalAsU0FBU0csZ0JBQVQsQ0FBMEIsR0FBMUIsQ0FBWjtBQUNBOE8sVUFBUSxHQUFHQyxLQUFILENBQVM3SSxJQUFULENBQWM0SSxLQUFkLENBQVI7O0FBRUFBLFFBQU1yTyxPQUFOLENBQWMsVUFBU3VPLElBQVQsRUFBZTtBQUM1QkEsUUFBSzNLLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFVBQVNDLENBQVQsRUFBWTtBQUMxQzJLLFlBQVEzSyxDQUFSLEVBQVdtSyxTQUFYLEVBQXNCRCxnQkFBdEI7QUFDQSxJQUZEO0FBR0FQLHVCQUFvQjdLLElBQXBCLENBQXlCLEVBQUVwQixJQUFJZ04sSUFBTixFQUFZRSxTQUFTRCxPQUFyQixFQUF6QjtBQUNBLEdBTEQ7QUFNQTtBQUNEOztBQUVNLFNBQVNBLE9BQVQsQ0FBaUIzSyxDQUFqQixFQUFvQm1LLFNBQXBCLEVBQXlEO0FBQUEsS0FBMUJELGdCQUEwQix1RUFBUCxLQUFPOztBQUMvRDtBQUNBLEtBQUk1TyxlQUFKO0FBQ0EsS0FBSTBFLEVBQUUxRSxNQUFGLENBQVN1UCxRQUFULEtBQXNCLEdBQTFCLEVBQStCO0FBQzlCdlAsV0FBUzBFLEVBQUUxRSxNQUFYO0FBQ0EsRUFGRCxNQUVPO0FBQ05BLFdBQVMyQyxzRUFBVUEsQ0FBQytCLEVBQUUxRSxNQUFiLEVBQXFCLEdBQXJCLENBQVQ7QUFDQTs7QUFFRCxLQUFJLENBQUN3UCxhQUFheFAsTUFBYixDQUFELElBQXlCeU8sY0FBN0IsRUFBNkM7QUFDNUM7QUFDQTs7QUFFRCxLQUFJLENBQUNHLGdCQUFMLEVBQXVCO0FBQ3RCbEssSUFBRStLLGVBQUY7QUFDQTtBQUNEL0ssR0FBRXpELGNBQUY7O0FBRUF3SyxNQUFLekwsT0FBT3VPLElBQVosRUFBa0I7QUFDakI1QyxVQUFRa0Q7QUFEUyxFQUFsQjtBQUdBOztBQUVNLFNBQVNXLFlBQVQsQ0FBc0J4UCxNQUF0QixFQUE4QjtBQUNwQyxRQUFPQSxPQUFPMEQsT0FBUCxDQUFlQyxXQUFmLE9BQWlDLEdBQWpDLElBQXdDM0QsT0FBT3VPLElBQVAsQ0FBWXZMLE1BQVosR0FBcUIsQ0FBN0QsSUFBa0V3TCxVQUFVeE8sT0FBT3dMLElBQWpCLE1BQTJCOEMsT0FBcEc7QUFDQTs7QUFFTSxTQUFTRSxTQUFULENBQW1Ca0IsR0FBbkIsRUFBd0I7QUFDOUIsUUFBT0EsSUFBSVAsS0FBSixDQUFVLENBQVYsRUFBYU8sSUFBSUMsV0FBSixDQUFnQixHQUFoQixDQUFiLENBQVA7QUFDQTs7QUFFTSxTQUFTQywwQkFBVCxHQUFzQztBQUM1QyxRQUFPLG9CQUFvQjNQLFNBQVMyTixlQUFULENBQXlCckosS0FBcEQ7QUFDQTs7QUFFTSxTQUFTeUssb0JBQVQsR0FBZ0M7QUFDdENYLHFCQUFvQnhOLE9BQXBCLENBQTRCLFVBQVNvQyxJQUFULEVBQWU7QUFDMUNBLE9BQUtiLEVBQUwsQ0FBUXlGLG1CQUFSLENBQTRCLE9BQTVCLEVBQXFDNUUsS0FBS3FNLE9BQTFDO0FBQ0EsRUFGRDs7QUFJQWpCLHVCQUFzQixFQUF0QjtBQUNBOztBQUVNLFNBQVNZLDJCQUFULEdBQXVDO0FBQzdDLFFBQU8sQ0FBQyxDQUFDbE8sT0FBTzBNLHFCQUFoQjtBQUNBOztBQUVNLFNBQVNoQyxJQUFULENBQWN6TCxNQUFkLEVBQXNCNlAsT0FBdEIsRUFBK0I7QUFDckMsS0FBSUMsUUFBUS9PLE9BQU9nUCxXQUFuQjtBQUNBLEtBQUlDLE1BQU07QUFDVHRFLFlBQVdtRSxXQUFXQSxRQUFRbkUsUUFBcEIsR0FBZ0NtRSxRQUFRbkUsUUFBeEMsR0FBbUQsR0FEcEQ7QUFFVEMsVUFBU2tFLFdBQVdBLFFBQVFsRSxNQUFwQixHQUE4QmtFLFFBQVFsRSxNQUF0QyxHQUErQyxDQUY5QztBQUdUc0UsVUFBU0osV0FBV0EsUUFBUUksTUFBcEIsR0FBOEJKLFFBQVFJLE1BQXRDLEdBQStDQztBQUg5QyxFQUFWOztBQU1BLEtBQUlDLFdBQ0gsT0FBT25RLE1BQVAsS0FBa0IsUUFBbEIsR0FBNkJDLFNBQVNDLGFBQVQsQ0FBdUJGLE1BQXZCLEVBQStCcUoscUJBQS9CLEdBQXVEQyxHQUF2RCxHQUE2RDBHLElBQUlyRSxNQUE5RixHQUF1RzNMLE1BRHhHO0FBRUEsS0FBSTBMLFdBQVcsT0FBT3NFLElBQUl0RSxRQUFYLEtBQXdCLFVBQXhCLEdBQXFDc0UsSUFBSXRFLFFBQUosQ0FBYXlFLFFBQWIsQ0FBckMsR0FBOERILElBQUl0RSxRQUFqRjtBQUNBLEtBQUkwRSxTQUFKO0FBQ0EsS0FBSUMsV0FBSjs7QUFFQTVDLHVCQUFzQixVQUFTNkMsSUFBVCxFQUFlO0FBQ3BDRixjQUFZRSxJQUFaO0FBQ0FDLE9BQUtELElBQUw7QUFDQSxFQUhEOztBQUtBLFVBQVNDLElBQVQsQ0FBY0QsSUFBZCxFQUFvQjtBQUNuQkQsZ0JBQWNDLE9BQU9GLFNBQXJCOztBQUVBclAsU0FBT3lQLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUJSLElBQUlDLE1BQUosQ0FBV0ksV0FBWCxFQUF3QlAsS0FBeEIsRUFBK0JLLFFBQS9CLEVBQXlDekUsUUFBekMsQ0FBbkI7O0FBRUEsTUFBSTJFLGNBQWMzRSxRQUFsQixFQUE0QjtBQUMzQitCLHlCQUFzQjhDLElBQXRCO0FBQ0E7QUFDRDs7QUFFRDtBQUNBLFVBQVNMLGFBQVQsQ0FBdUJPLENBQXZCLEVBQTBCOUMsQ0FBMUIsRUFBNkIrQyxDQUE3QixFQUFnQ0MsQ0FBaEMsRUFBbUM7QUFDbENGLE9BQUtFLElBQUksQ0FBVDtBQUNBLE1BQUlGLElBQUksQ0FBUixFQUFXO0FBQ1YsVUFBT0MsSUFBSSxDQUFKLEdBQVFELENBQVIsR0FBWUEsQ0FBWixHQUFnQjlDLENBQXZCO0FBQ0E7QUFDRDhDO0FBQ0EsU0FBTyxDQUFDQyxDQUFELEdBQUssQ0FBTCxJQUFVRCxLQUFLQSxJQUFJLENBQVQsSUFBYyxDQUF4QixJQUE2QjlDLENBQXBDO0FBQ0E7QUFDRCxDOzs7Ozs7QUN2SEEsVUFBU2lELHdCQUFULEdBQW9DO0FBQ3BDLEtBQUlDLFdBQVcsQ0FBZjtBQUNBLEtBQUlDLFVBQVUsQ0FBQyxJQUFELEVBQU8sS0FBUCxFQUFjLFFBQWQsRUFBd0IsR0FBeEIsQ0FBZDtBQUNBLE1BQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRCxRQUFROU4sTUFBWixJQUFzQixDQUFDakMsT0FBTzBNLHFCQUE5QyxFQUFxRSxFQUFFc0QsQ0FBdkUsRUFBMEU7QUFDekVoUSxTQUFPME0scUJBQVAsR0FBK0IxTSxPQUFPK1AsUUFBUUMsQ0FBUixJQUFhLHVCQUFwQixDQUEvQjtBQUNBaFEsU0FBT2lRLG9CQUFQLEdBQThCalEsT0FBTytQLFFBQVFDLENBQVIsSUFBYSxzQkFBcEIsS0FBK0NoUSxPQUFPK1AsUUFBUUMsQ0FBUixJQUFhLDZCQUFwQixDQUE3RTtBQUNBOztBQUVELEtBQUksQ0FBQ2hRLE9BQU8wTSxxQkFBWixFQUNDMU0sT0FBTzBNLHFCQUFQLEdBQStCLFVBQVV3RCxRQUFWLEVBQW9CL1IsT0FBcEIsRUFBNkI7QUFDM0QsTUFBSWdTLFdBQVcsSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBQWY7QUFDQSxNQUFJQyxhQUFhbkwsS0FBS0MsR0FBTCxDQUFTLENBQVQsRUFBWSxNQUFNK0ssV0FBV0wsUUFBakIsQ0FBWixDQUFqQjtBQUNBLE1BQUl2TyxLQUFLdkIsT0FBT3VRLFVBQVAsQ0FBa0IsWUFBWTtBQUNyQ0wsWUFBU0MsV0FBV0csVUFBcEI7QUFDQSxHQUZPLEVBR1JBLFVBSFEsQ0FBVDtBQUlBUixhQUFXSyxXQUFXRyxVQUF0QjtBQUNBLFNBQU8vTyxFQUFQO0FBQ0EsRUFURDs7QUFXRCxLQUFJLENBQUN2QixPQUFPaVEsb0JBQVosRUFDQ2pRLE9BQU9pUSxvQkFBUCxHQUE4QixVQUFVMU8sRUFBVixFQUFjO0FBQzNDaVAsZUFBYWpQLEVBQWI7QUFDQSxFQUZEO0FBR0QsQ0F4QkEsR0FBRCxDOzs7Ozs7O0FDQUE7QUFBQSxJQUFJb0QsZUFBZSxFQUFuQjtBQUNBLElBQUlKLE9BQU8sT0FBWDtBQUNBLElBQUlrTSxTQUFTLEVBQWI7O0FBRUEsSUFBTWhNLGFBQWE7QUFDbEJHLFVBQVMsaUJBQVN5RixLQUFULEVBQWU7QUFDdkI5RixTQUFPOEYsS0FBUDtBQUNBLEVBSGlCOztBQUtsQnFHLFlBQVcsbUJBQVNyRyxLQUFULEVBQWU7QUFDekJvRyxXQUFTcEcsS0FBVDtBQUNBLEVBUGlCO0FBUWxCM0YsTUFBSyxhQUFTaU0sUUFBVCxFQUFtQnRHLEtBQW5CLEVBQXlCO0FBQzdCLE1BQUl1RyxZQUFZLEVBQWhCO0FBQ0FBLFlBQVVELFFBQVYsSUFBc0J0RyxLQUF0Qjs7QUFFQTFGLGlCQUFlL0UsT0FBT2lSLE1BQVAsQ0FBY2xNLFlBQWQsRUFBNEJpTSxTQUE1QixDQUFmO0FBQ0EsRUFiaUI7QUFjbEJFLE1BQUssYUFBU0gsUUFBVCxFQUFtQkksSUFBbkIsRUFBd0I7QUFDNUJKLGFBQVdBLFlBQVksU0FBdkI7O0FBRUEsTUFBSUYsVUFDSDlMLGFBQWFnTSxRQUFiLENBREcsSUFFSGhNLGFBQWFnTSxRQUFiLEVBQXVCRixNQUF2QixDQUZHLElBR0g5TCxhQUFhZ00sUUFBYixFQUF1QkYsTUFBdkIsRUFBK0JsTSxJQUEvQixDQUhHLElBSUhJLGFBQWFnTSxRQUFiLEVBQXVCRixNQUF2QixFQUErQmxNLElBQS9CLEVBQXFDd00sSUFBckMsQ0FKRCxFQUk2QztBQUM1QyxVQUFPcE0sYUFBYWdNLFFBQWIsRUFBdUJGLE1BQXZCLEVBQStCbE0sSUFBL0IsRUFBcUN3TSxJQUFyQyxDQUFQO0FBQ0EsR0FORCxNQU1PLElBQUlwTSxhQUFhZ00sUUFBYixLQUNSaE0sYUFBYWdNLFFBQWIsRUFBdUJwTSxJQUF2QixDQURRLElBRVJJLGFBQWFnTSxRQUFiLEVBQXVCcE0sSUFBdkIsRUFBNkJ3TSxJQUE3QixDQUZJLEVBRWdDO0FBQ3RDLFVBQU9wTSxhQUFhZ00sUUFBYixFQUF1QnBNLElBQXZCLEVBQTZCd00sSUFBN0IsQ0FBUDtBQUNBO0FBQ0QsU0FBTyxFQUFQO0FBQ0E7QUE3QmlCLENBQW5COztBQWdDZXRNLG1FQUFmOztBQUdPLFNBQVNLLG9CQUFULENBQThCNkwsUUFBOUIsRUFBd0M7QUFDOUMsUUFBT2xNLFdBQVdxTSxHQUFYLENBQWVwSCxJQUFmLENBQW9CakYsVUFBcEIsRUFBZ0NrTSxRQUFoQyxDQUFQO0FBQ0EsQzs7Ozs7O0FDekNELGtCQUFrQixTQUFTLGNBQWMsVUFBVSxpQkFBaUIsVUFBVSxpQiIsImZpbGUiOiJzYW1wbGUtcHJvamVjdC1uYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMTIyNWM2NDAxYmI1ODU1YjM4MTUiLCJleHBvcnQgZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XHJcblx0aWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiB0eXBlb2YgY2xhc3NOYW1lID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRyZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZWxlbWVudCBwYXNzZWQgaW4gdG8gaGFzQ2xhc3MgaXMgbm90IGEgdmFsaWQgSFRNTCBlbGVtZW50XCIpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xyXG5cdGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgdHlwZW9mIGNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIHtcclxuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fSBlbHNlIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIlRoZSBlbGVtZW50IHBhc3NlZCBpbiB0byBhZGRDbGFzcyBpcyBub3QgYSB2YWxpZCBIVE1MIGVsZW1lbnRcIilcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcclxuXHRpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIHR5cGVvZiBjbGFzc05hbWUgPT09ICdzdHJpbmcnKSB7XHJcblx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZWxlbWVudCBwYXNzZWQgaW4gdG8gcmVtb3ZlQ2xhc3MgaXMgbm90IGEgdmFsaWQgSFRNTCBlbGVtZW50XCIpXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XHJcblx0aWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiB0eXBlb2YgY2xhc3NOYW1lID09PSAnc3RyaW5nJykge1xyXG5cdFx0ZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlIGVsZW1lbnQgcGFzc2VkIGluIHRvIHJlbW92ZUNsYXNzIGlzIG5vdCBhIHZhbGlkIEhUTUwgZWxlbWVudFwiKVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoY29udGV4dCwgdGFyZ2V0KSB7XHJcblx0cmV0dXJuIChjb250ZXh0IHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50cyhjb250ZXh0LCB0YXJnZXQpIHtcclxuXHRyZXR1cm4gKGNvbnRleHQgfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwodGFyZ2V0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQoZXZ0LCBkYXRhKSB7XHJcblx0dmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XHJcblx0ZXZlbnQuaW5pdEV2ZW50KGV2dCwgdHJ1ZSwgdHJ1ZSk7XHJcblxyXG5cdGlmICh0eXBlb2YgZGF0YSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2gocCA9PiB7XHJcblx0XHRcdGV2ZW50W3BdID0gZGF0YVtwXTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0d2luZG93LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJldmVudEV2ZW50RGVmYXVsdChldnQpIHtcclxuXHRpZiAoZXZ0LnByZXZlbnREZWZhdWx0KSB7XHJcblx0XHRldnQucHJldmVudERlZmF1bHQoKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0ZXZ0LnJldHVyblZhbHVlID0gZmFsc2U7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZG9lc0VsZW1lbnRFeGlzdChlbGVtZW50KSB7XHJcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCk7XHJcbn1cclxuXHJcbi8qXHJcbiBFWEFNUExFOlxyXG5cclxuIGNyZWF0ZUVsZW1lbnQoe2VsZW1lbnQ6ICdkaXYnLCBjbGFzczogJ2NsYXNzTmFtZScsIGNvbnRlbnQ6IGZhbHNlfSk7XHJcbiAqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQob2JqKSB7XHJcblx0aWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjcmVhdGVFbGVtZW50IGV4cGVjdHMgYSBjb25maWcgb2JqZWN0IHBhc3NlZCBpbiB0byBkZWZpbmUgdGhlIGVsZW1lbnQncyBwcm9wZXJ0aWVzXCIpO1xyXG5cdH1cclxuXHR2YXIgbmV3RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQob2JqLmVsZW1lbnQpO1xyXG5cdG5ld0VsZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsIG9iai5jbGFzcyk7XHJcblx0aWYgKG9iai5jb250ZW50ICE9PSBmYWxzZSkge1xyXG5cdFx0bmV3RWxlbS5pbm5lckhUTUwgPSBvYmouY29udGVudDtcclxuXHR9XHJcblx0cmV0dXJuIG5ld0VsZW07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnRCZWZvcmUoZWxlbSwgcGFyZW50LCBiZWZvcmUpIHtcclxuXHR2YXIgZWxlbU5vZGU7XHJcblx0dmFyIHBhcmVudE5vZGU7XHJcblx0dmFyIGJlZm9yZU5vZGU7XHJcblxyXG5cdC8vIENoZWNrIGVsZW1lbnQgaXMgYSBIVE1MIGVsZW1lbnQsIGlmIGl0IGlzIGEgc3RyaW5nIHRoZW4gcXVlcnkgaXQuIE90aGVyd2lzZSBzZXQgaXQgYXMgbnVsbC5cclxuXHRpZiAoZWxlbSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XHJcblx0XHRlbGVtTm9kZSA9IGVsZW07XHJcblx0fSBlbHNlIHtcclxuXHRcdGVsZW1Ob2RlID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdC8vIENoZWNrIHBhcmVudCBpcyBhIEhUTUwgZWxlbWVudCwgaWYgaXQgaXMgYSBzdHJpbmcgdGhlbiBxdWVyeSBpdC4gT3RoZXJ3aXNlIHNldCBpdCBhcyBudWxsLlxyXG5cdGlmIChwYXJlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG5cdFx0cGFyZW50Tm9kZSA9IHBhcmVudDtcclxuXHR9IGVsc2UgaWYgKHR5cGVvZiBwYXJlbnQgPT09ICdzdHJpbmcnKSB7XHJcblx0XHRwYXJlbnROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJlbnQpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRwYXJlbnROb2RlID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdC8vIE51bGwgd2lsbCBhcHBlbmQgaXQgdG8gdGhlIGVuZCBvZiBwYXJlbnRzIGNoaWxkbm9kZXMuXHJcblx0aWYgKGJlZm9yZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XHJcblx0XHRiZWZvcmVOb2RlID0gYmVmb3JlO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRiZWZvcmVOb2RlID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdC8vIE9ubHkgaW5zZXJ0IGVsZW1lbnQgaWYgcGFyZW50Tm9kZSBhbmQgZWxlbWVudE5vZGUgYXJlIEhUTUwgbm9kZXMuXHJcblx0aWYgKHBhcmVudE5vZGUgIT09IG51bGwgJiYgZWxlbU5vZGUgIT09IG51bGwpIHtcclxuXHRcdHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW0sIGJlZm9yZSk7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiaW5zZXJ0QmVmb3JlIGV4cGVjdHMgYSB2YWxpZCBlbGVtZW50LCBwYXJlbnQgYW5kIGJlZm9yZSB0YXJnZXRcIik7XHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFRvKGVsZW0sIHBhcmVudCkge1xyXG5cdHZhciBwYXJlbnROb2RlO1xyXG5cclxuXHQvLyBDaGVjayBwYXJlbnQgaXMgYSBIVE1MIGVsZW1lbnQsIGlmIGl0IGlzIGEgc3RyaW5nIHRoZW4gcXVlcnkgaXQuIE90aGVyd2lzZSBzZXQgaXQgYXMgbnVsbC5cclxuXHRpZiAocGFyZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcclxuXHRcdHBhcmVudE5vZGUgPSBwYXJlbnQ7XHJcblxyXG5cdH0gZWxzZSBpZiAodHlwZW9mIHBhcmVudCA9PT0gJ3N0cmluZycpIHtcclxuXHRcdHBhcmVudE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmVudCk7XHJcblxyXG5cdH0gZWxzZSB7XHJcblx0XHRwYXJlbnROb2RlID0gbnVsbDtcclxuXHJcblx0fVxyXG5cclxuXHRpZiAocGFyZW50Tm9kZSAhPT0gbnVsbCAmJiBlbGVtIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyZW50Tm9kZSkuYXBwZW5kVG8oZWxlbSk7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHJcblx0fSBlbHNlIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcImFwcGVuZFRvIGV4cGVjdHMgYSB2YWxpZCBlbGVtZW50IGFuZCBwYXJlbnRcIik7XHJcblx0fVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluc2VydFBsYWNlaG9sZGVyKGVsKSB7XHJcblx0dmFyIHBsYWNlSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0cGxhY2VIb2xkZXIuY2xhc3NMaXN0LmFkZCgncGxhY2Vob2xkZXInKTtcclxuXHRwbGFjZUhvbGRlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtZWxyZXBsYWNlZCcsIGVsLmlkKTtcclxuXHJcblx0ZWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocGxhY2VIb2xkZXIsIGVsKTtcclxuXHRlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVFbGVtZW50KGVsLCB0bykge1xyXG5cdHZhciBwbGFjZUhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFjZWhvbGRlcltkYXRhLWVscmVwbGFjZWQ9JyArIGVsLmlkICsgJ10nKTtcclxuXHRpZiAocGxhY2VIb2xkZXIpIHtcclxuXHRcdHBsYWNlSG9sZGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsLCBwbGFjZUhvbGRlcik7XHJcblx0XHRwbGFjZUhvbGRlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHBsYWNlSG9sZGVyKTtcclxuXHR9IGVsc2UgaWYgKHRvKSB7XHJcblx0XHRpbnNlcnRQbGFjZWhvbGRlcihlbCk7XHJcblx0XHR0by5hcHBlbmRDaGlsZChlbCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIGdldENsb3Nlc3RcclxuICogQGF1dGhvciBSb2JpbiBPJ05laWxsXHJcbiAqXHJcbiAqIEZpbmQgdGhlIGNsb3Nlc3QgZWxlbWVudCB0byB0aGUgdGFyZ2V0IGVsZW1lbnRcclxuICpcclxuICogQHBhcmFtIHRhcmdldCAtIGRvbSBlbGVtZW50IHdoaWNoIGlzIHRoZSBjdXJyZW50IGVsZW1lbnRcclxuICogQHBhcmFtIHNlbGVjdG9yIC0gdGhlIGVsZW1lbnQgeW91IGFyZSBsb29raW5nIGZvclxyXG4gKiBAcGFyYW0gc2NvcGUgLSBsaW1pdCB0aGUgc2VhcmNoIHRvIGEgY29udGFpbmluZyBlbGVtZW50XHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENsb3Nlc3QodGFyZ2V0LCBzZWxlY3Rvciwgc2NvcGUpe1xyXG5cdHZhciBtYXRjaGVzID0gKHNjb3BlIHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuXHR2YXIgaTtcclxuXHR2YXIgZWwgPSB0YXJnZXQ7XHJcblxyXG5cdGRvIHtcclxuXHRcdGkgPSBtYXRjaGVzLmxlbmd0aDtcclxuXHRcdHdoaWxlICgtLWkgPj0gMCAmJiBtYXRjaGVzLml0ZW0oaSkgIT09IGVsKSB7fTtcclxuXHR9IHdoaWxlICgoaSA8IDApICYmIChlbCA9IGVsLnBhcmVudEVsZW1lbnQpKTtcclxuXHRyZXR1cm4gZWw7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogR2V0IGFsbCBET00gZWxlbWVudCB1cCB0aGUgdHJlZSB0aGF0IGNvbnRhaW4gYSBjbGFzcywgSUQsIG9yIGRhdGEgYXR0cmlidXRlXHJcbiAqXHJcbiAqIENyZWRpdDogaHR0cHM6Ly9naXRodWIuY29tL2hhcHB5QmFuc2hlZS9KUy1oZWxwZXJzL3dpa2kvLmNsb3Nlc3QoKSwtLnBhcmVudHMoKSwtLnBhcmVudHNVbnRpbCgpLC0uZmluZCgpLWluLUpTXHJcbiAqXHJcbiAqIEBwYXJhbSAge05vZGV9IGVsZW0gVGhlIGJhc2UgZWxlbWVudFxyXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHNlbGVjdG9yIFRoZSBjbGFzcywgaWQsIGRhdGEgYXR0cmlidXRlLCBvciB0YWcgdG8gbG9vayBmb3JcclxuICogQHJldHVybiB7QXJyYXl9IE51bGwgaWYgbm8gbWF0Y2hcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJlbnRzKGVsZW0sIHNlbGVjdG9yKSB7XHJcblxyXG5cdHZhciBwYXJlbnRzID0gW107XHJcblx0dmFyIGZpcnN0Q2hhcjtcclxuXHRpZiAoc2VsZWN0b3IpIHtcclxuXHRcdGZpcnN0Q2hhciA9IHNlbGVjdG9yLmNoYXJBdCgwKTtcclxuXHR9XHJcblxyXG5cdC8vIEdldCBtYXRjaGVzXHJcblx0Zm9yICg7IGVsZW0gJiYgZWxlbSAhPT0gZG9jdW1lbnQ7IGVsZW0gPSBlbGVtLnBhcmVudE5vZGUpIHtcclxuXHRcdGlmIChzZWxlY3Rvcikge1xyXG5cclxuXHRcdFx0Ly8gSWYgc2VsZWN0b3IgaXMgYSBjbGFzc1xyXG5cdFx0XHRpZiAoZmlyc3RDaGFyID09PSAnLicpIHtcclxuXHRcdFx0XHRpZiAoZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoc2VsZWN0b3Iuc3Vic3RyKDEpKSkge1xyXG5cdFx0XHRcdFx0cGFyZW50cy5wdXNoKGVsZW0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gSWYgc2VsZWN0b3IgaXMgYW4gSURcclxuXHRcdFx0aWYgKGZpcnN0Q2hhciA9PT0gJyMnKSB7XHJcblx0XHRcdFx0aWYgKGVsZW0uaWQgPT09IHNlbGVjdG9yLnN1YnN0cigxKSkge1xyXG5cdFx0XHRcdFx0cGFyZW50cy5wdXNoKGVsZW0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gSWYgc2VsZWN0b3IgaXMgYSBkYXRhIGF0dHJpYnV0ZVxyXG5cdFx0XHRpZiAoZmlyc3RDaGFyID09PSAnWycpIHtcclxuXHRcdFx0XHRpZiAoZWxlbS5oYXNBdHRyaWJ1dGUoc2VsZWN0b3Iuc3Vic3RyKDEsIHNlbGVjdG9yLmxlbmd0aCAtIDEpKSkge1xyXG5cdFx0XHRcdFx0cGFyZW50cy5wdXNoKGVsZW0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gSWYgc2VsZWN0b3IgaXMgYSB0YWdcclxuXHRcdFx0aWYgKGVsZW0udGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBzZWxlY3Rvcikge1xyXG5cdFx0XHRcdHBhcmVudHMucHVzaChlbGVtKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHBhcmVudHMucHVzaChlbGVtKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIFJldHVybiBwYXJlbnRzIGlmIGFueSBleGlzdFxyXG5cdGlmIChwYXJlbnRzLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cdHJldHVybiBwYXJlbnRzO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9AYW8taW50ZXJuYWwvbWFya2V0aW5nLWdsb2JhbHMvanMvdXRpbHMvZG9tLXV0aWxzLmpzIiwiaW1wb3J0IG5hdkluaXQgZnJvbSAnQGFvLWludGVybmFsL21hcmtldGluZy1nbG9iYWxzL21vZHVsZXMvQW9TdGlja3lOYXYnO1xuXG5uYXZJbml0KCcjQW9TdGlja3lOYXYnKTtcblxuY29uc3QgcGFnaW5hdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdpbmF0aW9uLWNvbnRhaW5lcicpO1xuY29uc3QgY2Fyb3VzZWxPdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbC1vdXRlcicpO1xuXG5jb25zdCBzbGlkZTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xpZGUxJyk7XG5jb25zdCBzbGlkZTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xpZGUyJyk7XG5jb25zdCBzbGlkZTMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xpZGUzJyk7XG5jb25zdCBzbGlkZTQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xpZGU0Jyk7XG5cbmNvbnN0IHNsaWRlU2VsZWN0ID0gc2xpZGUgPT4ge1xuXHRsZXQgc2xpZGVBcnJheSA9IFtzbGlkZTEsIHNsaWRlMiwgc2xpZGUzLCBzbGlkZTRdO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVBcnJheS5sZW5ndGg7IGkrKykge1xuXHRcdGlmIChzbGlkZSA9PT0gc2xpZGVBcnJheVtpXSkge1xuXHRcdFx0c2xpZGUuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzbGlkZUFycmF5W2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcblx0XHRcdGNhcm91c2VsT3V0ZXIuc3R5bGUuZGlzcGxheSA9ICdoaWRkZW4nO1xuXHRcdH1cblx0fVxufTtcblxucGFnaW5hdGlvbkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0aWYgKGUudGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1zbGlkZS1udW1iZXInKSkge1xuXHRcdGNvbnNvbGUubG9nKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZS1udW1iZXInKSk7XG5cdFx0c3dpdGNoIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGUtbnVtYmVyJykpIHtcblx0XHRcdGNhc2UgJzEnOlxuXHRcdFx0XHRjYXJvdXNlbE91dGVyLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDApJztcblx0XHRcdFx0c2xpZGVTZWxlY3Qoc2xpZGUxKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICcyJzpcblx0XHRcdFx0Y2Fyb3VzZWxPdXRlci5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgtMTAwdncpJztcblx0XHRcdFx0c2xpZGVTZWxlY3Qoc2xpZGUyKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICczJzpcblx0XHRcdFx0Y2Fyb3VzZWxPdXRlci5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgtMjAwdncpJztcblx0XHRcdFx0c2xpZGVTZWxlY3Qoc2xpZGUzKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICc0Jzpcblx0XHRcdFx0Y2Fyb3VzZWxPdXRlci5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgtMzAwdncpJztcblx0XHRcdFx0c2xpZGVTZWxlY3Qoc2xpZGU0KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRjYXJvdXNlbE91dGVyLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDApJztcblx0XHRcdFx0c2xpZGUxLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcblx0XHR9XG5cdH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvbWFpbi5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHR1dGVjaCBvbiAwNy8wNy8yMDE2LlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IGFkZENsYXNzLCByZW1vdmVDbGFzcywgbW92ZUVsZW1lbnQgfSBmcm9tICcuLi8uLi9qcy91dGlscy9kb20tdXRpbHMnO1xyXG5pbXBvcnQgeyBzY3JvbGxMb2NrIH0gZnJvbSAnLi4vLi4vanMvdXRpbHMvZ2VuZXJhbC11dGlscyc7XHJcbmltcG9ydCB7IGp1bXAgfSBmcm9tICcuLi8uLi9qcy91dGlscy9hb1Ntb290aFNjcm9sbCc7XHJcbmltcG9ydCB0cmFuc2xhdG9yLCB7IG5hbWVzcGFjZWRUcmFuc2xhdG9yIH0gZnJvbSAnLi4vLi4vanMvdXRpbHMvdHJhbnNsYXRvcic7XHJcbmltcG9ydCB0cmFuc2xhdGlvbnMgZnJvbSAnLi90cmFuc2xhdGlvbnMnO1xyXG5cclxubGV0IGVsZW1lbnQsIHN0aWNreUVsZW1lbnQ7XHJcbi8vIGxldCBtZW51cyA9IFtdO1xyXG5sZXQgbWF4RGVwdGggPSAwO1xyXG5sZXQgcGFuZWxzT3BlbiA9IDA7XHJcbmxldCBicmVha3BvaW50RXZlbnRMaXN0ZW5lcnMgPSBbXTtcclxubGV0IGlzVG91Y2ggPSBmYWxzZTtcclxubGV0IHRvdWNoTGlzdGVuZXIgPSBudWxsO1xyXG5sZXQgbGFzdE9wZW5lZE1lbnU7XHJcbmxldCBsYW5nID0gZG9jdW1lbnQuaGVhZC5nZXRBdHRyaWJ1dGUoJ2xhbmcnKTtcclxubGFuZyA9IGxhbmcgPT09ICdlbicgPyAnZW4tR0InIDogbGFuZztcclxudHJhbnNsYXRvci5zZXQoJ3RyYW5zbGF0aW9ucycsIHRyYW5zbGF0aW9ucyk7XHJcbnRyYW5zbGF0b3Iuc2V0TGFuZyhsYW5nKTtcclxuY29uc3QgZ2V0VHJhbnNsYXRpb24gPSBuYW1lc3BhY2VkVHJhbnNsYXRvcigndHJhbnNsYXRpb25zJyk7XHJcbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBudW1iZXIgb2YgcGFuZWxzIHRvIGNyZWF0ZS5cclxuICovXHJcbmZ1bmN0aW9uIGNhbGNTdWJNZW51cyh0b3BVbCwgZGVwdGggPSAxKSB7XHJcblx0bGV0IG1lbnVzID0gW107XHJcblxyXG5cdG1heERlcHRoID0gTWF0aC5tYXgobWF4RGVwdGgsIGRlcHRoKTtcclxuXHJcblx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh0b3BVbC5jaGlsZHJlbiwgKGNoaWxkKSA9PiB7XHJcblx0XHRpZiAoY2hpbGQuaGFzQXR0cmlidXRlKCdkYXRhLXN1Yk1lbnUnKSkge1xyXG5cdFx0XHRsZXQgbWVudUNoaWxkID0gY2hpbGQucXVlcnlTZWxlY3RvcigndWwnKTtcclxuXHRcdFx0bWVudXMucHVzaCh7aWQ6IGNoaWxkLmdldEF0dHJpYnV0ZSgnZGF0YS1zdWJNZW51JyksIG1lbnVzOiBjYWxjU3ViTWVudXMobWVudUNoaWxkLCBkZXB0aCArIDEpfSk7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdHJldHVybiBtZW51cztcclxufVxyXG5cclxuLyoqXHJcbiAqIEhhbmRsZXMgY2xvc2luZyBvZiBtZW51cyBvbiBtb2JpbGUuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbcGFuZWxdIC0gSUQgTnVtYmVyIG9mIHBhbmVsLCBpZiBub3Qgc3VwcGxpZWQgYWxsIHBhbmVscyBhcmUgY2xvc2VkLlxyXG4gKi9cclxuZnVuY3Rpb24gY2xvc2UocGFuZWwpIHtcclxuXHRpZiAocGFuZWwpIHtcclxuXHRcdGxldCBwYW5lbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW9zblBhbmVsJyArIHBhbmVsKTtcclxuXHRcdGxldCBtb3ZlZEVsZW1lbnQgPSBwYW5lbEVsZW1lbnQucXVlcnlTZWxlY3RvcignLm5hdkNvbnRhaW5lcicpLmNoaWxkcmVuWzBdO1xyXG5cdFx0bW92ZUVsZW1lbnQobW92ZWRFbGVtZW50KTtcclxuXHRcdHJlbW92ZUNsYXNzKHBhbmVsRWxlbWVudCwgJ29wZW4nKTtcclxuXHRcdHBhbmVsc09wZW4tLTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0bGV0IGFsbE9wZW5QYW5lbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYW9zbk1vYmlsZVBhbmVsLm9wZW4nKTtcclxuXHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYWxsT3BlblBhbmVscywgZnVuY3Rpb24ocG5sKSB7XHJcblx0XHRcdGxldCBtb3ZlZEVsZW1lbnQgPSBwbmwucXVlcnlTZWxlY3RvcignLm5hdkNvbnRhaW5lcicpLmNoaWxkcmVuWzBdO1xyXG5cdFx0XHRtb3ZlRWxlbWVudChtb3ZlZEVsZW1lbnQpO1xyXG5cdFx0XHRyZW1vdmVDbGFzcyhwbmwsICdvcGVuJyk7XHJcblx0XHRcdHBhbmVsc09wZW4tLTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0aWYgKCFwYW5lbHNPcGVuKSB7XHJcblx0XHRyZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCAnYW9zbk9wZW4nKTtcclxuXHRcdHNjcm9sbExvY2sudW5sb2NrKCdhb3NuTW9iaWxlT3ZlcmxheScpO1xyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEhhbmRsZXMgb3BlbmluZyBvZiBtZW51cyBvbiBtb2JpbGUuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBwYW5lbCAtIElEIE51bWJlciBvZiBwYW5lbC5cclxuICogQHBhcmFtIHtzdHJpbmd9IG1lbnVTZWxlY3RvciAtIElEIG9mIG1lbnUgdG8gbW92ZSBpbnRvIHBhbmVsLlxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIG9wZW4ocGFuZWwsIG1lbnVTZWxlY3Rvcikge1xyXG5cdGxldCBwYW5lbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW9zblBhbmVsJyArIHBhbmVsKTtcclxuXHRsZXQgcGFuZWxDb250ZW50Q29udGFpbmVyID0gcGFuZWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZDb250YWluZXInKTtcclxuXHRsZXQgbWVudUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtZW51U2VsZWN0b3IpO1xyXG5cclxuXHRtb3ZlRWxlbWVudChtZW51RWxlbWVudCwgcGFuZWxDb250ZW50Q29udGFpbmVyKTtcclxuXHJcblx0YWRkQ2xhc3MocGFuZWxFbGVtZW50LCAnb3BlbicpO1xyXG5cclxuXHRwYW5lbHNPcGVuKys7XHJcblxyXG5cdGlmIChwYW5lbHNPcGVuID09PSAxKSB7XHJcblx0XHRhZGRDbGFzcyhkb2N1bWVudC5ib2R5LCAnYW9zbk9wZW4nKTtcclxuXHRcdHNjcm9sbExvY2subG9jaygnbmF2Q29udGFpbmVyJyk7XHJcblx0fVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIENsb3NlcyBhbGwgbWVudSBsZXZlbHMgaWYgY2xpY2tpbmcgb3V0c2lkZSB0aGUgbWVudS5cclxuICogQHBhcmFtIGV2dCAtIFBhc3NlZCBpbiBmcm9tIEV2ZW50IExpc3RlbmVyLlxyXG4gKi9cclxuZnVuY3Rpb24gdGFwQXdheShldnQpIHtcclxuXHRsZXQgdGFyZ2V0ID0gZXZ0LnRhcmdldDtcclxuXHRsZXQgcmVhbFRhcmdldCA9IGV2dC50YXJnZXQ7XHJcblxyXG5cdGxldCBpc01lbnUgPSBmYWxzZTtcclxuXHJcblx0d2hpbGUgKHRhcmdldCAhPT0gZG9jdW1lbnQuYm9keSkge1xyXG5cdFx0aWYgKHRhcmdldC5pZCA9PT0gJ0FvU3RpY2t5TmF2Jykge1xyXG5cdFx0XHRpc01lbnUgPSB0cnVlO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xyXG5cdH1cclxuXHRpZiAoIWlzTWVudSkge1xyXG5cdFx0bGV0IG9wZW5NZW51cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBb1N0aWNreU5hdicpLnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcGVuJyk7XHJcblx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG9wZW5NZW51cywgZnVuY3Rpb24obWVudSkge1xyXG5cdFx0XHRyZW1vdmVDbGFzcyhtZW51LCAnb3BlbicpO1xyXG5cdFx0fSk7XHJcblx0XHRkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0YXBBd2F5KTtcclxuXHRcdGxhc3RPcGVuZWRNZW51ID0gbnVsbDtcclxuXHR9IGVsc2Uge1xyXG5cclxuXHRcdGxldCBjbG9zZXN0TGkgPSBnZXRDbG9zZXN0KHJlYWxUYXJnZXQsICdkcmdkZicsIHN0aWNreUVsZW1lbnQpOy8vcmVhbFRhcmdldC5jbG9zZXN0KCdsaScpO1xyXG5cdFx0bGV0IGNsb3Nlc3RMaVdpdGhTdWJtZW51ID0gZ2V0Q2xvc2VzdChyZWFsVGFyZ2V0LCAnbGlbZGF0YS1zdWJtZW51XScsIHN0aWNreUVsZW1lbnQpOy8vcmVhbFRhcmdldC5jbG9zZXN0KCdsaVtkYXRhLXN1Ym1lbnVdJyk7XHJcblxyXG5cdFx0aWYgKGNsb3Nlc3RMaVdpdGhTdWJtZW51ICYmIGNsb3Nlc3RMaVdpdGhTdWJtZW51Lmhhc0F0dHJpYnV0ZSgnZGF0YS1zdWJtZW51JykgJiYgY2xvc2VzdExpV2l0aFN1Ym1lbnUuZ2V0QXR0cmlidXRlKCdkYXRhLXN1Ym1lbnUnKSAhPT0gbGFzdE9wZW5lZE1lbnUpIHtcclxuXHRcdFx0bGV0IGNoaWxkTWVudXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsYXN0T3BlbmVkTWVudSk7XHJcblx0XHRcdGNoaWxkTWVudXMuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG5cdFx0fSBlbHNlIGlmIChjbG9zZXN0TGkgJiYgY2xvc2VzdExpLmhhc0F0dHJpYnV0ZSgnZGF0YS1zdWJtZW51JykpIHtcclxuXHRcdFx0bGV0IGNoaWxkTWVudXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjbG9zZXN0TGkuZ2V0QXR0cmlidXRlKCdkYXRhLXN1Ym1lbnUnKSk7XHJcblx0XHRcdGNoaWxkTWVudXMuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIHNjb3BlZCBwb2xseWZpbCBvZiAuY2xvc2VzdCgpIHdoaWNoIGFjY2VwdHMgYSBzY29wZSBwYXJhbVxyXG4gKiB0byBsaW1pdCB0aGUgbnVtYmVyIG9mIG5vZGVzIGJlaW5nIHNlYXJjaGVkXHJcbiAqXHJcbiAqIEBwYXJhbSB0YXJnZXRcclxuICogQHBhcmFtIHNlbGVjdG9yXHJcbiAqIEBwYXJhbSBzY29wZSBkZWZhdWx0cyB0byB0aGUgZG9jdW1lbnQuYm9keVxyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbmZ1bmN0aW9uIGdldENsb3Nlc3QodGFyZ2V0LCBzZWxlY3Rvciwgc2NvcGUpe1xyXG5cdHZhciBtYXRjaGVzID0gKHNjb3BlIHx8IHRoaXMuZG9jdW1lbnQgfHwgdGhpcy5vd25lckRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSxcclxuXHRcdGksXHJcblx0XHRlbCA9IHRhcmdldDtcclxuXHRkbyB7XHJcblx0XHRpID0gbWF0Y2hlcy5sZW5ndGg7XHJcblx0XHR3aGlsZSAoLS1pID49IDAgJiYgbWF0Y2hlcy5pdGVtKGkpICE9PSBlbCkge307XHJcblx0fSB3aGlsZSAoKGkgPCAwKSAmJiAoZWwgPSBlbC5wYXJlbnRFbGVtZW50KSk7XHJcblx0cmV0dXJuIGVsO1xyXG59XHJcblxyXG4vKipcclxuICogSGFuZGxlcyBob3ZlciBldmVudHMgb24gZGVza3RvcC5cclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0TWVudVxyXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kPWNsb3NlIC0gUGFzcyBpbiBvcGVuIG9yIGNsb3NlLlxyXG4gKi9cclxuZnVuY3Rpb24gaG92ZXIodGFyZ2V0TWVudSwgbWV0aG9kLCBldnQpIHtcclxuXHRpZiAobWV0aG9kID09PSAnb3BlbicpIHtcclxuXHRcdGFkZENsYXNzKHRhcmdldE1lbnUsICdvcGVuJyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHJlbW92ZUNsYXNzKHRhcmdldE1lbnUsICdvcGVuJyk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b3VjaChldnQpIHtcclxuXHRsZXQgdGFyZ2V0ID0gZXZ0LnRhcmdldDtcclxuXHRsZXQgcmVhbFRhcmdldCA9IGdldENsb3Nlc3QodGFyZ2V0LCAnbGknLCBzdGlja3lFbGVtZW50KTsvL3RhcmdldC5jbG9zZXN0KCdsaScpO1xyXG5cdGxldCB0YXJnZXRNZW51ID0gcmVhbFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3VibWVudScpO1xyXG5cdGxldCB0YXJnZXRNZW51RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRNZW51KTtcclxuXHJcblx0aWYgKHRhcmdldE1lbnUpIHtcclxuXHRcdGlmIChsYXN0T3BlbmVkTWVudSkge1xyXG5cdFx0XHRsZXQgcHJldmlvdXNNZW51TGV2ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsYXN0T3BlbmVkTWVudSkuZ2V0QXR0cmlidXRlKCdkYXRhLW1lbnVsZXZlbCcpO1xyXG5cdFx0XHRsZXQgbmV3TWVudUxldmVsID0gdGFyZ2V0TWVudUVsLmdldEF0dHJpYnV0ZSgnZGF0YS1tZW51bGV2ZWwnKTtcclxuXHRcdFx0aWYgKG5ld01lbnVMZXZlbCA8PSBwcmV2aW91c01lbnVMZXZlbCkge1xyXG5cdFx0XHRcdGxldCB0b3BMZXZlbEVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuW2RhdGEtbWVudWxldmVsPVwiJyArIG5ld01lbnVMZXZlbCArICdcIl0nKTtcclxuXHRcdFx0XHRpZiAodG9wTGV2ZWxFbGVtZW50KSB7XHJcblx0XHRcdFx0XHRsZXQgb3BlblN1Yk1lbnVzID0gdG9wTGV2ZWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcGVuJyk7XHJcblx0XHRcdFx0XHRpZiAob3BlblN1Yk1lbnVzKSB7XHJcblx0XHRcdFx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwob3BlblN1Yk1lbnVzLCBmdW5jdGlvbihtZW51KSB7XHJcblx0XHRcdFx0XHRcdFx0bWVudS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dG9wTGV2ZWxFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRhcEF3YXkpO1xyXG5cdFx0XHRkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHRhcEF3YXkpO1xyXG5cdFx0XHQvLyBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0YXBBd2F5KTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodHlwZW9mIHRhcmdldE1lbnVFbC5jbGFzc0xpc3QgPT09ICdvYmplY3QnKSB7XHJcblx0XHRcdHRhcmdldE1lbnVFbC5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0bGFzdE9wZW5lZE1lbnUgPSB0YXJnZXRNZW51O1xyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrcyB0byBzZWUgaWYgdGhlIGNsaWNrZWQgZWxlbWVudCBvciBpdCdzIGRlc2NlbmRhbnRzIGhhdmUgYSByZWZlcmVuY2UgdG8gYSBzdWItbWVudS5cclxuICogQHBhcmFtIGV2dCAtIFBhc3NlZCBpbiBmcm9tIGNsaWNrIGV2ZW50LlxyXG4gKi9cclxuZnVuY3Rpb24gaGFuZGxlU3ViTWVudUNsaWNrKGV2dCkge1xyXG5cdGxldCBub2RlID0gZXZ0LnRhcmdldDtcclxuXHRsZXQgc3ViTWVudVNlbGVjdG9yID0gJyc7XHJcblx0bGV0IG1heEJ1YmJsZSA9IDE7XHJcblx0bGV0IGlzQW5jaG9yID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSA/IG5vZGUuZ2V0QXR0cmlidXRlKCdocmVmJykubWF0Y2goL14jLykgOiBmYWxzZTtcclxuXHJcblx0aWYgKGlzQW5jaG9yKSB7XHJcblx0XHRjbG9zZSgpO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0d2hpbGUgKG5vZGUucGFyZW50Tm9kZSkge1xyXG5cdFx0bGV0IGF0dHJTdWJNZW51ID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3VibWVudScpO1xyXG5cdFx0aWYgKGF0dHJTdWJNZW51KSB7XHJcblx0XHRcdHN1Yk1lbnVTZWxlY3RvciA9IGF0dHJTdWJNZW51O1xyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XHJcblx0fVxyXG5cclxuXHRpZiAoc3ViTWVudVNlbGVjdG9yLmxlbmd0aCkge1xyXG5cdFx0bGV0IHBhbmVsVG9PcGVuID0gcGFuZWxzT3BlbiArIDE7XHJcblx0XHRvcGVuKHBhbmVsVG9PcGVuLCBzdWJNZW51U2VsZWN0b3IpO1xyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZHMgYSBzY3JvbGwgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIHdpbmRvd1xyXG4gKiBXaGVuIHRoZSB0b3Agb2YgdGhlIHJvb3QgZWxlbWVudCBpcyBvZmYgdGhlIHRvcCBvZiB0aGUgc2NyZWVuLFxyXG4gKiBhZGRzIGEgY2xhc3Mgb2YgZml4ZWQgdG8gdGhlIGNvbnRhaW5lciBlbGVtZW50LlxyXG4gKi9cclxuZnVuY3Rpb24gc2V0dXBTdGlja3lNZW51KCkge1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuXHRcdGxldCBuYXZEb2NrVG9wID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcblx0XHRpZiAobmF2RG9ja1RvcCA8PSAwKSB7XHJcblx0XHRcdGFkZENsYXNzKHN0aWNreUVsZW1lbnQsICdmaXhlZCcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlQ2xhc3Moc3RpY2t5RWxlbWVudCwgJ2ZpeGVkJyk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGRzIGJyZWFrcG9pbnRDaGFuZ2VkIGV2ZW50IGxpc3RlbmVyIHRvIGhhbmRsZSBtZW51IHNldHVwXHJcbiAqIGZvciBib3RoIG1vYmlsZSBhbmQgZGVza3RvcCBzdGF0ZXMuXHJcbiAqL1xyXG5mdW5jdGlvbiBzZXR1cEJyZWFrcG9pbnRIYW5kbGluZygpIHtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYnJlYWtwb2ludENoYW5nZWQnLCBmdW5jdGlvbihldnQpIHtcclxuXHRcdHJlbW92ZUJyZWFrcG9pbnRFdmVudExpc3RlbmVycygpO1xyXG5cdFx0aWYgKGV2dC5icmVha3BvaW50ID09PSAnbW9iaWxlJykge1xyXG5cdFx0XHRzZXR1cE1vYmlsZSgpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKGV2dC5wcmV2aW91c0JyZWFrcG9pbnQgPT09ICdtb2JpbGUnKSB7XHJcblx0XHRcdFx0Y2xvc2UoKTtcclxuXHRcdFx0XHRyZW1vdmVNb2JpbGVFbGVtZW50cygpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHNldHVwRGVza3RvcCgpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG4vKipcclxuICogRm9yIGNhY2hpbmcgZXZlbnQgbGlzdGVuZXJzIHRoYXQgbmVlZCB0byBiZSByZW1vdmVkIG9uY2UgYSBicmVha3BvaW50IGhhcyBjaGFuZ2VkLlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZ0VHlwZVxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBldnRUYXJnZXRcclxuICogQHBhcmFtIGZ1bmN0aW9uUmVmZXJlbmNlXHJcbiAqL1xyXG5mdW5jdGlvbiBhZGRCcmVha3BvaW50RXZlbnRMaXN0ZW5lcihldnRUeXBlLCBldnRUYXJnZXQsIGZ1bmN0aW9uUmVmZXJlbmNlKSB7XHJcblx0ZXZ0VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgZnVuY3Rpb25SZWZlcmVuY2UpO1xyXG5cdGJyZWFrcG9pbnRFdmVudExpc3RlbmVycy5wdXNoKHt0eXBlOiBldnRUeXBlLCB0YXJnZXQ6IGV2dFRhcmdldCwgZmN0bjogZnVuY3Rpb25SZWZlcmVuY2V9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZXMgYWxsIGJyZWFrcG9pbnQgc3BlY2lmaWMgZXZlbnQgbGlzdGVuZXJzLlxyXG4gKi9cclxuZnVuY3Rpb24gcmVtb3ZlQnJlYWtwb2ludEV2ZW50TGlzdGVuZXJzKCkge1xyXG5cdGlmIChicmVha3BvaW50RXZlbnRMaXN0ZW5lcnMubGVuZ3RoKSB7XHJcblx0XHRicmVha3BvaW50RXZlbnRMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbihldnRMaXN0ZW5lcikge1xyXG5cdFx0XHRldnRMaXN0ZW5lci50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRMaXN0ZW5lci50eXBlLCBldnRMaXN0ZW5lci5mY3RuKTtcclxuXHRcdH0pO1xyXG5cdFx0YnJlYWtwb2ludEV2ZW50TGlzdGVuZXJzID0gW107XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICogUmVtb3ZlcyBlbGVtZW50cyBmcm9tIHRoZSBkb20gdGhhdCBhcmUgc3BlY2lmaWNhbGx5IGZvciBtb2JpbGUuXHJcbiAqL1xyXG5mdW5jdGlvbiByZW1vdmVNb2JpbGVFbGVtZW50cygpIHtcclxuXHRsZXQgbW9iaWxlRWxlbWVudHMgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tjbGFzc149XCJhb3NuTW9iaWxlXCJdJyk7XHJcblx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChtb2JpbGVFbGVtZW50cywgZnVuY3Rpb24oZWwpIHtcclxuXHRcdGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xyXG5cdH0pO1xyXG59XHJcblxyXG4vKipcclxuICogSW5pdGlhbGlzZXMgdGhlIG1lbnUgcmVhZHkgZm9yIG1vYmlsZS5cclxuICovXHJcbmZ1bmN0aW9uIHNldHVwTW9iaWxlKCkge1xyXG5cdC8vQWRkIG1vYmlsZSBlbGVtZW50cy5cclxuXHJcblx0Y3JlYXRlT3ZlcmxheSgpO1xyXG5cclxuXHRmb3IgKHZhciBpID0gMTsgaSA8PSBtYXhEZXB0aDsgaSsrKSB7XHJcblx0XHRjcmVhdGVQYW5lbChpKTtcclxuXHR9XHJcblxyXG5cdC8vQWRkIGNsaWNrIGV2ZW50IHRvIGJyYW5kaW5nIHRvIG9wZW4gbW9iaWxlIG1lbnUuXHJcblx0bGV0IG5hdkNvbnRyb2wgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hb3NuQnJhbmRpbmcnKTtcclxuXHRhZGRCcmVha3BvaW50RXZlbnRMaXN0ZW5lcignY2xpY2snLCBuYXZDb250cm9sLCBvcGVuLmJpbmQobnVsbCwgMSwgJ2Fvc25Ub3BMZXZlbE1lbnUnKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXNlcyB0aGUgbWVudSByZWFkeSBmb3IgZGVza3RvcC5cclxuICovXHJcbmZ1bmN0aW9uIHNldHVwRGVza3RvcCgpIHtcclxuXHRpc1RvdWNoID0gdHlwZW9mIHdpbmRvdy5vbnRvdWNoc3RhcnQgIT09ICd1bmRlZmluZWQnO1xyXG5cclxuXHRpZiAoaXNUb3VjaCkge1xyXG5cdFx0bGV0IGZpcnN0Rmlyc3RMZXZlbE1lbnVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fvc25Ub3BMZXZlbE1lbnUnKS5jaGlsZHJlbjtcclxuXHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZmlyc3RGaXJzdExldmVsTWVudXMsIGZ1bmN0aW9uKG1lbnVJdGVtKSB7XHJcblx0XHRcdGFkZEJyZWFrcG9pbnRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgbWVudUl0ZW0sIHRvdWNoKTtcclxuXHRcdFx0YWRkQnJlYWtwb2ludEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIG1lbnVJdGVtLCB0b3VjaCk7XHJcblx0XHR9KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Ly9TZXR1cCBtb3VzZW92ZXIgJiYgbW91c2UgbGVhdmVcclxuXHRcdGxldCBlbGVtZW50c1dpdGhTdWJNZW51ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1zdWJtZW51XScpO1xyXG5cclxuXHRcdGlmIChlbGVtZW50c1dpdGhTdWJNZW51Lmxlbmd0aCkge1xyXG5cdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGVsZW1lbnRzV2l0aFN1Yk1lbnUsIGZ1bmN0aW9uKG1lbnVJdGVtKSB7XHJcblx0XHRcdFx0bGV0IHRhcmdldE1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtZW51SXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3VibWVudScpKTtcclxuXHRcdFx0XHRhZGRCcmVha3BvaW50RXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgbWVudUl0ZW0sIGhvdmVyLmJpbmQobnVsbCwgdGFyZ2V0TWVudSwgJ29wZW4nKSk7XHJcblx0XHRcdFx0YWRkQnJlYWtwb2ludEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBtZW51SXRlbSwgaG92ZXIuYmluZChudWxsLCB0YXJnZXRNZW51LCAnY2xvc2UnKSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYW5lbCBlbGVtZW50IGFuZCBhcHBlbmRzIGl0IHRvIHRoZSBib2R5LlxyXG4gKiBAcGFyYW0ge251bWJlcn0gaWRcclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVBhbmVsKGlkKSB7XHJcblx0Ly9DcmVhdGUgcGFuZWwuXHJcblx0bGV0IHBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0cGFuZWwuaWQgPSAnYW9zblBhbmVsJyArIGlkO1xyXG5cdGFkZENsYXNzKHBhbmVsLCAnYW9zbk1vYmlsZVBhbmVsJyk7XHJcblxyXG5cdC8vQ3JlYXRlIGJhY2sgYnV0dG9uLlxyXG5cdGxldCBiYWNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0YWRkQ2xhc3MoYmFja0J1dHRvbiwgJ2J0bkJhY2snKTtcclxuXHRiYWNrQnV0dG9uLmlubmVySFRNTCA9IGdldFRyYW5zbGF0aW9uKCdiYWNrJyk7XHJcblx0YWRkQnJlYWtwb2ludEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYmFja0J1dHRvbiwgY2xvc2UuYmluZChudWxsLCBpZCkpO1xyXG5cclxuXHQvL0NyZWF0ZSBjb250YWluZXIgZm9yIG1lbnUgaXRlbXMuXHJcblx0bGV0IG5hdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdGFkZENsYXNzKG5hdkNvbnRhaW5lciwgJ25hdkNvbnRhaW5lcicpO1xyXG5cdGFkZEJyZWFrcG9pbnRFdmVudExpc3RlbmVyKCdjbGljaycsIG5hdkNvbnRhaW5lciwgaGFuZGxlU3ViTWVudUNsaWNrKTtcclxuXHJcblx0Ly9BcHBlbmQgZWxlbWVudHMuXHJcblx0cGFuZWwuYXBwZW5kQ2hpbGQobmF2Q29udGFpbmVyKTtcclxuXHRwYW5lbC5hcHBlbmRDaGlsZChiYWNrQnV0dG9uKTtcclxuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhbmVsKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYW4gb3ZlcmxheSBlbGVtZW50IGFuZCBhcHBlbmRzIGl0IHRvIHRoZSBib2R5LlxyXG4gKiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVPdmVybGF5KCkge1xyXG5cdGxldCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0YWRkQ2xhc3Mob3ZlcmxheSwgJ2Fvc25Nb2JpbGVPdmVybGF5Jyk7XHJcblx0YWRkQ2xhc3Mob3ZlcmxheSwgJ2Rpc2FibGUtc2Nyb2xsaW5nJyk7XHJcblxyXG5cdGFkZEJyZWFrcG9pbnRFdmVudExpc3RlbmVyKCdjbGljaycsIG92ZXJsYXksIGNsb3NlLmJpbmQobnVsbCwgMCkpO1xyXG5cclxuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xyXG59XHJcblxyXG4vKipcclxuICogSW5pdGlhbGlzZXMgdGhlIHN0YW5kYXJkIHN0aWNreSBuYXYgdXNlZCBhY3Jvc3MgYnJhbmQgcGFnZXMuXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lciAtIFRoZSBvdXRlciBub2RlIG9mIHRoZSBzdGlja3kgbmF2LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmF2SW5pdChjb250YWluZXIsIGp1bXBPZmZzZXQgPSAzNSkge1xyXG5cdC8vU2V0dXAgY29tbW9uIGVsZW1lbnRzOlxyXG5cdGlmICh0eXBlb2YgY29udGFpbmVyID09PSAnc3RyaW5nJykge1xyXG5cdFx0ZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0ZWxlbWVudCA9IGNvbnRhaW5lcjtcclxuXHR9XHJcblx0c3RpY2t5RWxlbWVudCA9IGVsZW1lbnQuY2hpbGRyZW5bMF07XHJcblx0bGV0IHRvcFVsID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjYW9zblRvcExldmVsTWVudScpO1xyXG5cdGNhbGNTdWJNZW51cyh0b3BVbCk7XHJcblxyXG5cdC8vU2V0dXAgZXZlbnQgbGlzdGVuZXJzXHJcblx0c2V0dXBTdGlja3lNZW51KCk7XHJcblx0c2V0dXBCcmVha3BvaW50SGFuZGxpbmcoKTtcclxuXHJcblx0ZnVuY3Rpb24gaW5pdCgpe1xyXG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JyZWFrcG9pbnRDaGFuZ2VkJywgaW5pdCk7XHJcblx0XHRpZiAod2luZG93LmJyZWFrcG9pbnQudmFsdWUgPT09ICdtb2JpbGUnKSB7XHJcblx0XHRcdHNldHVwTW9iaWxlKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzZXR1cERlc2t0b3AoKTtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgYW5jaG9ycyA9IHRvcFVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZl49XCIjXCJdJyk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShhbmNob3JzKS5mb3JFYWNoKGZ1bmN0aW9uKGFuY2hvcil7XHJcblx0XHRcdGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRcdGxldCBocmVmID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdGp1bXAoaHJlZiwge1xyXG5cdFx0XHRcdFx0ZHVyYXRpb246IDkwMCxcclxuXHRcdFx0XHRcdG9mZnNldDogd2luZG93LmJyZWFrcG9pbnQudmFsdWUgPT09ICdtb2JpbGUnID8gMCA6IGp1bXBPZmZzZXRcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGlmICh0eXBlb2Ygd2luZG93LmJyZWFrcG9pbnQgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRpbml0KCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdicmVha3BvaW50Q2hhbmdlZCcsIGluaXQpO1xyXG5cdH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvQGFvLWludGVybmFsL21hcmtldGluZy1nbG9iYWxzL21vZHVsZXMvQW9TdGlja3lOYXYvaW5kZXguanMiLCJpbXBvcnQge1xyXG5cdGhhc0NsYXNzLFxyXG5cdGFkZENsYXNzLFxyXG5cdHJlbW92ZUNsYXNzLFxyXG5cdHByZXZlbnRFdmVudERlZmF1bHRcclxufSBmcm9tICcuL2RvbS11dGlscyc7XHJcblxyXG5leHBvcnQgdmFyIHNjcm9sbExvY2sgPSB7XHJcblx0bG9ja2VkOiBmYWxzZSxcclxuXHRlbmFibGVkRWxlbWVudENsYXNzOiAnJyxcclxuXHRldmVudExpc3RlbmVyOiB7fSxcclxuXHJcblx0LyoqXHJcblx0ICogUHJldmVudHMgYmFja2dyb3VuZCBzY3JvbGwgb24gbW9iaWxlLlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBlbmFibGVkRWxlbWVudENsYXNzIC0gU2VsZWN0b3Igb2YgdGhlIGVsZW1lbnQgeW91IHdpc2ggdG8gbGVhdmUgc2Nyb2xsaW5nIGVuYWJsZWQuXHJcblx0ICogQHBhcmFtIHtBcnJheS48c3RyaW5nPn0gW2Rpc2FibGVkRWxlbWVudHM9Wydib2R5J11dIC0gU2VsZWN0b3JzIG9mIHRoZSBlbGVtZW50cyB5b3Ugd2lzaCB0byBkaXNhYmxlIHNjcm9sbC5cclxuXHQgKi9cclxuXHRsb2NrKGVuYWJsZWRFbGVtZW50Q2xhc3MsIGRpc2FibGVkRWxlbWVudHMpIHtcclxuXHRcdHRoaXMubG9ja2VkID0gdHJ1ZTtcclxuXHRcdHRoaXMuZW5hYmxlZEVsZW1lbnRDbGFzcyA9IGVuYWJsZWRFbGVtZW50Q2xhc3M7XHJcblx0XHRkaXNhYmxlZEVsZW1lbnRzID0gQXJyYXkuaXNBcnJheShkaXNhYmxlZEVsZW1lbnRzKVxyXG5cdFx0XHQ/IGRpc2FibGVkRWxlbWVudHNcclxuXHRcdFx0OiBbJ2JvZHknXTtcclxuXHRcdGRpc2FibGVkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihzZWxlY3Rvcikge1xyXG5cdFx0XHR2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuXHRcdFx0YWRkQ2xhc3MoZWwsICdkaXNhYmxlLXNjcm9sbGluZycpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLmV2ZW50TGlzdGVuZXIgPSB0aGlzLnByZXZlbnREZWZhdWx0LmJpbmQodGhpcyk7XHJcblx0XHRkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuZXZlbnRMaXN0ZW5lcik7XHJcblx0fSxcclxuXHR1bmxvY2soKSB7XHJcblx0XHR2YXIgZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRpc2FibGUtc2Nyb2xsaW5nJyk7XHJcblx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGVscywgZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdFx0XHRyZW1vdmVDbGFzcyhlbGVtZW50LCAnZGlzYWJsZS1zY3JvbGxpbmcnKTtcclxuXHRcdH0pO1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmV2ZW50TGlzdGVuZXIpO1xyXG5cdFx0dGhpcy5sb2NrZWQgPSBmYWxzZTtcclxuXHR9LFxyXG5cdHByZXZlbnREZWZhdWx0KGV2dCkge1xyXG5cdFx0dmFyIHRhcmdldCA9IGV2dC50YXJnZXQ7XHJcblx0XHR2YXIgaGFzVmVydGljYWxTY3JvbGxiYXIgPSB0YXJnZXQuc2Nyb2xsSGVpZ2h0ID4gdGFyZ2V0LmNsaWVudEhlaWdodDtcclxuXHRcdGlmIChoYXNDbGFzcyh0YXJnZXQsICdkaXNhYmxlLXNjcm9sbGluZycpKSB7XHJcblx0XHRcdHByZXZlbnRFdmVudERlZmF1bHQoZXZ0KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHdoaWxlICghaGFzQ2xhc3ModGFyZ2V0LCB0aGlzLmVuYWJsZWRFbGVtZW50Q2xhc3MpKSB7XHJcblx0XHRcdFx0dGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7XHJcblx0XHRcdFx0aWYgKHRhcmdldCA9PT0gZG9jdW1lbnQuYm9keSkge1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGhhc1ZlcnRpY2FsU2Nyb2xsYmFyID0gdGFyZ2V0LnNjcm9sbEhlaWdodCA+IHRhcmdldC5jbGllbnRIZWlnaHQ7XHJcblx0XHRcdGlmICghaGFzVmVydGljYWxTY3JvbGxiYXIpIHtcclxuXHRcdFx0XHRwcmV2ZW50RXZlbnREZWZhdWx0KGV2dCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0U3RyaW5nID0gZnVuY3Rpb24oZm9ybWF0LCBhcmdzKSB7XHJcblx0dmFyIG1hdGNoZXMgPSBmb3JtYXQubWF0Y2goL3suKj99L2dtaSk7XHJcblx0aWYgKG1hdGNoZXMpIHtcclxuXHRcdG1hdGNoZXMuZm9yRWFjaChtID0+IHtcclxuXHRcdFx0bGV0IGsgPSBtLnN1YnN0cigxLCBtLmxlbmd0aCAtIDIpO1xyXG5cdFx0XHRmb3JtYXQgPSBmb3JtYXQucmVwbGFjZShtLCBhcmdzW2tdIHx8ICcnKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGZvcm1hdDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmaXJlT25jZSA9IGZ1bmN0aW9uKGZuKSB7XHJcblx0bGV0IGhhc0ZpcmVkID0gZmFsc2U7XHJcblx0cmV0dXJuIGUgPT4ge1xyXG5cdFx0aWYgKCFoYXNGaXJlZCkge1xyXG5cdFx0XHRmbigpO1xyXG5cdFx0XHRoYXNGaXJlZCA9IHRydWU7XHJcblx0XHR9XHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWFkeShmbikge1xyXG5cdGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XHJcblx0XHRmbigpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRsZXQgZmlyZUZuT25jZSA9IGZpcmVPbmNlKGZuKTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmaXJlT25jZSk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdyZWFkeXN0YXRlY2hhbmdlJywgKCkgPT4ge1xyXG5cdFx0XHRpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xyXG5cdFx0XHRcdGZpcmVGbk9uY2UoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXJsUGFyYW1ldGVycygpIHtcclxuXHQvKlxyXG5cdGNvbnN0IHNlYXJjaCA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpO1xyXG5cclxuXHRpZiAoIXNlYXJjaCkge1xyXG5cdFx0cmV0dXJuIHt9O1xyXG5cdH1cclxuXHJcblx0Y29uc3QgcGFyYW1zID0gc2VhcmNoLnNwbGl0KCcmJyk7XHJcblx0Y29uc3QgcGFyYW1TcGxpdCA9IHBhcmFtcy5tYXAoZnVuY3Rpb24ocGFyYW0pe1xyXG5cdFx0Y29uc3QgbWF0Y2ggPSBwYXJhbS5tYXRjaCgvXltePVxcc10rPVtePVxcc10rJC9nbWkpO1xyXG5cdFx0Y29uc29sZS5sb2coJ21hdGNoJywgbWF0Y2gpO1xyXG5cdFx0cmV0dXJuIG1hdGNoID8gbWF0Y2hbMF07XHJcblx0fSk7XHJcblx0Ki9cclxuXHRjb25zdCBzZWFyY2ggPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKTtcclxuXHR2YXIgb2JqID0ge307XHJcblx0c2VhcmNoLnJlcGxhY2UoLyhbXj0mXSspPShbXiZdKikvZywgZnVuY3Rpb24obSwga2V5LCB2YWx1ZSkge1xyXG5cdFx0b2JqW2RlY29kZVVSSUNvbXBvbmVudChrZXkpXSA9IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XHJcblx0fSk7XHJcblxyXG5cdHJldHVybiBvYmo7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZShmbikge1xyXG5cdGxldCBhbmltYXRpb25GcmFtZVJlcXVlc3RlZCA9IGZhbHNlO1xyXG5cdHJldHVybiBmdW5jdGlvbigpIHtcclxuXHRcdGlmICghYW5pbWF0aW9uRnJhbWVSZXF1ZXN0ZWQpIHtcclxuXHRcdFx0YW5pbWF0aW9uRnJhbWVSZXF1ZXN0ZWQgPSB0cnVlO1xyXG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRmbigpO1xyXG5cdFx0XHRcdGFuaW1hdGlvbkZyYW1lUmVxdWVzdGVkID0gZmFsc2U7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3J0c1RyYW5zaXRpb25zKCkge1xyXG5cdHZhciBiID0gZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXHJcblx0XHRzID0gYi5zdHlsZSxcclxuXHRcdHAgPSAndHJhbnNpdGlvbic7XHJcblxyXG5cdGlmICh0eXBlb2Ygc1twXSA9PSAnc3RyaW5nJykge1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHQvLyBUZXN0cyBmb3IgdmVuZG9yIHNwZWNpZmljIHByb3BcclxuXHR2YXIgdiA9IFsnTW96JywgJ3dlYmtpdCcsICdXZWJraXQnLCAnS2h0bWwnLCAnTycsICdtcyddO1xyXG5cdHAgPSBwLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcC5zdWJzdHIoMSk7XHJcblxyXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdi5sZW5ndGg7IGkrKykge1xyXG5cdFx0aWYgKHR5cGVvZiBzW3ZbaV0gKyBwXSA9PSAnc3RyaW5nJykge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIHRoZSBwcm9kdWN0IGlzIGluIHN0b2NrXHJcbiAqIEFjY2VwdHMgdGhlIHByb2R1Y3Qgb2JqZWN0IHJldHVybmVkIGJ5IHRoZSBwcm9kdWN0IGhhbmRsZXJcclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IHByb2R1Y3RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0luU3RvY2socHJvZHVjdCkge1xyXG5cdHJldHVybiBwcm9kdWN0LlN0YXRlLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdkaXNjb250aW51ZWQnKSA9PT0gLTE7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL0Bhby1pbnRlcm5hbC9tYXJrZXRpbmctZ2xvYmFscy9qcy91dGlscy9nZW5lcmFsLXV0aWxzLmpzIiwiaW1wb3J0IHsgaGFzQ2xhc3MsIGdldENsb3Nlc3QgfSBmcm9tICcuL2RvbS11dGlscyc7XHJcbmltcG9ydCB7IHJlcXVlc3RBbmltYXRpb25GcmFtZVBvbHlmaWxsIH0gZnJvbSAnLi4vcG9seWZpbGxzL3JlcXVlc3QtYW5pbWF0aW9uLWZyYW1lLXBvbHlmaWxsJztcclxuXHJcbnZhciBpbml0aWFsaXNlZEVsZW1lbnRzID0gW107XHJcbnZhciBwYWdlVXJsID0gbG9jYXRpb24uaGFzaCA/IHN0cmlwSGFzaChsb2NhdGlvbi5ocmVmKSA6IGxvY2F0aW9uLmhyZWY7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNTbWFydFBob25lKCkge1xyXG5cdHJldHVybiB3aW5kb3cuYnJlYWtwb2ludC52YWx1ZSA9PT0gJ21vYmlsZScgPyB0cnVlIDogZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRTbW9vdGhTY3JvbGxpbmcob3ZlcnJpZGVPZmZzZXQsIGFsbG93UHJvcGFnYXRpb24gPSBmYWxzZSkge1xyXG5cdHZhciBvZmZzZXQgPSB3aW5kb3cuYnJlYWtwb2ludC52YWx1ZSA9PT0gJ2Rlc2t0b3AnID8gMzUgOiAwO1xyXG5cdGxldCBvZmZzZXRJbnQgPSAhaXNOYU4ob3ZlcnJpZGVPZmZzZXQpID8gb3ZlcnJpZGVPZmZzZXQgOiBvZmZzZXQ7XHJcblx0aW5pdExpbmtIaWphY2sob2Zmc2V0SW50LCBhbGxvd1Byb3BhZ2F0aW9uKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRMaW5rSGlqYWNrKG9mZnNldEludCwgYWxsb3dQcm9wYWdhdGlvbiA9IGZhbHNlKSB7XHJcblxyXG5cdC8vIFJlbW92ZSBhbGwgdGhlIGV2ZW50IGxpc3RlbmVycy5cclxuXHRkZWluaXRpYWxpc2VFbGVtZW50cygpO1xyXG5cclxuXHRpZiAoY2FuVXNlUmVxdWVzdEFuaW1hdGlvbkZyYW1lKCkpIHtcclxuXHRcdHZhciBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKTtcclxuXHRcdGxpbmtzID0gW10uc2xpY2UuY2FsbChsaW5rcyk7XHJcblxyXG5cdFx0bGlua3MuZm9yRWFjaChmdW5jdGlvbihsaW5rKSB7XHJcblx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0b25DbGljayhlLCBvZmZzZXRJbnQsIGFsbG93UHJvcGFnYXRpb24pO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0aW5pdGlhbGlzZWRFbGVtZW50cy5wdXNoKHsgZWw6IGxpbmssIGhhbmRsZXI6IG9uQ2xpY2sgfSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbkNsaWNrKGUsIG9mZnNldEludCwgYWxsb3dQcm9wYWdhdGlvbiA9IGZhbHNlKSB7XHJcblx0Ly8gaWYgdGhlIHRhcmdldCBpcyBub3QgYW4gYW5jaG9yIGxpbmssIGZpbmQgdGhlIGNsb3Nlc3QgcGFyZW50IGFuY2hvci5cclxuXHRsZXQgdGFyZ2V0O1xyXG5cdGlmIChlLnRhcmdldC5ub2RlTmFtZSA9PT0gJ0EnKSB7XHJcblx0XHR0YXJnZXQgPSBlLnRhcmdldDtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGFyZ2V0ID0gZ2V0Q2xvc2VzdChlLnRhcmdldCwgJ2EnKTtcclxuXHR9XHJcblxyXG5cdGlmICghaXNJblBhZ2VMaW5rKHRhcmdldCkgfHwgaXNTbWFydFBob25lKCkpIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGlmICghYWxsb3dQcm9wYWdhdGlvbikge1xyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHR9XHJcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRqdW1wKHRhcmdldC5oYXNoLCB7XHJcblx0XHRvZmZzZXQ6IG9mZnNldEludFxyXG5cdH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNJblBhZ2VMaW5rKHRhcmdldCkge1xyXG5cdHJldHVybiB0YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYScgJiYgdGFyZ2V0Lmhhc2gubGVuZ3RoID4gMCAmJiBzdHJpcEhhc2godGFyZ2V0LmhyZWYpID09PSBwYWdlVXJsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RyaXBIYXNoKHVybCkge1xyXG5cdHJldHVybiB1cmwuc2xpY2UoMCwgdXJsLmxhc3RJbmRleE9mKCcjJykpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNDc3NTbW9vdGhTQ3JvbGxTdXBwb3J0ZWQoKSB7XHJcblx0cmV0dXJuICdzY3JvbGxCZWhhdmlvcicgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVpbml0aWFsaXNlRWxlbWVudHMoKSB7XHJcblx0aW5pdGlhbGlzZWRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcclxuXHRcdGl0ZW0uZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpdGVtLmhhbmRsZXIpO1xyXG5cdH0pO1xyXG5cclxuXHRpbml0aWFsaXNlZEVsZW1lbnRzID0gW107XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYW5Vc2VSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKSB7XHJcblx0cmV0dXJuICEhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGp1bXAodGFyZ2V0LCBvcHRpb25zKSB7XHJcblx0dmFyIHN0YXJ0ID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cdHZhciBvcHQgPSB7XHJcblx0XHRkdXJhdGlvbjogKG9wdGlvbnMgJiYgb3B0aW9ucy5kdXJhdGlvbikgPyBvcHRpb25zLmR1cmF0aW9uIDogOTAwLFxyXG5cdFx0b2Zmc2V0OiAob3B0aW9ucyAmJiBvcHRpb25zLm9mZnNldCkgPyBvcHRpb25zLm9mZnNldCA6IDAsXHJcblx0XHRlYXNpbmc6IChvcHRpb25zICYmIG9wdGlvbnMuZWFzaW5nKSA/IG9wdGlvbnMuZWFzaW5nIDogZWFzZUluT3V0UXVhZFxyXG5cdH07XHJcblxyXG5cdHZhciBkaXN0YW5jZSA9XHJcblx0XHR0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSBvcHQub2Zmc2V0IDogdGFyZ2V0O1xyXG5cdHZhciBkdXJhdGlvbiA9IHR5cGVvZiBvcHQuZHVyYXRpb24gPT09ICdmdW5jdGlvbicgPyBvcHQuZHVyYXRpb24oZGlzdGFuY2UpIDogb3B0LmR1cmF0aW9uO1xyXG5cdHZhciB0aW1lU3RhcnQ7XHJcblx0dmFyIHRpbWVFbGFwc2VkO1xyXG5cclxuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24odGltZSkge1xyXG5cdFx0dGltZVN0YXJ0ID0gdGltZTtcclxuXHRcdGxvb3AodGltZSk7XHJcblx0fSk7XHJcblxyXG5cdGZ1bmN0aW9uIGxvb3AodGltZSkge1xyXG5cdFx0dGltZUVsYXBzZWQgPSB0aW1lIC0gdGltZVN0YXJ0O1xyXG5cclxuXHRcdHdpbmRvdy5zY3JvbGxUbygwLCBvcHQuZWFzaW5nKHRpbWVFbGFwc2VkLCBzdGFydCwgZGlzdGFuY2UsIGR1cmF0aW9uKSk7XHJcblxyXG5cdFx0aWYgKHRpbWVFbGFwc2VkIDwgZHVyYXRpb24pIHtcclxuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gUm9iZXJ0IFBlbm5lcidzIGVhc2VJbk91dFF1YWQgLSBodHRwOi8vcm9iZXJ0cGVubmVyLmNvbS9lYXNpbmcvXHJcblx0ZnVuY3Rpb24gZWFzZUluT3V0UXVhZCh0LCBiLCBjLCBkKSB7XHJcblx0XHR0IC89IGQgLyAyO1xyXG5cdFx0aWYgKHQgPCAxKSB7XHJcblx0XHRcdHJldHVybiBjIC8gMiAqIHQgKiB0ICsgYjtcclxuXHRcdH1cclxuXHRcdHQtLTtcclxuXHRcdHJldHVybiAtYyAvIDIgKiAodCAqICh0IC0gMikgLSAxKSArIGI7XHJcblx0fVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9AYW8taW50ZXJuYWwvbWFya2V0aW5nLWdsb2JhbHMvanMvdXRpbHMvYW9TbW9vdGhTY3JvbGwuanMiLCIoZnVuY3Rpb24gcmVxdWVzdEFuaW1hdGlvblBvbHlmaWxsKCkge1xyXG5cdHZhciBsYXN0VGltZSA9IDA7XHJcblx0dmFyIHZlbmRvcnMgPSBbJ21zJywgJ21veicsICd3ZWJraXQnLCAnbyddO1xyXG5cdGZvciAodmFyIHggPSAwOyB4IDwgdmVuZG9ycy5sZW5ndGggJiYgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ICsreCkge1xyXG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW3hdICsgJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddO1xyXG5cdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbeF0gKyAnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXSB8fCB3aW5kb3dbdmVuZG9yc1t4XSArICdDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcclxuXHR9XHJcblxyXG5cdGlmICghd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSlcclxuXHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGVsZW1lbnQpIHtcclxuXHRcdFx0dmFyIGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblx0XHRcdHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpO1xyXG5cdFx0XHR2YXIgaWQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0dGltZVRvQ2FsbCk7XHJcblx0XHRcdGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xyXG5cdFx0XHRyZXR1cm4gaWQ7XHJcblx0XHR9O1xyXG5cclxuXHRpZiAoIXdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSlcclxuXHRcdHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uIChpZCkge1xyXG5cdFx0XHRjbGVhclRpbWVvdXQoaWQpO1xyXG5cdFx0fTtcclxufSgpKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL0Bhby1pbnRlcm5hbC9tYXJrZXRpbmctZ2xvYmFscy9qcy9wb2x5ZmlsbHMvcmVxdWVzdC1hbmltYXRpb24tZnJhbWUtcG9seWZpbGwuanMiLCJsZXQgdHJhbnNsYXRpb25zID0ge307XHJcbmxldCBsYW5nID0gJ2VuLWdiJztcclxubGV0IGNsaWVudCA9ICcnO1xyXG5cclxuY29uc3QgdHJhbnNsYXRvciA9IHtcclxuXHRzZXRMYW5nOiBmdW5jdGlvbih2YWx1ZSl7XHJcblx0XHRsYW5nID0gdmFsdWU7XHJcblx0fSxcclxuXHJcblx0c2V0Q2xpZW50OiBmdW5jdGlvbih2YWx1ZSl7XHJcblx0XHRjbGllbnQgPSB2YWx1ZTtcclxuXHR9LFxyXG5cdHNldDogZnVuY3Rpb24ocmVzb3VyY2UsIHZhbHVlKXtcclxuXHRcdHZhciBhZGRpdGlvbnMgPSB7fTtcclxuXHRcdGFkZGl0aW9uc1tyZXNvdXJjZV0gPSB2YWx1ZTtcclxuXHJcblx0XHR0cmFuc2xhdGlvbnMgPSBPYmplY3QuYXNzaWduKHRyYW5zbGF0aW9ucywgYWRkaXRpb25zKTtcclxuXHR9LFxyXG5cdGdldDogZnVuY3Rpb24ocmVzb3VyY2UsIG5hbWUpe1xyXG5cdFx0cmVzb3VyY2UgPSByZXNvdXJjZSB8fCAnZGVmYXVsdCc7XHJcblxyXG5cdFx0aWYgKGNsaWVudCAmJlxyXG5cdFx0XHR0cmFuc2xhdGlvbnNbcmVzb3VyY2VdICYmXHJcblx0XHRcdHRyYW5zbGF0aW9uc1tyZXNvdXJjZV1bY2xpZW50XSAmJlxyXG5cdFx0XHR0cmFuc2xhdGlvbnNbcmVzb3VyY2VdW2NsaWVudF1bbGFuZ10gJiZcclxuXHRcdFx0dHJhbnNsYXRpb25zW3Jlc291cmNlXVtjbGllbnRdW2xhbmddW25hbWVdKSB7XHJcblx0XHRcdHJldHVybiB0cmFuc2xhdGlvbnNbcmVzb3VyY2VdW2NsaWVudF1bbGFuZ11bbmFtZV07XHJcblx0XHR9IGVsc2UgaWYgKHRyYW5zbGF0aW9uc1tyZXNvdXJjZV0gJiZcclxuXHRcdFx0XHRcdHRyYW5zbGF0aW9uc1tyZXNvdXJjZV1bbGFuZ10gJiZcclxuXHRcdFx0XHRcdHRyYW5zbGF0aW9uc1tyZXNvdXJjZV1bbGFuZ11bbmFtZV0pIHtcclxuXHRcdFx0cmV0dXJuIHRyYW5zbGF0aW9uc1tyZXNvdXJjZV1bbGFuZ11bbmFtZV07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gJyc7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdHJhbnNsYXRvcjtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmFtZXNwYWNlZFRyYW5zbGF0b3IocmVzb3VyY2UpIHtcclxuXHRyZXR1cm4gdHJhbnNsYXRvci5nZXQuYmluZCh0cmFuc2xhdG9yLCByZXNvdXJjZSk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL0Bhby1pbnRlcm5hbC9tYXJrZXRpbmctZ2xvYmFscy9qcy91dGlscy90cmFuc2xhdG9yLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJlbi1HQlwiOntcImJhY2tcIjpcIkJhY2tcIn0sXCJubC1OTFwiOntcImJhY2tcIjpcIlNsdWl0ZW5cIn0sXCJkZS1ERVwiOntcImJhY2tcIjpcIlp1csO8Y2tcIn19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQGFvLWludGVybmFsL21hcmtldGluZy1nbG9iYWxzL21vZHVsZXMvQW9TdGlja3lOYXYvdHJhbnNsYXRpb25zLmpzb25cbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==