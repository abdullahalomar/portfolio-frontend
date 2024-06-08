import CarouselComponent from "@/components/CarouselComponent/CarouselComponent";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { Box, Container, Typography } from "@mui/material";
import bgGradient from "@/assets/Gradient.png";

const ProjectPage = () => {
  return (
    <Box
    // sx={{
    //   backgroundImage: `url(${bgGradient.src})`,
    //   backgroundBlendMode: "overlay",

    //   backgroundRepeat: "no-repeat",
    //   backgroundPosition: "center",
    // }}
    >
      <Container>
        <Typography sx={{ fontSize: 40, fontWeight: 600, mb: 2, mt: 10 }}>
          Showcasing My Projects
        </Typography>
        <ProjectCard />
        {/* <CarouselComponent /> */}
      </Container>
    </Box>
  );
};

export default ProjectPage;
