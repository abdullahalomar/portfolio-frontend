import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import mindMap from "@/assets/mind-map-Thumbnail.png";

import babySparkle from "@/assets/Baby-sparkle.png";
import clothex from "@/assets/clothex.png";
import Link from "next/link";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box sx={{ position: "relative", width: "530px", height: "220px" }}>
            <Image
              src={mindMap}
              height={500}
              width={600}
              alt="mind-map-app"
              className="rounded"
            />
            <Box
              sx={{
                position: "absolute",
                top: 20,
                left: 20,
                color: "white",
              }}
            >
              <Typography
                sx={{
                  color: "black",
                  padding: "5px 10px",
                  backgroundColor: "#6AD4DD",
                  opacity: "0.8",
                  borderRadius: 1,
                  fontSize: "12px",
                  fontWeight: 300,
                }}
                component={Link}
                href="/"
              >
                View Project
              </Typography>
              <Box
                sx={{
                  backgroundColor: "#DFF5FF",
                  opacity: "0.8",
                  my: 2,
                  borderRadius: 1,
                  paddingX: 1,
                  paddingY: 2,
                  marginRight: 2,
                }}
              >
                <Typography sx={{ color: "black" }}>Mind Map</Typography>
                <Typography sx={{ color: "black", fontSize: "11px" }}>
                  Mind map applications are innovative digital tools designed to
                  unleash creativity.
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: "white",
                  padding: "5px 10px",
                  backgroundColor: "#98ABEE",
                  borderRadius: 1,
                }}
                component={Link}
                href="https://mind-map-two.vercel.app"
              >
                Details
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box sx={{ position: "relative", width: "530px", height: "220px" }}>
            <Image
              src={babySparkle}
              height={500}
              width={600}
              alt="mind-map-app"
              className="rounded"
            />
            <Box
              sx={{
                position: "absolute",
                top: 20,
                left: 20,
                color: "white",
              }}
            >
              <Typography
                sx={{
                  color: "black",
                  padding: "5px 10px",
                  backgroundColor: "#6AD4DD",
                  opacity: "0.8",
                  borderRadius: 1,
                  fontSize: "12px",
                  fontWeight: 300,
                }}
                component={Link}
                href="/"
              >
                View Project
              </Typography>
              <Box
                sx={{
                  backgroundColor: "#DFF5FF",
                  opacity: "0.8",
                  my: 2,
                  borderRadius: 1,
                  paddingX: 1,
                  paddingY: 2,
                  marginRight: 2,
                }}
              >
                <Typography sx={{ color: "black" }}>Mind Map</Typography>
                <Typography sx={{ color: "black", fontSize: "11px" }}>
                  Baby care product shops offer a diverse range of essential
                  items tailored to meet the needs of infants and toddlers.
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: "white",
                  padding: "5px 10px",
                  backgroundColor: "#98ABEE",
                  borderRadius: 1,
                }}
                component={Link}
                href="https://assignment-8-frontend-six.vercel.app"
              >
                Details
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box sx={{ position: "relative", width: "530px", height: "220px" }}>
            <Image
              src={clothex}
              height={500}
              width={600}
              alt="mind-map-app"
              className="rounded"
            />
            <Box
              sx={{
                position: "absolute",
                top: 20,
                left: 20,
                color: "white",
              }}
            >
              <Typography
                sx={{
                  color: "black",
                  padding: "5px 10px",
                  backgroundColor: "#6AD4DD",
                  opacity: "0.8",
                  borderRadius: 1,
                  fontSize: "12px",
                  fontWeight: 300,
                }}
                component={Link}
                href="#"
              >
                View Project
              </Typography>
              <Box
                sx={{
                  backgroundColor: "#DFF5FF",
                  opacity: "0.8",
                  my: 2,
                  borderRadius: 1,
                  paddingX: 1,
                  paddingY: 2,
                  marginRight: 2,
                }}
              >
                <Typography sx={{ color: "black" }}>Mind Map</Typography>
                <Typography sx={{ color: "black", fontSize: "11px" }}>
                  These shops offer a curated selection of winter essentials,
                  ranging from cozy sweaters.
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: "white",
                  padding: "5px 10px",
                  backgroundColor: "#98ABEE",
                  borderRadius: 1,
                }}
                component={Link}
                href="https://clothex-web.vercel.app"
              >
                Details
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{ position: "relative", width: "530px", height: "220px" }}>
            <Image
              src={mindMap}
              height={500}
              width={600}
              alt="mind-map-app"
              className="rounded"
            />
            <Box
              sx={{
                position: "absolute",
                top: 20,
                left: 20,
                color: "white",
              }}
            >
              <Typography
                sx={{
                  color: "black",
                  padding: "5px 10px",
                  backgroundColor: "#6AD4DD",
                  opacity: "0.8",
                  borderRadius: 1,
                  fontSize: "12px",
                  fontWeight: 300,
                }}
                component={Link}
                href="/"
              >
                View Project
              </Typography>
              <Box
                sx={{
                  backgroundColor: "#DFF5FF",
                  opacity: "0.8",
                  my: 2,
                  borderRadius: 1,
                  paddingX: 1,
                  paddingY: 2,
                  marginRight: 2,
                }}
              >
                <Typography sx={{ color: "black" }}>Mind Map</Typography>
                <Typography sx={{ color: "black", fontSize: "11px" }}>
                  Mind Map progress tailwind{" "}
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: "white",
                  padding: "5px 10px",
                  backgroundColor: "#98ABEE",
                  borderRadius: 1,
                }}
                component={Link}
                href="#"
              >
                Details
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
