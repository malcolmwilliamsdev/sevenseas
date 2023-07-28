import Layout from "@/components/layout.js";
import { useTheme, Box, Typography, useMediaQuery, Paper } from "@mui/material";
import PageBanner from "@/components/pagebanner";

export default function About() {
  const pagePhoto = "/header2.jpg";
  const pagePhotoPosition = "50% 50%";
  const ownerPhoto = "/owner.jpg";

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
          text="About Us"
        />

        <Box
          sx={{
            display: "flex",
            maxWidth: "100%",
            flexDirection: "column",
            textAlign: "center",
            p: "1em 5vw 1em 5vw",
          }}
        >
          <Typography variant="h6" color="#033b73">
            Your Trusted Veteran-Owned Pressure Washing Company in Albuquerque,
            NM
          </Typography>
        </Box>
        <Paper elevation={3} sx={{ m: "1em", p: "0.5em" }}>
          <Box
            sx={{
              textAlign: "justify",
              marginTop: "1em",
              marginLeft: isMediumUp ? "4em" : "1em",
              marginRight: isMediumUp ? "4em" : "1em",
              marginBottom: "1em",
            }}
          >
            <img
              src={ownerPhoto}
              alt="image"
              style={{
                float: "left",
                maxWidth: isLargeUp
                  ? "400px"
                  : isMediumUp
                  ? "300px"
                  : isSmallUp
                  ? "200px"
                  : "100%",
                maxHeight: isLargeUp
                  ? "400px"
                  : isMediumUp
                  ? "300px"
                  : isSmallUp
                  ? "200px"
                  : "100%",
                margin: "0 1em 0em 0",
              }}
            />
            <Typography variant="h4" color="#033b73">
              Premier Service <br />
            </Typography>
            <Typography mb="0.5em">
              Welcome to Seven Seas, the premier pressure washing service in
              Albuquerque, NM, led by a team of dedicated veterans. With a
              strong commitment to excellence and a profound sense of duty, we
              take great pride in delivering top-tier solutions that exceed
              expectations and leave a lasting impression. At Seven Seas, we
              harness the power of cold water, high-pressure technology to
              restore the beauty and vitality of your property. Our skilled
              technicians possess unrivaled expertise, utilizing
              state-of-the-art equipment to ensure each project is executed with
              precision and finesse. Whether you require residential or
              commercial pressure washing services, we&apos;ve got you covered.
              <br />
            </Typography>
            <Typography variant="h4" color="#033b73">
              Our Mission <br />
            </Typography>
            <Typography mb="0.5em">
              Our mission is simple: to deliver best-in-class service that
              leaves no stone unturned. From revitalizing your home&apos;s
              exterior to rejuvenating commercial spaces, we handle each project
              with meticulous care, leaving behind a gleaming result that speaks
              for itself.
              <br />
            </Typography>
            <Typography variant="h4" color="#033b73">
              A Job Done Right <br />
            </Typography>
            <Typography mb="0.5em">
              What sets us apart is our relentless pursuit of excellence. As a
              veteran-owned company, our core values are deeply rooted in
              discipline, integrity, and unwavering dedication. Every project is
              approached with the utmost professionalism, ensuring your property
              receives the care and attention it deserves.
              <br />
            </Typography>
          </Box>
        </Paper>
      </Layout>
    </>
  );
}
