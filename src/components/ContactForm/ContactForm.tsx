import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import telephone from "@/assets/img/itelephone.gif";
import Image from "next/image";
import map from "@/assets/img/map-light.png";

export default function ContactForm() {
  return (
    <Box
      component="form"
      sx={{
        mt: 10,
        backgroundImage: `url(${map.src})`,
        backgroundColor: "#7469B6", //#7EA1FF #7469B6
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: "20px",
      }}
    >
      <Container>
        <Stack
          spacing={{ xs: 1, sm: 2, md: 8 }}
          direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
          useFlexGap
          flexWrap="wrap"
        >
          <Box>
            <Grid container spacing={4}>
              <Grid item xs={12} md={12} lg={12}>
                <Box>
                  <TextField
                    label="Name"
                    placeholder="Enter Your Name"
                    fullWidth
                    sx={{
                      borderRadius: 1,
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <TextField
                  label="Email"
                  placeholder="Enter Your Email"
                  fullWidth
                  sx={{
                    borderRadius: 1,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <TextField
                  label="Message"
                  multiline
                  rows={5}
                  defaultValue="Enter Your Message"
                  fullWidth
                  sx={{
                    borderRadius: 1,
                  }}
                />
              </Grid>
            </Grid>
            <Button sx={{ mt: 2 }}>Send Message</Button>
          </Box>

          <Box>
            <Box>
              <Typography color="white" fontSize="60px" fontWeight="600" mb={2}>
                Let’s Talk...
              </Typography>
            </Box>

            <Box mt={6}>
              <Box>
                <Box sx={{ display: "flex" }}>
                  <Image
                    src={telephone}
                    height={40}
                    width={40}
                    alt="contact-Image"
                  />
                  <Typography
                    sx={{
                      fontSize: "30px",
                      fontWeight: "600",
                      marginLeft: "5px",
                      color: "white",
                    }}
                  >
                    +88 01643990060
                  </Typography>
                </Box>
              </Box>
              <Box my={3}>
                <Typography
                  sx={{ fontSize: "20px", fontWeight: "600", color: "white" }}
                >
                  Mail Address
                </Typography>
                <Typography sx={{ color: "white" }}>
                  abdullahalomar048@gmail.com
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{ fontSize: "20px", fontWeight: "600", color: "white" }}
                >
                  Location
                </Typography>
                <Typography sx={{ color: "white" }}>
                  Dhaka, Bangladesh
                </Typography>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
