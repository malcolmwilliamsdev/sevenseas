import React, { useState } from "react";
import Layout from "@/components/layout.js";
import ContactForm from "@/components/contactform";
import {
  Typography,
  Box,
  Button,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import PageBanner from "@/components/pagebanner";
import { telephone } from "@/components/callme";
import PlaceIcon from "@mui/icons-material/Place";

export default function Contact() {
  const pagePhoto = "/header2.jpg";
  const pagePhotoPosition = "50% 50%";

  const theme = useTheme();

  const isLargeUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isMediumUp = useMediaQuery(theme.breakpoints.up("md")) || isLargeUp;
  const isSmallUp = useMediaQuery(theme.breakpoints.up("sm")) || isMediumUp;

  return (
    <Layout>
      <PageBanner
        photo={pagePhoto}
        photoPosition={pagePhotoPosition}
        text="Contact Us"
      />

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "#033b73",
          mt: "0.5em",
        }}
      >
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          <PlaceIcon />
          Albuquerque, NM and Greater Area
        </Typography>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208957.8313576077!2d-106.8412908266895!3d35.082579388853105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87220addd309837b%3A0xc0d3f8ceb8d9f6fd!2sAlbuquerque%2C%20NM!5e0!3m2!1sen!2sus!4v1689972621082!5m2!1sen!2sus"
          width={isMediumUp ? "75%" : "100%"}
          height="400px"
          style={{ border: "0px solid black" }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>

      <Box
        id="form"
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          color: "#033b73",
          p: "1em 5vw 1em 5vw",
        }}
      >
        <Button variant="contained" href={telephone}>
          <Typography>{telephone.substring(4)}</Typography>
        </Button>
        <Typography variant="h6" sx={{ textAlign: "center", mt: "0.5em" }}>
          Don&apos;t want to call? Just fill out this form and we will email you
          shortly
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          mb: "1em",
        }}
      >
        <ContactForm backgroundColor="white" />
      </Box>
    </Layout>
  );
}
