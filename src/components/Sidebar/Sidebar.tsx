import {
  Box,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import InfoIcon from "@mui/icons-material/Info";
import ArticleIcon from "@mui/icons-material/Article";

const SideBar = () => {
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
        <Typography variant="h6" component="h1" sx={{ cursor: "pointer" }}>
          Abdullah Al Omar
        </Typography>
      </Stack>

      <Box>
        <List>
          <ListItem>
            <ListItemButton>
              <InfoIcon />
              <Typography paddingLeft={2} component={Link} href="/about">
                About
              </Typography>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ArticleIcon />
              <Typography paddingLeft={2} component={Link} href="/blog">
                Blog
              </Typography>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default SideBar;
