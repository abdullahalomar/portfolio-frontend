"use client";

import React, { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { useCreateSkillMutation } from "@/redux/api/skillsApi";

import { toast } from "sonner";
import axios from "axios";
import { useRouter } from "next/navigation";

const AddSkill = () => {
  const { register, handleSubmit } = useForm();
  const [createSkill, { isLoading }] = useCreateSkillMutation();
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

      const response = await createSkill({
        ...data,
        image: imageUrl,
      }).unwrap();
      router.push("/Dashboard/skills");
    } catch (error) {
      console.error("Error adding Skill:", error);
      toast.error("Error adding Skill");
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
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Adding..." : "Add Skill"}
          </Button>
        </div>
      </form>
    </Box>
  );
};

export default AddSkill;
