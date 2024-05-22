"use client";
import { useGetSingleBlogQuery } from "@/redux/api/blogApi";
import React from "react";

const blogDetailsPage = ({ params }: { params: { blogId: string } }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: singleBlog, isLoading } = useGetSingleBlogQuery(params.blogId);
  console.log(singleBlog);

  return (
    <div>
      <h1>Blog Details Page</h1>
    </div>
  );
};

export default blogDetailsPage;
