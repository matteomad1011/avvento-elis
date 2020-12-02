webpackHotUpdate_N_E("pages/index",{

/***/ "./components/pic/pic.component.js":
/*!*****************************************!*\
  !*** ./components/pic/pic.component.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pic; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/matteocavallo/Desktop/avvento-elis/components/pic/pic.component.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction Pic(props) {\n  _s();\n\n  const {\n    numero\n  } = props;\n  const {\n    0: loading,\n    1: setLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false);\n  setTimeout(() => {\n    setLoading(true);\n  }, 1500);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      shadow: \"md\",\n      m: 4,\n      pt: 2,\n      px: 2,\n      pb: 6,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Skeleton\"], {\n        isLoaded: loading,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"AspectRatio\"], {\n          ratio: 1,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n            src: `/${numero}.jpg`\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n        size: \"s\",\n        children: [numero, \" DICEMBRE\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Pic, \"/Rjh5rPqCCqf0XYnTUk9ZNavw3Q=\");\n\n_c = Pic;\n\nvar _c;\n\n$RefreshReg$(_c, \"Pic\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9waWMvcGljLmNvbXBvbmVudC5qcz9hMTE0Il0sIm5hbWVzIjpbIlBpYyIsInByb3BzIiwibnVtZXJvIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VTdGF0ZSIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxHQUFULENBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFDakMsUUFBTTtBQUFFQztBQUFGLE1BQWFELEtBQW5CO0FBQ0EsUUFBTTtBQUFBLE9BQUNFLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQyxzREFBUSxDQUFDLEtBQUQsQ0FBdEM7QUFFQUMsWUFBVSxDQUFDLE1BQU07QUFDZkYsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUNELEdBRlMsRUFFUCxJQUZPLENBQVY7QUFJQSxzQkFDRSxxRUFBQyxvREFBRDtBQUFBLDJCQUNFLHFFQUFDLG9EQUFEO0FBQUssWUFBTSxFQUFDLElBQVo7QUFBaUIsT0FBQyxFQUFFLENBQXBCO0FBQXVCLFFBQUUsRUFBRSxDQUEzQjtBQUE4QixRQUFFLEVBQUUsQ0FBbEM7QUFBcUMsUUFBRSxFQUFFLENBQXpDO0FBQUEsOEJBQ0UscUVBQUMseURBQUQ7QUFBVSxnQkFBUSxFQUFFRCxPQUFwQjtBQUFBLCtCQUNFLHFFQUFDLDREQUFEO0FBQWEsZUFBSyxFQUFFLENBQXBCO0FBQUEsaUNBQ0UscUVBQUMsc0RBQUQ7QUFBTyxlQUFHLEVBQUcsSUFBR0QsTUFBTztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQU1FLHFFQUFDLHdEQUFEO0FBQVMsWUFBSSxFQUFDLEdBQWQ7QUFBQSxtQkFBbUJBLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVlEOztHQXBCdUJGLEc7O0tBQUFBLEciLCJmaWxlIjoiLi9jb21wb25lbnRzL3BpYy9waWMuY29tcG9uZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXNwZWN0UmF0aW8sIEJveCwgSGVhZGluZywgSW1hZ2UsIFNrZWxldG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBpYyhwcm9wcykge1xuICBjb25zdCB7IG51bWVybyB9ID0gcHJvcHM7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICB9LCAxNTAwKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3g+XG4gICAgICA8Qm94IHNoYWRvdz1cIm1kXCIgbT17NH0gcHQ9ezJ9IHB4PXsyfSBwYj17Nn0+XG4gICAgICAgIDxTa2VsZXRvbiBpc0xvYWRlZD17bG9hZGluZ30+XG4gICAgICAgICAgPEFzcGVjdFJhdGlvIHJhdGlvPXsxfT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2AvJHtudW1lcm99LmpwZ2B9IC8+XG4gICAgICAgICAgPC9Bc3BlY3RSYXRpbz5cbiAgICAgICAgPC9Ta2VsZXRvbj5cbiAgICAgICAgPEhlYWRpbmcgc2l6ZT1cInNcIj57bnVtZXJvfSBESUNFTUJSRTwvSGVhZGluZz5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/pic/pic.component.js\n");

/***/ })

})