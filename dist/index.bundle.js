/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body{\\n    /*background: url( \\\"./Tom\\\\'s_Restaurant,_Manhattan.jpg\\\");*/\\n}\\n#content{\\n   height: auto;\\n}\\n.navButton{\\n    background: aquamarine;\\n    margin: auto;\\n    cursor: pointer;\\n    transition: all 0.25s;\\n\\n}\\n\\n.navButton:hover .chevronSpan::before{\\n    transform: rotate(90deg);\\n}\\n\\n.chevronSpan::before{\\n    display:inline-block;\\n    text-align: center;\\n    vertical-align: middle;\\n    content:'\\\\00bb';\\n    box-sizing: inherit;\\n    transition: all .15s;\\n\\n}\\n#TaskBar{\\n    display: grid;\\n    margin: auto;\\n    grid-template-columns: 76px 76px 76px;\\n    padding-left: 50%;\\n    margin-left: -114px;\\n}\\n\\nimg#left{\\n    float:left;\\n}\\n\\nimg#right{\\n    float:right;\\n}\\n\\n.bodyDiv{\\n    position: absolute;\\n    top: 50%;\\n    left: 50%;\\n    margin-left: -200px;\\n    margin-top: -200px;\\n    text-align: center;\\n    height: auto;\\n    padding: 15px;\\n    width: 400px;\\n    background: orangered;\\n}\\n.subBodyDiv{\\n    border:aquamarine;\\n    border-style: solid;\\n}\\n.imageCenter{\\n    margin-left: auto;\\n    margin-right: auto;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Drawing.png":
/*!*************************!*\
  !*** ./src/Drawing.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2a4da07b0df26fe99d1c.png\";\n\n//# sourceURL=webpack://restaurant/./src/Drawing.png?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ContactScreen\": () => (/* binding */ ContactScreen)\n/* harmony export */ });\n/* harmony import */ var _contactText_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactText.js */ \"./src/contactText.js\");\n/* harmony import */ var _contactImages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactImages.js */ \"./src/contactImages.js\");\n\n\n\nconst ContactScreen = (function(){\n    const getScreen = function(){\n        return screen;\n    }\n    let newDivs= [];\n\n    const pictureGetter = function(x){\n        let contactPicture = document.createElement('img');\n        contactPicture.src = _contactImages_js__WEBPACK_IMPORTED_MODULE_1__.default[`img${x}`];\n        contactPicture.style.height = '100px';\n        contactPicture.style.width = 'auto';\n        contactPicture.style.display = 'block';\n        contactPicture.classList.add(\"imageCenter\");\n        return contactPicture;\n    }\n    const divCustomizer = function(x){\n        newDivs[x] = document.createElement('div');\n        newDivs[x].id = `paragraph${x}`;\n        newDivs[x].classList.add('subBodyDiv');\n        return newDivs[x];\n    }\n    const pGetter = function(x){\n        const newP = document.createElement('p');\n        newP.innerText = _contactText_js__WEBPACK_IMPORTED_MODULE_0__.contactText[`text${x}`];\n        return newP;\n    }\n    \n\n\n    //construction of the Contact screen\n    const screen = document.createElement('div');\n    screen.classList.add(\"bodyDiv\");\n    for(let x = 0; x<2; x++){\n        newDivs[x] = divCustomizer(x);\n        if(!!_contactImages_js__WEBPACK_IMPORTED_MODULE_1__.default[`img${x}`]){\n            newDivs[x].appendChild(pictureGetter(x));\n        }\n        newDivs[x].appendChild(pGetter(x));\n        screen.appendChild(newDivs[x]);\n    }\n\n    return{getScreen}\n})();\n\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/contactImages.js":
/*!******************************!*\
  !*** ./src/contactImages.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _contactImages_0_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactImages/0.jpg */ \"./src/contactImages/0.jpg\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({img0: _contactImages_0_jpg__WEBPACK_IMPORTED_MODULE_0__});\n\n//# sourceURL=webpack://restaurant/./src/contactImages.js?");

/***/ }),

/***/ "./src/contactImages/0.jpg":
/*!*********************************!*\
  !*** ./src/contactImages/0.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"720685ea2fd42c387cda.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/contactImages/0.jpg?");

/***/ }),

/***/ "./src/contactText.js":
/*!****************************!*\
  !*** ./src/contactText.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactText\": () => (/* binding */ contactText)\n/* harmony export */ });\nconst contactText = {\n    text0: 'Located off the turnpike, under the ocean!',\n    text1: 'Our phone number is 111-222-3333. Give us a ring!'\n}\n\n\n//# sourceURL=webpack://restaurant/./src/contactText.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HomeScreen\": () => (/* binding */ HomeScreen)\n/* harmony export */ });\nconst HomeScreen = (function(){\n    const getScreen = function(){\n        return screen;\n    }\n\n\n    \n    //construction of the Home screen\n    const screen = document.createElement('div');\n    screen.classList.add(\"bodyDiv\");\n    for(let x = 0; x < 3; x++){\n        let newDiv = document.createElement('div');\n        newDiv.id = `paragraph${x}`;\n        newDiv.classList.add('subBodyDiv')\n        newDiv.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'\n        screen.appendChild(newDiv);\n    }\n    \n\n    return{getScreen}\n})();\n\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Drawing_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Drawing.png */ \"./src/Drawing.png\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _taskBar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskBar.js */ \"./src/taskBar.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\n\n\nlet screens = {homeScreen:_home_js__WEBPACK_IMPORTED_MODULE_3__.HomeScreen.getScreen(), menuScreen:_menu_js__WEBPACK_IMPORTED_MODULE_4__.MenuScreen.getScreen(), contactScreen:_contact_js__WEBPACK_IMPORTED_MODULE_5__.ContactScreen.getScreen()};\n\n\n\n\nconst Main = (function(){\n    const imageAppender = function() {\n        const leftImg = new Image();\n        const rightImg = new Image();\n        leftImg.src = _Drawing_png__WEBPACK_IMPORTED_MODULE_0__;\n        rightImg.src = _Drawing_png__WEBPACK_IMPORTED_MODULE_0__;\n        leftImg.id = 'left';\n        rightImg.id = 'right';\n        \n        mainDiv.append(leftImg, rightImg);\n    }\n\n    const mainDiv = document.getElementById('content');\n    mainDiv.appendChild(_taskBar_js__WEBPACK_IMPORTED_MODULE_2__.TaskBar.returnsTaskBar());\n    imageAppender();\n\n    _taskBar_js__WEBPACK_IMPORTED_MODULE_2__.TaskBar.swapScreen(mainDiv, screens.homeScreen);\n    let currentScreen = screens.homeScreen;\n    let prevScreen;\n\n\n\n    _taskBar_js__WEBPACK_IMPORTED_MODULE_2__.TaskBar.returnsTaskBar().childNodes.forEach(element => {\n        element.addEventListener('click', function(e){\n            prevScreen = currentScreen;\n            currentScreen = screens[`${e.target.id}`];\n            _taskBar_js__WEBPACK_IMPORTED_MODULE_2__.TaskBar.swapScreen(mainDiv,currentScreen,prevScreen);\n        });\n    });\n\n})();\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MenuScreen\": () => (/* binding */ MenuScreen)\n/* harmony export */ });\n/* harmony import */ var _menuImages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuImages.js */ \"./src/menuImages.js\");\n/* harmony import */ var _menuText_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuText.js */ \"./src/menuText.js\");\n\n\n\nconst MenuScreen = (function(){\n    let newDivs = [];\n\n    const getScreen = function(){\n        return screen;\n    }\n    \n    const pictureGetter = function(x){\n        let menuPicture = document.createElement('img');\n        menuPicture.src = _menuImages_js__WEBPACK_IMPORTED_MODULE_0__.default[`img${x}`];\n        menuPicture.style.height = '100px';\n        menuPicture.style.width = 'auto';\n        menuPicture.style.display = 'block';\n        menuPicture.classList.add(\"imageCenter\");\n        return menuPicture;\n    }\n    const textGetter = function(x){\n        let newText = _menuText_js__WEBPACK_IMPORTED_MODULE_1__.textList[`text${x}`];\n        return newText;\n    }\n    const pGetter = function(x){\n        const newP = document.createElement('p');\n        newP.innerText = textGetter(x);\n        return newP;\n    }\n    const divCustomizer = function(x){\n        newDivs[x] = document.createElement('div');\n        newDivs[x].id = `paragraph${x}`;\n        newDivs[x].classList.add('subBodyDiv');\n        return newDivs[x];\n    }\n\n\n\n    //construction of the Menu screen\n    const screen = document.createElement('div');\n    screen.classList.add(\"bodyDiv\");\n    for(let x = 0; x < 5; x++){\n        \n        newDivs[x] = divCustomizer(x);\n        let menuPicture = pictureGetter(x);\n        screen.appendChild(newDivs[x]);\n        newDivs[x].appendChild(menuPicture);\n        newDivs[x].appendChild(pGetter(x));\n    }\n    \n\n    return{getScreen}\n})();\n\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/menuImages.js":
/*!***************************!*\
  !*** ./src/menuImages.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _menuImages_0_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuImages/0.jpg */ \"./src/menuImages/0.jpg\");\n/* harmony import */ var _menuImages_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuImages/1.jpg */ \"./src/menuImages/1.jpg\");\n/* harmony import */ var _menuImages_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuImages/2.jpg */ \"./src/menuImages/2.jpg\");\n/* harmony import */ var _menuImages_3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuImages/3.jpg */ \"./src/menuImages/3.jpg\");\n/* harmony import */ var _menuImages_4_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menuImages/4.jpg */ \"./src/menuImages/4.jpg\");\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    img0: _menuImages_0_jpg__WEBPACK_IMPORTED_MODULE_0__, img1: _menuImages_1_jpg__WEBPACK_IMPORTED_MODULE_1__, img2: _menuImages_2_jpg__WEBPACK_IMPORTED_MODULE_2__, img3: _menuImages_3_jpg__WEBPACK_IMPORTED_MODULE_3__, img4: _menuImages_4_jpg__WEBPACK_IMPORTED_MODULE_4__\n});\n\n//# sourceURL=webpack://restaurant/./src/menuImages.js?");

/***/ }),

/***/ "./src/menuImages/0.jpg":
/*!******************************!*\
  !*** ./src/menuImages/0.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c8acbbd030e957c747ac.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/menuImages/0.jpg?");

/***/ }),

/***/ "./src/menuImages/1.jpg":
/*!******************************!*\
  !*** ./src/menuImages/1.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"79d766e47629e9a4e644.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/menuImages/1.jpg?");

/***/ }),

/***/ "./src/menuImages/2.jpg":
/*!******************************!*\
  !*** ./src/menuImages/2.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1de0ffa25b8d6b3d04b5.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/menuImages/2.jpg?");

/***/ }),

/***/ "./src/menuImages/3.jpg":
/*!******************************!*\
  !*** ./src/menuImages/3.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b08a90bf3e627603cd6f.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/menuImages/3.jpg?");

/***/ }),

/***/ "./src/menuImages/4.jpg":
/*!******************************!*\
  !*** ./src/menuImages/4.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0af94d5b4bad34117dad.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/menuImages/4.jpg?");

/***/ }),

/***/ "./src/menuText.js":
/*!*************************!*\
  !*** ./src/menuText.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"textList\": () => (/* binding */ textList)\n/* harmony export */ });\nlet textList= {\n    text0: \"A delicious boot burger, can't go wrong!\",\n    text1: 'Crisp, Cold, Refreshing Lemon Boots!',\n    text2: 'Meat Lovers deluxe burger boot. Bring your Appetite!',\n    text3: 'Chicken and waffles boot. Classic combination',\n    text4: 'treat yourself to the cherry pie high heel'\n};\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/menuText.js?");

/***/ }),

/***/ "./src/taskBar.js":
/*!************************!*\
  !*** ./src/taskBar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TaskBar\": () => (/* binding */ TaskBar)\n/* harmony export */ });\nconst TaskBar = (function(){\n    let self = this;\n\n    const returnsTaskBar = function(){\n        return taskBar;\n    }\n\n    const swapScreen = function(mainDiv,currentScreen,prevScreen){\n        if(!!prevScreen){mainDiv.removeChild(prevScreen)};\n        mainDiv.appendChild(currentScreen);\n    }\n\n    const divFactory = function(name){\n        let newDiv = document.createElement('div');\n        newDiv.id = name;\n        newDiv.classList.add('navButton');\n        newDiv.innerText = name.slice(0,-6);\n        newDiv.append(chevronSpan(name))\n        return newDiv;\n    }\n    const chevronSpan = function(name){\n        let newSpan = document.createElement('span');\n        newSpan.id = name;\n        newSpan.classList.add('chevronSpan');\n        return newSpan\n    }\n\n    //Construction of the task bar\n    let taskBar = document.createElement('div');\n    taskBar.id = \"TaskBar\";\n    const menuDiv = divFactory(\"menuScreen\");\n    const contactDiv = divFactory(\"contactScreen\");\n    const homeDiv = divFactory(\"homeScreen\");\n\n    taskBar.append(homeDiv,menuDiv,contactDiv);\n    \n\n    return{returnsTaskBar, swapScreen};\n})();\n\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/taskBar.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;