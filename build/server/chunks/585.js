exports.id = 585;
exports.ids = [585];
exports.modules = {

/***/ 5585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/global.scss
var global = __webpack_require__(291);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: ./components/theme.js

// Your theme options
const themeOptions = {
    palette: {
        mode: "light",
        primary: {
            main: "#033b73"
        },
        secondary: {
            main: "#f50057"
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
            mobile: 0,
            tablet: 500,
            laptop: 1200,
            desktop: 1350
        }
    }
};
// Create the theme
const theme = (0,styles_.createTheme)(themeOptions);

// EXTERNAL MODULE: external "emailjs-com"
var external_emailjs_com_ = __webpack_require__(8655);
var external_emailjs_com_default = /*#__PURE__*/__webpack_require__.n(external_emailjs_com_);
// EXTERNAL MODULE: ./node_modules/@fontsource/roboto/300.css
var _300 = __webpack_require__(4260);
// EXTERNAL MODULE: ./node_modules/@fontsource/roboto/400.css
var _400 = __webpack_require__(8401);
// EXTERNAL MODULE: ./node_modules/@fontsource/roboto/500.css
var _500 = __webpack_require__(7524);
// EXTERNAL MODULE: ./node_modules/@fontsource/roboto/700.css
var _700 = __webpack_require__(6867);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/_app.js











function MyApp({ Component, pageProps }) {
    const title = pageProps.title || "Seven Seas";
    const backgroundColor = theme.palette.background.paper;
    (0,external_react_.useEffect)(()=>{
        external_emailjs_com_default().init("9pV9WdgGQMs9EDN2p");
        document.body.style.backgroundColor = backgroundColor;
        // Clean up the style when the component unmounts
        return ()=>{
            document.body.style.backgroundColor = "";
        };
    }, [
        backgroundColor
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(styles_.ThemeProvider, {
        theme: theme,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            })
        ]
    });
}


/***/ }),

/***/ 291:
/***/ (() => {



/***/ })

};
;