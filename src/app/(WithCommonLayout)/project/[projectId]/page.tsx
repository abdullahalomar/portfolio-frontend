"use client";

import ProjectDetails from "@/components/UI/ProjectDetails/ProjectDetails";
import { useGetSingleProjectQuery } from "@/redux/api/projectApi";
import { Box } from "@mui/material";

const ProjectDetailsPage = ({ params }: { params: { projectId: string } }) => {
  const { data: projectDetails, isLoading } = useGetSingleProjectQuery(
    params.projectId
  );
  console.log(projectDetails);

  return (
    <Box>
      <ProjectDetails project={projectDetails} />
    </Box>
  );
};

export default ProjectDetailsPage;
