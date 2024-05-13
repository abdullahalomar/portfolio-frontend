"use client";
import React, { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import { useForm } from "react-hook-form";

import { toast } from "sonner";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCreateBlogMutation } from "@/redux/api/blogApi";
import { useCreateProjectMutation } from "@/redux/api/projectApi";

const AddProjectPage = () => {
  const { register, handleSubmit } = useForm();
  const [createProject, { isLoading }] = useCreateProjectMutation();
  const [image, setImage] = useState(null);
  const router = useRouter();

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const onSubmit = async (data: any) => {
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

      const response = await createProject({
        ...data,
        image: imageUrl,
      }).unwrap();
      router.push("/Dashboard/projects");
    } catch (error) {
      console.error("Error adding blog:", error);
      toast.error("Error adding blog");
    }
  };
  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            {...register("title")}
            placeholder="Title"
            className="input input-bordered"
            required
          />
        </div>
        <div>
          <input
            type="text"
            {...register("description")}
            placeholder="Description"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control mt-6">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control mt-6">
          <button
            type="submit"
            disabled={isLoading}
            className="btn btn-accent btn-outline"
          >
            {isLoading ? "Adding..." : "Add Project"}
          </button>
        </div>
      </form>
    </Box>
  );
};

export default AddProjectPage;
