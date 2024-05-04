import { Button, Container, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import contactImage from "@/assets/img/contact/contact-1.jpg";
import Image from "next/image";

export default function ContactForm() {
  return (
    <Container>
      <Box
        component="form"
        sx={{
          my: 11,
        }}
      >
        <Box>
          <Typography color="black" fontSize="60px" fontWeight="600" mb={2}>
            Let’s Talk...
          </Typography>
        </Box>

        <Box
          sx={{
            display: { xs: "flex-wrap", sm: "flex-wrap", md: "flex" },
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Grid container spacing={4}>
              <Grid item xs={12} md={12} lg={12}>
                <Box>
                  <TextField
                    label="Name"
                    placeholder="Enter Your Name"
                    fullWidth
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <TextField
                  label="email"
                  placeholder="Enter Your Email"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <TextField
                  label="Message"
                  multiline
                  rows={5}
                  defaultValue="Enter Your Message"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Button sx={{ mt: 2 }}>Send Message</Button>
          </Box>

          <Box>
            <Box sx={{ height: "200px", width: "250px" }}>
              <Image
                src={contactImage}
                height={400}
                width={400}
                alt="contact-Image"
              />
            </Box>
            <Box mt={6}>
              <Box>
                <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
                  Mail Address
                </Typography>
                <Typography>abdullahalomar048@gmail.com</Typography>
              </Box>
              <Box my={3}>
                <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
                  Phone Number
                </Typography>
                <Typography>abdullahalomar048@gmail.com</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
