"use strict";
exports.id = 692;
exports.ids = [692];
exports.modules = {

/***/ 692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/contactform.js
var contactform = __webpack_require__(7790);
// EXTERNAL MODULE: ./components/layout.js + 2 modules
var layout = __webpack_require__(6275);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./components/homecard.js



function HomeCard({ imgSrc, title, caption, reverse }) {
    const theme = (0,material_.useTheme)();
    const isLargeUp = (0,material_.useMediaQuery)(theme.breakpoints.up("lg"));
    const isMediumUp = (0,material_.useMediaQuery)(theme.breakpoints.up("md")) || isLargeUp;
    const isSmallUp = (0,material_.useMediaQuery)(theme.breakpoints.up("sm")) || isMediumUp;
    return /*#__PURE__*/ jsx_runtime.jsx(material_.Paper, {
        sx: {
            width: "100%",
            p: "1em",
            display: "flex",
            mt: "1em"
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
            sx: {
                display: "flex",
                flexDirection: isSmallUp ? reverse ? "row-reverse" : "row" : "column"
            },
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                    sx: {
                        width: isSmallUp ? "50%" : "100%",
                        p: "0.5em"
                    },
                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                        src: imgSrc,
                        alt: "image",
                        width: "100%"
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                    sx: {
                        width: isSmallUp ? "50%" : "100%",
                        p: "0.5em"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                        sx: {
                            display: "flex",
                            flexDirection: "column"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                variant: "h4",
                                color: theme.palette.primary.main,
                                mb: "0.5em",
                                children: title
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                variant: "body",
                                color: theme.palette.primary.main,
                                children: caption
                            })
                        ]
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./pages/home.js






function Home() {
    const homeBGPhoto = "/main.jpg";
    const homeBGPhotoPosition = "50% 70%";
    const welcomePhoto = "/welcome.jpg";
    const chooseUsPhoto = "/chooseUs.jpg";
    const theme = (0,material_.useTheme)();
    const isLargeUp = (0,material_.useMediaQuery)(theme.breakpoints.up("lg"));
    const isMediumUp = (0,material_.useMediaQuery)(theme.breakpoints.up("md")) || isLargeUp;
    const isSmallUp = (0,material_.useMediaQuery)(theme.breakpoints.up("sm")) || isMediumUp;
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(layout/* default */.Z, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                    sx: {
                        position: "relative",
                        display: "flex",
                        width: "100%",
                        minHeight: "100vh",
                        flexDirection: "column",
                        textAlign: "center",
                        justifyContent: "flex-end",
                        backgroundImage: `url(${homeBGPhoto})`,
                        backgroundPosition: homeBGPhotoPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                            sx: {
                                display: "flex",
                                flexGrow: "1",
                                textAlign: "center",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "white",
                                padding: "1em"
                            },
                            children: /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                sx: {
                                    maxWidth: isMediumUp ? "75%" : "95%",
                                    fontSize: "2.75em",
                                    fontWeight: "500",
                                    WebkitTextStroke: "1px black"
                                },
                                children: "Veteran Owned Power Washing Services in Albuquerque, NM"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                            sx: {
                                display: "flex",
                                width: "100%",
                                justifyContent: "center",
                                mt: "2em",
                                pb: "2em",
                                position: "relative"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                                    sx: {
                                        position: "absolute",
                                        top: "-0.5em",
                                        left: "50%",
                                        p: "1em",
                                        transform: "translate(-50%, -50%) skew(-15deg)",
                                        border: "2px solid gold",
                                        borderRadius: "25px 5px 25px 5px",
                                        color: "white",
                                        backgroundColor: theme.palette.primary.main,
                                        zIndex: "1"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                        children: "Book Us Today!"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(contactform/* default */.Z, {
                                    backgroundColor: "#ffffffc0",
                                    maxWidth: isMediumUp ? "75%" : "95%"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                    sx: {
                        display: "flex",
                        flexDirection: "column",
                        p: "1em",
                        width: isMediumUp ? "85%" : "95%",
                        justifyContent: "center",
                        ml: "auto",
                        mr: "auto"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                            variant: "h4",
                            align: "center",
                            color: "#033b73",
                            children: "Professional Power Washing"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                            variant: "h5",
                            align: "center",
                            color: "#033b73",
                            children: "Albuquerque, New Mexico"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(HomeCard, {
                            imgSrc: welcomePhoto,
                            title: "Seven Seas Power Washing Service",
                            caption: /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                children: "Welcome to Seven Seas, your premier veteran-owned pressure washing business catering to both residential and commercial clients in Albuquerque, NM. With a commitment to excellence and a wealth of experience, we take pride in transforming your properties into pristine and inviting spaces. Our team of skilled professionals utilizes state-of-the-art equipment and eco-friendly practices to deliver top-notch results. Whether it's removing stubborn stains from your driveway or revitalizing the facade of your business, Seven Seas is dedicated to exceeding your expectations and ensuring customer satisfaction at every turn. Discover the power of a clean, vibrant property with Seven Seas Pressure Washing!"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(HomeCard, {
                            reverse: true,
                            imgSrc: chooseUsPhoto,
                            title: "Why Choose Us?",
                            caption: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                        children: "1. Veteran-Owned Excellence:"
                                    }),
                                    " At Seven Seas, we bring the same dedication, discipline, and attention to detail to our pressure washing services as we did during our military service. Our team is composed of experienced veterans who understand the value of hard work, integrity, and a job well done.",
                                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                        children: "2. Unmatched Expertise:"
                                    }),
                                    " With years of experience in the pressure washing industry, we have honed our skills and techniques to deliver exceptional results. From residential homes to commercial establishments, we know how to tackle a wide range of surfaces and stains, ensuring your property looks its best.",
                                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                        children: "3. Customized Solutions:"
                                    }),
                                    " We understand that every property is unique, and each client has specific needs. That's why we offer personalized solutions tailored to your requirements. Whether you need a one-time cleaning or a regular maintenance plan, we've got you covered.",
                                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                        children: "4. Professional and Reliable:"
                                    }),
                                    " Punctuality and professionalism are at the core of our business. When you choose Seven Seas, you can rest assured that our team will arrive on time and treat your property with the utmost respect. We aim to exceed your expectations in every aspect of our service.",
                                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                        children: "5. Competitive Pricing:"
                                    }),
                                    " We believe that top-quality pressure washing should be accessible to all. Our competitive pricing ensures that you get the best value for your investment without compromising on the quality of service.",
                                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                        children: "At Seven Seas Pressure Washing, we take pride in our work and the opportunity to serve our community. Let us unleash the true potential of your property and make it shine like never before. Choose us today for reliable, efficient, and top-notch pressure washing services that you can count on."
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
}


/***/ })

};
;