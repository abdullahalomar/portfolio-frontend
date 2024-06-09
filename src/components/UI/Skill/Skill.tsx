/* eslint-disable react/jsx-key */
"use client";
import {
  Box,
  Container,
  Divider,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import bootstrap from "@/assets/img/skills/bootstrap.png";
import tailwind from "@/assets/img/skills/tailwind.png";
import mui from "@/assets/img/skills/mui.png";
import js from "@/assets/img/skills/js.png";
import react from "@/assets/img/skills/React.png";
import next from "@/assets/img/skills/nextjs.png";
import node from "@/assets/img/skills/Node.js.png";
import mongo from "@/assets/img/skills/mongodb.png";
import sql from "@/assets/img/skills/MySQL.png";
import Image from "next/image";

import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useGetAllSkillsQuery } from "@/redux/api/skillsApi";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 120,
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));

const Skill = () => {
  const { data, isLoading } = useGetAllSkillsQuery({});
  const skills: any = data?.skills;
  // console.log(skills);

  return (
    <Box>
      <Container>
        <Typography sx={{ fontSize: 40, fontWeight: 600 }}>
          My Skills
        </Typography>
        <Stack
          mt={2}
          spacing={{ xs: 1, sm: 2 }}
          marginLeft={{ xs: 5, sm: 5, md: 0, lg: 0 }}
          direction="row"
          useFlexGap
          flexWrap="wrap"
          divider={<Divider orientation="vertical" flexItem />}
        >
          {skills?.map((skill: any) => (
            <Box>
              <DemoPaper
                key={skill?._id}
                variant="outlined"
                sx={{
                  background: "linear-gradient(to right, #321160, #522a8c)",
                }}
              >
                <Image
                  src={skill?.image}
                  height={70}
                  width={90}
                  alt="skill image"
                />
              </DemoPaper>
              <Typography sx={{ textAlign: "center", fontWeight: "600" }}>
                {skill?.title}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Skill;
