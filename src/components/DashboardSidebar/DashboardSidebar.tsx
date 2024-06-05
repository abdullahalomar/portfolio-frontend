import {
  Box,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import skills from "@/assets/img/dashboard-icons/skill.png";
import projects from "@/assets/img/dashboard-icons/project.png";
import blogs from "@/assets/img/dashboard-icons/blog.png";
import experiences from "@/assets/img/dashboard-icons/experience.png";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const SideBar = () => {
  const router = useRouter();
  const handleLogOut = () => {
    Cookies.remove("token");
    router.push("/");
  };
  return (
    <Box>
      <Stack
        sx={{
          py: 1,
          mt: 1,
        }}
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={1}
        component={Link}
        href="/"
      >
        {/* <Image src={logo} width={80} height={80} alt="logo" /> */}
        <Typography
          variant="h6"
          component="h1"
          mb={5}
          sx={{ cursor: "pointer" }}
        >
          Abdullah Al Omar
        </Typography>
      </Stack>
      <List>
        <ListItem disablePadding sx={{ mb: 3 }}>
          <ListItemButton>
            <Image src={skills} height={40} width={40} alt="skill" />
            <Link className="font-extrabold ps-6" href="/Dashboard/skills">
              Skills
            </Link>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ mb: 3 }}>
          <ListItemButton>
            <Image src={projects} height={40} width={40} alt="skill" />
            <Link className="font-extrabold ps-6" href="/Dashboard/projects">
              Projects
            </Link>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ mb: 3 }}>
          <ListItemButton>
            <Image src={blogs} height={40} width={40} alt="blogs" />
            <Link className="font-extrabold ps-6" href="/Dashboard/blogs">
              Blogs
            </Link>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ mb: 3 }}>
          <ListItemButton onClick={handleLogOut}>
            <Typography className="font-extrabold bg-red-500 px-5 py-2 rounded-md ms-6">
              Logout
            </Typography>
          </ListItemButton>
        </ListItem>

        {/* 
        <ListItem disablePadding sx={{ mb: 3 }}>
          <ListItemButton>
            <Image src={experiences} height={40} width={40} alt="skill" />
            <Link className="font-extrabold ps-6" href="experiences">
              Experiences
            </Link>
          </ListItemButton>
        </ListItem> */}
      </List>
    </Box>
  );
};

export default SideBar;
