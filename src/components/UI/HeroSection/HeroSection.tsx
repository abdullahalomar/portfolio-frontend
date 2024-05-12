/* eslint-disable react/no-unescaped-entities */

"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import heroImage from "@/assets/hero-img.png";
import Image from "next/image";
import { keyframes } from "@emotion/react";
import ball from "@/assets/img/hero/hero-light-2.png";

const bounceAnimation = keyframes`
  0% {
    transform: translateY(-30px);
  }
  50% {
    transform: translateX(-30px);
  }
  100% {
    transform: translateY(-30px);
  }
`;

const HeroSection = () => {
  const downloadCV = () => {
    // Create a link element
    const link = document.createElement("a");
    link.href = "/src/assets/doc/omar-resume-website.pdf";
    link.setAttribute("download", "Abdullah_Al_Omar_CV.pdf");
    document.body.appendChild(link);
    link.click();
  };
  return (
    <Box mb={13} sx={{ position: "relative" }}>
      <Container>
        {/* <Box
          sx={{
            position: "relative",
            display: {
              xs: "flex-wrap",
              sm: "flex-wrap",
              md: "flex",
              lg: "flex",
              xl: "flex",
            },
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: {
              xs: 10,
              sm: 0,
              md: 0,
              lg: 0,
              xl: 0,
            },
          }}
        >
          <Box>
            <Typography sx={{ fontSize: "60px", fontWeight: "bold" }}>
              <Box component="span" sx={{ color: "primary.main" }}>
                Hey
              </Box>
              , I'm Abdullah Al Omar
            </Typography>

            <Typography
              sx={{
                fontSize: "40px",
                fontWeight: "semibold",
              }}
            >
              Frontend Developer
            </Typography>

            <Button
              sx={{
                marginTop: 3,
              }}
              onClick={() => downloadCV()}
            >
              Download CV
            </Button>
          </Box>

          <Box sx={{ position: "relative", marginTop: 3 }}>
            <Image src={heroImage} alt="hero-image" height={500} width={500} />
            <Box
              sx={{
                position: "absolute",
                height: 20,
                width: 20,
                borderRadius: "50%",
                backgroundColor: "primary.main",
                left: 100,
                right: 30,
                bottom: 20,
                animation: `${bounceAnimation} 3s infinite`, // Translate the box to center it
              }}
            ></Box>
            <Box
              sx={{
                backgroundColor: "primary.main",
                height: 40,
                width: 280,
                borderRadius: 10,
                position: "absolute",
                right: 70,
                bottom: -10,
                zIndex: 1,
                paddingLeft: 3,
                paddingTop: 1,
              }}
            >
              <Typography
                component="a"
                href="mailto:abdullahalomar048@gmail.com"
                sx={{ fontWeight: "bold", color: "white" }}
              >
                abdullahalomar048@gmail.com
              </Typography>
            </Box>
          </Box>
        </Box> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            pt: 10,
          }}
        >
          <Typography
            sx={{ fontSize: "45px", fontWeight: "600", textAlign: "center" }}
          >
            <Box component="span" color="primary.main">
              Hi
            </Box>
            , I'm Abdullah Al Omar, <br />
            Frontend Developer
          </Typography>
          <Image src={heroImage} alt="hero-image" height={500} width={500} />
        </Box>
        <Box
          sx={{
            animation: `${bounceAnimation} 3s infinite`,
            position: "absolute",
            bottom: 150,
          }}
        >
          <Image src={ball} alt="hero-image" height={50} width={50} />
        </Box>
      </Container>
      <Box
        sx={{
          backgroundColor: "#F4F3F9",
          width: { sm: "450px", md: "600px", lg: "800px" },
          height: { sm: "450px", md: "570px", lg: "800px" },
          borderRadius: "50%",
          position: "absolute",
          top: { sm: 30, md: -10, lg: -30 },
          left: { sm: 40, md: 100, lg: 250 },
          zIndex: -1,
        }}
      ></Box>
      <Box
        sx={{
          animation: `${bounceAnimation} 6s infinite`,
          position: "absolute",
          right: 40,
          top: 320,
        }}
      >
        <Image src={ball} alt="hero-image" height={50} width={50} />
      </Box>
      {/* <Box
        sx={{
          backgroundColor: "#5956E9",
          height: 700,
          width: 290,
          borderTopLeftRadius: "500px",
          borderBottomLeftRadius: "500px",
          position: "absolute",
          top: -20,
          right: 0,
          zIndex: -1,
        }}
      ></Box> */}
    </Box>
  );
};

export default HeroSection;
