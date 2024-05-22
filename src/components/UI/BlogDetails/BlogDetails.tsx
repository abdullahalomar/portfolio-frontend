import { Blog } from "@/types";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const BlogDetails = ({ blog }: { blog: Blog }) => {
  return (
    <Box>
      <Typography>blog details</Typography>
      <Stack
        spacing={{ xs: 1, sm: 2, md: 6 }}
        // marginLeft={{ xs: 5, sm: 5, md: 0, lg: 0 }}
        direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
      >
        <Box width="2600px">
          <Image src={blog?.image} height={600} width={700} alt="blog-image" />
        </Box>

        <Box>
          <Typography>{blog?.publish_date}</Typography>
          <Typography>{blog?.title}</Typography>
          <Typography>{blog?.description}</Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default BlogDetails;
