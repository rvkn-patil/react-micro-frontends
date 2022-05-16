"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcontainer"] = self["webpackChunkcontainer"] || []).push([["src_components_Products_js"],{

/***/ "./src/components/Products.js":
/*!************************************!*\
  !*** ./src/components/Products.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nvar Products = function Products(_ref) {\n  var userObject = _ref.userObject,\n      revertUser = _ref.revertUser;\n  console.log(\"USER OBJECT::\", userObject);\n  var newUser = {\n    name: \"Harish\",\n    email: \"harish@gmail.com\"\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", {\n    className: \"mfe1-title\"\n  }, \"Products Components\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"product-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", {\n    className: \"mfe1-textStyle\"\n  }, userObject && userObject.name ? userObject.name : 'NA'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h4\", {\n    className: \"mfe1-textStyle\"\n  }, userObject && userObject.email ? userObject.email : 'NA'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    className: \"get-userData\",\n    onClick: function onClick() {\n      revertUser(newUser);\n    }\n  }, \"Get User Data\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\n\n//# sourceURL=webpack://container/./src/components/Products.js?");

/***/ })

}]);