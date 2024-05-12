"use client";
import { Box, Button, TextField, styled } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PModal from "@/components/Shared/PModal/PModal";

import { toast } from "sonner";

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

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SkillModal = ({ open, setOpen }: TProps) => {
  return (
    <Box>
      <PModal open={open} setOpen={setOpen} title="Add A New Skill">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            name="title"
            id="title"
            label="title"
            type="text"
            variant="outlined"
          />
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Upload file
            <VisuallyHiddenInput type="file" />
          </Button>
          <Button sx={{ mt: 1 }} type="submit">
            Create Skill
          </Button>
        </Box>
      </PModal>
    </Box>
  );
};

export default SkillModal;
