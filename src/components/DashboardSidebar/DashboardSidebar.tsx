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
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";

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
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ProductionQuantityLimitsIcon />
            <Link className="font-extrabold ps-6" href="dashboard/all-products">
              All Products
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default SideBar;
