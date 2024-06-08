"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./CarouselComponent.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import online from "@/assets/img/online.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

// import required modules
import { Pagination as SwiperPagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { Box, Card, Divider, Stack, Typography } from "@mui/material";
import { useGetAllProjectsQuery } from "@/redux/api/projectApi";
import Link from "next/link";
const CarouselComponent = () => {
  const { data, isLoading } = useGetAllProjectsQuery({});
  const projects = data?.projects;
  return (
    <>
      <Swiper
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
          },
          // when window width is >= 1280px
          1280: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          {projects?.slice(0, 6).map((project: any) => (
            <Card
              key={project._id}
              variant="outlined"
              sx={{ width: 300, borderRadius: 8 }}
            >
              <Box sx={{ p: 2 }}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={2}
                >
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Box sx={{ borderRadius: "100%", width: "50px" }}>
                    <Image
                      src={online}
                      height={300}
                      width={400}
                      alt="online image"
                    />
                  </Box>
                </Stack>
                <Typography color="text.secondary" variant="body2">
                  {project.description.length > 150
                    ? `${project.description.substring(0, 150)}...`
                    : project.description}
                </Typography>
              </Box>
              <Divider />
              <Box sx={{ p: 2 }}>
                <Typography gutterBottom color="text.secondary" variant="body2">
                  Category: {project.category}
                </Typography>
                <Typography gutterBottom color="text.secondary" variant="body2">
                  Technology: {project.technology}
                </Typography>
                <Stack
                  mt={5}
                  direction="row"
                  justifyContent="space-between"
                  spacing={1}
                >
                  <Typography
                    component={Link}
                    href={`${project.link}`}
                    target="_blank"
                    sx={{
                      padding: "2px 7px",
                      backgroundColor: "#8B93FF",
                      borderRadius: 3,
                      fontSize: "14px",
                      color: "white",
                    }}
                  >
                    View
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      sx={{ color: "primary.main" }}
                      component={Link}
                      href={`project/${project._id}`}
                    >
                      Details
                    </Typography>
                    <KeyboardArrowRightIcon htmlColor="#7EA1FF" />
                  </Box>
                </Stack>
              </Box>
            </Card>
          ))}
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CarouselComponent;
