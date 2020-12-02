webpackHotUpdate_N_E("pages/index",{

/***/ "./components/pic/pic.component.js":
/*!*****************************************!*\
  !*** ./components/pic/pic.component.js ***!
  \*****************************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pic; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/matteocavallo/Desktop/avvento-elis/components/pic/pic.component.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction Pic(props) {\n  _s();\n\n  const {\n    numero\n  } = props;\n  const {\n    0: loading,\n    1: setLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false);\n  setTimeout(() => {\n    setLoading(true);\n  }, 1500); // Rotazione della fotografia in gradi\n\n  const rotation = Math.floor(Math.random() * 6);\n\n  const handleClick = () => {\n    console.log(\"Coming Soon\");\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      onClick: handleClick,\n      transform: `rotate(${rotation}deg)`,\n      shadow: \"md\",\n      m: 4,\n      pt: 2,\n      px: 2,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Skeleton\"], {\n        isLoaded: loading,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"AspectRatio\"], {\n          ratio: 1,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n            src: `/pics/${numero}.jpg`\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n        textAlign: \"center\",\n        pt: 2,\n        pb: 2,\n        size: \"s\",\n        children: [numero, \" DICEMBRE\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Pic, \"/Rjh5rPqCCqf0XYnTUk9ZNavw3Q=\");\n\n_c = Pic;\nasync function getStaticProps() {\n  return {\n    props: {\n      rotation: rotation\n    } // will be passed to the page component as props\n\n  };\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"Pic\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9waWMvcGljLmNvbXBvbmVudC5qcz9hMTE0Il0sIm5hbWVzIjpbIlBpYyIsInByb3BzIiwibnVtZXJvIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VTdGF0ZSIsInNldFRpbWVvdXQiLCJyb3RhdGlvbiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImhhbmRsZUNsaWNrIiwiY29uc29sZSIsImxvZyIsImdldFN0YXRpY1Byb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLEdBQVQsQ0FBYUMsS0FBYixFQUFvQjtBQUFBOztBQUNqQyxRQUFNO0FBQUVDO0FBQUYsTUFBYUQsS0FBbkI7QUFDQSxRQUFNO0FBQUEsT0FBQ0UsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLHNEQUFRLENBQUMsS0FBRCxDQUF0QztBQUVBQyxZQUFVLENBQUMsTUFBTTtBQUNmRixjQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0QsR0FGUyxFQUVQLElBRk8sQ0FBVixDQUppQyxDQVFqQzs7QUFDQSxRQUFNRyxRQUFRLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsQ0FBM0IsQ0FBakI7O0FBRUEsUUFBTUMsV0FBVyxHQUFHLE1BQU07QUFDeEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFDRCxHQUZEOztBQUlBLHNCQUNFLHFFQUFDLG9EQUFEO0FBQUEsMkJBQ0UscUVBQUMsb0RBQUQ7QUFDRSxhQUFPLEVBQUVGLFdBRFg7QUFFRSxlQUFTLEVBQUcsVUFBU0osUUFBUyxNQUZoQztBQUdFLFlBQU0sRUFBQyxJQUhUO0FBSUUsT0FBQyxFQUFFLENBSkw7QUFLRSxRQUFFLEVBQUUsQ0FMTjtBQU1FLFFBQUUsRUFBRSxDQU5OO0FBQUEsOEJBUUUscUVBQUMseURBQUQ7QUFBVSxnQkFBUSxFQUFFSixPQUFwQjtBQUFBLCtCQUNFLHFFQUFDLDREQUFEO0FBQWEsZUFBSyxFQUFFLENBQXBCO0FBQUEsaUNBQ0UscUVBQUMsc0RBQUQ7QUFBTyxlQUFHLEVBQUcsU0FBUUQsTUFBTztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRixlQWFFLHFFQUFDLHdEQUFEO0FBQVMsaUJBQVMsRUFBQyxRQUFuQjtBQUE0QixVQUFFLEVBQUUsQ0FBaEM7QUFBbUMsVUFBRSxFQUFFLENBQXZDO0FBQTBDLFlBQUksRUFBQyxHQUEvQztBQUFBLG1CQUNHQSxNQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFCRDs7R0FwQ3VCRixHOztLQUFBQSxHO0FBc0NqQixlQUFlYyxjQUFmLEdBQWdDO0FBQ3JDLFNBQU87QUFDTGIsU0FBSyxFQUFFO0FBQ0xNLGNBQVEsRUFBRUE7QUFETCxLQURGLENBR0Y7O0FBSEUsR0FBUDtBQUtEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9waWMvcGljLmNvbXBvbmVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFzcGVjdFJhdGlvLCBCb3gsIEhlYWRpbmcsIEltYWdlLCBTa2VsZXRvbiB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQaWMocHJvcHMpIHtcbiAgY29uc3QgeyBudW1lcm8gfSA9IHByb3BzO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgfSwgMTUwMCk7XG5cbiAgLy8gUm90YXppb25lIGRlbGxhIGZvdG9ncmFmaWEgaW4gZ3JhZGlcbiAgY29uc3Qgcm90YXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkNvbWluZyBTb29uXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEJveD5cbiAgICAgIDxCb3hcbiAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgIHRyYW5zZm9ybT17YHJvdGF0ZSgke3JvdGF0aW9ufWRlZylgfVxuICAgICAgICBzaGFkb3c9XCJtZFwiXG4gICAgICAgIG09ezR9XG4gICAgICAgIHB0PXsyfVxuICAgICAgICBweD17Mn1cbiAgICAgID5cbiAgICAgICAgPFNrZWxldG9uIGlzTG9hZGVkPXtsb2FkaW5nfT5cbiAgICAgICAgICA8QXNwZWN0UmF0aW8gcmF0aW89ezF9PlxuICAgICAgICAgICAgPEltYWdlIHNyYz17YC9waWNzLyR7bnVtZXJvfS5qcGdgfSAvPlxuICAgICAgICAgIDwvQXNwZWN0UmF0aW8+XG4gICAgICAgIDwvU2tlbGV0b24+XG4gICAgICAgIDxIZWFkaW5nIHRleHRBbGlnbj1cImNlbnRlclwiIHB0PXsyfSBwYj17Mn0gc2l6ZT1cInNcIj5cbiAgICAgICAgICB7bnVtZXJvfSBESUNFTUJSRVxuICAgICAgICA8L0hlYWRpbmc+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICByb3RhdGlvbjogcm90YXRpb24sXG4gICAgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/pic/pic.component.js\n");

/***/ })

})