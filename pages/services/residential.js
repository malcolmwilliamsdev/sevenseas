import Layout from "@/components/layout.js";
import PageBanner from "@/components/pagebanner";
import ServiceItem from "@/components/ServiceItem";
import { Grid, Box, Typography } from "@mui/material";

export default function Residential() {
  const pagePhoto = "/homes2.jpg";
  const pagePhotoPosition = "50% 0%";

  const gridItems = [
    {
      title: "House Siding",
      src: "/wall.jpg",
      description:
        "Revitalize the exterior of your home with our professional house power washing service. Our team of skilled technicians will remove dirt, grime, and mildew buildup, restoring the beauty of your house's siding. With our eco-friendly cleaning solutions and advanced equipment, we ensure a thorough and gentle cleaning process that leaves your home looking fresh and well-maintained.",
    },
    {
      title: "Driveways",
      src: "/driveway.jpg",
      description:
        "Enhance your curb appeal and make a lasting first impression with our driveway power washing service. Over time, driveways accumulate oil stains, dirt, and weather-related debris, making them look worn-out and unappealing. Our power washing experts will eliminate these unsightly marks, revealing a pristine driveway surface. Experience a renewed and clean driveway that complements the overall aesthetics of your property.",
    },
    {
      title: "Decks",
      src: "/deck.jpg",
      description:
        "Enjoy outdoor living to the fullest with our deck power washing service. Decks are exposed to harsh weather conditions, leading to mold, algae, and grime buildup, making them slippery and hazardous. Our specialized deck cleaning techniques will refresh your deck's appearance and extend its lifespan. Whether it's wood, composite, or concrete, we'll restore your deck's natural beauty, allowing you to create lasting memories in a safe and inviting space.",
    },
  ];

  return (
    <>
      <Layout>
        <PageBanner
          photo={pagePhoto}
          photoPosition={pagePhotoPosition}
          text="Residential Services"
        />

        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
            color: "#033b73",
            p: "1em 5vw 1em 5vw",
          }}
        >
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            We understand the importance of a clean and inviting home
            environment. Whether it&apos;s your house&apos;s siding, driveway,
            deck, or patio, our expert power washing techniques and eco-friendly
            products will eliminate dirt, grime, and stains, restoring your
            property to its former glory.
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            justifyContent: "center",
            padding: "1em 2em 1em 2em",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Grid container columnSpacing={10} rowSpacing={3}>
              {gridItems.map((item, index) => (
                <ServiceItem
                  key={index}
                  lgGrid={4}
                  src={item.src}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </Grid>
          </Box>
        </Box>
      </Layout>
    </>
  );
}
