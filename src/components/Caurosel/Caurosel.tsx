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

  return (
    <Box>
      <Box>active</Box>
      <Typography>Mind Map</Typography>
      <Typography>Mind Map</Typography>
      <hr />
      <Typography>ecomerce</Typography>
      <Box>
        <Box>View</Box>
        <Link href="#">Details</Link>
      </Box>
    </Box>
  );
}

export default Carousel;
