/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "app2";
exports.ids = ["app2"];
exports.modules = {

/***/ "webpack/container/entry/app2":
/*!***********************!*\
  !*** container entry ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var moduleMap = {
	"./index": function() {
		return Promise.all([__webpack_require__.e("vendors-node_modules_object-assign_index_js"), __webpack_require__.e("vendors-node_modules_react_jsx-dev-runtime_js"), __webpack_require__.e("pages_index_tsx")]).then(function() { return function() { return (__webpack_require__(/*! ./pages/index */ "./pages/index.tsx")); }; });
	}
};
var get = function(module, getScope) {
	__webpack_require__.R = getScope;
	getScope = (
		__webpack_require__.o(moduleMap, module)
			? moduleMap[module]()
			: Promise.resolve().then(function() {
				throw new Error('Module "' + module + '" does not exist in container.');
			})
	);
	__webpack_require__.R = undefined;
	return getScope;
};
var init = function(shareScope, initScope) {
	if (!__webpack_require__.S) return;
	var oldScope = __webpack_require__.S["default"];
	var name = "default"
	if(oldScope && oldScope !== shareScope) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
	__webpack_require__.S[name] = shareScope;
	return __webpack_require__.I(name, initScope);
};

// This exports getters to disallow modifications
__webpack_require__.d(exports, {
	get: function() { return get; },
	init: function() { return init; }
});

/***/ }),

/***/ "react":
/*!*******************************************************************************************************!*\
  !*** external "/Users/lelianto/Documents/mf/app2/node_modules/@module-federation/nextjs-mf/react.js" ***!
  \*******************************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("/Users/lelianto/Documents/mf/app2/node_modules/@module-federation/nextjs-mf/react.js");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("webpack/container/entry/app2"));
module.exports.app2 = __webpack_exports__;

})();