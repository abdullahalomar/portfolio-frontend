"use client";
import PForm from "@/components/Forms/PForm";
import PInput from "@/components/Forms/PInput";
import { useCreateSkillMutation } from "@/redux/api/skillsApi";
import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const AddSkill = () => {
  const [createSkill] = useCreateSkillMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    console.log(values);

    const skillData = {
      title: values?.title,
    };

    try {
      const res = await createSkill(skillData);
      console.log(res);
      toast.success("Skill Created Successfully!!");
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <Box>
      <PForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2} sx={{ my: 5 }}>
          <Grid item xs={12} sm={12} md={4}>
            <PInput
              name="title"
              label="title"
              size={"small"}
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>
        <Button sx={{ mt: 1 }} type="submit">
          Add Doctor
        </Button>
      </PForm>
    </Box>
  );
};

export default AddSkill;
