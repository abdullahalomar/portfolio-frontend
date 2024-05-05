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

const Skill = () => {
  return (
    <Box>
      <Container>
        <Grid container spacing={4} columns={20}>
          <Grid item xs={20} sm={10} md={4}>
            <Tooltip title="Bootstrap" disableInteractive>
              <Image src={bootstrap} height={70} width={70} alt="bootstrap" />
            </Tooltip>
          </Grid>

          <Grid item xs={20} sm={10} md={4}>
            <Tooltip title="Tailwind CSS" disableInteractive>
              <Image src={tailwind} height={70} width={70} alt="bootstrap" />
            </Tooltip>
          </Grid>
          <Grid item xs={20} sm={10} md={4}>
            <Tooltip title="Material UI" disableInteractive>
              <Image src={mui} height={70} width={70} alt="bootstrap" />
            </Tooltip>
          </Grid>
          <Grid item xs={20} sm={10} md={4}>
            <Tooltip title="Javascript" disableInteractive>
              <Image src={js} height={70} width={70} alt="bootstrap" />
            </Tooltip>
          </Grid>
          <Grid item xs={20} sm={10} md={4}>
            <Tooltip title="React JS" disableInteractive>
              <Image src={react} height={70} width={70} alt="bootstrap" />
            </Tooltip>
          </Grid>
          <Grid item xs={20} sm={10} md={4}>
            <Tooltip title="Next JS" disableInteractive>
              <Image src={next} height={70} width={70} alt="bootstrap" />
            </Tooltip>
          </Grid>
          <Grid item xs={20} sm={10} md={4}>
            <Tooltip title="Node JS" disableInteractive>
              <Image src={node} height={70} width={70} alt="bootstrap" />
            </Tooltip>
          </Grid>
          <Grid item xs={20} sm={10} md={4}>
            <Tooltip title="Mongo DB" disableInteractive>
              <Image src={mongo} height={40} width={40} alt="bootstrap" />
            </Tooltip>
          </Grid>
          <Grid item xs={20} sm={10} md={4}>
            <Tooltip title="MY SQL" disableInteractive>
              <Image src={sql} height={70} width={70} alt="bootstrap" />
            </Tooltip>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Skill;
