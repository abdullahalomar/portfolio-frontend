import { Project } from "@/types";
import { Box, Container, Grid, Typography } from "@mui/material";

const ProjectDetails = ({ project }: { project: Project }) => {
  return (
    <Box mt={5}>
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <h1>dfefe</h1>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box>
              <Box
                mb={3}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontSize: "25px" }}>
                  Title:{" "}
                  <Box component="span" color="primary.main">
                    {project?.title}
                  </Box>
                </Typography>
                <Typography sx={{ paddingLeft: 2, color: "#5755FE" }}>
                  {project?.technology}
                </Typography>
                <Typography sx={{ paddingLeft: 2, color: "#5755FE" }}>
                  {project?.link}
                </Typography>
                <Typography sx={{ paddingLeft: 2, color: "#5755FE" }}>
                  {project?.category}
                </Typography>
              </Box>
              {/* <Typography>
                {project?.description?.length > 800
                  ? `${project?.description.substring(0, 800)}...`
                  : project?.description}
              </Typography> */}
            </Box>
          </Grid>
        </Grid>
        <Box mt={4}>
          <Typography color="#535C91">{project?.description}</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectDetails;
