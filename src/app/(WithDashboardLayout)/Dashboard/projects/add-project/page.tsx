"use client";
import React, { useState } from "react";
import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useCreateProjectMutation } from "@/redux/api/projectApi";

const AddProjectPage = () => {
  const { register, handleSubmit } = useForm();
  const [createProject, { isLoading }] = useCreateProjectMutation();

  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      const response = await createProject({
        ...data,
      }).unwrap();
      router.push("/Dashboard/projects");
    } catch (error) {
      console.error("Error adding project:", error);
      toast.error("Error adding project");
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
          <Grid item xs={6} sm={12} md={6} lg={6}>
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
              />
            </Box>
          </Grid>
          <Grid item xs={6} sm={12} md={6} lg={6}>
            <Box>
              <TextField
                id="outlined-basic"
                label="Category"
                variant="outlined"
                type="text"
                {...register("category")}
                placeholder="Category"
                required
                fullWidth
              />
            </Box>
          </Grid>
          <Grid item xs={6} sm={12} md={6} lg={6}>
            <Box>
              <TextField
                id="outlined-basic"
                label="Technology"
                variant="outlined"
                type="text"
                {...register("technology")}
                placeholder="Technology"
                required
                fullWidth
              />
            </Box>
          </Grid>
          <Grid item xs={6} sm={12} md={6} lg={6}>
            <Box>
              <TextField
                id="outlined-basic"
                label="Link"
                variant="outlined"
                type="text"
                {...register("link")}
                placeholder="Link"
                required
                fullWidth
              />
            </Box>
          </Grid>
        </Grid>

        <Button sx={{ mt: 3 }} type="submit" disabled={isLoading}>
          {isLoading ? "Adding..." : "Add Project"}
        </Button>
      </form>
    </Box>
  );
};

export default AddProjectPage;
