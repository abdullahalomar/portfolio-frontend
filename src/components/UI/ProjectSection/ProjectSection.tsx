"use client";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import mindMap from "@/assets/mind-map-Thumbnail.png";
import babySparkle from "@/assets/Baby-sparkle.png";
import clothex from "@/assets/clothex.png";

import { Button, Container, Grid, Modal } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ProjectSection() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const [open3, setOpen3] = useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  return (
    <Box mt={10}>
      <Container>
        <Typography sx={{ fontSize: 40, fontWeight: 600 }}>
          Showcasing My Projects
        </Typography>
        <Grid container spacing={3} mt={2}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                display: "flex",
                borderRadius: 3,
                boxShadow: "0 1px 5px 1px rgb(175, 113, 242)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    Mind Map Application
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Mind map applications are innovative digital tools designed
                    to unleash creativity.
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    pl: 1,
                    pb: 1,
                    pr: 1,
                  }}
                >
                  <Typography
                    component={Link}
                    href="https://mind-map-two.vercel.app"
                    target="_blank"
                    sx={{
                      background:
                        "linear-gradient(45deg, #746ab7 30%, #AD88C6 80%)",
                      border: 0,
                      borderRadius: 1,
                      color: "white",
                      padding: "8px 20px",
                      boxShadow: "0 1px 5px 1px rgb(175, 113, 242)",
                    }}
                  >
                    View
                  </Typography>

                  <Button onClick={handleOpen}>Details</Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Key Features: <br />
                        <br />
                        Node Customization: Easily create, edit, and customize
                        nodes to represent individual ideas or concepts. <br />
                        <br />
                        Branching and Linking: Connect nodes with branches to
                        illustrate relationships and hierarchies between
                        different elements.
                        <br />
                        <br />
                        Collaboration Tools: Facilitate real-time collaboration,
                        team sharing, and commenting to enhance group
                        brainstorming and idea sharing.
                        <br />
                        <br />
                        Multimedia Integration: Incorporate images, videos,
                        links, and attachments within nodes to provide
                        additional context and visualization.
                        <br />
                        <br />
                        Export Options: Export mind maps in various formats
                        (e.g., PDF, image, text) for easy sharing and
                        integration with other tools and platforms.
                      </Typography>
                    </Box>
                  </Modal>
                </Box>
              </Box>
              <Image
                src={mindMap}
                height={400}
                width={500}
                alt="mind-map-app"
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                display: "flex",
                borderRadius: 3,
                boxShadow: "0 1px 5px 1px rgb(175, 113, 242)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    Baby Sparkle
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Baby care product shops offer a diverse range of essential
                    items tailored to meet the needs of infants and toddlers.
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    pl: 1,
                    pb: 1,
                    pr: 1,
                  }}
                >
                  <Typography
                    component={Link}
                    href="https://assignment-8-frontend-six.vercel.app"
                    target="_blank"
                    sx={{
                      background:
                        "linear-gradient(45deg, #746ab7 30%, #AD88C6 80%)",
                      border: 0,
                      borderRadius: 1,
                      color: "white",
                      padding: "8px 20px",
                      boxShadow: "0 1px 5px 1px rgb(175, 113, 242)",
                    }}
                  >
                    View
                  </Typography>

                  <Button onClick={handleOpen2}>Details</Button>
                  <Modal
                    open={open2}
                    onClose={handleClose2}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Key Features: <br />
                        <br />
                        Comprehensive Product Selection: Curate a wide selection
                        of baby care products, including diapers, wipes,
                        formula, bottles, pacifiers, clothing, bedding, toys,
                        and safety gear.
                        <br />
                        <br />
                        Quality and Safety Assurance: Prioritize products that
                        meet stringent quality and safety standards, ensuring
                        the health and comfort of babies.
                        <br />
                        <br />
                        Expert Guidance and Support: Offer personalized
                        assistance and expert advice to help parents navigate
                        product options and make informed purchasing decisions.
                        <br />
                        <br />
                        Convenience and Accessibility: Provide online shopping
                        platforms, mobile apps, and brick-and-mortar locations
                        for easy access to essential baby care products.
                        <br />
                        <br />
                        Community Engagement: Foster a sense of community by
                        hosting events, workshops, and support groups for
                        parents to connect, learn, and share experiences.
                      </Typography>
                    </Box>
                  </Modal>
                </Box>
              </Box>
              <Image
                src={babySparkle}
                height={400}
                width={500}
                alt="mind-map-app"
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                display: "flex",
                borderRadius: 3,
                boxShadow: "0 1px 5px 1px rgb(175, 113, 242)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    Clothex Winter Cloth
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    These shops offer a curated selection of winter essentials,
                    ranging from cozy sweaters.
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    pl: 1,
                    pb: 1,
                    pr: 1,
                  }}
                >
                  <Typography
                    component={Link}
                    href="https://clothex-web.vercel.app"
                    target="_blank"
                    sx={{
                      background:
                        "linear-gradient(45deg, #746ab7 30%, #AD88C6 80%)",
                      border: 0,
                      borderRadius: 1,
                      color: "white",
                      padding: "8px 20px",
                      boxShadow: "0 1px 5px 1px rgb(175, 113, 242)",
                    }}
                  >
                    View
                  </Typography>

                  <Button onClick={handleOpen3}>Details</Button>
                  <Modal
                    open={open3}
                    onClose={handleClose3}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Key Features: <br />
                        <br />
                        Extensive Winter Apparel Collection: Curate a diverse
                        range of winter clothing and accessories, including
                        jackets, sweaters, scarves, hats, gloves, boots, and
                        thermal wear.
                        <br />
                        <br />
                        Quality and Durability: Prioritize materials that offer
                        warmth, insulation, and durability to withstand harsh
                        winter conditions.
                        <br />
                        <br />
                        Fashion-forward Designs: Offer trendy and stylish
                        options that blend fashion with functionality, allowing
                        customers to stay on-trend while staying warm.
                        <br />
                        <br />
                        Size and Fit Assistance: Provide personalized fitting
                        assistance and size recommendations to ensure customers
                        find the perfect fit for their body type and
                        preferences.
                        <br />
                        <br />
                        Seasonal Promotions and Discounts: Offer special
                        promotions, sales, and discounts during the winter
                        season to make winter apparel more accessible to
                        customers.
                      </Typography>
                    </Box>
                  </Modal>
                </Box>
              </Box>
              <Image
                src={clothex}
                height={400}
                width={500}
                alt="mind-map-app"
              />
            </Card>
          </Grid>
        </Grid>
        {/* <Button sx={{ mt: 3 }}>View All Work</Button> */}
      </Container>
    </Box>
  );
}
