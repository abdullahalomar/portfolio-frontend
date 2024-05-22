import ContactForm from "@/components/ContactForm/ContactForm";
import HeroSection from "@/components/UI/HeroSection/HeroSection";
import ProjectSection from "@/components/UI/ProjectSection/ProjectSection";
import Skill from "@/components/UI/Skill/Skill";
import BlogPage from "./blog/page";
import { Box } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Box marginLeft={5}>
        <Skill />
        <ProjectSection />
        <BlogPage />
        <ContactForm />
      </Box>
    </>
  );
};

export default HomePage;
