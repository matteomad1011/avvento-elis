webpackHotUpdate_N_E("pages/index",{

/***/ "./components/splash-screen/splash-screen.component.js":
/*!*************************************************************!*\
  !*** ./components/splash-screen/splash-screen.component.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SplashScreen; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/matteocavallo/Desktop/avvento-elis/components/splash-screen/splash-screen.component.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction SplashScreen({\n  handleClick\n}) {\n  _s();\n\n  const {\n    0: spinner,\n    1: setSpinner\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true);\n\n  const close = async () => {\n    setSpinner(false);\n    setTimeout(() => {\n      setSpinner(true);\n      handleClick();\n    }, 3000);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Center\"], {\n      h: \"90vh\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n        maxW: \"32rem\",\n        textAlign: \"center\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n          mb: 8,\n          children: \"Avvento dell'Elis \\uD83C\\uDF84\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n          children: \"Benvenuti, ragazze e ragazzi all'interno del calendario dell'avento dell'Elis.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n          mt: 2,\n          children: [\"Ringrazia La geniale mente di\", \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n            color: \"blue.300\",\n            children: \"@lorenzomanoni\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n          size: \"lg\",\n          colorScheme: \"green\",\n          mt: \"24px\",\n          onClick: close,\n          children: \"Entra\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n          hidden: spinner\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Center\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n        align: \"center\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Spinner\"], {\n          hidden: spinner,\n          color: \"red.500\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n          children: [\"Powered by\", \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n            display: \"inline-block\",\n            color: \"blue.300\",\n            children: \"@matteomad\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, this);\n}\n\n_s(SplashScreen, \"wLh4AEN/AR+3vcqqKtre/v3hf98=\");\n\n_c = SplashScreen;\n\nvar _c;\n\n$RefreshReg$(_c, \"SplashScreen\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zcGxhc2gtc2NyZWVuL3NwbGFzaC1zY3JlZW4uY29tcG9uZW50LmpzP2JmMGEiXSwibmFtZXMiOlsiU3BsYXNoU2NyZWVuIiwiaGFuZGxlQ2xpY2siLCJzcGlubmVyIiwic2V0U3Bpbm5lciIsInVzZVN0YXRlIiwiY2xvc2UiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQVdBO0FBRWUsU0FBU0EsWUFBVCxDQUFzQjtBQUFFQztBQUFGLENBQXRCLEVBQXVDO0FBQUE7O0FBQ3BELFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsc0RBQVEsQ0FBQyxJQUFELENBQXRDOztBQUVBLFFBQU1DLEtBQUssR0FBRyxZQUFZO0FBQ3hCRixjQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0FHLGNBQVUsQ0FBQyxNQUFNO0FBQ2ZILGdCQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FGLGlCQUFXO0FBQ1osS0FIUyxFQUdQLElBSE8sQ0FBVjtBQUlELEdBTkQ7O0FBUUEsc0JBQ0UscUVBQUMsb0RBQUQ7QUFBQSw0QkFDRSxxRUFBQyx1REFBRDtBQUFRLE9BQUMsRUFBQyxNQUFWO0FBQUEsNkJBQ0UscUVBQUMsb0RBQUQ7QUFBSyxZQUFJLEVBQUMsT0FBVjtBQUFrQixpQkFBUyxFQUFDLFFBQTVCO0FBQUEsZ0NBQ0UscUVBQUMsd0RBQUQ7QUFBUyxZQUFFLEVBQUUsQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBTUUscUVBQUMsMERBQUQ7QUFBVyxZQUFFLEVBQUUsQ0FBZjtBQUFBLHNEQUNnQyxHQURoQyxlQUVFLHFFQUFDLHFEQUFEO0FBQU0saUJBQUssRUFBQyxVQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORixlQVVFLHFFQUFDLHVEQUFEO0FBQVEsY0FBSSxFQUFDLElBQWI7QUFBa0IscUJBQVcsRUFBQyxPQUE5QjtBQUFzQyxZQUFFLEVBQUMsTUFBekM7QUFBZ0QsaUJBQU8sRUFBRUksS0FBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkYsZUFhRSxxRUFBQyxvREFBRDtBQUFLLGdCQUFNLEVBQUVIO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFrQkUscUVBQUMsdURBQUQ7QUFBQSw2QkFDRSxxRUFBQyxzREFBRDtBQUFPLGFBQUssRUFBQyxRQUFiO0FBQUEsZ0NBQ0UscUVBQUMsd0RBQUQ7QUFBUyxnQkFBTSxFQUFFQSxPQUFqQjtBQUEwQixlQUFLLEVBQUM7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLHFFQUFDLHFEQUFEO0FBQUEsbUNBQ2EsR0FEYixlQUVFLHFFQUFDLHFEQUFEO0FBQU0sbUJBQU8sRUFBQyxjQUFkO0FBQTZCLGlCQUFLLEVBQUMsVUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQ0Q7O0dBM0N1QkYsWTs7S0FBQUEsWSIsImZpbGUiOiIuL2NvbXBvbmVudHMvc3BsYXNoLXNjcmVlbi9zcGxhc2gtc2NyZWVuLmNvbXBvbmVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENlbnRlcixcbiAgQ29udGFpbmVyLFxuICBIZWFkaW5nLFxuICBTdGFjayxcbiAgQm94LFxuICBCdXR0b24sXG4gIFNwaW5uZXIsXG4gIFRleHQsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNwbGFzaFNjcmVlbih7IGhhbmRsZUNsaWNrIH0pIHtcbiAgY29uc3QgW3NwaW5uZXIsIHNldFNwaW5uZXJdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgY2xvc2UgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0U3Bpbm5lcihmYWxzZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRTcGlubmVyKHRydWUpO1xuICAgICAgaGFuZGxlQ2xpY2soKTtcbiAgICB9LCAzMDAwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxCb3g+XG4gICAgICA8Q2VudGVyIGg9XCI5MHZoXCI+XG4gICAgICAgIDxCb3ggbWF4Vz1cIjMycmVtXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgPEhlYWRpbmcgbWI9ezh9PkF2dmVudG8gZGVsbCdFbGlzIPCfjoQ8L0hlYWRpbmc+XG4gICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgIEJlbnZlbnV0aSwgcmFnYXp6ZSBlIHJhZ2F6emkgYWxsJ2ludGVybm8gZGVsIGNhbGVuZGFyaW8gZGVsbCdhdmVudG9cbiAgICAgICAgICAgIGRlbGwnRWxpcy5cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICA8Q29udGFpbmVyIG10PXsyfT5cbiAgICAgICAgICAgIFJpbmdyYXppYSBMYSBnZW5pYWxlIG1lbnRlIGRpe1wiIFwifVxuICAgICAgICAgICAgPFRleHQgY29sb3I9XCJibHVlLjMwMFwiPkBsb3JlbnpvbWFub25pPC9UZXh0PlxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgIDxCdXR0b24gc2l6ZT1cImxnXCIgY29sb3JTY2hlbWU9XCJncmVlblwiIG10PVwiMjRweFwiIG9uQ2xpY2s9e2Nsb3NlfT5cbiAgICAgICAgICAgIEVudHJhXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJveCBoaWRkZW49e3NwaW5uZXJ9PjwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ2VudGVyPlxuICAgICAgPENlbnRlcj5cbiAgICAgICAgPFN0YWNrIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgPFNwaW5uZXIgaGlkZGVuPXtzcGlubmVyfSBjb2xvcj1cInJlZC41MDBcIiAvPlxuICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgUG93ZXJlZCBieXtcIiBcIn1cbiAgICAgICAgICAgIDxUZXh0IGRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIiBjb2xvcj1cImJsdWUuMzAwXCI+XG4gICAgICAgICAgICAgIEBtYXR0ZW9tYWRcbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L0NlbnRlcj5cbiAgICA8L0JveD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/splash-screen/splash-screen.component.js\n");

/***/ })

})