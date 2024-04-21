import Image from "next/image";
import React from "react";
import notFound from "@/assets/img/contact/404.png";
import { Box, Container } from "@mui/material";

const NotFoundPage = () => {
  return (
    <Container>
      <Box
        sx={{
          margin: {
            lg: "70px 0 0 80px",
            md: "70px 0 0 80px",
            sm: "70px 0 0 20px",
            xs: "70px 0 0 20px",
          },
        }}
      >
        <Image src={notFound} width={800} height={800} alt="not-found" />
      </Box>
    </Container>
  );
};

export default NotFoundPage;
