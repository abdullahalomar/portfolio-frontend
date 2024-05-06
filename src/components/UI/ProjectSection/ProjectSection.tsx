import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import mindMap from "@/assets/mind-map-Thumbnail.png";

import { Button, Container, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function ProjectSection() {
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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsum, culpa.
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

                  <Button>Details</Button>
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
                    Mind Map Application
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsum, culpa.
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

                  <Button>Details</Button>
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
        </Grid>
        <Button sx={{ mt: 3 }}>View All Work</Button>
      </Container>
    </Box>
  );
}
