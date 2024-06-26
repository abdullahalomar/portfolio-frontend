import {
  Box,
  List,
  ListItem,
  ListItemButton,
  SpeedDial,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";

import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
import logo from "@/assets/cartoon-logo-1.png";

import about from "@/assets/img/about-me.png";
import blogs from "@/assets/img/dashboard-icons/blog.png";

const actions = [
  {
    icon: <FacebookIcon />,
    name: "Facebook",
    href: "https://www.facebook.com/Abdullahalomar2000",
  },
  {
    icon: <LinkedInIcon />,
    name: "LinkedIn",
    href: "www.linkedin.com/in/omar17",
  },
  {
    icon: <TwitterIcon />,
    name: "Twitter",
    href: "https://twitter.com/m_omar40",
  },
  {
    icon: <GitHubIcon />,
    name: "Github",
    href: "https://github.com/abdullahalomar",
  },
];

const SideBar = () => {
  return (
    <Box>
      <Stack
        sx={{
          py: 3,
          mt: 1,
        }}
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={1}
        component={Link}
        href="/"
      >
        <Image src={logo} width={80} height={80} alt="logo" />
        {/* <Typography variant="h6" component="h1" sx={{ cursor: "pointer" }}>
          Abdullah Al Omar
        </Typography> */}
      </Stack>

      {/* <Box>
        <List>
          <ListItem>
            <ListItemButton>
              <Typography
                paddingLeft={3}
                component={Link}
                href="/about"
                sx={{
                  fontWeight: "700",
                  fontSize: "20px",
                }}
              >
                About
              </Typography>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <Typography
                paddingLeft={3}
                component={Link}
                href="/blog"
                sx={{ fontWeight: "700", fontSize: "20px" }}
              >
                Blog
              </Typography>
            </ListItemButton>
          </ListItem>
        </List>
      </Box> */}

      <List>
        <ListItem disablePadding sx={{ mb: 3 }}>
          <ListItemButton>
            <Image src={about} height={40} width={40} alt="skill" />
            <Link className="font-extrabold ps-4" href="/about">
              About
            </Link>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ mb: 3 }}>
          <ListItemButton>
            <Image src={blogs} height={40} width={40} alt="blogs" />
            <Link className="font-extrabold ps-4" href="/blog">
              Blog
            </Link>
          </ListItemButton>
        </ListItem>
      </List>

      <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: "absolute", bottom: 16, left: 55 }}
          icon={<SpeedDialIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={() => window.open(action.href, "_blank")}
            />
          ))}
        </SpeedDial>
      </Box>
    </Box>
  );
};

export default SideBar;
