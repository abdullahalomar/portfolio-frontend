/* eslint-disable react/no-unescaped-entities */
"use client";

import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";

import Typography from "@mui/material/Typography";

import { Box, Container, Stack } from "@mui/material";
import blogImage from "@/assets/mind-map-Thumbnail.png";
import Image from "next/image";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import { useGetAllBlogsQuery } from "@/redux/api/blogApi";

export default function BlogPage() {
  const { data, isLoading } = useGetAllBlogsQuery({});
  const blogs = data?.blogs;
  // console.log(blogs);

  return (
    <Box mt={10} sx={{ marginLeft: 8 }}>
      <Container>
        <Typography sx={{ fontSize: 40, fontWeight: 600, mb: 2 }}>
          Recent blog post
        </Typography>
        {/* <Stack
          spacing={{ xs: 1, sm: 2, md: 6 }}
          // marginLeft={{ xs: 5, sm: 5, md: 0, lg: 0 }}
          direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
          useFlexGap
          flexWrap="wrap"
        >
          {blogs?.slice(0, 2).map((blog: any) => (
            <Card key={blog._id} variant="outlined" sx={{ maxWidth: 500 }}>
              <Image
                src={blog?.image}
                height={300}
                width={500}
                alt="blog image"
              />
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography gutterBottom fontSize="20px">
                    {blog.title}
                  </Typography>
                  <Typography fontSize="14px">13, May</Typography>
                </Box>
                <Typography fontSize="14px">{blog.description}</Typography>
              </CardContent>
              <CardActions sx={{ mb: 2, marginLeft: 1 }}>
                <Typography component={Link} href="#">
                  View Detail <ArrowForwardIcon />
                </Typography>
              </CardActions>
            </Card>
          ))}
       
        </Stack> */}
        <Card
          variant="outlined"
          sx={{ maxWidth: 360, width: 300, borderRadius: 4 }}
        >
          <Image src={blogImage} width={400} height={300} alt="blog-image" />
          <Box sx={{ p: 2 }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography gutterBottom variant="h5" component="div">
                Toothbrush
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                13, May
              </Typography>
            </Stack>
            <Typography color="text.secondary" variant="body2">
              Pinstriped cornflower blue cotton blouse takes you on a walk to
              the park or just down the hall.
            </Typography>
          </Box>

          <Box sx={{ p: 2 }}>
            <Typography gutterBottom variant="body2">
              Select type
            </Typography>
            <Stack direction="row" spacing={1}>
              <Chip color="primary" label="Soft" size="small" />
              <Chip label="Medium" size="small" />
              <Chip label="Hard" size="small" />
            </Stack>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}
