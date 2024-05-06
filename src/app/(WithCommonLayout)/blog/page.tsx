/* eslint-disable react/no-unescaped-entities */
"use client";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Container, Grid } from "@mui/material";
import blogImage from "@/assets/mind-map-Thumbnail.png";
import Image from "next/image";
import { useState } from "react";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function BlogPage() {
  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };

  return (
    <Box mt={10}>
      <Container>
        <Typography sx={{ fontSize: 40, fontWeight: 600 }}>
          Recent blog post
        </Typography>
        <Grid container spacing={3} mt={2}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                maxWidth: 470,
                borderRadius: 3,
                boxShadow: "0 1px 5px 1px rgb(175, 113, 242)",
              }}
            >
              <CardHeader
                title="Navigating the World of Programming Languages 1"
                subheader="February 14, 2024"
              />
              <Image
                src={blogImage}
                height={400}
                width={500}
                alt="blog image"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Navigating the World of Programming Languages 1.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    Introduction: Programming languages are the building blocks
                    of technology, shaping the digital world we live in. Let's
                    embark on a brief journey through the evolution, types, and
                    significance of these languages in today's tech landscape.
                  </Typography>

                  <Typography paragraph>
                    Evolution:
                    <br />
                    - From Fortran to Python, trace the evolution of programming
                    languages and their impact on technology.
                    <br />
                    2. Types:
                    <br />
                    - Explore procedural, functional, object-oriented, and
                    scripting languages, each with unique characteristics and
                    applications.
                    <br />
                    3. Paradigms:
                    <br />
                    - Discuss programming paradigms and shifts, from imperative
                    to functional programming, and the rise of domain-specific
                    languages.
                    <br />
                    4. Popular Languages:
                    <br />
                    - Highlight Python, JavaScript, Java, C/C++, Swift, and
                    Kotlin, showcasing their versatility and applications.
                    <br />
                    5. Importance of Learning:
                    <br />- Emphasize the value of learning multiple languages
                    for skill enhancement and adaptability in a rapidly changing
                    tech landscape.
                  </Typography>
                  <Typography>
                    Programming languages are the foundation of innovation in
                    technology. By understanding their diversity and
                    significance, developers can navigate the ever-evolving
                    world of programming with confidence and creativity.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                maxWidth: 470,
                borderRadius: 3,
                boxShadow: "0 1px 5px 1px rgb(175, 113, 242)",
              }}
            >
              <CardHeader
                title="Title: Unveiling the Power of Next.js: A Comprehensive Guide"
                subheader="April 18, 2024"
              />
              <Image
                src={blogImage}
                height={400}
                width={500}
                alt="blog image"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Unveiling the Power of Next.js: A Comprehensive Guide
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded2}
                  onClick={handleExpandClick2}
                  aria-expanded={expanded2}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded2} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    Unveiling the Power of Next.js: A Comprehensive Guide
                  </Typography>
                  <Typography paragraph>
                    Introduction: In the realm of web development, Next.js has
                    emerged as a game-changer, offering developers a powerful
                    toolkit to build modern, efficient, and scalable web
                    applications. In this blog, we'll delve into the world of
                    Next.js, exploring its features, advantages, and use cases,
                    and uncovering why it has become a go-to framework for
                    developers worldwide.
                  </Typography>
                  <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep
                    skillet over medium-high heat. Add chicken, shrimp and
                    chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes. Transfer shrimp to a large plate
                    and set aside, leaving chicken and chorizo in the pan. Add
                    pimentón, bay leaves, garlic, tomatoes, onion, salt and
                    pepper, and cook, stirring often until thickened and
                    fragrant, about 10 minutes. Add saffron broth and remaining
                    4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                  <Typography paragraph>
                    1. Understanding Next.js: <br />
                    - Introduce Next.js as a React framework for building
                    server-rendered and statically generated web applications.
                    <br />
                    - Discuss its key features, including automatic code
                    splitting, hot module replacement, and server-side rendering
                    (SSR) capabilities.
                    <br />
                    - Highlight the benefits of using Next.js, such as improved
                    performance, SEO-friendliness, and simplified deployment.
                    <br />
                    2. Getting Started with Next.js:
                    <br />
                    - Provide a step-by-step guide on setting up a Next.js
                    project, including installation, project structure, and
                    basic configuration.
                    <br />
                    - Explore the file-based routing system of Next.js and how
                    it simplifies navigation and organization within a project.
                    <br />
                    3. Server-side Rendering (SSR) and Static Site Generation
                    (SSG):
                    <br />
                    - Explain the concepts of SSR and SSG and how Next.js
                    enables developers to choose the most suitable approach
                    based on their project requirements.
                    <br />
                    - Showcase the performance benefits of SSR and SSG, such as
                    faster page loads and improved SEO rankings.
                    <br />
                    4. Data Fetching in Next.js:
                    <br />
                    - Discuss various data fetching strategies in Next.js,
                    including static data fetching at build time, server-side
                    data fetching, and client-side data fetching.
                    <br />
                    - Explore built-in features like getStaticProps,
                    getServerSideProps, and SWR (Stale-While-Revalidate) for
                    fetching and managing data.
                    <br />
                    5. Styling, Internationalization, and Optimization:
                    <br />
                    - Explore styling options in Next.js, including CSS Modules,
                    CSS-in-JS libraries like styled-components, and global
                    styles.
                    <br />
                    - Discuss built-in internationalization support in Next.js
                    for creating multilingual applications.
                    <br />
                    - Highlight optimization techniques such as image
                    optimization, code splitting, and performance monitoring to
                    enhance the speed and efficiency of Next.js applications.
                    <br />
                  </Typography>
                  <Typography>
                    Next.js has revolutionized the way developers build web
                    applications, offering a powerful combination of
                    performance, flexibility, and developer experience. By
                    mastering Next.js, developers can create cutting-edge web
                    experiences that meet the demands of modern users and
                    businesses, paving the way for a new era of web development
                    innovation.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
