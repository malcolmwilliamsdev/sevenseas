"use strict";
exports.id = 275;
exports.ids = [275];
exports.modules = {

/***/ 210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ telephone)
/* harmony export */ });
const telephone = "tel:(505)-503-0523";


/***/ }),

/***/ 7790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ContactForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8655);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_3__);




function ContactForm({ backgroundColor, width, maxWidth, onSuccess, onFail, disableFeedback }) {
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const isLargeUp = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)(theme.breakpoints.up("lg"));
    const isMediumUp = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)(theme.breakpoints.up("md")) || isLargeUp;
    const isSmallUp = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)(theme.breakpoints.up("sm")) || isMediumUp;
    const [serviceType, setServiceType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Residential");
    const [openSuccessAlert, setOpenSuccessAlert] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [openErrorAlert, setOpenErrorAlert] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isSubmitting, setIsSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const lastSubmissionTimeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    const MIN_COOLDOWN = 120000; // 2 minutes in milliseconds
    const COOLDOWN_STORAGE_KEY = "lastSubmissionTime";
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const storedLastSubmissionTime = localStorage.getItem(COOLDOWN_STORAGE_KEY);
        if (storedLastSubmissionTime) {
            lastSubmissionTimeRef.current = parseInt(storedLastSubmissionTime, 10);
        }
    }, []);
    const canSubmitForm = ()=>{
        const now = Date.now();
        return now - lastSubmissionTimeRef.current >= MIN_COOLDOWN;
    };
    const handleOpenErrorAlert = ()=>{
        setOpenErrorAlert(true);
    };
    const handleCloseErrorAlert = ()=>{
        setOpenErrorAlert(false);
    };
    const handleOpenSuccessAlert = ()=>{
        setOpenSuccessAlert(true);
    };
    const handleCloseSuccessAlert = ()=>{
        setOpenSuccessAlert(false);
    };
    const handleChangeServiceType = (event)=>{
        setServiceType(event.target.value);
    };
    const sendEmail = async (data)=>{
        const serviceID = "service_1tw47bt";
        const templateID = "template_6ywassq";
        const customerName = "Name: " + data.fullName + "\n";
        const customerEmail = "Email: " + data.email + "\n";
        const customerPhone = "Phone Number: " + data.phone + "\n";
        const customerAddress = "Address: " + data.serviceAddress + "\n";
        const customerType = "Service Type: " + data.serviceType + "\n\n";
        const customerMessage = "Message: \n" + data.message + "\n";
        const messageBody = customerName + customerEmail + customerPhone + customerAddress + customerType + customerMessage;
        const templateParams = {
            from_name: data.fullName,
            message: messageBody
        };
        return emailjs_com__WEBPACK_IMPORTED_MODULE_3___default().send(serviceID, templateID, templateParams);
    };
    const handleSubmitForm = async (event)=>{
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = {
            fullName: formData.get("fullName"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            serviceAddress: formData.get("serviceAddress"),
            serviceType: formData.get("serviceType"),
            message: formData.get("message")
        };
        console.log(data);
        let empty = false;
        const values = Object.values(data);
        for (const element of values){
            if (!element) {
                empty = true;
                break;
            }
        }
        if (empty) {
            if (!disableFeedback) {
                handleOpenErrorAlert();
                onFail?.();
            }
        } else if (canSubmitForm() && !isSubmitting) {
            setIsSubmitting(true);
            sendEmail(data).then((response)=>{
                setIsSubmitting(false);
                lastSubmissionTimeRef.current = Date.now();
                localStorage.setItem(COOLDOWN_STORAGE_KEY, lastSubmissionTimeRef.current.toString());
                //console.log("Email sent successfully!", response);
                onSuccess?.();
                if (!disableFeedback) {
                    handleOpenSuccessAlert();
                }
            }, (e)=>{
                setIsSubmitting(false);
                //console.error("Error sending email:", e);
                onFail?.();
                if (!disableFeedback) {
                    handleOpenErrorAlert();
                }
            });
        } else {
            if (!disableFeedback) {
                handleOpenErrorAlert();
            }
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Snackbar, {
                open: openSuccessAlert,
                autoHideDuration: 6000,
                onClose: handleCloseSuccessAlert,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Alert, {
                    onClose: handleCloseSuccessAlert,
                    severity: "success",
                    sx: {
                        width: "100%"
                    },
                    children: "Form successfully sent!"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Snackbar, {
                open: openErrorAlert,
                autoHideDuration: 6000,
                onClose: handleCloseErrorAlert,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Alert, {
                    onClose: handleCloseErrorAlert,
                    severity: "error",
                    sx: {
                        width: "100%"
                    },
                    children: "Error sending form."
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                component: "form",
                noValidate: true,
                onSubmit: handleSubmitForm,
                sx: {
                    display: "flex",
                    width: width || (isMediumUp ? "75%" : "95%"),
                    maxWidth: maxWidth || "max-content",
                    height: "fit-content",
                    p: "1.25em",
                    border: `2px solid ${theme.palette.primary.main}`,
                    borderRadius: "16px 48px",
                    backgroundColor: backgroundColor || "transparent"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                        container: true,
                        columnSpacing: 2,
                        rowSpacing: 2,
                        sx: {
                            mr: "1em"
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                item: true,
                                xs: 12,
                                sm: 6,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                        id: "fullName",
                                        name: "fullName",
                                        label: "Full Name",
                                        placeholder: "Full Name",
                                        variant: "standard",
                                        fullWidth: true
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                        id: "email",
                                        name: "email",
                                        label: "Email",
                                        placeholder: "Email",
                                        variant: "standard",
                                        fullWidth: true
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                        id: "phone",
                                        name: "phone",
                                        label: "Phone",
                                        placeholder: "Phone",
                                        variant: "standard",
                                        fullWidth: true
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.InputLabel, {
                                        id: "serviceType",
                                        sx: {
                                            mt: "1.25em",
                                            textAlign: "left"
                                        },
                                        children: "Service Type"
                                    }),
                                    isMediumUp ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Select, {
                                        label: "Service Type",
                                        id: "serviceType",
                                        name: "serviceType",
                                        value: serviceType,
                                        onChange: handleChangeServiceType,
                                        variant: "standard",
                                        fullWidth: true,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                                                value: "Residential",
                                                children: "Residential"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                                                value: "Commercial",
                                                children: "Commercial"
                                            })
                                        ]
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.NativeSelect, {
                                        label: "Service Type",
                                        id: "serviceType",
                                        name: "serviceType",
                                        value: serviceType,
                                        onChange: handleChangeServiceType,
                                        variant: "standard",
                                        fullWidth: true,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "Residential",
                                                children: "Residential"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "Commercial",
                                                children: "Commercial"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                item: true,
                                xs: 12,
                                sm: 6,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                        id: "address",
                                        label: "Service Address",
                                        name: "serviceAddress",
                                        placeholder: "Service Address",
                                        multiline: true,
                                        minRows: 1,
                                        maxRows: 1,
                                        variant: "standard",
                                        fullWidth: true
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                        id: "message",
                                        label: "Message",
                                        name: "message",
                                        placeholder: "Message",
                                        multiline: true,
                                        minRows: 5.34,
                                        maxRows: 5.34,
                                        variant: "outlined",
                                        fullWidth: true,
                                        sx: {
                                            mt: "1em"
                                        }
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        variant: "contained",
                        type: "submit",
                        sx: {
                            borderRadius: "10px 38px 10px 10px"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                            children: "Submit"
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 6275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ layout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/icons-material/Menu"
var Menu_ = __webpack_require__(3365);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
// EXTERNAL MODULE: external "@mui/icons-material/PhoneInTalkOutlined"
var PhoneInTalkOutlined_ = __webpack_require__(6113);
var PhoneInTalkOutlined_default = /*#__PURE__*/__webpack_require__.n(PhoneInTalkOutlined_);
// EXTERNAL MODULE: external "@mui/icons-material/Place"
var Place_ = __webpack_require__(5214);
var Place_default = /*#__PURE__*/__webpack_require__.n(Place_);
// EXTERNAL MODULE: external "@mui/icons-material/ExpandMore"
var ExpandMore_ = __webpack_require__(8148);
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore_);
// EXTERNAL MODULE: external "@mui/icons-material/Phone"
var Phone_ = __webpack_require__(6872);
var Phone_default = /*#__PURE__*/__webpack_require__.n(Phone_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/callme.js
var callme = __webpack_require__(210);
;// CONCATENATED MODULE: ./components/callnowsticker.js








function CallNowSticker() {
    const theme = (0,material_.useTheme)();
    const isLargeUp = (0,material_.useMediaQuery)(theme.breakpoints.up("lg"));
    const isMediumUp = (0,material_.useMediaQuery)(theme.breakpoints.up("md")) || isLargeUp;
    const isSmallUp = (0,material_.useMediaQuery)(theme.breakpoints.up("sm")) || isMediumUp;
    return /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
        href: callme/* telephone */.w,
        children: !isSmallUp && /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
            sx: {
                display: "flex",
                position: "fixed",
                bottom: "0",
                //left: "0",
                width: "100%",
                minHeight: "64px",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#025db8",
                zIndex: "99"
            },
            children: [
                /*#__PURE__*/ jsx_runtime.jsx((Phone_default()), {
                    sx: {
                        color: "white",
                        mr: "0.5em"
                    }
                }),
                /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                    color: "white",
                    children: "Call Now"
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/footer.js




function Footer() {
    const theme = (0,material_.useTheme)();
    const isLargeUp = (0,material_.useMediaQuery)(theme.breakpoints.up("lg"));
    const isMediumUp = (0,material_.useMediaQuery)(theme.breakpoints.up("md")) || isLargeUp;
    const isSmallUp = (0,material_.useMediaQuery)(theme.breakpoints.up("sm")) || isMediumUp;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
        sx: {
            display: "flex",
            width: "100%",
            p: "1em",
            pb: `calc(1em + ${isSmallUp ? "0px" : "64px"})`,
            backgroundColor: "whitesmoke",
            justifyContent: "center",
            flexDirection: "column"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Typography, {
                variant: "body2",
                color: "text.secondary",
                align: "center",
                children: [
                    "Copyright \xa9 ",
                    new Date().getFullYear(),
                    " Seven Seas Power Washing LLC, All Rights Reserved"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                sx: {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    mt: "0.5em"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/privacypolicy",
                        style: {
                            textDecoration: "none"
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                            variant: "body2",
                            color: "text.secondary",
                            mr: "0.5em",
                            sx: {
                                fontWeight: "bold"
                            },
                            children: "Privacy Policy"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/cookiepolicy",
                        style: {
                            textDecoration: "none"
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                            variant: "body2",
                            color: "text.secondary",
                            mr: "0.5em",
                            sx: {
                                fontWeight: "bold"
                            },
                            children: "Cookie Policy"
                        })
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/contactform.js
var contactform = __webpack_require__(7790);
;// CONCATENATED MODULE: ./components/layout.js













const drawerWidth = 240;
function Layout({ children }) {
    const theme = (0,material_.useTheme)();
    const router = (0,router_.useRouter)();
    const isLargeUp = (0,material_.useMediaQuery)(theme.breakpoints.up("lg"));
    const isMediumUp = (0,material_.useMediaQuery)(theme.breakpoints.up("md")) || isLargeUp;
    const isSmallUp = (0,material_.useMediaQuery)(theme.breakpoints.up("sm")) || isMediumUp;
    const [drawerOpen, setDrawerOpen] = (0,external_react_.useState)(false);
    const [openQuoteForm, setOpenQuoteForm] = (0,external_react_.useState)(false);
    const [anchorElServices, setAnchorElServices] = (0,external_react_.useState)(null);
    const selectedColor = "gold";
    const [openFormSuccessAlert, setOpenFormSuccessAlert] = (0,external_react_.useState)(false);
    const handleOpenFormSuccessAlert = ()=>{
        setOpenFormSuccessAlert(true);
        handleCloseQuoteForm();
    };
    const handleCloseFormSuccessAlert = ()=>{
        setOpenFormSuccessAlert(false);
    };
    const handleSuccessQuoteForm = ()=>{
        handleOpenFormSuccessAlert();
    };
    const handleOpenQuoteForm = ()=>{
        setOpenQuoteForm(true);
    };
    const handleCloseQuoteForm = ()=>{
        setOpenQuoteForm(false);
    };
    const handleOpenServicesMenu = (event)=>{
        setAnchorElServices(event.currentTarget);
    };
    const handleCloseServicesMenu = ()=>{
        setAnchorElServices(null);
    };
    const handleDrawerClose = ()=>{
        setDrawerOpen(false);
    };
    const handleDrawerOpen = ()=>{
        setDrawerOpen(true);
    };
    const serviceItems = [
        {
            text: "Residential",
            img: "/homes1.jpg",
            onClick: ()=>{
                handleCloseServicesMenu();
                router.push("/services/residential");
            },
            selected: router.pathname.includes("/residential", 0)
        },
        {
            text: "Commercial",
            img: "/building1.jpg",
            onClick: ()=>{
                handleCloseServicesMenu();
                router.push("/services/commercial");
            },
            selected: router.pathname.includes("/commercial", 0)
        }
    ];
    const navItems = [
        {
            text: "Home",
            onClick: ()=>{
                router.push("/home");
            },
            selected: router.pathname === "/home" || router.pathname === "/"
        },
        {
            text: "Services",
            onClick: (e)=>{
                if (!drawerOpen) {
                    handleOpenServicesMenu(e);
                }
            },
            selected: router.pathname.includes("/services", 0)
        },
        {
            text: "About",
            onClick: ()=>{
                router.push("/about");
            },
            selected: router.pathname === "/about"
        },
        {
            text: "Contact",
            onClick: ()=>{
                router.push("/contact");
            },
            selected: router.pathname === "/contact"
        }
    ];
    const drawer = /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
        sx: {
            textAlign: "center"
        },
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                sx: {
                    display: "flex",
                    flex: "1",
                    aspectRatio: "500/425",
                    width: "100%",
                    padding: ".5em 1em .5em 1em"
                },
                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                    src: "/logo.png",
                    alt: "logo",
                    style: {
                        width: "100%",
                        height: "100%"
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.List, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(material_.Divider, {}),
                    navItems.map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)((external_react_default()).Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(material_.ListItem, {
                                    disablePadding: true,
                                    children: item.text === "Services" ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Accordion, {
                                        elevation: 0,
                                        sx: {
                                            width: "100%"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(material_.AccordionSummary, {
                                                expandIcon: /*#__PURE__*/ jsx_runtime.jsx((ExpandMore_default()), {}),
                                                sx: {
                                                    color: item.selected ? selectedColor : "inherit",
                                                    "&:hover": {
                                                        backgroundColor: "#0000000c"
                                                    }
                                                },
                                                children: /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                                    sx: {
                                                        width: "100%",
                                                        pl: ".5em"
                                                    },
                                                    children: item.text
                                                })
                                            }),
                                            serviceItems.map((serviceItem)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.AccordionDetails, {
                                                    onClick: serviceItem.onClick,
                                                    sx: {
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        "&:hover": {
                                                            backgroundColor: "#0000000c",
                                                            cursor: "pointer"
                                                        }
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                                            sx: {
                                                                width: "100%",
                                                                textAlign: "center",
                                                                fontWeight: "500",
                                                                color: serviceItem.selected ? selectedColor : "inherit"
                                                            },
                                                            children: serviceItem.text
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: serviceItem.img,
                                                            alt: "image",
                                                            style: {
                                                                width: "100%"
                                                            }
                                                        })
                                                    ]
                                                }, serviceItem.text))
                                        ]
                                    }) : /*#__PURE__*/ jsx_runtime.jsx(material_.ListItemButton, {
                                        disableRipple: true,
                                        onClick: item.onClick,
                                        sx: {
                                            color: item.selected ? selectedColor : "inherit"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime.jsx(material_.ListItemText, {
                                            primary: item.text,
                                            sx: {
                                                pl: "0.5em"
                                            }
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(material_.Divider, {})
                            ]
                        }, item.text)),
                    isMediumUp && /*#__PURE__*/ jsx_runtime.jsx(material_.Menu, {
                        sx: {
                            mt: "45px",
                            ".MuiPaper-root": {
                                backgroundColor: theme.palette.primary.main,
                                borderRadius: "5px",
                                pb: "2px"
                            }
                        },
                        elevation: 0,
                        anchorEl: anchorElServices,
                        anchorOrigin: {
                            vertical: "top",
                            horizontal: "right"
                        },
                        keepMounted: true,
                        transformOrigin: {
                            vertical: "top",
                            horizontal: "right"
                        },
                        open: Boolean(anchorElServices),
                        onClose: handleCloseServicesMenu,
                        children: /*#__PURE__*/ jsx_runtime.jsx(material_.Stack, {
                            spacing: 1,
                            //divider={<Divider orientation="vertical" flexItem />}
                            direction: "row",
                            pl: "0.5em",
                            pr: "0.5em",
                            children: serviceItems.map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                                    onClick: item.onClick,
                                    sx: {
                                        display: "flex",
                                        flexDirection: "column",
                                        width: "275px",
                                        height: "200px",
                                        justifyContent: "center",
                                        ":hover": {
                                            cursor: "pointer"
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                            textAlign: "center",
                                            sx: {
                                                fontSize: "1.1em",
                                                fontWeight: "500",
                                                color: item.selected ? selectedColor : "white"
                                            },
                                            children: item.text
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: item.img,
                                            alt: "image",
                                            style: {
                                                display: "flex",
                                                flexGrow: "1"
                                            }
                                        })
                                    ]
                                }, item.text))
                        })
                    })
                ]
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(material_.Snackbar, {
                open: openFormSuccessAlert,
                autoHideDuration: 6000,
                onClose: handleCloseFormSuccessAlert,
                children: /*#__PURE__*/ jsx_runtime.jsx(material_.Alert, {
                    onClose: handleCloseFormSuccessAlert,
                    severity: "success",
                    sx: {
                        width: "100%"
                    },
                    children: "Form successfully sent!"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Dialog, {
                open: openQuoteForm,
                onClose: handleCloseQuoteForm,
                maxWidth: "md",
                sx: {
                    ".MuiPaper-root": {
                        backgroundColor: "white",
                        borderRadius: "15px"
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(material_.DialogTitle, {
                        color: theme.palette.primary.main,
                        children: "Free Quote!"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(material_.DialogContentText, {
                        pl: "1.5em",
                        pr: "1.5em",
                        children: "Just provide us with the job details."
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(material_.DialogContent, {
                        sx: {
                            display: "flex",
                            justifyContent: "center"
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx(contactform/* default */.Z, {
                            onSuccess: handleSuccessQuoteForm,
                            width: "100%"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(material_.DialogActions, {
                        children: /*#__PURE__*/ jsx_runtime.jsx(material_.Button, {
                            onClick: handleCloseQuoteForm,
                            sx: {
                                mr: "0.7em"
                            },
                            children: "Cancel"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(CallNowSticker, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                sx: {
                    display: "flex",
                    minHeight: "100vh",
                    flexDirection: "column"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(material_.CssBaseline, {}),
                    /*#__PURE__*/ jsx_runtime.jsx(material_.AppBar, {
                        component: "nav",
                        elevation: 3,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Toolbar, {
                            sx: {
                                justifyContent: "space-between"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                                    onClick: ()=>{
                                        router.push("/");
                                    },
                                    sx: {
                                        display: "flex",
                                        flex: "1",
                                        aspectRatio: "756/216",
                                        maxWidth: "211px",
                                        mr: "1em",
                                        alignItems: "center",
                                        mt: "10px",
                                        mb: "8px",
                                        "&:hover": {
                                            cursor: "pointer"
                                        }
                                    },
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "/banner.png",
                                        alt: "banner",
                                        style: {
                                            width: "100%"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                                    sx: {
                                        display: "flex",
                                        flex: "99",
                                        maxWidth: "fit-content",
                                        justifyContent: "flex-end",
                                        alignItems: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            style: {
                                                display: isLargeUp ? "flex" : "none",
                                                alignItems: "center",
                                                marginRight: "1em"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx((Place_default()), {}),
                                                /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                                    variant: "body",
                                                    children: "Albuquerque, NM"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(material_.Button, {
                                            onClick: handleOpenQuoteForm,
                                            disableRipple: true,
                                            color: "inherit",
                                            sx: {
                                                border: `2px solid ${selectedColor}`,
                                                borderRadius: "32px",
                                                "&:hover": {
                                                    backgroundColor: selectedColor
                                                }
                                            },
                                            children: "Free Quote"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(material_.IconButton, {
                                            href: callme/* telephone */.w,
                                            color: "inherit",
                                            sx: {
                                                ml: ".2em",
                                                mr: "0em",
                                                backgroundColor: "transparent",
                                                "&:hover": {
                                                    backgroundColor: "transparent",
                                                    color: selectedColor
                                                }
                                            },
                                            children: /*#__PURE__*/ jsx_runtime.jsx((PhoneInTalkOutlined_default()), {})
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: callme/* telephone */.w,
                                            style: {
                                                textDecoration: "none",
                                                color: "inherit"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                                sx: {
                                                    display: isMediumUp ? "block" : "none",
                                                    "&:hover": {
                                                        //backgroundColor: "transparent",
                                                        color: selectedColor
                                                    }
                                                },
                                                children: isLargeUp ? callme/* telephone */.w.substring(4) : ""
                                            })
                                        }),
                                        navItems.map((item)=>/*#__PURE__*/ jsx_runtime.jsx(material_.Button, {
                                                //disableRipple
                                                onClick: item.onClick,
                                                sx: {
                                                    display: isMediumUp ? "block" : "none",
                                                    color: item.selected ? selectedColor : "inherit",
                                                    backgroundColor: "transparent",
                                                    "&:hover": {
                                                        backgroundColor: "transparent"
                                                    }
                                                },
                                                children: item.text
                                            }, item.text)),
                                        /*#__PURE__*/ jsx_runtime.jsx(material_.IconButton, {
                                            onClick: handleDrawerOpen,
                                            color: "inherit",
                                            sx: {
                                                display: isMediumUp ? "none" : "block"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime.jsx((Menu_default()), {
                                                sx: {
                                                    display: isMediumUp ? "none" : "block"
                                                }
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                        component: "nav",
                        children: /*#__PURE__*/ jsx_runtime.jsx(material_.Drawer, {
                            variant: "temporary",
                            open: drawerOpen && !isMediumUp,
                            onClose: handleDrawerClose,
                            ModalProps: {
                                keepMounted: true
                            },
                            //hideBackdrop
                            sx: {
                                display: drawerOpen ? "block" : "none",
                                "& .MuiDrawer-paper": {
                                    boxSizing: "border-box",
                                    width: drawerWidth
                                }
                            },
                            children: drawer
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                        component: "main",
                        sx: {
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(material_.Toolbar, {}),
                            children
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(Footer, {})
                ]
            })
        ]
    });
}
/* harmony default export */ const layout = (Layout);


/***/ })

};
;