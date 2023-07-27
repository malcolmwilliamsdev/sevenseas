import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Link from "next/link";

export default function Footer() {
  const theme = useTheme();
  const isLargeUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isMediumUp = useMediaQuery(theme.breakpoints.up("md")) || isLargeUp;
  const isSmallUp = useMediaQuery(theme.breakpoints.up("sm")) || isMediumUp;

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        p: "1em",
        pb: `calc(1em + ${isSmallUp ? "0px" : "64px"})`,
        backgroundColor: "whitesmoke", //theme.palette.primary.dark,
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        {new Date().getFullYear()} Seven Seas Power Washing LLC, All Rights
        Reserved
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          mt: "0.5em",
        }}
      >
        <Link href="/privacypolicy" style={{ textDecoration: "none" }}>
          <Typography
            variant="body2"
            color="text.secondary"
            mr="0.5em"
            sx={{ fontWeight: "bold" }}
          >
            Privacy Policy
          </Typography>
        </Link>
        <Link href="/cookiepolicy" style={{ textDecoration: "none" }}>
          <Typography
            variant="body2"
            color="text.secondary"
            mr="0.5em"
            sx={{ fontWeight: "bold" }}
          >
            Cookie Policy
          </Typography>
        </Link>
      </Box>
    </Box>
  );
}
