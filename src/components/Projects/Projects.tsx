import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";
import mindMap from "@/assets/mind-map-Thumbnail.png";
import Link from "next/link";
import { useGetAllProjectsQuery } from "@/redux/api/projectApi";

const Projects = () => {
  const { data, isLoading } = useGetAllProjectsQuery({});
  const projects = data?.projects;

  return (
    <Grid container spacing={2}>
      {projects?.map((project: any) => (
        <Grid key={project._id} item xs={12} md={3}>
          <Box sx={{ position: "relative", width: "100%", height: "220px" }}>
            <Image
              src={mindMap}
              layout="fill"
              objectFit="cover"
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
                <Typography sx={{ color: "black" }}>title</Typography>
                <Typography sx={{ color: "black", fontSize: "11px" }}>
                  description
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
        </Grid>
      ))}
    </Grid>
  );
};

export default Projects;
