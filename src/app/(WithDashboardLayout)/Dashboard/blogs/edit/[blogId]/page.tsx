"use client";
import React, { useState } from "react";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useUpdateBlogMutation } from "@/redux/api/blogApi";

const UpdateBlogPage = ({ blog, params }: any) => {
  const id = params?.blogId;

  const { register, handleSubmit } = useForm();
  const [updateBlog, { isLoading }] = useUpdateBlogMutation();
  const [image, setImage] = useState(null);
  const router = useRouter();

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const onSubmit = async (data: any) => {
    data.id = id;
    try {
      let imageUrl = null;
      if (image) {
        const formData = new FormData();
        formData.append("image", image);

        // Use Axios to upload image to ImageBB
        const response = await axios.post(
          "https://api.imgbb.com/1/upload?key=85c1216e45edfae5e4e2980d02d293ba",
          formData
        );
        imageUrl = response.data.data.url;
      }

      const updatedData = {
        ...data,
        image: imageUrl || blog?.image,
      };

      const response = await updateBlog({
        ...updatedData,
        id: data.id,
        body: data,
      }).unwrap();
      router.push("/Dashboard/blogs");
      toast.success(response.message);
    } catch (error) {
      console.error("Error updating Skill:", error);
      toast.error("Error updating Skill");
    }
  };

  return (
    <Box>
      <h1>Update Skill</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <span>Title</span>
          <input
            type="text"
            {...register("title")}
            placeholder="Title"
            defaultValue={blog?.title}
          />
        </div>
        <div>
          <span>Description</span>
          <input
            type="text"
            {...register("description")}
            placeholder="Description"
            defaultValue={blog?.description}
          />
        </div>
        <div>
          <span>Image</span>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        {/* Add other fields as needed */}
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Updating..." : "Update Blog"}
        </button>
      </form>
    </Box>
  );
};

export default UpdateBlogPage;
