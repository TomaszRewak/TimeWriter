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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../time-writer-event-sourcing/document/event-processing/event-reducer.js":
/*!********************************************************************************!*\
  !*** ../time-writer-event-sourcing/document/event-processing/event-reducer.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EventReducer; });\n/* harmony import */ var _event_reducers_navigation_navigation_event_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-reducers/navigation/navigation-event-reducer */ \"../time-writer-event-sourcing/document/event-processing/event-reducers/navigation/navigation-event-reducer.js\");\n/* harmony import */ var _event_reducers_insertion_insertion_event_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-reducers/insertion/insertion-event-reducer */ \"../time-writer-event-sourcing/document/event-processing/event-reducers/insertion/insertion-event-reducer.js\");\n/* harmony import */ var _event_reducers_deletion_deletion_event_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-reducers/deletion/deletion-event-reducer */ \"../time-writer-event-sourcing/document/event-processing/event-reducers/deletion/deletion-event-reducer.js\");\n/* harmony import */ var _event_reducers_caret_management_caret_management_event_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-reducers/caret-management/caret-management-event-reducer */ \"../time-writer-event-sourcing/document/event-processing/event-reducers/caret-management/caret-management-event-reducer.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\nvar EventReducer =\n/*#__PURE__*/\nfunction () {\n  function EventReducer() {\n    _classCallCheck(this, EventReducer);\n\n    this.insertionEventReducer = new _event_reducers_insertion_insertion_event_reducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.deletionEventReducer = new _event_reducers_deletion_deletion_event_reducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    this.navigationEventReducer = new _event_reducers_navigation_navigation_event_reducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.caretManagementEventReducer = new _event_reducers_caret_management_caret_management_event_reducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n  }\n\n  _createClass(EventReducer, [{\n    key: \"_getReducer\",\n    value: function _getReducer(event) {\n      switch (event.type) {\n        case 'insert':\n          return this.insertionEventReducer;\n\n        case 'delete':\n          return this.deletionEventReducer;\n\n        case 'navigate':\n          return this.navigationEventReducer;\n\n        case 'manage-carets':\n          return this.caretManagementEventReducer;\n\n        default:\n          throw new Error('Event not recognized');\n      }\n    }\n  }, {\n    key: \"reduce\",\n    value: function reduce(document, event) {\n      var reducer = this._getReducer(event);\n\n      return reducer.reduce(document, event);\n    }\n  }]);\n\n  return EventReducer;\n}();\n\n\n\n//# sourceURL=webpack:///../time-writer-event-sourcing/document/event-processing/event-reducer.js?");

/***/ }),

/***/ "../time-writer-event-sourcing/document/event-processing/event-reducers/caret-management/caret-management-event-reducer.js":
/*!*********************************************************************************************************************************!*\
  !*** ../time-writer-event-sourcing/document/event-processing/event-reducers/caret-management/caret-management-event-reducer.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CaretManagementEventReducer; });\n/* harmony import */ var _caret_management_event_reducers_caret_creation_event_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./caret-management-event-reducers/caret-creation-event-reducer */ \"../time-writer-event-sourcing/document/event-processing/event-reducers/caret-management/caret-management-event-reducers/caret-creation-event-reducer.js\");\n/* harmony import */ var _caret_management_event_reducers_caret_removal_event_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./caret-management-event-reducers/caret-removal-event-reducer */ \"../time-writer-event-sourcing/document/event-processing/event-reducers/caret-management/caret-management-event-reducers/caret-removal-event-reducer.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar CaretManagementEventReducer =\n/*#__PURE__*/\nfunction () {\n  function CaretManagementEventReducer() {\n    _classCallCheck(this, CaretManagementEventReducer);\n\n    this.caretCreationEventReducer = new _caret_management_event_reducers_caret_creation_event_reducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.caretRemovalEventReducer = new _caret_management_event_reducers_caret_removal_event_reducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  }\n\n  _createClass(CaretManagementEventReducer, [{\n    key: \"reduce\",\n    value: function reduce(document, event) {\n      var reducer = this._getReducer(event);\n\n      return reducer.reduce(document, event);\n    }\n  }, {\n    key: \"_getReducer\",\n    value: function _getReducer(event) {\n      switch (event.operation) {\n        case 'add-caret':\n          return this.caretCreationEventReducer;\n\n        case 'remove-carets':\n          return this.caretRemovalEventReducer;\n      }\n    }\n  }]);\n\n  return CaretManagementEventReducer;\n}();\n\n\n\n//# sourceURL=webpack:///../time-writer-event-sourcing/document/event-processing/event-reducers/caret-management/caret-management-event-reducer.js?");

/***/ }),

/***/ "../time-writer-event-sourcing/document/event-processing/event-reducers/caret-management/caret-management-event-reducers/caret-creation-event-reducer.js":
/*!***************************************************************************************************************************************************************!*\
  !*** ../time-writer-event-sourcing/document/event-processing/event-reducers/caret-management/caret-management-event-reducers/caret-creation-event-reducer.js ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CaretCreationEventReducer; });\n/* harmony import */ var _services_text_navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/text-navigation-service */ \"../time-writer-event-sourcing/services/text-navigation-service.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar CaretCreationEventReducer =\n/*#__PURE__*/\nfunction () {\n  function CaretCreationEventReducer() {\n    _classCallCheck(this, CaretCreationEventReducer);\n\n    this._textNavigationService = new _services_text_navigation_service__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  }\n\n  _createClass(CaretCreationEventReducer, [{\n    key: \"reduce\",\n    value: function reduce(document, event) {\n      return _objectSpread({}, document, {\n        carets: this._reduceCarets(document, event)\n      });\n    }\n  }, {\n    key: \"_reduceCarets\",\n    value: function _reduceCarets(document, event) {\n      var position = this._textNavigationService.getCaretPosition(document.text, event.coordinates);\n\n      return _toConsumableArray(document.carets).concat([{\n        owner: event.author,\n        position: position,\n        lastOperation: 'creation'\n      }]);\n    }\n  }]);\n\n  return CaretCreationEventReducer;\n}();\n\n\n\n//# sourceURL=webpack:///../time-writer-event-sourcing/document/event-processing/event-reducers/caret-management/caret-management-event-reducers/caret-creation-event-reducer.js?");

/***/ }),

/***/ "../time-writer-event-sourcing/document/event-processing/event-reducers/caret-management/caret-management-event-reducers/caret-removal-event-reducer.js":
/*!**************************************************************************************************************************************************************!*\
  !*** ../time-writer-event-sourcing/document/event-processing/event-reducers/caret-management/caret-management-event-reducers/caret-removal-event-reducer.js ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CaretRemovalEventReducer; });\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar CaretRemovalEventReducer =\n/*#__PURE__*/\nfunction () {\n  function CaretRemovalEventReducer() {\n    _classCallCheck(this, CaretRemovalEventReducer);\n  }\n\n  _createClass(CaretRemovalEventReducer, [{\n    key: \"reduce\",\n    value: function reduce(document, event) {\n      return _objectSpread({}, document, {\n        carets: this._reduceCarets(document.carets, event)\n      });\n    }\n  }, {\n    key: \"_reduceCarets\",\n    value: function _reduceCarets(carets, event) {\n      return carets.filter(function (caret) {\n        return caret.owner != event.author;\n      });\n    }\n  }]);\n\n  return CaretRemovalEventReducer;\n}();\n\n\n\n//# sourceURL=webpack:///../time-writer-event-sourcing/document/event-processing/event-reducers/caret-management/caret-management-event-reducers/caret-removal-event-reducer.js?");

/***/ }),

/***/ "../time-writer-event-sourcing/document/event-processing/event-reducers/deletion/deletion-event-caret-reducer.js":
/*!***********************************************************************************************************************!*\
  !*** ../time-writer-event-sourcing/document/event-processing/event-reducers/deletion/deletion-event-caret-reducer.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DeletionEventCaretReducer; });\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar DeletionEventCaretReducer =\n/*#__PURE__*/\nfunction () {\n  function DeletionEventCaretReducer() {\n    _classCallCheck(this, DeletionEventCaretReducer);\n  }\n\n  _createClass(DeletionEventCaretReducer, [{\n    key: \"reduce\",\n    value: function reduce(document, event) {\n      var _this = this;\n\n      switch (event.mode) {\n        case 'backward':\n          return document.carets.map(function (caret) {\n            return _this._reduceCaretBackward(document, caret, event);\n          });\n\n        case 'forward':\n          return document.carets.map(function (caret) {\n            return _this._reduceCaretForward(document, caret, event);\n          });\n      }\n    }\n  }, {\n    key: \"_reduceCaretBackward\",\n    value: function _reduceCaretBackward(document, caret, event) {\n      if (caret.position < event.caret.position) return caret;\n      return _objectSpread({}, caret, {\n        position: Math.max(0, caret.position - event.length),\n        lastOperation: 'deletion backward'\n      });\n    }\n  }, {\n    key: \"_reduceCaretForward\",\n    value: function _reduceCaretForward(document, caret, event) {\n      if (caret.position <= event.caret.position) return caret;\n      return _objectSpread({}, caret, {\n        position: Math.min(document.text.length - event.length, caret.position - event.length),\n        lastOperation: 'deletion forward'\n      });\n    }\n  }]);\n\n  return DeletionEventCaretReducer;\n}();\n\n\n\n//# sourceURL=webpack:///../time-writer-event-sourcing/document/event-processing/event-reducers/deletion/deletion-event-caret-reducer.js?");

/***/ }),

/***/ "../time-writer-event-sourcing/document/event-processing/event-reducers/deletion/deletion-event-reducer.js":
/*!*****************************************************************************************************************!*\
  !*** ../time-writer-event-sourcing/document/event-processing/event-reducers/deletion/deletion-event-reducer.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DeletionEventReducer; });\n/* harmony import */ var _deletion_event_text_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deletion-event-text-reducer */ \"../time-writer-event-sourcing/document/event-processing/event-reducers/deletion/deletion-event-text-reducer.js\");\n/* harmony import */ var _deletion_event_caret_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deletion-event-caret-reducer */ \"../time-writer-event-sourcing/document/event-processing/event-reducers/deletion/deletion-event-caret-reducer.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar DeletionEventReducer =\n/*#__PURE__*/\nfunction () {\n  function DeletionEventReducer() {\n    _classCallCheck(this, DeletionEventReducer);\n\n    this._textReducer = new _deletion_event_text_reducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this._caretReducer = new _deletion_event_caret_reducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  }\n\n  _createClass(DeletionEventReducer, [{\n    key: \"reduce\",\n    value: function reduce(document, event) {\n      for (var caret in document.carets) {\n        document = this._reduceUsingCaret(document, event, document.carets[caret]);\n      }\n\n      return document;\n    }\n  }, {\n    key: \"_reduceUsingCaret\",\n    value: function _reduceUsingCaret(document, event, caret) {\n      if (event.author !== caret.owner) return document;\n      event = _objectSpread({}, event, {\n        caret: caret\n      });\n      return _objectSpread({}, document, {\n        text: this._textReducer.reduce(document, event),\n        carets: this._caretReducer.reduce(document, event)\n      });\n    }\n  }]);\n\n  return DeletionEventReducer;\n}();\n\n\n\n//# sourceURL=webpack:///../time-writer-event-sourcing/document/event-processing/event-reducers/deletion/deletion-event-reducer.js?");

/***/ }),

/***/ "../time-writer-event-sourcing/document/event-processing/event-reducers/deletion/deletion-event-text-reducer.js":
/*!**********************************************************************************************************************!*\
  !*** ../time-writer-event-sourcing/document/event-processing/event-reducers/deletion/deletion-event-text-reducer.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DeletionEventTextReducer; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar DeletionEventTextReducer =\n/*#__PURE__*/\nfunction () {\n  function DeletionEventTextReducer() {\n    _classCallCheck(this, DeletionEventTextReducer);\n  }\n\n  _createClass(DeletionEventTextReducer, [{\n    key: \"reduce\",\n    value: function reduce(document, event) {\n      switch (event.mode) {\n        case 'backward':\n          return this._removeBackward(document, event);\n\n        case 'forward':\n          return this._removeForward(document, event);\n      }\n    }\n  }, {\n    key: \"_removeBackward\",\n    value: function _removeBackward(document, event) {\n      var firstTextPart = document.text.substring(0, event.caret.position - event.length);\n      var secondTextPart = document.text.substring(event.caret.position);\n      return \"\".concat(firstTextPart).concat(secondTextPart);\n    }\n  }, {\n    key: \"_removeForward\",\n    value: function _removeForward(document, event) {\n      var firstTextPart = document.text.substring(0, event.caret.position);\n      var secondTextPart = document.text.substring(event.caret.position + event.length);\n      return \"\".concat(firstTextPart).concat(secondTextPart);\n    }\n  }]);\n\n  return DeletionEventTextReducer;\n}();\n\n\n\n//# sourceURL=webpack:///../time-writer-event-sourcing/document/event-processing/event-reducers/deletion/deletion-event-text-reducer.js?");

/***/ }),

/***/ "../time-writer-event-sourcing/document/event-processing/event-reducers/insertion/insertion-event-caret-reducer.js":
/*!*************************************************************************************************************************!*\
  !*** ../time-writer-event-sourcing/document/event-processing/event-reducers/insertion/insertion-event-caret-reducer.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InsertionEventCaretReducer; });\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar InsertionEventCaretReducer =\n/*#__PURE__*/\nfunction () {\n  function InsertionEventCaretReducer() {\n    _classCallCheck(this, InsertionEventCaretReducer);\n  }\n\n  _createClass(InsertionEventCaretReducer, [{\n    key: \"reduce\",\n    value: function reduce(document, event) {\n      var _this = this;\n\n      return document.carets.map(function (caret) {\n        return _this._reduceCaret(caret, event);\n      });\n    }\n  }, {\n    key: \"_reduceCaret\",\n    value: function _reduceCaret(caret, event) {\n      if (caret.position < event.caret.position) return caret;\n      return _objectSpread({}, caret, {\n        position: caret.position + event.text.length,\n        lastOperation: 'insertion'\n      });\n    }\n  }]);\n\n  return InsertionEventCaretReducer;\n}();\n\n\n\n//# sourceURL=webpack:///../time-writer-event-sourcing/document/event-processing/event-reducers/insertion/insertion-event-caret-reducer.js?");

/***/ }),

/***/ "../time-writer-event-sourcing/document/event-processing/event-reducers/insertion/insertion-event-pre-processor.js":
/*!*************************************************************************************************************************!*\
  !*** ../time-writer-event-sourcing/document/event-processing/event-reducers/insertion/insertion-event-pre-processor.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InsertionEventPreProcessor; });\n/* harmony import */ var _services_text_formatting_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/text-formatting-service */ \"../time-writer-event-sourcing/services/text-formatting-service.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar InsertionEventPreProcessor =\n/*#__PURE__*/\nfunction () {\n  function InsertionEventPreProcessor() {\n    _classCallCheck(this, InsertionEventPreProcessor);\n\n    this._textFormattingService = new _services_text_formatting_service__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  }\n\n  _createClass(InsertionEventPreProcessor, [{\n    key: \"prepareEvent\",\n    value: function prepareEvent(document, event, caret) {\n      return _objectSpread({}, event, {\n        text: this._prepareEventText(document, event, caret),\n        caret: caret\n      });\n    }\n  }, {\n    key: \"_prepareEventText\",\n    value: function _prepareEventText(document, event, caret) {\n      if (event.text !== '\\n') return event.text;\n\n      var indent = this._textFormattingService.getIndentAtPosition(document.text, caret.position);\n\n      return \"\\n\".concat('\\t'.repeat(indent));\n    }\n  }]);\n\n  return InsertionEventPreProcessor;\n}();\n\n\n\n//# sourceURL=webpack:///../time-writer-event-sourcing/document/event-processing/event-reducers/insertion/insertion-event-pre-processor.js?");

/***/ }),

/***/ "../time-writer-event-sourcing/document/event-processing/event-reducers/insertion/insertion-event-reducer.js":
/*!*******************************************************************************************************************!*\
  !*** ../time-writer-event-sourcing/document/event-processing/event-reducers/insertion/insertion-event-reducer.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InsertionEventReducer; });\n/* harmony import */ var _insertion_event_text_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./insertion-event-text-reducer */ \"../time-writer-event-sourcing/document/event-processing/event-reducers/insertion/insertion-event-text-reducer.js\");\n/* harmony import */ var _insertion_event_caret_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insertion-event-caret-reducer */ \"../time-writer-event-sourcing/document/event-processing/event-reducers/insertion/insertion-event-caret-reducer.js\");\n/* harmony import */ var _insertion_event_pre_processor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./insertion-event-pre-processor */ \"../time-writer-event-sourcing/document/event-processing/event-reducers/insertion/insertion-event-pre-processor.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar InsertionEventReducer =\n/*#__PURE__*/\nfunction () {\n  function InsertionEventReducer() {\n    _classCallCheck(this, InsertionEventReducer);\n\n    this._eventPreProcessor = new _insertion_event_pre_processor__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    this._textReducer = new _insertion_event_text_reducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this._caretReducer = new _insertion_event_caret_reducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  }\n\n  _createClass(InsertionEventReducer, [{\n    key: \"reduce\",\n    value: function reduce(document, event) {\n      for (var caret in document.carets) {\n        document = this._reduceUsingCaret(document, event, document.carets[caret]);\n      }\n\n      return document;\n    }\n  }, {\n    key: \"_reduceUsingCaret\",\n    value: function _reduceUsingCaret(document, event, caret) {\n      if (event.author !== caret.owner) return document;\n      event = this._eventPreProcessor.prepareEvent(document, event, caret);\n      return _objectSpread({}, document, {\n        text: this._textReducer.reduce(document, event),\n        carets: this._caretReducer.reduce(document, event)\n      });\n    }\n  }]);\n\n  return InsertionEventReducer;\n}();\n\n\n\n//# sourceURL=webpack:///../time-writer-event-sourcing/document/event-processing/event-reducers/insertion/insertion-event-reducer.js?");

/***/ }),

/***/ "../time-writer-event-sourcing/document/event-processing/event-reducers/insertion/insertion-event-text-reducer.js":
/*!************************************************************************************************************************!*\
  !*** ../time-writer-event-sourcing/document/event-processing/event-reducers/insertion/insertion-event-text-reducer.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InsertionEventTextReducer; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar InsertionEventTextReducer =\n/*#__PURE__*/\nfunction () {\n  function InsertionEventTextReducer() {\n    _classCallCheck(this, InsertionEventTextReducer);\n  }\n\n  _createClass(InsertionEventTextReducer, [{\n    key: \"reduce\",\n    value: function reduce(document, event) {\n      var firstTextPart = document.text.substring(0, event.caret.position);\n      var secondTextPart = document.text.substring(event.caret.position);\n      return \"\".concat(firstTextPart).concat(event.text).concat(secondTextPart);\n    }\n  }]);\n\n  return InsertionEventTextReducer;\n}();\n\n\n\n//# sourceURL=webpack:///../time-writer-event-sourcing/document/event-processing/event-reducers/insertion/insertion-event-text-reducer.js?");

/***/ }),

/***/ "../time-writer-event-sourcing/document/event-processing/event-reducers/navigation/navigation-event-reducer.js":
/*!*********************************************************************************************************************!*\
  !*** ../time-writer-event-sourcing/document/event-processing/event-reducers/navigation/navigation-event-reducer.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NavigationEventReducer; });\n/* harmony import */ var _navigation_event_reducers_vertical_navigation_event_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation-event-reducers/vertical-navigation-event-reducer */ \"../time-writer-event-sourcing/document/event-processing/event-reducers/navigation/navigation-event-reducers/vertical-navigation-event-reducer.js\");\n/* harmony import */ var _navigation_event_reducers_horizontal_navigation_event_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation-event-reducers/horizontal-navigation-event-reducer */ \"../time-writer-event-sourcing/document/event-processing/event-reducers/navigation/navigation-event-reducers/horizontal-navigation-event-reducer.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar NavigationEventReducer =\n/*#__PURE__*/\nfunction () {\n  function NavigationEventReducer() {\n    _classCallCheck(this, NavigationEventReducer);\n\n    this.verticalNavigationEventReducer = new _navigation_event_reducers_vertical_navigation_event_reducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.horizontalNavigationEventReducer = new _navigation_event_reducers_horizontal_navigation_event_reducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  }\n\n  _createClass(NavigationEventReducer, [{\n    key: \"reduce\",\n    value: function reduce(document, event) {\n      var reducer = this._getReducer(event);\n\n      return reducer.reduce(document, event);\n    }\n  }, {\n    key: \"_getReducer\",\n    value: function _getReducer(event) {\n      switch (event.mode) {\n        case 'move-horizontally':\n          return this.horizontalNavigationEventReducer;\n\n        case 'move-vertically':\n          return this.verticalNavigationEventReducer;\n      }\n    }\n  }]);\n\n  return NavigationEventReducer;\n}();\n\n\n\n//# sourceURL=webpack:///../time-writer-event-sourcing/document/event-processing/event-reducers/navigation/navigation-event-reducer.js?");

/***/ }),

/***/ "../time-writer-event-sourcing/document/event-processing/event-reducers/navigation/navigation-event-reducers/horizontal-navigation-event-reducer.js":
/*!**********************************************************************************************************************************************************!*\
  !*** ../time-writer-event-sourcing/document/event-processing/event-reducers/navigation/navigation-event-reducers/horizontal-navigation-event-reducer.js ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HorizontalNavigationEventReducer; });\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar HorizontalNavigationEventReducer =\n/*#__PURE__*/\nfunction () {\n  function HorizontalNavigationEventReducer() {\n    _classCallCheck(this, HorizontalNavigationEventReducer);\n  }\n\n  _createClass(HorizontalNavigationEventReducer, [{\n    key: \"reduce\",\n    value: function reduce(document, event) {\n      var _this = this;\n\n      var maxPosition = document.text.length;\n      return _objectSpread({}, document, {\n        carets: document.carets.map(function (caret) {\n          return _this._reduceCaret(caret, maxPosition, event);\n        })\n      });\n    }\n  }, {\n    key: \"_reduceCaret\",\n    value: function _reduceCaret(caret, maxPosition, event) {\n      if (caret.owner !== event.author) return caret;\n      return _objectSpread({}, caret, {\n        position: Math.max(0, Math.min(maxPosition, caret.position + event.offset)),\n        lastOperation: 'navigation horizontal'\n      });\n    }\n  }]);\n\n  return HorizontalNavigationEventReducer;\n}();\n\n\n\n//# sourceURL=webpack:///../time-writer-event-sourcing/document/event-processing/event-reducers/navigation/navigation-event-reducers/horizontal-navigation-event-reducer.js?");

/***/ }),

/***/ "../time-writer-event-sourcing/document/event-processing/event-reducers/navigation/navigation-event-reducers/vertical-navigation-event-reducer.js":
/*!********************************************************************************************************************************************************!*\
  !*** ../time-writer-event-sourcing/document/event-processing/event-reducers/navigation/navigation-event-reducers/vertical-navigation-event-reducer.js ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return VerticalNavigationEventReducer; });\n/* harmony import */ var _services_text_navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/text-navigation-service */ \"../time-writer-event-sourcing/services/text-navigation-service.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar VerticalNavigationEventReducer =\n/*#__PURE__*/\nfunction () {\n  function VerticalNavigationEventReducer() {\n    _classCallCheck(this, VerticalNavigationEventReducer);\n\n    this.textNavigationService = new _services_text_navigation_service__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  }\n\n  _createClass(VerticalNavigationEventReducer, [{\n    key: \"reduce\",\n    value: function reduce(document, event) {\n      var _this = this;\n\n      var text = document.text;\n      return _objectSpread({}, document, {\n        carets: document.carets.map(function (caret) {\n          return _this._reduceCaret(text, caret, event);\n        })\n      });\n    }\n  }, {\n    key: \"_reduceCaret\",\n    value: function _reduceCaret(text, caret, event) {\n      if (caret.owner !== event.author) return caret;\n      return this._reduceOwnedCaret(text, caret, event);\n    }\n  }, {\n    key: \"_reduceOwnedCaret\",\n    value: function _reduceOwnedCaret(text, caret, event) {\n      var caretCoordinates = this.textNavigationService.getCaretCoordinates(text, caret.position);\n\n      var newCaretCoordinates = this._reduceCaretCoordinatesBy(caret, caretCoordinates, event.offset);\n\n      var newCaretPosition = this.textNavigationService.getCaretPosition(text, newCaretCoordinates);\n      return _objectSpread({}, caret, {\n        position: newCaretPosition,\n        lastOperation: 'navigation vertical',\n        verticalNavigationColumn: newCaretCoordinates.column\n      });\n    }\n  }, {\n    key: \"_reduceCaretCoordinatesBy\",\n    value: function _reduceCaretCoordinatesBy(caret, coordinates, offset) {\n      var column = caret.lastOperation !== 'navigation vertical' ? coordinates.column : caret.verticalNavigationColumn;\n      return {\n        column: column,\n        line: coordinates.line + offset\n      };\n    }\n  }]);\n\n  return VerticalNavigationEventReducer;\n}();\n\n\n\n//# sourceURL=webpack:///../time-writer-event-sourcing/document/event-processing/event-reducers/navigation/navigation-event-reducers/vertical-navigation-event-reducer.js?");

/***/ }),

/***/ "../time-writer-event-sourcing/document/event-processing/event-store.js":
/*!******************************************************************************!*\
  !*** ../time-writer-event-sourcing/document/event-processing/event-store.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EventStore; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar EventStore =\n/*#__PURE__*/\nfunction () {\n  function EventStore() {\n    _classCallCheck(this, EventStore);\n\n    this.eventChain = null;\n  }\n\n  _createClass(EventStore, [{\n    key: \"addEvent\",\n    value: function addEvent(event) {\n      this.eventChain = {\n        event: event,\n        next: this.eventChain\n      };\n    }\n  }, {\n    key: \"popEvent\",\n    value: function popEvent() {\n      var lastEvent = this.lastEvent();\n      this.removeLastEvent();\n      return lastEvent;\n    }\n  }, {\n    key: \"removeLastEvent\",\n    value: function removeLastEvent() {\n      this.eventChain = this.eventChain.next;\n    }\n  }, {\n    key: \"hasEvents\",\n    value: function hasEvents() {\n      return this.eventChain !== null;\n    }\n  }, {\n    key: \"lastEvent\",\n    value: function lastEvent() {\n      return this.eventChain.event;\n    }\n  }]);\n\n  return EventStore;\n}();\n\n\n\n//# sourceURL=webpack:///../time-writer-event-sourcing/document/event-processing/event-store.js?");

/***/ }),

/***/ "../time-writer-event-sourcing/document/text-document.js":
/*!***************************************************************!*\
  !*** ../time-writer-event-sourcing/document/text-document.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TextDocument; });\n/* harmony import */ var _event_processing_event_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-processing/event-store */ \"../time-writer-event-sourcing/document/event-processing/event-store.js\");\n/* harmony import */ var _event_processing_event_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-processing/event-reducer */ \"../time-writer-event-sourcing/document/event-processing/event-reducer.js\");\n/* harmony import */ var _samples_sample_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../samples/sample-text */ \"../time-writer-event-sourcing/samples/sample-text.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar TextDocument =\n/*#__PURE__*/\nfunction () {\n  function TextDocument(state) {\n    _classCallCheck(this, TextDocument);\n\n    if (!state) state = {\n      carets: [],\n      text: ''\n    };\n    this._documentState = state;\n    this._eventStore = new _event_processing_event_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this._eventReducer = new _event_processing_event_reducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  }\n\n  _createClass(TextDocument, [{\n    key: \"addEvent\",\n    value: function addEvent(event) {\n      if (this._requiresReversal(event)) this._undermineLastEvent(event);else this._applyEvent(event);\n    }\n  }, {\n    key: \"_requiresReversal\",\n    value: function _requiresReversal(event) {\n      return this._eventStore.hasEvents() && this._eventStore.lastEvent().timeStamp > event.timeStamp;\n    }\n  }, {\n    key: \"_undermineLastEvent\",\n    value: function _undermineLastEvent(event) {\n      var lastEvent = this._eventStore.popEvent();\n\n      this.addEvent(event);\n      this.addEvent(lastEvent);\n    }\n  }, {\n    key: \"_applyEvent\",\n    value: function _applyEvent(event) {\n      this._documentState = this._eventReducer.reduce(this._documentState, event);\n    }\n  }, {\n    key: \"state\",\n    get: function get() {\n      return this._documentState;\n    }\n  }]);\n\n  return TextDocument;\n}();\n\n\n\n//# sourceURL=webpack:///../time-writer-event-sourcing/document/text-document.js?");

/***/ }),

/***/ "../time-writer-event-sourcing/samples/sample-text.js":
/*!************************************************************!*\
  !*** ../time-writer-event-sourcing/samples/sample-text.js ***!
  \************************************************************/
/*! exports provided: shakspeareSampleText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shakspeareSampleText\", function() { return shakspeareSampleText; });\nvar shakspeareSampleText = \"Peace, ho, for shame! confusion's cure lives not\\nIn these confusions. Heaven and yourself\\nHad part in this fair maid; now heaven hath all,\\nAnd all the better is it for the maid:\\nYour part in her you could not keep from death,\\nBut heaven keeps his part in eternal life.\\nThe most you sought was her promotion;\\nFor 'twas your heaven she should be advanced:\\nAnd weep ye now, seeing she is advanced\\nAbove the clouds, as high as heaven itself?\\nO, in this love, you love your child so ill,\\nThat you run mad, seeing that she is well:\\nShe's not well married that lives married long;\\nBut she's best married that dies married young.\\nDry up your tears, and stick your rosemary\\nOn this fair corse; and, as the custom is,\\nIn all her best array bear her to church:\\nFor though fond nature bids us an lament,\\nYet nature's tears are reason's merriment.\\n\";\n\n\n//# sourceURL=webpack:///../time-writer-event-sourcing/samples/sample-text.js?");

/***/ }),

/***/ "../time-writer-event-sourcing/services/text-formatting-service.js":
/*!*************************************************************************!*\
  !*** ../time-writer-event-sourcing/services/text-formatting-service.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TextFormattingService; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar TextFormattingService =\n/*#__PURE__*/\nfunction () {\n  function TextFormattingService() {\n    _classCallCheck(this, TextFormattingService);\n  }\n\n  _createClass(TextFormattingService, [{\n    key: \"getIndentAtPosition\",\n    value: function getIndentAtPosition(text, position) {\n      var indent = 0;\n\n      for (var i = position - 1; i >= 0 && text[i] !== '\\n'; i--) {\n        indent = this._reduceIndent(indent, text[i]);\n      }\n\n      return indent;\n    }\n  }, {\n    key: \"_reduceIndent\",\n    value: function _reduceIndent(indent, character) {\n      if (character === '\\t') return indent + 1;else return 0;\n    }\n  }]);\n\n  return TextFormattingService;\n}();\n\n\n\n//# sourceURL=webpack:///../time-writer-event-sourcing/services/text-formatting-service.js?");

/***/ }),

/***/ "../time-writer-event-sourcing/services/text-navigation-service.js":
/*!*************************************************************************!*\
  !*** ../time-writer-event-sourcing/services/text-navigation-service.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TextNavigationService; });\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar TextNavigationService =\n/*#__PURE__*/\nfunction () {\n  function TextNavigationService() {\n    _classCallCheck(this, TextNavigationService);\n  }\n\n  _createClass(TextNavigationService, [{\n    key: \"countLines\",\n    value: function countLines(text) {\n      var counter = 1;\n\n      for (var i = 0; i < text.length; i++) {\n        if (text[i] === '\\n') counter++;\n      }\n\n      return counter;\n    }\n  }, {\n    key: \"getCaretCoordinates\",\n    value: function getCaretCoordinates(text, position) {\n      position = this._clipPosition(position, text);\n      var coordinates = {\n        line: 0,\n        column: 0\n      };\n\n      for (var i = 0; i < position; i++) {\n        coordinates = this._reduceCoordinates(coordinates, text[i]);\n      }\n\n      return coordinates;\n    }\n  }, {\n    key: \"getCaretPosition\",\n    value: function getCaretPosition(text, coordinates) {\n      var position = 0;\n      var pointerCoordinates = {\n        line: 0,\n        column: 0\n      };\n\n      var targetCoordinates = this._clipCoordinates(coordinates, text);\n\n      while (pointerCoordinates.line < targetCoordinates.line && position < text.length) {\n        pointerCoordinates = this._reduceCoordinates(pointerCoordinates, text[position++]);\n      }\n\n      while (pointerCoordinates.column < targetCoordinates.column && position < text.length && text[position] !== '\\n') {\n        pointerCoordinates = this._reduceCoordinates(pointerCoordinates, text[position++]);\n      }\n\n      return position;\n    }\n  }, {\n    key: \"_clipPosition\",\n    value: function _clipPosition(position, text) {\n      return Math.max(0, Math.min(text.length, position));\n    }\n  }, {\n    key: \"_clipCoordinates\",\n    value: function _clipCoordinates(coordinates, text) {\n      return _objectSpread({}, coordinates, {\n        line: this._clipLine(coordinates.line, text)\n      });\n    }\n  }, {\n    key: \"_clipLine\",\n    value: function _clipLine(line, text) {\n      var linesNumber = this.countLines(text);\n      return Math.max(0, Math.min(linesNumber - 1, line));\n    }\n  }, {\n    key: \"_reduceCoordinates\",\n    value: function _reduceCoordinates(coordinates, character) {\n      var tabSize = 4;\n\n      switch (character) {\n        case '\\n':\n          return {\n            column: 0,\n            line: coordinates.line + 1\n          };\n\n        case '\\t':\n          return {\n            column: coordinates.column + tabSize,\n            line: coordinates.line\n          };\n\n        default:\n          return {\n            column: coordinates.column + 1,\n            line: coordinates.line\n          };\n      }\n    }\n  }]);\n\n  return TextNavigationService;\n}();\n\n\n\n//# sourceURL=webpack:///../time-writer-event-sourcing/services/text-navigation-service.js?");

/***/ }),

/***/ "./documents/document-repository.js":
/*!******************************************!*\
  !*** ./documents/document-repository.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _time_writer_event_sourcing_document_text_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../time-writer-event-sourcing/document/text-document */ \"../time-writer-event-sourcing/document/text-document.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar DocumentRepository =\n/*#__PURE__*/\nfunction () {\n  function DocumentRepository() {\n    _classCallCheck(this, DocumentRepository);\n\n    this._documents = new Map();\n  }\n\n  _createClass(DocumentRepository, [{\n    key: \"getDocument\",\n    value: function getDocument(documentId) {\n      this._createIfDoesntExist(documentId);\n\n      return this._documents.get(documentId);\n    }\n  }, {\n    key: \"_createIfDoesntExist\",\n    value: function _createIfDoesntExist(documentId) {\n      if (!this._documents.has(documentId)) this._documents.set(documentId, new _time_writer_event_sourcing_document_text_document__WEBPACK_IMPORTED_MODULE_0__[\"default\"]());\n    }\n  }]);\n\n  return DocumentRepository;\n}();\n\nvar documentRepository = new DocumentRepository();\n/* harmony default export */ __webpack_exports__[\"default\"] = (documentRepository);\n\n//# sourceURL=webpack:///./documents/document-repository.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io */ \"socket.io\");\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _documents_document_repository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../documents/document-repository */ \"./documents/document-repository.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nvar port = process.env.PORT || 1337;\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.static(path__WEBPACK_IMPORTED_MODULE_3___default.a.join(__dirname, 'public')));\napp.use(cors__WEBPACK_IMPORTED_MODULE_4___default()({\n  origin: ['http://localhost:8080', 'http://text-sourcing.tomasz-rewak.com']\n}));\napp.get(['/document/:documentId'], function (req, res) {\n  var documentState = _documents_document_repository__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getDocument(req.params.documentId).state;\n  res.json(documentState);\n});\nvar server = http__WEBPACK_IMPORTED_MODULE_0___default.a.Server(app);\nvar io = new socket_io__WEBPACK_IMPORTED_MODULE_2___default.a(server);\nio.origins(['http://localhost:8080', 'http://text-sourcing.tomasz-rewak.com:80']);\nio.on('connection', function (socket) {\n  console.log('Got connected!');\n  var documentId = socket.handshake.query.document;\n  console.dir(documentId);\n  var document = _documents_document_repository__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getDocument(documentId);\n\n  var add = function add(event) {\n    console.log(event);\n    document.addEvent(event);\n    socket.broadcast.emit('document change', event);\n  };\n\n  socket.on('document change', function (event, callback) {\n    var timestamp = Date.now();\n\n    var signedEvent = _objectSpread({}, event, {\n      timestamp: timestamp,\n      author: socket.id\n    });\n\n    add(signedEvent);\n    callback(timestamp);\n  });\n  socket.on('disconnect', function () {\n    console.log('Got disconnected!');\n    add({\n      author: socket.id,\n      type: 'manage-carets',\n      operation: 'remove-carets'\n    });\n  });\n});\nserver.listen(port, function () {\n  return console.log(\"Example app listening on port \".concat(port, \"!\"));\n});\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./src/server.js?");

/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi @babel/polyfill ./src/server.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/polyfill */\"@babel/polyfill\");\nmodule.exports = __webpack_require__(/*! ./src/server.js */\"./src/server.js\");\n\n\n//# sourceURL=webpack:///multi_@babel/polyfill_./src/server.js?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"socket.io\");\n\n//# sourceURL=webpack:///external_%22socket.io%22?");

/***/ })

/******/ });