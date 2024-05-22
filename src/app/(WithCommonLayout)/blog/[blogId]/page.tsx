"use client";
import BlogDetails from "@/components/UI/BlogDetails/BlogDetails";
import { useGetSingleBlogQuery } from "@/redux/api/blogApi";
import { Box } from "@mui/material";
import React from "react";

const blogDetailsPage = ({ params }: { params: { blogId: string } }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: singleBlog, isLoading } = useGetSingleBlogQuery(params.blogId);
  // console.log(singleBlog);

  return (
    <Box>
      <BlogDetails blog={singleBlog} />
    </Box>
  );
};

export default blogDetailsPage;
