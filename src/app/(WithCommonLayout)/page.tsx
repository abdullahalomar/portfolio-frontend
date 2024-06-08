import ContactForm from "@/components/ContactForm/ContactForm";
import HeroSection from "@/components/UI/HeroSection/HeroSection";
import Skill from "@/components/UI/Skill/Skill";
import BlogPage from "./blog/page";
import { Box } from "@mui/material";
import ProjectPage from "./project/page";

const HomePage = () => {
  return (
    <Box>
      <HeroSection />
      <Box>
        <Skill />
        <ProjectPage />
        <BlogPage />
      </Box>
      <ContactForm />
    </Box>
  );
};

export default HomePage;
