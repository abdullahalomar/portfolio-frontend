"use client";
import React, { useState } from "react";
import { Box, Button, Grid, TextField, styled } from "@mui/material";
import { useForm } from "react-hook-form";

import { toast } from "sonner";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCreateBlogMutation } from "@/redux/api/blogApi";
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

const AddBlogPage = () => {
  const { register, handleSubmit } = useForm();
  const [createBlog, { isLoading }] = useCreateBlogMutation();
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

      const response = await createBlog({
        ...data,
        image: imageUrl,
      }).unwrap();
      router.push("/Dashboard/blogs");
    } catch (error) {
      console.error("Error adding blog:", error);
      toast.error("Error adding blog");
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
              <TextField
                id="outlined-basic"
                label="Description"
                variant="outlined"
                type="text"
                {...register("description")}
                placeholder="Description"
                required
                fullWidth
                minRows={20}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
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
          </Grid>
        </Grid>

        {/* <div className="form-control mt-6">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="input input-bordered"
            required
          />
        </div> */}

        <Box mt={3}>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Adding..." : "Add Blog"}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddBlogPage;
