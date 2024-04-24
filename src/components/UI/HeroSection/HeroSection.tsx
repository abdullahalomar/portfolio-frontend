/* eslint-disable react/no-unescaped-entities */

"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import heroImage from "@/assets/hero-img.png";
import Image from "next/image";
import { keyframes } from "@emotion/react";

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
// const bounceAnimation = keyframes`
// {
//   0% {
//     transform: translateY(-20px, 20px);
//   }
//   25% {
//     transform: translateY(20px, 20px);
//   }
//   50% {
//     transform: translate(20px, -20px);
//   }
//   75% {
//     transform: translate(-20px, -20px);
//   }
//   100% {
//     transform: translate(-20px, 20px);
//   }
// }
// `;

const HeroSection = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Container>
        <Box
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
        </Box>
      </Container>
      <Box
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
      ></Box>
    </Box>
  );
};

export default HeroSection;
