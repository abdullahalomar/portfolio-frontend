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

import { useDeleteSkillMutation } from "@/redux/api/skillsApi";
import Loader from "@/components/Shared/Loader/Loader";
import { toast } from "sonner";
import {
  useDeleteBlogMutation,
  useGetAllBlogsQuery,
} from "@/redux/api/blogApi";

const BlogPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { data, isLoading } = useGetAllBlogsQuery({});
  const [deleteBlog] = useDeleteBlogMutation();

  if (isLoading) {
    return <Loader />;
  }

  const blogs = data?.blogs;
  // console.log(skills);

  const handleDelete = async (id: string) => {
    // console.log(id);

    try {
      const res = await deleteBlog(id).unwrap();
      // console.log(res);

      if (res?.id) {
        toast.success("Skill removed successfully!!");
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };
  // console.log(blogs);

  return (
    <Box>
      <Typography
        sx={{
          backgroundColor: "#98ABEE",
          padding: "10px 30px",
          color: "white",
        }}
        component={Link}
        href="blogs/add-blog"
      >
        Add Blog
      </Typography>

      <Box>
        <Box my={2}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Photo</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              {blogs?.map((blog: any) => (
                <TableBody key={blog?._id}>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      <Image
                        src={blog?.image}
                        height={50}
                        width={50}
                        alt="skill photo"
                      />
                    </TableCell>
                    <TableCell>
                      {" "}
                      <Typography>{blog?.title}</Typography>
                    </TableCell>
                    <TableCell>
                      {" "}
                      <Typography>
                        {blog.description.length > 170
                          ? `${blog.description.substring(0, 170)}...`
                          : blog.description}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <IconButton
                        onClick={() => handleDelete(blog?._id)}
                        aria-label="delete"
                      >
                        <DeleteOutlineIcon />
                      </IconButton>
                      <Link href={`/Dashboard/blogs/edit/${blog?._id}`}>
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

export default BlogPage;
