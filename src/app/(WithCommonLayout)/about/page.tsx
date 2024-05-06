/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  StepContent,
  Typography,
} from "@mui/material";
import Image from "next/image";
import ab from "@/assets/img/breadcrum/ab-1.1.jpg";
import Link from "next/link";
import heroImage from "@/assets/professional.png";
import CheckIcon from "@mui/icons-material/Check";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import facebook from "@/assets/img/icons/facebook.png";
import twitter from "@/assets/img/icons/twitter.png";
import linkedin from "@/assets/img/icons/linkedin.png";
import github from "@/assets/img/icons/github.png";
import youtube from "@/assets/img/icons/youtube.png";
import { useState } from "react";

const steps = [
  {
    label: "SSC",
    school: `Bhandaria Bihari Pilot High School`,
    department: `Vocational`,
    year: "2012 - 2017",
  },
  {
    label: "Diploma Engineering",
    school: `Barishal Polytechnic Institute`,
    department: `Computer Technology`,
    year: "2017 - 2021",
  },
  {
    label: "BSC Engineering",
    school: `University of Global Village`,
    department: `Computer Science & Engineering`,
    year: "2022 - 2026",
  },
];

const AboutPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box mb={10}>
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
          spacing={{ xs: 1, sm: 2, md: 4, lg: 4, xl: 4 }}
        >
          <Stack
            direction={{
              xs: "row",
              sm: "row",
              md: "column",
              lg: "column",
              xl: "column",
            }}
            spacing={{ xs: 1, sm: 2, md: 4, lg: 4, xl: 4 }}
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
            <Typography variant="h4">Abdullah Al Omar</Typography>
            <Typography sx={{ color: "#5956E9" }}>
              Frontend Web Developer
            </Typography>
            <Typography mt={3} mb={4} sx={{ color: "#717891" }}>
              Proficiency in HTML, CSS, JS, React, NExt.js. <br /> Design
              skills, problem-solving, collaboration <br /> crucial.
              User-focused.
            </Typography>
            <Typography sx={{ color: "#717891" }}>
              <Box sx={{ color: "black", fontWeight: "600" }} component="span">
                Expertise
              </Box>
              : Web Design & Development
            </Typography>
            <Typography my={3} sx={{ color: "#717891" }}>
              <Box sx={{ color: "black", fontWeight: "600" }} component="span">
                Experience
              </Box>
              : 3 Years
            </Typography>
            <Typography sx={{ color: "#717891" }}>
              <Box sx={{ color: "black", fontWeight: "600" }} component="span">
                E-mail
              </Box>
              : abdullahalomar048@gmail.com
            </Typography>
          </Box>
          <Box>
            <Image
              className="rounded-2xl"
              src={heroImage}
              alt="hero image"
              height="550"
              width="537"
            />
          </Box>
        </Stack>
        <Box>
          <Typography mb={2} sx={{ fontSize: "30px" }}>
            Personal Experience
          </Typography>
          <Typography>
            In my capacity as a web developer, I create the online environments
            that allow people and companies to prosper. I design visually
            beautiful and functional websites and online applications using a
            variety of programming languages, frameworks, and tools. In order to
            ensure smooth navigation, responsiveness, and cross-browser
            compatibility, my task entails converting design thoughts into code.
            In order to provide cutting-edge solutions, I diagnose and debug
            problems, optimise performance, and keep up with the newest trends
            and technology. My main goal is to improve user experience and
            assist my clients in successfully achieving their online goals.
          </Typography>
        </Box>

        <Box mt={5}>
          <Grid container spacing={{ xs: 2, sm: 2, md: 8, lg: 8, xl: 8 }}>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Box>
                <Typography variant="h5">Interests</Typography>
                <Typography my={3} sx={{ color: "#717891" }}>
                  The interest section on a resume provides insight into
                  hobbies, passions, and community involvement, shaping a
                  candidate's personality and cultural fit.
                </Typography>
                <Box>
                  <Typography>
                    Poem Writing <CheckIcon htmlColor="#5956E9" />
                  </Typography>
                  <Typography>
                    Reciting <CheckIcon htmlColor="#5956E9" />
                  </Typography>
                  <Typography>
                    Drawing <CheckIcon htmlColor="#5956E9" />
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Box>
                <Typography variant="h5">Education</Typography>
                <Typography my={3} sx={{ color: "#717891" }}>
                  The education section on a resume details academic
                  achievements, degrees earned, institutions attended, and
                  relevant coursework or honors received.
                </Typography>
                <Box sx={{ maxWidth: 400 }}>
                  <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                      <Step key={step.label}>
                        <StepLabel
                          optional={
                            index === 2 ? (
                              <Typography variant="caption"></Typography>
                            ) : null
                          }
                        >
                          {step.label}
                        </StepLabel>
                        <StepContent>
                          <Typography fontSize={20}>{step.school}</Typography>
                          <Typography fontWeight={600}>
                            {step.department}
                          </Typography>
                          <Typography>{step.year}</Typography>
                          <Box sx={{ mb: 2 }}>
                            <div>
                              {index === steps.length - 1 ? null : (
                                <Button
                                  onClick={handleNext}
                                  sx={{ mt: 1, mr: 1 }}
                                >
                                  Continue
                                </Button>
                              )}
                              <Button
                                disabled={index === 0}
                                onClick={handleBack}
                                sx={{ mt: 1, mr: 1 }}
                              >
                                Back
                              </Button>
                            </div>
                          </Box>
                        </StepContent>
                      </Step>
                    ))}
                  </Stepper>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Box>
                <Typography variant="h5">Skills</Typography>
                <Typography my={3} sx={{ color: "#717891" }}>
                  The skills section highlights proficiencies, expertise, and
                  capabilities relevant to the job, demonstrating a candidate's
                  qualifications and competency.
                </Typography>
                <Typography>
                  Html <CheckIcon htmlColor="#5956E9" />
                </Typography>
                <Typography>
                  CSS <CheckIcon htmlColor="#5956E9" />
                </Typography>
                <Typography>
                  Javascript <CheckIcon htmlColor="#5956E9" />
                </Typography>
                <Typography>
                  React <CheckIcon htmlColor="#5956E9" />
                </Typography>
                <Typography>
                  Next JS <CheckIcon htmlColor="#5956E9" />
                </Typography>
                <Typography>
                  Mongo DB <CheckIcon htmlColor="#5956E9" />
                </Typography>
                <Typography>
                  My SQl <CheckIcon htmlColor="#5956E9" />
                </Typography>
                <Typography>
                  Node JS <CheckIcon htmlColor="#5956E9" />
                </Typography>
                <Typography>
                  Express JS <CheckIcon htmlColor="#5956E9" />
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage;
