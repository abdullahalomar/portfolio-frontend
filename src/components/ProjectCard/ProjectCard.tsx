"use client";

import { Box, Button, Card, Divider, Stack, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useGetAllProjectsQuery } from "@/redux/api/projectApi";
import online from "@/assets/img/online.png";
import group from "@/assets/Group 2.png";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = () => {
  const { data, isLoading } = useGetAllProjectsQuery({});
  const projects = data?.projects;
  return (
    <Box>
      <Stack
        spacing={{ xs: 1, sm: 2, md: 3 }}
        // marginLeft={{ xs: 5, sm: 5, md: 0, lg: 0 }}
        direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
        useFlexGap
        flexWrap="wrap"
      >
        {projects?.slice(0, 6).map((project: any) => (
          <Card
            key={project._id}
            variant="outlined"
            sx={{
              maxWidth: 500,
              borderRadius: 8,
              background: "linear-gradient(to right, #321160, #522a8c)",
            }}
          >
            <Box sx={{ p: 2 }}>
              <Stack direction="row" alignItems="center" mb={2}>
                <Box sx={{ borderRadius: "100%", width: "50px" }}>
                  <Image
                    src={online}
                    height={500}
                    width={400}
                    alt="online image"
                  />
                </Box>
                <Box marginLeft={2}>
                  <Typography fontWeight="bold" color="white" component="div">
                    {project.title}
                  </Typography>
                  <Typography color="white" variant="body2">
                    {project.description.length > 150
                      ? `${project.description.substring(0, 150)}...`
                      : project.description}
                  </Typography>

                  <Box sx={{ display: "flex", mt: 1 }}>
                    <Typography
                      component={Link}
                      href={`${project.link}`}
                      target="_blank"
                      sx={{
                        padding: "5px 10px",
                        backgroundColor: "#4F228D",
                        borderRadius: 3,
                        border: "2px solid #693B93",
                        fontSize: "14px",
                        color: "white",
                        marginRight: 1,
                      }}
                    >
                      View
                    </Typography>

                    <Typography
                      sx={{
                        padding: "5px 10px",
                        backgroundColor: "#4F228D",
                        borderRadius: 3,
                        border: "2px solid #693B93",
                        fontSize: "14px",
                        color: "white",
                      }}
                      component={Link}
                      href={`project/${project._id}`}
                    >
                      Details
                    </Typography>
                  </Box>
                </Box>
              </Stack>
            </Box>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default ProjectCard;
