import { Blog } from "@/types";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const BlogDetails = ({ blog }: { blog: Blog }) => {
  console.log(blog);

  return (
    <Box mt={5}>
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box>
              <Image
                src={blog?.image}
                height={600}
                width={700}
                alt="blog-image"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box>
              <Box
                mb={3}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontSize: "25px" }}>
                  Title:{" "}
                  <Box component="span" color="primary.main">
                    {blog?.title}
                  </Box>
                </Typography>
                <Typography sx={{ paddingLeft: 2, color: "#5755FE" }}>
                  {blog?.publish_date} 13, may
                </Typography>
              </Box>
              <Typography>
                {blog.description.length > 800
                  ? `${blog.description.substring(0, 800)}...`
                  : blog.description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box mt={4}>
          <Typography color="#535C91">{blog.description}</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default BlogDetails;
