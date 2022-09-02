webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layout/Layout.js":
false,

/***/ "./components/layout/Layout.module.css":
false,

/***/ "./components/layout/MainNavigation.js":
false,

/***/ "./components/layout/MainNavigation.module.css":
false,

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./node_modules/next/Link.js":
false,

/***/ "./node_modules/next/dist/client/link.js":
false,

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
false,

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
false,

/***/ "./node_modules/next/dist/client/route-loader.js":
false,

/***/ "./node_modules/next/dist/client/router.js":
false,

/***/ "./node_modules/next/dist/client/use-intersection.js":
false,

/***/ "./node_modules/next/dist/client/with-router.js":
false,

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/layout/Layout.module.css":
false,

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/layout/MainNavigation.module.css":
false,

/***/ "./node_modules/next/dist/compiled/webpack/module.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
false,

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
false,

/***/ "./node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "./node_modules/react-is/index.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");


var _jsxFileName = "C:\\Users\\Cheyoon\\code\\study\\react\\next-js-practice\\pages\\index.js",
    _this = undefined;


var DUMMY_MEETUPS = [{
  id: 'm1',
  title: 'A First Meetup',
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Sz%C3%A9chenyi_Chain_Bridge_in_Budapest_at_night.jpg/1920px-Sz%C3%A9chenyi_Chain_Bridge_in_Budapest_at_night.jpg",
  address: 'Hungary, some road',
  description: "This is first meet up"
}, {
  id: 'm2',
  title: 'A Second Meetup',
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Vajdahunyad_v%C3%A1ra_%2816291._sz%C3%A1m%C3%BA_m%C5%B1eml%C3%A9k%29_14.jpg/1280px-Vajdahunyad_v%C3%A1ra_%2816291._sz%C3%A1m%C3%BA_m%C5%B1eml%C3%A9k%29_14.jpg",
  address: 'Hungary, some road, 1324',
  description: "This is second meet up"
}];

var Homepage = function Homepage() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    meetups: DUMMY_MEETUPS
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 10
  }, _this);
};

_c = Homepage;
/* harmony default export */ __webpack_exports__["default"] = (Homepage);

var _c;

$RefreshReg$(_c, "Homepage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxhQUFhLEdBQUMsQ0FDbEI7QUFDRUMsSUFBRSxFQUFDLElBREw7QUFFRUMsT0FBSyxFQUFDLGdCQUZSO0FBR0VDLE9BQUssRUFBQyw0S0FIUjtBQUlFQyxTQUFPLEVBQUMsb0JBSlY7QUFLRUMsYUFBVyxFQUFDO0FBTGQsQ0FEa0IsRUFRbEI7QUFDRUosSUFBRSxFQUFDLElBREw7QUFFRUMsT0FBSyxFQUFDLGlCQUZSO0FBR0VDLE9BQUssRUFBQywwTkFIUjtBQUlFQyxTQUFPLEVBQUMsMEJBSlY7QUFLRUMsYUFBVyxFQUFDO0FBTGQsQ0FSa0IsQ0FBcEI7O0FBaUJBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsc0JBQU8scUVBQUMsc0VBQUQ7QUFBWSxXQUFPLEVBQUVOO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBRkQ7O0tBQU1NLFE7QUFJU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGVjMGIwZDRkZGU4NjVjYjM4MmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xyXG5cclxuY29uc3QgRFVNTVlfTUVFVFVQUz1bXHJcbiAge1xyXG4gICAgaWQ6J20xJyxcclxuICAgIHRpdGxlOidBIEZpcnN0IE1lZXR1cCcsXHJcbiAgICBpbWFnZTpcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvZi9mZC9TeiVDMyVBOWNoZW55aV9DaGFpbl9CcmlkZ2VfaW5fQnVkYXBlc3RfYXRfbmlnaHQuanBnLzE5MjBweC1TeiVDMyVBOWNoZW55aV9DaGFpbl9CcmlkZ2VfaW5fQnVkYXBlc3RfYXRfbmlnaHQuanBnXCIsXHJcbiAgICBhZGRyZXNzOidIdW5nYXJ5LCBzb21lIHJvYWQnLFxyXG4gICAgZGVzY3JpcHRpb246XCJUaGlzIGlzIGZpcnN0IG1lZXQgdXBcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6J20yJyxcclxuICAgIHRpdGxlOidBIFNlY29uZCBNZWV0dXAnLFxyXG4gICAgaW1hZ2U6XCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2IvYjQvVmFqZGFodW55YWRfdiVDMyVBMXJhXyUyODE2MjkxLl9zeiVDMyVBMW0lQzMlQkFfbSVDNSVCMWVtbCVDMyVBOWslMjlfMTQuanBnLzEyODBweC1WYWpkYWh1bnlhZF92JUMzJUExcmFfJTI4MTYyOTEuX3N6JUMzJUExbSVDMyVCQV9tJUM1JUIxZW1sJUMzJUE5ayUyOV8xNC5qcGdcIixcclxuICAgIGFkZHJlc3M6J0h1bmdhcnksIHNvbWUgcm9hZCwgMTMyNCcsXHJcbiAgICBkZXNjcmlwdGlvbjpcIlRoaXMgaXMgc2Vjb25kIG1lZXQgdXBcIlxyXG4gIH1cclxuXVxyXG5cclxuY29uc3QgSG9tZXBhZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIDxNZWV0dXBMaXN0IG1lZXR1cHM9e0RVTU1ZX01FRVRVUFN9Lz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZXBhZ2UiXSwic291cmNlUm9vdCI6IiJ9