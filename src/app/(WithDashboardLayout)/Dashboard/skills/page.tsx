"use client";
import {
  Box,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { useState } from "react";
import SkillModal from "./components/SkillModal";
import Link from "next/link";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import Paper from "@mui/material/Paper";
import Image from "next/image";
import skill from "@/assets/img/skills/React.png";

import {
  useDeleteSkillMutation,
  useGetAllSkillsQuery,
} from "@/redux/api/skillsApi";
import Loader from "@/components/Shared/Loader/Loader";
import { toast } from "sonner";

const SkillPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { data, isLoading } = useGetAllSkillsQuery({});
  const [deleteSkill] = useDeleteSkillMutation();

  if (isLoading) {
    return <Loader />;
  }

  const skills = data?.skills;
  // console.log(skills);

  const handleDelete = async (id: string) => {
    // console.log(id);

    try {
      const res = await deleteSkill(id).unwrap();
      // console.log(res);

      if (res?.id) {
        toast.success("Skill removed successfully!!");
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <Box>
      <Typography component={Link} href="skills/add-skill">
        Add Skill
      </Typography>
      <SkillModal open={isModalOpen} setOpen={setIsModalOpen}></SkillModal>
      <Box>
        <Box my={2}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Photo</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              {skills.map((skill: any) => (
                <TableBody key={skill?._id}>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      <Image
                        src={skill}
                        height={50}
                        width={50}
                        alt="skill photo"
                      />
                    </TableCell>
                    <TableCell>
                      {" "}
                      <Typography>{skill?.title}</Typography>
                    </TableCell>
                    <TableCell>
                      <IconButton
                        onClick={() => handleDelete(skill._id)}
                        aria-label="delete"
                      >
                        <DeleteOutlineIcon />
                      </IconButton>
                      <Link href={`/dashboard/admin/doctors/edit/`}>
                        <IconButton aria-label="edit">
                          <EditNoteIcon />
                        </IconButton>
                      </Link>
                    </TableCell>
                  </TableRow>
                </TableBody>
              ))}
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default SkillPage;
