"use client";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import { Container } from "@mui/material";

import Slider from "@/components/Slider/Slider";

export default function ProjectSection() {
  return (
    <Box mt={10}>
      <Container>
        <Typography sx={{ fontSize: 40, fontWeight: 600, mb: 2 }}>
          Showcasing My Projects
        </Typography>
        <Slider />
      </Container>
    </Box>
  );
}
