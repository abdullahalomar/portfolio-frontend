"use client";
import {
  Box,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { useState } from "react";

import Link from "next/link";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import Paper from "@mui/material/Paper";
import Image from "next/image";
import skill from "@/assets/img/skills/React.png";
import Loader from "@/components/Shared/Loader/Loader";
import { toast } from "sonner";
import { useDeleteBlogMutation } from "@/redux/api/blogApi";
import {
  useDeleteProjectMutation,
  useGetAllProjectsQuery,
} from "@/redux/api/projectApi";

const ProjectPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { data, isLoading } = useGetAllProjectsQuery({});
  const [deleteProject] = useDeleteProjectMutation();

  if (isLoading) {
    return <Loader />;
  }

  const projects = data?.projects;
  // console.log(skills);

  const handleDelete = async (id: string) => {
    // console.log(id);

    try {
      const res = await deleteProject(id).unwrap();
      // console.log(res);

      if (res?.id) {
        toast.success("Project removed successfully!!");
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <Box>
      <Typography
        sx={{
          backgroundColor: "#98ABEE",
          padding: "10px 30px",
          color: "white",
        }}
        component={Link}
        href="projects/add-project"
      >
        Add Project
      </Typography>

      <Box>
        <Box my={2}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Technology</TableCell>
                  <TableCell>Link</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              {projects?.map((project: any) => (
                <TableBody key={project?._id}>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      {" "}
                      <Typography>{project?.title}</Typography>
                    </TableCell>
                    <TableCell>
                      {" "}
                      <Typography>{project?.description}</Typography>
                    </TableCell>
                    <TableCell>
                      {" "}
                      <Typography>{project?.category}</Typography>
                    </TableCell>
                    <TableCell>
                      {" "}
                      <Typography>{project?.technology}</Typography>
                    </TableCell>
                    <TableCell>
                      {" "}
                      <Typography>{project?.link}</Typography>
                    </TableCell>
                    <TableCell>
                      <IconButton
                        onClick={() => handleDelete(project?._id)}
                        aria-label="delete"
                      >
                        <DeleteOutlineIcon />
                      </IconButton>
                      <Link href={`/Dashboard/projects/edit/${project._id}`}>
                        <IconButton aria-label="edit">
                          <EditNoteIcon />
                        </IconButton>
                      </Link>
                    </TableCell>
                  </TableRow>
                </TableBody>
              ))}
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectPage;
