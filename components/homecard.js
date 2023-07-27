import React from "react";
import { Typography, Paper, Box, useTheme, useMediaQuery } from "@mui/material";

export default function HomeCard({ imgSrc, title, caption, reverse }) {
  const theme = useTheme();

  const isLargeUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isMediumUp = useMediaQuery(theme.breakpoints.up("md")) || isLargeUp;
  const isSmallUp = useMediaQuery(theme.breakpoints.up("sm")) || isMediumUp;
  return (
    <Paper
      sx={{
        width: "100%",
        p: "1em",
        display: "flex",
        mt: "1em",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallUp
            ? reverse
              ? "row-reverse"
              : "row"
            : "column",
        }}
      >
        {/* Left Box */}
        <Box
          sx={{
            width: isSmallUp ? "50%" : "100%",
            p: "0.5em",
          }}
        >
          <img src={imgSrc} alt="image" width="100%" />
        </Box>
        {/* Right Box */}
        <Box
          sx={{
            width: isSmallUp ? "50%" : "100%",
            p: "0.5em",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="h4"
              color={theme.palette.primary.main}
              mb="0.5em"
            >
              {title}
            </Typography>
            <Typography variant="body" color={theme.palette.primary.main}>
              {caption}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
