webpackHotUpdate_N_E("pages/index",{

/***/ "./components/pic/pic.component.js":
/*!*****************************************!*\
  !*** ./components/pic/pic.component.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pic; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/matteocavallo/Desktop/avvento-elis/components/pic/pic.component.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction Pic(props) {\n  _s();\n\n  const {\n    numero\n  } = props;\n  const {\n    0: loading,\n    1: setLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false); // Rotazione della fotografia in gradi\n\n  const rotation = Math.floor(Math.random() * 3);\n  setTimeout(() => {\n    setLoading(true);\n  }, 1500);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      transform: `rotate(${rotation})`,\n      shadow: \"md\",\n      m: 4,\n      pt: 2,\n      px: 2,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Skeleton\"], {\n        isLoaded: loading,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"AspectRatio\"], {\n          ratio: 1,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n            src: `/${numero}.jpg`\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n        textAlign: \"center\",\n        pt: 2,\n        pb: 2,\n        size: \"s\",\n        children: [numero, \" DICEMBRE\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Pic, \"/Rjh5rPqCCqf0XYnTUk9ZNavw3Q=\");\n\n_c = Pic;\n\nvar _c;\n\n$RefreshReg$(_c, \"Pic\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9waWMvcGljLmNvbXBvbmVudC5qcz9hMTE0Il0sIm5hbWVzIjpbIlBpYyIsInByb3BzIiwibnVtZXJvIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VTdGF0ZSIsInJvdGF0aW9uIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLEdBQVQsQ0FBYUMsS0FBYixFQUFvQjtBQUFBOztBQUNqQyxRQUFNO0FBQUVDO0FBQUYsTUFBYUQsS0FBbkI7QUFDQSxRQUFNO0FBQUEsT0FBQ0UsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLHNEQUFRLENBQUMsS0FBRCxDQUF0QyxDQUZpQyxDQUlqQzs7QUFDQSxRQUFNQyxRQUFRLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsQ0FBM0IsQ0FBakI7QUFFQUMsWUFBVSxDQUFDLE1BQU07QUFDZk4sY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUNELEdBRlMsRUFFUCxJQUZPLENBQVY7QUFJQSxzQkFDRSxxRUFBQyxvREFBRDtBQUFBLDJCQUNFLHFFQUFDLG9EQUFEO0FBQUssZUFBUyxFQUFHLFVBQVNFLFFBQVMsR0FBbkM7QUFBdUMsWUFBTSxFQUFDLElBQTlDO0FBQW1ELE9BQUMsRUFBRSxDQUF0RDtBQUF5RCxRQUFFLEVBQUUsQ0FBN0Q7QUFBZ0UsUUFBRSxFQUFFLENBQXBFO0FBQUEsOEJBQ0UscUVBQUMseURBQUQ7QUFBVSxnQkFBUSxFQUFFSCxPQUFwQjtBQUFBLCtCQUNFLHFFQUFDLDREQUFEO0FBQWEsZUFBSyxFQUFFLENBQXBCO0FBQUEsaUNBQ0UscUVBQUMsc0RBQUQ7QUFBTyxlQUFHLEVBQUcsSUFBR0QsTUFBTztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQU1FLHFFQUFDLHdEQUFEO0FBQVMsaUJBQVMsRUFBQyxRQUFuQjtBQUE0QixVQUFFLEVBQUUsQ0FBaEM7QUFBbUMsVUFBRSxFQUFFLENBQXZDO0FBQTBDLFlBQUksRUFBQyxHQUEvQztBQUFBLG1CQUNHQSxNQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWNEOztHQXpCdUJGLEc7O0tBQUFBLEciLCJmaWxlIjoiLi9jb21wb25lbnRzL3BpYy9waWMuY29tcG9uZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXNwZWN0UmF0aW8sIEJveCwgSGVhZGluZywgSW1hZ2UsIFNrZWxldG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBpYyhwcm9wcykge1xuICBjb25zdCB7IG51bWVybyB9ID0gcHJvcHM7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBSb3RhemlvbmUgZGVsbGEgZm90b2dyYWZpYSBpbiBncmFkaVxuICBjb25zdCByb3RhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gIH0sIDE1MDApO1xuXG4gIHJldHVybiAoXG4gICAgPEJveD5cbiAgICAgIDxCb3ggdHJhbnNmb3JtPXtgcm90YXRlKCR7cm90YXRpb259KWB9IHNoYWRvdz1cIm1kXCIgbT17NH0gcHQ9ezJ9IHB4PXsyfT5cbiAgICAgICAgPFNrZWxldG9uIGlzTG9hZGVkPXtsb2FkaW5nfT5cbiAgICAgICAgICA8QXNwZWN0UmF0aW8gcmF0aW89ezF9PlxuICAgICAgICAgICAgPEltYWdlIHNyYz17YC8ke251bWVyb30uanBnYH0gLz5cbiAgICAgICAgICA8L0FzcGVjdFJhdGlvPlxuICAgICAgICA8L1NrZWxldG9uPlxuICAgICAgICA8SGVhZGluZyB0ZXh0QWxpZ249XCJjZW50ZXJcIiBwdD17Mn0gcGI9ezJ9IHNpemU9XCJzXCI+XG4gICAgICAgICAge251bWVyb30gRElDRU1CUkVcbiAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/pic/pic.component.js\n");

/***/ })

})