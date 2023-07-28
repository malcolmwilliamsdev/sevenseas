import Layout from "@/components/layout.js";
import { useTheme, Box, useMediaQuery } from "@mui/material";
import PageBanner from "@/components/pagebanner";
import Cookie from "@/components/cookie";

export default function CookiePolicy() {
  const pagePhoto = "/header2.jpg";
  const pagePhotoPosition = "50% 50%";

  const theme = useTheme();
  const isLargeUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isMediumUp = useMediaQuery(theme.breakpoints.up("md")) || isLargeUp;
  const isSmallUp = useMediaQuery(theme.breakpoints.up("sm")) || isMediumUp;

  return (
    <>
      <Layout>
        <PageBanner
          photo={pagePhoto}
          photoPosition={pagePhotoPosition}
          text="Cookie Policy"
        />

        <Box
          sx={{
            display: "flex",
            maxWidth: "100%",
            flexDirection: "column",
            textAlign: "center",
            p: "1em 5vw 1em 5vw",
          }}
        ></Box>
        <Box sx={{ p: "0em 2em 1em 2em" }}>
          <Cookie />{" "}
        </Box>
      </Layout>
    </>
  );
}
