/* eslint-disable react/no-unescaped-entities */
"use client";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

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
  return (
    <Box mt={10}>
      <Container>
        <Typography sx={{ fontSize: 40, fontWeight: 600, mb: 2 }}>
          Recent blog post
        </Typography>
        <Stack
          spacing={{ xs: 1, sm: 2, md: 6 }}
          // marginLeft={{ xs: 5, sm: 5, md: 0, lg: 0 }}
          direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
          useFlexGap
          flexWrap="wrap"
        >
          {blogs?.slice(0, 2).map((blog: any) => (
            <Card key={blog._id} variant="outlined" sx={{ maxWidth: 500 }}>
              <Image
                src={blogImage}
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
          {/* <Card variant="outlined" sx={{ maxWidth: 345 }}>
            <Image src={blogImage} height={400} width={500} alt="blog image" />
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography gutterBottom fontSize="20px">
                  Tailwind
                </Typography>
                <Typography fontSize="14px">13, May</Typography>
              </Box>
              <Typography fontSize="14px">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions sx={{ mb: 2, marginLeft: 1 }}>
              <Typography component={Link} href="#">
                View Detail <ArrowForwardIcon />
              </Typography>
            </CardActions>
          </Card> */}
        </Stack>
      </Container>
    </Box>
  );
}
