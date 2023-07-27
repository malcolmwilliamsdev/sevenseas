import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Accordion,
  Button,
  useMediaQuery,
  useTheme,
  Menu,
  Stack,
  AccordionSummary,
  AccordionDetails,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
  DialogContent,
  Snackbar,
  Alert,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/PhoneInTalkOutlined";
import PlaceIcon from "@mui/icons-material/Place";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CallNowSticker from "@/components/callnowsticker";
import Footer from "@/components/footer";
import Link from "next/link";
import { telephone } from "@/components/callme";
import ContactForm from "@/components/contactform";

const drawerWidth = 240;

function Layout({ children }) {
  const theme = useTheme();
  const router = useRouter();

  const isLargeUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isMediumUp = useMediaQuery(theme.breakpoints.up("md")) || isLargeUp;
  const isSmallUp = useMediaQuery(theme.breakpoints.up("sm")) || isMediumUp;

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openQuoteForm, setOpenQuoteForm] = useState(false);

  const [anchorElServices, setAnchorElServices] = useState(null);

  const selectedColor = "gold";

  const [openFormSuccessAlert, setOpenFormSuccessAlert] = useState(false);

  const handleOpenFormSuccessAlert = () => {
    setOpenFormSuccessAlert(true);
    handleCloseQuoteForm();
  };

  const handleCloseFormSuccessAlert = () => {
    setOpenFormSuccessAlert(false);
  };

  const handleSuccessQuoteForm = () => {
    handleOpenFormSuccessAlert();
  };

  const handleOpenQuoteForm = () => {
    setOpenQuoteForm(true);
  };

  const handleCloseQuoteForm = () => {
    setOpenQuoteForm(false);
  };

  const handleOpenServicesMenu = (event) => {
    setAnchorElServices(event.currentTarget);
  };

  const handleCloseServicesMenu = () => {
    setAnchorElServices(null);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const serviceItems = [
    {
      text: "Residential",
      img: "/homes1.jpg",
      onClick: () => {
        handleCloseServicesMenu();
        router.push("/services/residential");
      },
      selected: router.pathname.includes("/residential", 0),
    },
    {
      text: "Commercial",
      img: "/building1.jpg",
      onClick: () => {
        handleCloseServicesMenu();
        router.push("/services/commercial");
      },
      selected: router.pathname.includes("/commercial", 0),
    },
  ];

  const navItems = [
    {
      text: "Home",
      onClick: () => {
        router.push("/home");
      },
      selected: router.pathname === "/home" || router.pathname === "/",
    },
    {
      text: "Services",
      onClick: (e) => {
        if (!drawerOpen) {
          handleOpenServicesMenu(e);
        }
      },
      selected: router.pathname.includes("/services", 0),
    },
    {
      text: "About",
      onClick: () => {
        router.push("/about");
      },
      selected: router.pathname === "/about",
    },
    {
      text: "Contact",
      onClick: () => {
        router.push("/contact");
      },
      selected: router.pathname === "/contact",
    },
  ];

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Box
        sx={{
          display: "flex",
          flex: "1",
          aspectRatio: "500/425",
          width: "100%",
          padding: ".5em 1em .5em 1em",
        }}
      >
        <img
          src="/logo.png"
          alt="logo"
          style={{ width: "100%", height: "100%" }}
        ></img>
      </Box>
      <List>
        <Divider />
        {navItems.map((item) => (
          <React.Fragment key={item.text}>
            <ListItem disablePadding>
              {item.text === "Services" ? (
                <Accordion elevation={0} sx={{ width: "100%" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                      color: item.selected ? selectedColor : "inherit",
                      "&:hover": {
                        backgroundColor: "#0000000c",
                      },
                    }}
                  >
                    <Typography sx={{ width: "100%", pl: ".5em" }}>
                      {item.text}
                    </Typography>
                  </AccordionSummary>
                  {serviceItems.map((serviceItem) => (
                    <AccordionDetails
                      key={serviceItem.text}
                      onClick={serviceItem.onClick}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        "&:hover": {
                          backgroundColor: "#0000000c",
                          cursor: "pointer",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          width: "100%",
                          textAlign: "center",
                          fontWeight: "500",
                          color: serviceItem.selected
                            ? selectedColor
                            : "inherit",
                        }}
                      >
                        {serviceItem.text}
                      </Typography>
                      <img
                        src={serviceItem.img}
                        alt="image"
                        style={{
                          width: "100%",
                        }}
                      />
                    </AccordionDetails>
                  ))}
                </Accordion>
              ) : (
                <ListItemButton
                  disableRipple
                  onClick={item.onClick}
                  sx={{
                    color: item.selected ? selectedColor : "inherit",
                  }}
                >
                  <ListItemText
                    primary={item.text}
                    sx={{
                      pl: "0.5em",
                    }}
                  />
                </ListItemButton>
              )}
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
        {isMediumUp && (
          <Menu
            sx={{
              mt: "45px",
              ".MuiPaper-root": {
                backgroundColor: theme.palette.primary.main,
                borderRadius: "5px",
                pb: "2px",
              },
            }}
            elevation={0}
            anchorEl={anchorElServices}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElServices)}
            onClose={handleCloseServicesMenu}
          >
            <Stack
              spacing={1}
              //divider={<Divider orientation="vertical" flexItem />}
              direction="row"
              pl="0.5em"
              pr="0.5em"
            >
              {serviceItems.map((item) => (
                <Box
                  key={item.text}
                  onClick={item.onClick}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "275px",
                    height: "200px",
                    justifyContent: "center",
                    ":hover": { cursor: "pointer" },
                  }}
                >
                  <Typography
                    textAlign="center"
                    sx={{
                      fontSize: "1.1em",
                      fontWeight: "500",
                      color: item.selected ? selectedColor : "white",
                      //backgroundColor: theme.palette.primary.main,
                      //borderRadius: "5px 5px 0 0",
                    }}
                  >
                    {item.text}
                  </Typography>
                  <img
                    src={item.img}
                    alt="image"
                    style={{ display: "flex", flexGrow: "1" }}
                  />
                </Box>
              ))}
            </Stack>
          </Menu>
        )}
      </List>
    </Box>
  );

  return (
    <>
      <Snackbar
        open={openFormSuccessAlert}
        autoHideDuration={6000}
        onClose={handleCloseFormSuccessAlert}
      >
        <Alert
          onClose={handleCloseFormSuccessAlert}
          severity="success"
          sx={{ width: "100%" }}
        >
          Form successfully sent!
        </Alert>
      </Snackbar>
      <Dialog
        open={openQuoteForm}
        onClose={handleCloseQuoteForm}
        maxWidth="md"
        sx={{
          ".MuiPaper-root": {
            backgroundColor: "white",
            borderRadius: "15px",
          },
        }}
      >
        <DialogTitle color={theme.palette.primary.main}>
          Free Quote!
        </DialogTitle>
        <DialogContentText pl="1.5em" pr="1.5em">
          Just provide us with the job details.
        </DialogContentText>
        <DialogContent sx={{ display: "flex", justifyContent: "center" }}>
          <ContactForm onSuccess={handleSuccessQuoteForm} width="100%" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseQuoteForm} sx={{ mr: "0.7em" }}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <CallNowSticker />
      <Box
        sx={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}
      >
        <CssBaseline />
        <AppBar component="nav" elevation={3}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box
              onClick={() => {
                router.push("/");
              }}
              sx={{
                display: "flex",
                flex: "1",
                aspectRatio: "756/216",
                maxWidth: "211px",
                mr: "1em",
                alignItems: "center",
                mt: "10px",
                mb: "8px",
                "&:hover": { cursor: "pointer" },
              }}
            >
              <img
                src="/banner.png"
                alt="banner"
                style={{ width: "100%" }}
              ></img>
            </Box>
            <Box
              sx={{
                display: "flex",
                flex: "99",
                maxWidth: "fit-content",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: isLargeUp ? "flex" : "none",
                  alignItems: "center",
                  marginRight: "1em",
                }}
              >
                <PlaceIcon />
                <Typography variant="body">Albuquerque, NM</Typography>
              </div>

              <Button
                onClick={handleOpenQuoteForm}
                disableRipple
                color="inherit"
                sx={{
                  border: `2px solid ${selectedColor}`,
                  borderRadius: "32px",
                  "&:hover": { backgroundColor: selectedColor },
                }}
              >
                Free Quote
              </Button>

              <IconButton
                href={telephone}
                color="inherit"
                sx={{
                  ml: ".2em",
                  mr: "0em",
                  backgroundColor: "transparent",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: selectedColor,
                  },
                }}
              >
                <PhoneIcon />
              </IconButton>
              <Link
                href={telephone}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography
                  sx={{
                    display: isMediumUp ? "block" : "none",
                    "&:hover": {
                      //backgroundColor: "transparent",
                      color: selectedColor,
                    },
                  }}
                >
                  {isLargeUp ? telephone.substring(4) : ""}
                </Typography>
              </Link>
              {navItems.map((item) => (
                <Button
                  key={item.text}
                  //disableRipple
                  onClick={item.onClick}
                  sx={{
                    display: isMediumUp ? "block" : "none",
                    color: item.selected ? selectedColor : "inherit",
                    backgroundColor: "transparent",
                    "&:hover": { backgroundColor: "transparent" },
                  }}
                >
                  {item.text}
                </Button>
              ))}

              <IconButton
                onClick={handleDrawerOpen}
                color="inherit"
                sx={{
                  display: isMediumUp ? "none" : "block",
                }}
              >
                <MenuIcon
                  sx={{
                    display: isMediumUp ? "none" : "block",
                  }}
                />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={drawerOpen && !isMediumUp}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true,
            }}
            //hideBackdrop
            sx={{
              display: drawerOpen ? "block" : "none",
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={
            {
              //p: 3,
            }
          }
        >
          <Toolbar />
          {children}
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default Layout;
