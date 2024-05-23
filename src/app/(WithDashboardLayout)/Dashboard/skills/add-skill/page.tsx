"use client";

import React, { useState } from "react";
import { Box, Button, Grid, TextField, styled } from "@mui/material";
import { useForm } from "react-hook-form";
import { useCreateSkillMutation } from "@/redux/api/skillsApi";

import { toast } from "sonner";
import axios from "axios";
import { useRouter } from "next/navigation";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

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
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box>
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                type="text"
                {...register("title")}
                placeholder="Title"
                required
                fullWidth
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box>
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                onChange={handleImageChange}
                fullWidth
              >
                Upload file
                <VisuallyHiddenInput type="file" />
              </Button>
            </Box>
          </Grid>
        </Grid>

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
