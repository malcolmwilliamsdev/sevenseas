import React, { useState, useRef, useEffect } from "react";
import {
  Typography,
  Box,
  Grid,
  TextField,
  Select,
  MenuItem,
  NativeSelect,
  InputLabel,
  Button,
  useTheme,
  useMediaQuery,
  Snackbar,
  Alert,
} from "@mui/material";
import emailjs from "emailjs-com";

export default function ContactForm({
  backgroundColor,
  width,
  maxWidth,
  onSuccess,
  onFail,
  disableFeedback,
}) {
  const theme = useTheme();

  const isLargeUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isMediumUp = useMediaQuery(theme.breakpoints.up("md")) || isLargeUp;
  const isSmallUp = useMediaQuery(theme.breakpoints.up("sm")) || isMediumUp;

  const [serviceType, setServiceType] = useState("Residential");
  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
  const [openErrorAlert, setOpenErrorAlert] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const lastSubmissionTimeRef = useRef(0);
  const MIN_COOLDOWN = 120000; // 2 minutes in milliseconds
  const COOLDOWN_STORAGE_KEY = "lastSubmissionTime";

  useEffect(() => {
    const storedLastSubmissionTime = localStorage.getItem(COOLDOWN_STORAGE_KEY);
    if (storedLastSubmissionTime) {
      lastSubmissionTimeRef.current = parseInt(storedLastSubmissionTime, 10);
    }
  }, []);

  const canSubmitForm = () => {
    const now = Date.now();
    return now - lastSubmissionTimeRef.current >= MIN_COOLDOWN;
  };

  const handleOpenErrorAlert = () => {
    setOpenErrorAlert(true);
  };

  const handleCloseErrorAlert = () => {
    setOpenErrorAlert(false);
  };

  const handleOpenSuccessAlert = () => {
    setOpenSuccessAlert(true);
  };

  const handleCloseSuccessAlert = () => {
    setOpenSuccessAlert(false);
  };

  const handleChangeServiceType = (event) => {
    setServiceType(event.target.value);
  };

  const sendEmail = async (data) => {
    const serviceID = "service_1tw47bt";
    const templateID = "template_6ywassq";

    const customerName = "Name: " + data.fullName + "\n";
    const customerEmail = "Email: " + data.email + "\n";
    const customerPhone = "Phone Number: " + data.phone + "\n";
    const customerAddress = "Address: " + data.serviceAddress + "\n";
    const customerType = "Service Type: " + data.serviceType + "\n\n";
    const customerMessage = "Message: \n" + data.message + "\n";
    const messageBody =
      customerName +
      customerEmail +
      customerPhone +
      customerAddress +
      customerType +
      customerMessage;

    const templateParams = {
      from_name: data.fullName,
      message: messageBody,
    };

    return emailjs.send(serviceID, templateID, templateParams);
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      serviceAddress: formData.get("serviceAddress"),
      serviceType: formData.get("serviceType"),
      message: formData.get("message"),
    };
    console.log(data);

    let empty = false;
    const values = Object.values(data);
    for (const element of values) {
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
      sendEmail(data).then(
        (response) => {
          setIsSubmitting(false);
          lastSubmissionTimeRef.current = Date.now();
          localStorage.setItem(
            COOLDOWN_STORAGE_KEY,
            lastSubmissionTimeRef.current.toString()
          );

          //console.log("Email sent successfully!", response);
          onSuccess?.();
          if (!disableFeedback) {
            handleOpenSuccessAlert();
          }
        },
        (e) => {
          setIsSubmitting(false);
          //console.error("Error sending email:", e);
          onFail?.();
          if (!disableFeedback) {
            handleOpenErrorAlert();
          }
        }
      );
    } else {
      if (!disableFeedback) {
        handleOpenErrorAlert();
      }
    }
  };

  return (
    <>
      <Snackbar
        open={openSuccessAlert}
        autoHideDuration={6000}
        onClose={handleCloseSuccessAlert}
      >
        <Alert
          onClose={handleCloseSuccessAlert}
          severity="success"
          sx={{ width: "100%" }}
        >
          Form successfully sent!
        </Alert>
      </Snackbar>
      <Snackbar
        open={openErrorAlert}
        autoHideDuration={6000}
        onClose={handleCloseErrorAlert}
      >
        <Alert
          onClose={handleCloseErrorAlert}
          severity="error"
          sx={{ width: "100%" }}
        >
          Error sending form.
        </Alert>
      </Snackbar>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmitForm}
        sx={{
          display: "flex",
          width: width || (isMediumUp ? "75%" : "95%"),
          maxWidth: maxWidth || "max-content",
          height: "fit-content",
          p: "1.25em",
          border: `2px solid ${theme.palette.primary.main}`,
          borderRadius: "16px 48px",
          backgroundColor: backgroundColor || "transparent",
        }}
      >
        <Grid container columnSpacing={2} rowSpacing={2} sx={{ mr: "1em" }}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="fullName"
              name="fullName"
              label="Full Name"
              placeholder="Full Name"
              variant="standard"
              fullWidth
            />
            <TextField
              id="email"
              name="email"
              label="Email"
              placeholder="Email"
              variant="standard"
              fullWidth
            />
            <TextField
              id="phone"
              name="phone"
              label="Phone"
              placeholder="Phone"
              variant="standard"
              fullWidth
            />

            <InputLabel
              id="serviceType"
              sx={{ mt: "1.25em", textAlign: "left" }}
            >
              Service Type
            </InputLabel>
            {isMediumUp ? (
              <Select
                label="Service Type"
                id="serviceType"
                name="serviceType"
                value={serviceType}
                onChange={handleChangeServiceType}
                variant="standard"
                fullWidth
              >
                <MenuItem value={"Residential"}>Residential</MenuItem>
                <MenuItem value={"Commercial"}>Commercial</MenuItem>
              </Select>
            ) : (
              <NativeSelect
                label="Service Type"
                id="serviceType"
                name="serviceType"
                value={serviceType}
                onChange={handleChangeServiceType}
                variant="standard"
                fullWidth
              >
                <option value={"Residential"}>Residential</option>
                <option value={"Commercial"}>Commercial</option>
              </NativeSelect>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="address"
              label="Service Address"
              name="serviceAddress"
              placeholder="Service Address"
              multiline
              minRows={1}
              maxRows={1}
              variant="standard"
              fullWidth
            />
            <TextField
              id="message"
              label="Message"
              name="message"
              placeholder="Message"
              multiline
              minRows={5.34}
              maxRows={5.34}
              variant="outlined"
              fullWidth
              sx={{ mt: "1em" }}
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          type="submit"
          sx={{ borderRadius: "10px 38px 10px 10px" }}
        >
          <Typography>Submit</Typography>
        </Button>
      </Box>
    </>
  );
}
