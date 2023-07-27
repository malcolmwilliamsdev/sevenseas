import React from "react";
import { Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";
import { telephone } from "@/components/callme";

export default function CallNowSticker() {
  const theme = useTheme();

  const isLargeUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isMediumUp = useMediaQuery(theme.breakpoints.up("md")) || isLargeUp;
  const isSmallUp = useMediaQuery(theme.breakpoints.up("sm")) || isMediumUp;

  return (
    <Link href={telephone}>
      {!isSmallUp && (
        <Box
          sx={{
            display: "flex",
            position: "fixed",
            bottom: "0",
            //left: "0",
            width: "100%",
            minHeight: "64px",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#025db8",
            zIndex: "99",
          }}
        >
          <PhoneIcon sx={{ color: "white", mr: "0.5em" }} />
          <Typography color="white">Call Now</Typography>
        </Box>
      )}
    </Link>
  );
}
