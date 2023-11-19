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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Irish+Grover&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Junge&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n\r\n  --gold: #d4af37;\r\n  --black: #28282b;\r\n  --white: #fffff4;\r\n}\r\n\r\nbody {\r\n  background-color: var(--black);\r\n  font-family: \"Junge\", cursive;\r\n  color: var(--white);\r\n}\r\n\r\n#root {\r\n  margin: 0 auto;\r\n  padding: 0 1rem;\r\n  max-width: 600px;\r\n}\r\n\r\n/* H E A D E R */\r\nheader {\r\n  position: relative;\r\n  display: flex;\r\n  height: 100px;\r\n  justify-content: space-between;\r\n  padding: 16px 0;\r\n}\r\n\r\n.logo {\r\n  font-family: \"Irish Grover\", sans-serif;\r\n  color: var(--gold);\r\n  width: 130px;\r\n  text-align: center;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.menu-icon {\r\n  width: 32px;\r\n  height: 32px;\r\n}\r\n\r\n.float-nav {\r\n  position: absolute;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  padding: 10px 0;\r\n  width: 300px;\r\n  right: 0;\r\n  background-color: rgba(100, 100, 100, 0.5);\r\n  backdrop-filter: blur(20px);\r\n  border-radius: 10px;\r\n}\r\n\r\n.nav-btn {\r\n  width: 100%;\r\n  background-color: transparent;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  letter-spacing: 0.5rem;\r\n  padding: 10px 0;\r\n  border: none;\r\n  font-family: \"Junge\", cursive;\r\n  color: var(--gold);\r\n  font-size: 1.2rem;\r\n  font-weight: bolder;\r\n  text-shadow: 0 0 10px #28282b;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n/* - - - - - - - - - - */\r\n\r\n/* F O O T E R */\r\nfooter {\r\n  display: flex;\r\n  height: 50px;\r\n  font-family: \"Irish Grover\", sans-serif;\r\n  font-size: 1rem;\r\n  border-top: 2px solid var(--gold);\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n/* - - - - - - - - - - */\r\n\r\n/* H O M E   P A G E */\r\n.hero-img {\r\n  width: 100%;\r\n  height: calc(100dvh - 150px);\r\n  object-fit: cover;\r\n  object-position: center;\r\n}\r\n\r\n.slogan {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 25px;\r\n  height: 500px;\r\n  text-align: center;\r\n  line-height: 1.5rem;\r\n}\r\n\r\n.slogan-heading {\r\n  font-size: 1.5rem;\r\n  color: var(--gold);\r\n}\r\n/* - - - - - - - - - - */\r\n\r\n/* M E N U    P A G E */\r\n.menu-list {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 30px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.menu-list > h6 {\r\n  color: var(--gold);\r\n  text-decoration: underline;\r\n  font-size: 1.5rem;\r\n  flex-grow: 1;\r\n  width: 100%;\r\n  letter-spacing: 0.3rem;\r\n}\r\n.menu-list div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  gap: 20px;\r\n}\r\n\r\n.menu-list div:nth-child(2) {\r\n  flex-grow: 1;\r\n}\r\n/* - - - - - - - - - - */\r\n\r\n/* A B O U T    U S */\r\n.about-us-page {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  font-family: \"Junge\", cursive;\r\n}\r\n\r\n.about-us-heading {\r\n  color: var(--gold);\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.text-wrapper {\r\n  text-align: center;\r\n  line-height: 1.8;\r\n  font-size: 1.2;\r\n  padding: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2rem;\r\n  background-color: var(--gold);\r\n  color: var(--black);\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/styles/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/styles/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Pages/Contact Us.js":
/*!*********************************!*\
  !*** ./src/Pages/Contact Us.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createContactUsPage)\n/* harmony export */ });\nconst createOperationHours = () => {\r\n  const operationHours = document.createElement(\"div\");\r\n  operationHours.className = \"operation-hours\";\r\n\r\n  const heading = document.createElement(\"h3\");\r\n  heading.innerText = \"Operation Hours\";\r\n\r\n  const weekdays = document.createElement(\"p\");\r\n  weekdays.innerText = \"Weekdays: 9AM ~ 10PM\";\r\n  const weekends = document.createElement(\"p\");\r\n  weekends.innerText = `Weekends: 9AM ~ 12MN`;\r\n\r\n  operationHours.appendChild(heading);\r\n  operationHours.appendChild(weekdays);\r\n  operationHours.appendChild(weekends);\r\n\r\n  return operationHours;\r\n};\r\n\r\nconst reservation = () => {\r\n  const container = document.createElement(\"div\");\r\n  container.className = \"reservation-container\";\r\n};\r\n\r\nfunction createContactUsPage() {\r\n  const contactUsPage = document.createElement(\"div\");\r\n  contactUsPage.className = \"contact-us\";\r\n\r\n  contactUsPage.appendChild(createOperationHours());\r\n\r\n  return contactUsPage;\r\n}\r\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/Pages/Contact_Us.js?");

/***/ }),

/***/ "./src/Pages/about.js":
/*!****************************!*\
  !*** ./src/Pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createAboutUsPage)\n/* harmony export */ });\nfunction createAboutUsPage() {\r\n  const aboutUsPage = document.createElement(\"div\");\r\n  aboutUsPage.className = \"about-us-page\";\r\n\r\n  const aboutUsHeading = document.createElement(\"p\");\r\n  aboutUsHeading.className = \"about-us-heading\";\r\n  aboutUsHeading.innerText = \"About Us\";\r\n\r\n  const wrapper = document.createElement(\"div\");\r\n  wrapper.className = \"text-wrapper\";\r\n  const para1 = document.createElement(\"p\");\r\n  para1.innerText = `Welcome to Amber’s Steakhouse, where the sizzle meets the steak! We are passionate about delivering the ultimate steak experience to our guests. With the finest cuts of beef, expertly seasoned and grilled to perfection, our steakhouse is a haven for meat lovers.`;\r\n  const para2 = document.createElement(\"p\");\r\n  para2.innerText = `Our commitment to quality extends beyond the meat itself. We take pride in offering a warm and inviting atmosphere, where you can relax and enjoy your meal in style. Whether you prefer your steak rare, medium, or well-done, our skilled chefs are here to craft the perfect steak for your taste.`;\r\n  const para3 = document.createElement(\"p\");\r\n  para3.innerText = `At Amber’s Steakhouse, it's not just about the food; it's about creating unforgettable moments. Join us for a dining experience that celebrates the art of cooking the perfect steak and indulge in a menu that goes beyond the beef, offering a selection of delicious sides and accompaniments. We look forward to serving you and making your visit a memorable one.`;\r\n  wrapper.appendChild(para1);\r\n  wrapper.appendChild(para2);\r\n  wrapper.appendChild(para3);\r\n\r\n  aboutUsPage.appendChild(aboutUsHeading);\r\n  aboutUsPage.appendChild(wrapper);\r\n\r\n  return aboutUsPage;\r\n}\r\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/Pages/about.js?");

/***/ }),

/***/ "./src/Pages/home.js":
/*!***************************!*\
  !*** ./src/Pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHomePage)\n/* harmony export */ });\n/* harmony import */ var _assets_steak_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/steak.jpg */ \"./src/assets/steak.jpg\");\n\r\n\r\nconst createHeroImg = () => {\r\n  const heroImg = document.createElement(\"img\");\r\n  heroImg.classList.add(\"hero-img\");\r\n  heroImg.src = _assets_steak_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\n  return heroImg;\r\n};\r\n\r\nconst createSlogan = () => {\r\n  const sloganDiv = document.createElement(\"div\");\r\n  sloganDiv.classList.add(\"slogan\");\r\n\r\n  const heading = document.createElement(\"h3\");\r\n  heading.classList.add(\"slogan-heading\");\r\n  heading.innerText = \"Your Steak Sanctuary\";\r\n\r\n  const textBody = document.createElement(\"p\");\r\n  textBody.classList.add(\"text-body\");\r\n  textBody.innerText = `Experience culinary excellence at Amber's Steakhouse, nestled in the heart of Manila. Our warm, inviting ambiance and skilled chefs craft exceptional prime cuts to perfection, infusing each steak with unforgettable flavor. Whether celebrating a special occasion or savoring time with loved ones, our attentive staff ensures your experience exceeds expectations. With a meticulously curated menu and extensive wine selection, Amber's Steakhouse elevates every bite, creating lasting memories in a welcoming setting.`;\r\n\r\n  sloganDiv.appendChild(heading);\r\n  sloganDiv.appendChild(textBody);\r\n  return sloganDiv;\r\n};\r\n\r\nfunction createHomePage() {\r\n  const homePage = document.createElement(\"div\");\r\n  homePage.classList.add(\"home-page\");\r\n\r\n  homePage.appendChild(createHeroImg());\r\n  homePage.appendChild(createSlogan());\r\n  return homePage;\r\n}\r\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/Pages/home.js?");

/***/ }),

/***/ "./src/Pages/menu.js":
/*!***************************!*\
  !*** ./src/Pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createMenuPage)\n/* harmony export */ });\nconst createList = (listName, items, price) => {\r\n  const container = document.createElement(\"div\");\r\n  container.classList.add(\"menu-list\");\r\n\r\n  const list = document.createElement(\"h6\");\r\n  list.innerText = listName;\r\n  container.appendChild(list);\r\n\r\n  const itemList = document.createElement(\"div\");\r\n  items.forEach((item) => {\r\n    const p = document.createElement(\"p\");\r\n    p.innerText = item;\r\n    itemList.appendChild(p);\r\n  });\r\n  container.appendChild(itemList);\r\n\r\n  const priceList = document.createElement(\"div\");\r\n  price.forEach((item) => {\r\n    const p = document.createElement(\"p\");\r\n    p.innerText = `$${item}`;\r\n    priceList.appendChild(p);\r\n  });\r\n  container.appendChild(priceList);\r\n\r\n  return container;\r\n};\r\n\r\nfunction createMenuPage() {\r\n  const menuPage = document.createElement(\"div\");\r\n  menuPage.classList.add(\"menu-page\");\r\n\r\n  const steaks = [\r\n    \"Porterhouse\",\r\n    \"Tomahawk\",\r\n    \"Ribeye\",\r\n    \"Dry Aged Ribye\",\r\n    \"Wagyu Ribeye\",\r\n    \"Filet Mignon\",\r\n    \"T-Bone\",\r\n    \"Top Sirloin\",\r\n    \"Flat Iron\",\r\n    \"Delmonico\",\r\n  ];\r\n  const steaksPrice = [\r\n    45, 80.0, 60.0, 90.0, 228.0, 52.0, 35.0, 37.0, 42.0, 120.0,\r\n  ];\r\n  const steakList = createList(\"Steaks\", steaks, steaksPrice);\r\n  menuPage.appendChild(steakList);\r\n\r\n  const salads = [\r\n    \"Ceasar\",\r\n    \"Four Season\",\r\n    \"Cobb\",\r\n    \"Fattoush\",\r\n    \"Waldorf\",\r\n    \"Larb\",\r\n    \"Tabbouleh\",\r\n    \"Greek\",\r\n    \"Chinese Chicken\",\r\n    \"Mango Kani\",\r\n  ];\r\n  const saladsPrice = [15, 20, 15, 20, 25, 32, 23, 19, 35, 15];\r\n  const saladsList = createList(\"Salads\", salads, saladsPrice);\r\n  menuPage.appendChild(saladsList);\r\n\r\n  const sides = [\r\n    \"White Rice\",\r\n    \"French Fries\",\r\n    \"Coleslaw\",\r\n    \"Garlic Mushrooms\",\r\n    \"Corn and Carrots\",\r\n    \"Grilled Zucchini Gratin\",\r\n    \"Sweet Potato Fries\",\r\n    \"Onion & Beans\",\r\n    \"Marbled Potato w/ Balsamic\",\r\n    \"Mashed Potato\",\r\n  ];\r\n  const sidesPrice = [15, 20, 15, 20, 22, 29, 15, 12, 24, 18];\r\n  const sidesList = createList(\"Sides\", sides, sidesPrice);\r\n  menuPage.appendChild(sidesList);\r\n\r\n  const dnd = [\r\n    \"Wine\",\r\n    \"Cola\",\r\n    \"Coffee\",\r\n    \"Fruit Shake\",\r\n    \"tea\",\r\n    \"Ice Cream\",\r\n    \"Pudding\",\r\n    \"Cheese Cake\",\r\n    \"Brownies\",\r\n    \"Crepe\",\r\n  ];\r\n  const dndPrice = [12, 6, 6, 8, 6, 7, 10, 12, 9, 14];\r\n  const dndList = createList(\"Drinks and Desserts\", dnd, dndPrice);\r\n  menuPage.appendChild(dndList);\r\n\r\n  return menuPage;\r\n}\r\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/Pages/menu.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createFooter)\n/* harmony export */ });\nfunction createFooter() {\r\n    const footer = document.createElement('footer')\r\n    const text = document.createElement('p')\r\n    text.innerText = 'Created by Adrian92612'\r\n    footer.appendChild(text)\r\n    return footer\r\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHeader)\n/* harmony export */ });\n/* harmony import */ var _assets_menu_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/menu-icon.svg */ \"./src/assets/menu-icon.svg\");\n/* harmony import */ var _assets_close_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/close-icon.svg */ \"./src/assets/close-icon.svg\");\n\r\n\r\n\r\nconst createLogo = () => {\r\n  const logo = document.createElement(\"div\");\r\n  logo.classList.add(\"logo\");\r\n\r\n  const logoText = document.createElement(\"p\");\r\n  logoText.innerText = `Amber's Steakhouse`;\r\n  logo.appendChild(logoText);\r\n  return logo;\r\n};\r\n\r\nconst createfloatingNav = () => {\r\n  const floatNav = document.createElement(\"div\");\r\n  floatNav.classList.add(\"float-nav\", \"hide\");\r\n\r\n  const homeBtn = document.createElement(\"button\");\r\n  homeBtn.classList.add(\"nav-btn\");\r\n  homeBtn.innerText = \"Home\";\r\n  floatNav.appendChild(homeBtn);\r\n\r\n  const menuBtn = document.createElement(\"button\");\r\n  menuBtn.classList.add(\"nav-btn\");\r\n  menuBtn.innerText = \"Menu\";\r\n  floatNav.appendChild(menuBtn);\r\n\r\n  const aboutUsBtn = document.createElement(\"button\");\r\n  aboutUsBtn.classList.add(\"nav-btn\");\r\n  aboutUsBtn.innerText = \"About Us\";\r\n  floatNav.appendChild(aboutUsBtn);\r\n\r\n  const contactUsBtn = document.createElement(\"button\");\r\n  contactUsBtn.classList.add(\"nav-btn\");\r\n  contactUsBtn.innerText = \"Contact Us\";\r\n  floatNav.appendChild(contactUsBtn);\r\n\r\n  return floatNav;\r\n};\r\n\r\nconst toggleNav = () => {\r\n  const nav = document.querySelector(\".float-nav\");\r\n  if (nav.classList.contains(\"hide\")) {\r\n    nav.classList.remove(\"hide\");\r\n  } else {\r\n    nav.classList.add(\"hide\");\r\n  }\r\n};\r\n\r\nconst createNav = () => {\r\n  const nav = document.createElement(\"nav\");\r\n\r\n  const menuIcon = document.createElement(\"img\");\r\n  menuIcon.classList.add(\"menu-icon\");\r\n  menuIcon.src = _assets_menu_icon_svg__WEBPACK_IMPORTED_MODULE_0__;\r\n  menuIcon.addEventListener(\"click\", toggleNav);\r\n  window.addEventListener(\"click\", (e) => {\r\n    const box = document.querySelector(\".float-nav\");\r\n    if (e.target != box && e.target != menuIcon) {\r\n      box.classList.add(\"hide\");\r\n    }\r\n  });\r\n\r\n  nav.appendChild(menuIcon);\r\n  nav.appendChild(createfloatingNav());\r\n\r\n  return nav;\r\n};\r\n\r\nfunction createHeader() {\r\n  const header = document.createElement(\"header\");\r\n\r\n  header.appendChild(createLogo());\r\n  header.appendChild(createNav());\r\n\r\n  return header;\r\n}\r\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _Pages_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pages/home */ \"./src/Pages/home.js\");\n/* harmony import */ var _Pages_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pages/menu */ \"./src/Pages/menu.js\");\n/* harmony import */ var _Pages_about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pages/about */ \"./src/Pages/about.js\");\n/* harmony import */ var _Pages_Contact_Us__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Pages/Contact Us */ \"./src/Pages/Contact Us.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst togglePages = () => {\r\n  const main = document.querySelector(\"#main\");\r\n\r\n  const navBtn = document.querySelectorAll(\".nav-btn\");\r\n  navBtn.forEach((e) => {\r\n    e.addEventListener(\"click\", () => {\r\n      console.log(e);\r\n      if (e.innerText == \"Home\") {\r\n        main.replaceChild((0,_Pages_home__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), main.firstChild);\r\n      } else if (e.innerText == \"Menu\") {\r\n        main.replaceChild((0,_Pages_menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(), main.firstChild);\r\n      } else if (e.innerText == \"About Us\") {\r\n        main.replaceChild((0,_Pages_about__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(), main.firstChild);\r\n      } else if (e.innerText == \"Contact Us\") {\r\n        main.replaceChild((0,_Pages_Contact_Us__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(), main.firstChild);\r\n      }\r\n    });\r\n  });\r\n};\r\n\r\n(function init() {\r\n  const root = document.getElementById(\"root\");\r\n\r\n  const mainSection = document.createElement(\"div\");\r\n  mainSection.setAttribute(\"id\", \"main\");\r\n  mainSection.appendChild((0,_Pages_about__WEBPACK_IMPORTED_MODULE_5__[\"default\"])());\r\n\r\n  root.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n  root.appendChild(mainSection);\r\n  root.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\r\n\r\n  togglePages();\r\n})();\r\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/assets/close-icon.svg":
/*!***********************************!*\
  !*** ./src/assets/close-icon.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/close-icon.svg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/close-icon.svg?");

/***/ }),

/***/ "./src/assets/menu-icon.svg":
/*!**********************************!*\
  !*** ./src/assets/menu-icon.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/menu-icon.svg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/menu-icon.svg?");

/***/ }),

/***/ "./src/assets/steak.jpg":
/*!******************************!*\
  !*** ./src/assets/steak.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/steak.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/steak.jpg?");

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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