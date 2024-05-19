import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import mindMap from "@/assets/mind-map-Thumbnail.png";
import { useGetAllProjectsQuery } from "@/redux/api/projectApi";
import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

function Carousel() {
  const { data, isLoading } = useGetAllProjectsQuery({});
  const projects = data?.projects;

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box className="slider-container">
      <Slider {...settings}>
        {projects?.map((project: any, index: number) => (
          <Card key={project._id} variant="outlined" sx={{ maxWidth: 345 }}>
            <Image src={mindMap} height={400} width={500} alt="blog image" />
          </Card>
        ))}
      </Slider>
    </Box>
  );
}

export default Carousel;
