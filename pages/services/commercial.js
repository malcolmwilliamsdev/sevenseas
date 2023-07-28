import Layout from "@/components/layout.js";
import PageBanner from "@/components/pagebanner";
import ServiceItem from "@/components/ServiceItem";
import { Grid, Box, Typography } from "@mui/material";

export default function Commercial() {
  const pagePhoto = "/city1.jpg";
  const pagePhotoPosition = "50% 0%";

  const gridItems = [
    {
      title: "Building Exterior",
      src: "/commercial_wall.jpg",
      description:
        "Transform the appearance of your commercial property with our specialized buildings power washing service. Our experienced team will meticulously remove years of grime, pollutants, and stains from your building's exterior, restoring its shine and vibrancy. With eco-friendly solutions and state-of-the-art equipment, we ensure a deep clean that enhances your business's curb appeal and leaves a lasting positive impression on clients and visitors alike.",
    },
    {
      title: "Pavement",
      src: "/pavement.jpg",
      description:
        "Maintain a clean and inviting atmosphere around your commercial property with our professional pavement power washing service. Over time, walkways, parking lots, and pavements can accumulate tough stains, grease, and oil spots, compromising safety and aesthetics. Our high-pressure cleaning techniques will revitalize your pavements, eliminating unsightly marks and restoring a pristine look. Experience a safer environment and present a well-kept image to your customers and employees.",
    },
    {
      title: "Parking Garages",
      src: "/garage.jpg",
      description:
        "Maintain a clean and safe environment for your customers and tenants with our professional parking garage power washing service. Over time, parking garages can accumulate dirt, oil, and grime, leading to slippery surfaces and an unappealing appearance. Our expert team will thoroughly clean the floors, walls, and pillars, ensuring a spotless and well-maintained parking facility. Create a positive impression and promote customer satisfaction with our top-notch power washing solutions.",
    },
    {
      title: "Outdoor Seating Area",
      src: "/seating.jpg",
      description:
        "Create a welcoming and inviting atmosphere for your patrons with our patio and outdoor seating area cleaning service. Outdoor seating areas are prone to dirt, algae, and food stains, affecting the overall dining experience. Our power washing experts will remove all traces of grime and debris, ensuring a spotless and sanitized space for your customers to enjoy. Provide a clean and enjoyable environment, enhancing customer satisfaction and loyalty.",
    },
  ];

  return (
    <>
      <Layout>
        <PageBanner
          photo={pagePhoto}
          photoPosition={pagePhotoPosition}
          text="Commercial Services"
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
            We are the leading provider of commercial power washing services.
            Our team specializes in delivering exceptional cleaning solutions to
            a diverse clientele, including:
          </Typography>
          <ul
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <li>
              <Typography>Office Buildings</Typography>
            </li>
            <li>
              <Typography>Restaurants</Typography>
            </li>
            <li>
              <Typography>Shopping Centers</Typography>
            </li>
            <li>
              <Typography>Churches</Typography>
            </li>
            <li>
              <Typography>Hotels</Typography>
            </li>
            <li>
              <Typography>Schools</Typography>
            </li>
            <li>
              <Typography>And more...</Typography>
            </li>
          </ul>
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
                  lgGrid={6}
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
