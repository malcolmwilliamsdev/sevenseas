"use strict";
exports.id = 61;
exports.ids = [61];
exports.modules = {

/***/ 9061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ServiceItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);



function ServiceItem({ src, title, description, lgGrid }) {
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        item: true,
        xs: 12,
        sm: 6,
        lg: lgGrid,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                variant: "h4",
                sx: {
                    color: "#033b73",
                    textAlign: "center"
                },
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: src,
                alt: "image",
                style: {
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "15px 50px 30px",
                    marginTop: "0.5em",
                    aspectRatio: "4/2.5"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                sx: {
                    textAlign: "left",
                    textIndent: "0em",
                    lineHeight: "1.75em",
                    p: "0.5em 1em 0em 1em"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                    variant: "body",
                    color: theme.palette.primary.main,
                    children: description
                })
            })
        ]
    });
}


/***/ })

};
;