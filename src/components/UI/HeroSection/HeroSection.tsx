/* eslint-disable react/no-unescaped-entities */

"use client";

import { Box, Button, Typography } from "@mui/material";
import heroImage from "@/assets/hero-img.png";
import Image from "next/image";
import { keyframes } from "@emotion/react";
import ball from "@/assets/img/hero/hero-light-2.png";
import bg from "@/assets/img/map-light.png";
import bgGradient from "@/assets/Gradient.png";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";

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
      {/* <Container> */}
      <Box
        sx={{
          position: "relative",
          display: {
            xs: "flex",
            sm: "flex",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
          justifyContent: "center",
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
        {/* <Box sx={{ marginLeft: 10 }}>
          <Typography sx={{ fontSize: "60px", fontWeight: "bold" }}>
            <Box component="span" sx={{ color: "primary.main" }}>
              Hey
            </Box>
            , I'm Abdullah <br /> Al Omar
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
        </Box> */}

        <Box
          sx={{
            position: "relative",
            paddingTop: 2,
            backgroundImage: `url(${bgGradient.src})`,
            backgroundBlendMode: "overlay",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: { xs: "30%", sm: "30%", md: "30%", lg: "30%" },
            height: "60vh",
            // backgroundColor: '#928abf',
          }}
        >
          <Box>
            <Image
              className="rounded-full"
              src={heroImage}
              alt="hero-image"
              height={200}
              width={300}
            />
            <Box>
              <Typography>Hi I'm Abdullah Al Omar</Typography>
              <Typography>Website Design, app &and developer</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                odio?
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
                <Button>Hire me</Button>
                <Typography sx={{ marginLeft: "30px" }}>
                  Download CV <SystemUpdateAltIcon />
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* <Box
            sx={{
              marginLeft: { xs: "30px", sm: "50px" },
              marginRight: { md: "20px", lg: "20px" },
            }}
          >
            <Image src={heroImage} alt="hero-image" height={500} width={500} />
          </Box> */}
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
          {/* <Box
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
              opacity: 0.4,
            }}
          >
            <Typography
              component="a"
              href="mailto:abdullahalomar048@gmail.com"
              sx={{ fontWeight: "bold", color: "white" }}
            >
              abdullahalomar048@gmail.com
            </Typography>
          </Box> */}
        </Box>
      </Box>

      <Box
        sx={{
          animation: `${bounceAnimation} 6s infinite`,
          position: "absolute",
          right: 540,
          top: 120,
        }}
      >
        <Image src={ball} alt="hero-image" height={50} width={50} />
      </Box>
    </Box>
  );
};
export default HeroSection;
<script>AOS.init();</script>;
