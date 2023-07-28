import React from "react";
import ContactForm from "@/components/contactform";
import Layout from "@/components/layout";
import HomeCard from "@/components/homecard";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

export default function Home() {
  const homeBGPhoto = "/main.jpg";
  const homeBGPhotoPosition = "50% 70%";
  const welcomePhoto = "/welcome.jpg";
  const chooseUsPhoto = "/chooseUs.jpg";

  const theme = useTheme();

  const isLargeUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isMediumUp = useMediaQuery(theme.breakpoints.up("md")) || isLargeUp;
  const isSmallUp = useMediaQuery(theme.breakpoints.up("sm")) || isMediumUp;
  return (
    <>
      <Layout>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            width: "100%",
            minHeight: "100vh",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "flex-end",
            backgroundImage: `url(${homeBGPhoto})`,
            backgroundPosition: homeBGPhotoPosition || "50% 50%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            //objectFit: "cover",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexGrow: "1",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              padding: "1em",
              //WebkitTextStroke: "1px black",
            }}
          >
            <Typography
              sx={{
                maxWidth: isMediumUp ? "75%" : "95%",
                fontSize: "2.75em",
                fontWeight: "500",
                WebkitTextStroke: "1px black",
              }}
            >
              Veteran Owned Power Washing Services in Albuquerque, NM
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              mt: "2em",
              pb: "2em",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "-0.5em",
                left: "50%",
                p: "1em",
                transform: "translate(-50%, -50%) skew(-15deg)",
                border: "2px solid gold",
                borderRadius: "25px 5px 25px 5px",
                color: "white",
                backgroundColor: theme.palette.primary.main,
                zIndex: "1",
              }}
            >
              <Typography>Book Us Today!</Typography>
            </Box>
            <ContactForm
              backgroundColor="#ffffffc0"
              maxWidth={isMediumUp ? "75%" : "95%"}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: "1em",
            width: isMediumUp ? "85%" : "95%",
            justifyContent: "center",
            ml: "auto",
            mr: "auto",
          }}
        >
          <Typography variant="h4" align="center" color="#033b73">
            Professional Power Washing
          </Typography>
          <Typography variant="h5" align="center" color="#033b73">
            Albuquerque, New Mexico
          </Typography>

          <HomeCard
            imgSrc={welcomePhoto}
            title="Seven Seas Power Washing Service"
            caption={
              <>
                Welcome to Seven Seas, your premier veteran-owned pressure
                washing business catering to both residential and commercial
                clients in Albuquerque, NM. With a commitment to excellence and
                a wealth of experience, we take pride in transforming your
                properties into pristine and inviting spaces. Our team of
                skilled professionals utilizes state-of-the-art equipment and
                eco-friendly practices to deliver top-notch results. Whether
                it&apos;s removing stubborn stains from your driveway or
                revitalizing the facade of your business, Seven Seas is
                dedicated to exceeding your expectations and ensuring customer
                satisfaction at every turn. Discover the power of a clean,
                vibrant property with Seven Seas Pressure Washing!
              </>
            }
          />
          <HomeCard
            reverse
            imgSrc={chooseUsPhoto}
            title="Why Choose Us?"
            caption={
              <>
                <strong>1. Veteran-Owned Excellence:</strong> At Seven Seas, we
                bring the same dedication, discipline, and attention to detail
                to our pressure washing services as we did during our military
                service. Our team is composed of experienced veterans who
                understand the value of hard work, integrity, and a job well
                done.
                <br />
                <br />
                <strong>2. Unmatched Expertise:</strong> With years of
                experience in the pressure washing industry, we have honed our
                skills and techniques to deliver exceptional results. From
                residential homes to commercial establishments, we know how to
                tackle a wide range of surfaces and stains, ensuring your
                property looks its best.
                <br />
                <br />
                <strong>3. Customized Solutions:</strong> We understand that
                every property is unique, and each client has specific needs.
                That&apos;s why we offer personalized solutions tailored to your
                requirements. Whether you need a one-time cleaning or a regular
                maintenance plan, we&apos;ve got you covered.
                <br />
                <br />
                <strong>4. Professional and Reliable:</strong> Punctuality and
                professionalism are at the core of our business. When you choose
                Seven Seas, you can rest assured that our team will arrive on
                time and treat your property with the utmost respect. We aim to
                exceed your expectations in every aspect of our service.
                <br />
                <br />
                <strong>5. Competitive Pricing:</strong> We believe that
                top-quality pressure washing should be accessible to all. Our
                competitive pricing ensures that you get the best value for your
                investment without compromising on the quality of service.
                <br />
                <br />
                <strong>
                  At Seven Seas Pressure Washing, we take pride in our work and
                  the opportunity to serve our community. Let us unleash the
                  true potential of your property and make it shine like never
                  before. Choose us today for reliable, efficient, and top-notch
                  pressure washing services that you can count on.
                </strong>
              </>
            }
          />
          {/*
          <HomeCard
            imgSrc="photo3.jpg"
            title="Residential Washing Service"
            caption={
              <>
                At Seven Seas Pressure Washing, we take immense pride in
                offering top-notch residential pressure washing services that
                breathe new life into your home&apos;s exterior. From the siding
                to the roof, our skilled team ensures every surface is
                thoroughly cleaned, removing dirt, grime, and unsightly stains.
                Additionally, we specialize in rejuvenating decks and patios,
                transforming weather-worn wood or stained concrete into inviting
                spaces perfect for outdoor gatherings and relaxation. Our
                expertise, combined with state-of-the-art equipment and
                eco-friendly practices, guarantees exceptional results that
                enhance your home&apos;s curb appeal and overall aesthetics.
                Trust Seven Seas to revitalize your home and outdoor spaces,
                making them shine like never before.
              </>
            }
          />
          <HomeCard
            reverse
            imgSrc="photo3.jpg"
            title="Commercial Washing Service"
            caption={
              <>
                At Seven Seas Pressure Washing, we extend our expertise to cater
                to the unique needs of commercial clients, offering
                comprehensive pressure washing services that leave a lasting
                impression. Our team is well-equipped to handle building
                exteriors of all sizes, effectively removing dirt, grime, and
                pollutants, giving your establishment a polished and
                professional appearance. Moreover, we specialize in cleaning
                pavements, sidewalks, and parking garages, ensuring a safe and
                inviting environment for your customers and employees. From
                shopping centers to office complexes, our commercial services
                encompass everything needed to maintain pristine exteriors and
                welcoming decks/patios. With our commitment to excellence,
                punctuality, and attention to detail, you can trust us to
                elevate the image of your business, leaving it looking its best
                and making a positive impact on your clientele.
              </>
            }
          />
           */}
        </Box>
      </Layout>
    </>
  );
}
