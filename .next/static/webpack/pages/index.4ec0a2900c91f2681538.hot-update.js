webpackHotUpdate_N_E("pages/index",{

/***/ "./components/splash-screen/splash-screen.component.js":
/*!*************************************************************!*\
  !*** ./components/splash-screen/splash-screen.component.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SplashScreen; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/matteocavallo/Desktop/avvento-elis/components/splash-screen/splash-screen.component.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction SplashScreen({\n  handleClick\n}) {\n  _s();\n\n  const {\n    0: spinner,\n    1: setSpinner\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true);\n\n  const close = async () => {\n    setSpinner(false);\n    setTimeout(() => {\n      setSpinner(true);\n      handleClick();\n    }, 3000);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Center\"], {\n    h: \"100vh\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      maxW: \"32rem\",\n      textAlign: \"center\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n        mb: 8,\n        children: \"Avvento dell'Elis \\uD83C\\uDF84\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n        children: \"Benvenuti, ragazze e ragazzi. All'interno del calendario dell'avento dell'Elis.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n        size: \"lg\",\n        colorScheme: \"green\",\n        mt: \"24px\",\n        onClick: close,\n        children: \"Entra\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n        hidden: spinner,\n        p: 8,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Spinner\"], {\n          color: \"red.500\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, this);\n}\n\n_s(SplashScreen, \"wLh4AEN/AR+3vcqqKtre/v3hf98=\");\n\n_c = SplashScreen;\n\nvar _c;\n\n$RefreshReg$(_c, \"SplashScreen\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zcGxhc2gtc2NyZWVuL3NwbGFzaC1zY3JlZW4uY29tcG9uZW50LmpzP2JmMGEiXSwibmFtZXMiOlsiU3BsYXNoU2NyZWVuIiwiaGFuZGxlQ2xpY2siLCJzcGlubmVyIiwic2V0U3Bpbm5lciIsInVzZVN0YXRlIiwiY2xvc2UiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQVVBO0FBRWUsU0FBU0EsWUFBVCxDQUFzQjtBQUFFQztBQUFGLENBQXRCLEVBQXVDO0FBQUE7O0FBQ3BELFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsc0RBQVEsQ0FBQyxJQUFELENBQXRDOztBQUVBLFFBQU1DLEtBQUssR0FBRyxZQUFZO0FBQ3hCRixjQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0FHLGNBQVUsQ0FBQyxNQUFNO0FBQ2ZILGdCQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FGLGlCQUFXO0FBQ1osS0FIUyxFQUdQLElBSE8sQ0FBVjtBQUlELEdBTkQ7O0FBUUEsc0JBQ0UscUVBQUMsdURBQUQ7QUFBUSxLQUFDLEVBQUMsT0FBVjtBQUFBLDJCQUNFLHFFQUFDLG9EQUFEO0FBQUssVUFBSSxFQUFDLE9BQVY7QUFBa0IsZUFBUyxFQUFDLFFBQTVCO0FBQUEsOEJBQ0UscUVBQUMsd0RBQUQ7QUFBUyxVQUFFLEVBQUUsQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQU1FLHFFQUFDLHVEQUFEO0FBQVEsWUFBSSxFQUFDLElBQWI7QUFBa0IsbUJBQVcsRUFBQyxPQUE5QjtBQUFzQyxVQUFFLEVBQUMsTUFBekM7QUFBZ0QsZUFBTyxFQUFFSSxLQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLGVBU0UscUVBQUMsb0RBQUQ7QUFBSyxjQUFNLEVBQUVILE9BQWI7QUFBc0IsU0FBQyxFQUFFLENBQXpCO0FBQUEsK0JBQ0UscUVBQUMsd0RBQUQ7QUFBUyxlQUFLLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlCRDs7R0E1QnVCRixZOztLQUFBQSxZIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zcGxhc2gtc2NyZWVuL3NwbGFzaC1zY3JlZW4uY29tcG9uZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2VudGVyLFxuICBDb250YWluZXIsXG4gIEhlYWRpbmcsXG4gIFN0YWNrLFxuICBCb3gsXG4gIEJ1dHRvbixcbiAgU3Bpbm5lcixcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3BsYXNoU2NyZWVuKHsgaGFuZGxlQ2xpY2sgfSkge1xuICBjb25zdCBbc3Bpbm5lciwgc2V0U3Bpbm5lcl0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBjbG9zZSA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRTcGlubmVyKGZhbHNlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFNwaW5uZXIodHJ1ZSk7XG4gICAgICBoYW5kbGVDbGljaygpO1xuICAgIH0sIDMwMDApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENlbnRlciBoPVwiMTAwdmhcIj5cbiAgICAgIDxCb3ggbWF4Vz1cIjMycmVtXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgIDxIZWFkaW5nIG1iPXs4fT5BdnZlbnRvIGRlbGwnRWxpcyDwn46EPC9IZWFkaW5nPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIEJlbnZlbnV0aSwgcmFnYXp6ZSBlIHJhZ2F6emkuIEFsbCdpbnRlcm5vIGRlbCBjYWxlbmRhcmlvIGRlbGwnYXZlbnRvXG4gICAgICAgICAgZGVsbCdFbGlzLlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPEJ1dHRvbiBzaXplPVwibGdcIiBjb2xvclNjaGVtZT1cImdyZWVuXCIgbXQ9XCIyNHB4XCIgb25DbGljaz17Y2xvc2V9PlxuICAgICAgICAgIEVudHJhXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8Qm94IGhpZGRlbj17c3Bpbm5lcn0gcD17OH0+XG4gICAgICAgICAgPFNwaW5uZXIgY29sb3I9XCJyZWQuNTAwXCIgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICA8L0NlbnRlcj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/splash-screen/splash-screen.component.js\n");

/***/ })

})