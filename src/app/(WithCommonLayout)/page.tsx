import ContactForm from "@/components/ContactForm/ContactForm";
import HeroSection from "@/components/UI/HeroSection/HeroSection";
import Skill from "@/components/UI/Skill/Skill";
import BlogPage from "./blog/page";
import { Box } from "@mui/material";
import ProjectPage from "./project/page";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Box marginLeft={5}>
        <Skill />
        <ProjectPage />
        <BlogPage />
        <ContactForm />
      </Box>
    </>
  );
};

export default HomePage;
