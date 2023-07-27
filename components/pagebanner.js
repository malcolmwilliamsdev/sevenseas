import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

export default function PageBanner({ photo, text, photoPosition }) {
  const theme = useTheme();

  const isLargeUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isMediumUp = useMediaQuery(theme.breakpoints.up("md")) || isLargeUp;
  const isSmallUp = useMediaQuery(theme.breakpoints.up("sm")) || isMediumUp;

  return (
    <Box
      sx={{
        position: "relative",
        textAlign: "center",
        width: "100%",
        height: isSmallUp ? "300px" : "250px",
        backgroundImage: `url(${photo})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: photoPosition || "50% 50%",
      }}
    >
      <Typography
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: isLargeUp ? "5.5em" : isMediumUp ? "4.5em" : "3.5em",
          fontWeight: "400",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}
