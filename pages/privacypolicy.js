import Layout from "@/components/layout.js";
import { useTheme, Box, useMediaQuery } from "@mui/material";
import PageBanner from "@/components/pagebanner";
import Privacy from "@/components/privacy";

export default function PrivacyPolicy() {
  const pagePhoto = "/photo1.jpg";

  const theme = useTheme();
  const isLargeUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isMediumUp = useMediaQuery(theme.breakpoints.up("md")) || isLargeUp;
  const isSmallUp = useMediaQuery(theme.breakpoints.up("sm")) || isMediumUp;

  return (
    <>
      <Layout>
        <PageBanner photo={pagePhoto} text="Privacy Policy" />

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
          <Privacy />
        </Box>
      </Layout>
    </>
  );
}
