import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Stack,
} from "@mui/material";
import Image from "next/image";
import mindMap from "@/assets/mind-map-Thumbnail.png";
import Link from "next/link";
import { useGetAllProjectsQuery } from "@/redux/api/projectApi";

const Projects = () => {
  const { data, isLoading } = useGetAllProjectsQuery({});
  const projects = data?.projects;

  return (
    <>
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        // marginLeft={{ xs: 5, sm: 5, md: 0, lg: 0 }}
        direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
        useFlexGap
        flexWrap="wrap"
      >
        {projects?.slice(0, 3).map((project: any) => (
          <Box
            key={project._id}
            sx={{ position: "relative", width: "340px", height: "220px" }}
          >
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
                <Typography sx={{ color: "black" }}>
                  {project?.title}
                </Typography>
                <Typography sx={{ color: "black", fontSize: "11px" }}>
                  {project?.description}
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
        ))}
      </Stack>
      <Typography
        sx={{ fontSize: "20px", marginTop: "10px" }}
        component={Link}
        href="#"
      >
        More Project
      </Typography>
    </>
  );
};

export default Projects;
