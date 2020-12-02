webpackHotUpdate_N_E("pages/index",{

/***/ "./components/splash-screen/splash-screen.component.js":
/*!*************************************************************!*\
  !*** ./components/splash-screen/splash-screen.component.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SplashScreen; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n\nvar _jsxFileName = \"/Users/matteocavallo/Desktop/avvento-elis/components/splash-screen/splash-screen.component.js\";\n\nfunction SplashScreen({\n  handleClick\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Center\"], {\n    h: \"100vh\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n      spacing: 6,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n        children: \"Avvento dell'Elis \\uD83C\\uDF84\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Box, {\n      maxW: \"32rem\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n        mb: 4,\n        children: \"Modern online and offline payments for Africa\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n        children: \"Benvenuti, ragazze e ragazzi. All'interno del calendario dell'avento dell'Elis.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Button, {\n        size: \"lg\",\n        colorScheme: \"green\",\n        mt: \"24px\",\n        children: \"Create a free account\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}\n_c = SplashScreen;\n\nvar _c;\n\n$RefreshReg$(_c, \"SplashScreen\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zcGxhc2gtc2NyZWVuL3NwbGFzaC1zY3JlZW4uY29tcG9uZW50LmpzP2JmMGEiXSwibmFtZXMiOlsiU3BsYXNoU2NyZWVuIiwiaGFuZGxlQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLFlBQVQsQ0FBc0I7QUFBRUM7QUFBRixDQUF0QixFQUF1QztBQUNwRCxzQkFDRSxxRUFBQyx1REFBRDtBQUFRLEtBQUMsRUFBQyxPQUFWO0FBQUEsNEJBQ0UscUVBQUMsc0RBQUQ7QUFBTyxhQUFPLEVBQUUsQ0FBaEI7QUFBQSw2QkFDRSxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFLHFFQUFDLEdBQUQ7QUFBSyxVQUFJLEVBQUMsT0FBVjtBQUFBLDhCQUNFLHFFQUFDLHdEQUFEO0FBQVMsVUFBRSxFQUFFLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFNRSxxRUFBQyxNQUFEO0FBQVEsWUFBSSxFQUFDLElBQWI7QUFBa0IsbUJBQVcsRUFBQyxPQUE5QjtBQUFzQyxVQUFFLEVBQUMsTUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlCRDtLQWxCdUJELFkiLCJmaWxlIjoiLi9jb21wb25lbnRzL3NwbGFzaC1zY3JlZW4vc3BsYXNoLXNjcmVlbi5jb21wb25lbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZW50ZXIsIENvbnRhaW5lciwgSGVhZGluZywgU3RhY2sgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTcGxhc2hTY3JlZW4oeyBoYW5kbGVDbGljayB9KSB7XG4gIHJldHVybiAoXG4gICAgPENlbnRlciBoPVwiMTAwdmhcIj5cbiAgICAgIDxTdGFjayBzcGFjaW5nPXs2fT5cbiAgICAgICAgPEhlYWRpbmc+QXZ2ZW50byBkZWxsJ0VsaXMg8J+OhDwvSGVhZGluZz5cbiAgICAgIDwvU3RhY2s+XG4gICAgICA8Qm94IG1heFc9XCIzMnJlbVwiPlxuICAgICAgICA8SGVhZGluZyBtYj17NH0+TW9kZXJuIG9ubGluZSBhbmQgb2ZmbGluZSBwYXltZW50cyBmb3IgQWZyaWNhPC9IZWFkaW5nPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIEJlbnZlbnV0aSwgcmFnYXp6ZSBlIHJhZ2F6emkuIEFsbCdpbnRlcm5vIGRlbCBjYWxlbmRhcmlvIGRlbGwnYXZlbnRvXG4gICAgICAgICAgZGVsbCdFbGlzLlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPEJ1dHRvbiBzaXplPVwibGdcIiBjb2xvclNjaGVtZT1cImdyZWVuXCIgbXQ9XCIyNHB4XCI+XG4gICAgICAgICAgQ3JlYXRlIGEgZnJlZSBhY2NvdW50XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Cb3g+XG4gICAgPC9DZW50ZXI+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/splash-screen/splash-screen.component.js\n");

/***/ })

})