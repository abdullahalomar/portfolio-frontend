import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import ab from "@/assets/img/breadcrum/ab-1.1.jpg";
import Link from "next/link";
import heroImage from "@/assets/professional.png";

import facebook from "@/assets/img/icons/facebook.png";
import twitter from "@/assets/img/icons/twitter.png";
import linkedin from "@/assets/img/icons/linkedin.png";
import github from "@/assets/img/icons/github.png";
import youtube from "@/assets/img/icons/youtube.png";

const AboutPage = () => {
  return (
    <Box>
      <Box maxHeight="641px" maxWidth="100%" mb={10}>
        <Image src={ab} alt="ab" height={641} width={1920} />
      </Box>
      <Container>
        <Stack
          direction={{
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
          }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Stack
            direction={{
              xs: "row",
              sm: "row",
              md: "column",
              lg: "column",
              xl: "column",
            }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            marginRight={20}
          >
            <Link href="#">
              <Image src={facebook} alt="facebook" height={60} width={60} />
            </Link>

            <Link href="#">
              <Image src={twitter} alt="facebook" height={60} width={60} />
            </Link>

            <Link href="#">
              <Image src={linkedin} alt="facebook" height={60} width={60} />
            </Link>

            <Link href="#">
              <Image src={youtube} alt="facebook" height={60} width={60} />
            </Link>

            <Link href="#">
              <Image src={github} alt="facebook" height={60} width={60} />
            </Link>
          </Stack>
          <Box sx={{ paddingLeft: "160px" }}>
            <Typography sx={{ fontSize: "25px", fontWeight: "600" }}>
              Abdullah Al Omar
            </Typography>
            <Typography>Frontend Web Developer</Typography>
            <Typography>
              {/* Frontend development expertise: Proficiency in HTML, CSS, JS,
              React, NExt.js. Design skills, problem-solving, collaboration
              crucial. User-focused. */}
            </Typography>
            <Typography>
              <Box component="span">Expertise</Box>: Web Design & Development
            </Typography>
            <Typography>
              <Box component="span">Experience</Box>: 3 Years
            </Typography>
            <Typography>
              <Box component="span">E-mail</Box>: abdullahalomar048@gmail.com
            </Typography>
          </Box>
          <Box>
            <Image
              className="rounded-2xl"
              src={heroImage}
              alt="hero image"
              height="604"
              width="537"
            />
          </Box>
        </Stack>
        <Box>
          <Typography>Personal Experience</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            veritatis necessitatibus natus illo corrupti vitae libero,
            cupiditate veniam deleniti facere autem velit, quibusdam eligendi ab
            voluptatibus laborum nobis ex adipisci quo, eaque dolor soluta.
            Libero est exercitationem sequi soluta corporis, possimus excepturi
            laboriosam. Quis dolor minima voluptatum aperiam laboriosam veniam
            illo molestias dolorem maxime, sequi magni provident nihil quod,
            odit amet ea quibusdam nulla ex hic. Dicta et impedit aliquid a
            fugiat alias assumenda est ipsam inventore id rerum, eligendi
            laborum tenetur deserunt voluptas sed dolorum sit! Reiciendis
            incidunt rerum officiis odio, atque aperiam nostrum libero quis cum
            ipsam saepe.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage;
