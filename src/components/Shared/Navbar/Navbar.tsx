import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Toolbar } from "@mui/material";

function Sidebar() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "primary.main",
          maxHeight: "100%",
        }}
      >
        {/* Sidebar for large and medium devices */}
        <Box
          sx={{
            width: 250,
            flexShrink: 0,
            display: { xs: "none", sm: "block" },
          }}
        >
          <List>
            <Typography
              variant="h6"
              align="center"
              sx={{ my: 2, fontWeight: "bold" }}
            >
              Abdullah Al Omar
            </Typography>
            <Divider />

            <Link href="/about">
              <ListItem button component="a">
                About
              </ListItem>
            </Link>
            <Link href="/blog">
              <ListItem button component="a">
                Blog
              </ListItem>
            </Link>
          </List>
        </Box>
      </Box>
      {/* Navbar for small devices */}
      <Box
        sx={{ display: { xs: "block", sm: "none" }, backgroundColor: "gray" }}
      >
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
}

export default Sidebar;
