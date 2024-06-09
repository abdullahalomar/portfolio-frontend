/* eslint-disable react/no-unescaped-entities */
"use client";

import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Box, Container, Stack } from "@mui/material";
import Image from "next/image";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import { useGetAllBlogsQuery } from "@/redux/api/blogApi";

export default function BlogPage() {
  const { data, isLoading } = useGetAllBlogsQuery({});
  const blogs: any = data?.blogs;
  // console.log(blogs);

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
          {blogs?.slice(0, 2)?.map((blog: any) => (
            <Card
              key={blog?._id}
              variant="outlined"
              sx={{ maxWidth: 360, width: 300, borderRadius: 4 }}
            >
              <Image
                src={blog?.image}
                width={400}
                height={300}
                alt="blog-image"
              />
              <Box sx={{ p: 2 }}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography gutterBottom variant="h5" component="div">
                    {blog?.title}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    13, may
                  </Typography>
                </Stack>
                <Typography color="text.secondary" variant="body2">
                  {blog?.description?.length > 150
                    ? `${blog?.description?.substring(0, 150)}...`
                    : blog?.description}
                </Typography>
              </Box>

              <Box sx={{ p: 2 }}>
                <Stack direction="row" spacing={1}>
                  <Typography
                    color="primary.main"
                    component={Link}
                    href={`blog/${blog._id}`}
                  >
                    Read more <ArrowForwardIcon />
                  </Typography>
                </Stack>
              </Box>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
