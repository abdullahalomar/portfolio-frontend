import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { Box, Container, Typography } from "@mui/material";

const ProjectPage = () => {
  return (
    <Box>
      <Container>
        <Typography sx={{ fontSize: 40, fontWeight: 600, mb: 2, mt: 10 }}>
          Showcasing My Projects
        </Typography>
        <ProjectCard />
      </Container>
    </Box>
  );
};

export default ProjectPage;
