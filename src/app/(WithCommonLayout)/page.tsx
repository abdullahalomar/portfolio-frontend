import ContactForm from "@/components/ContactForm/ContactForm";
import HeroSection from "@/components/UI/HeroSection/HeroSection";
import ProjectSection from "@/components/UI/ProjectSection/ProjectSection";
import Skill from "@/components/UI/Skill/Skill";
import BlogPage from "./blog/page";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Skill />
      <ProjectSection />
      <BlogPage />
      <ContactForm />
    </>
  );
};

export default HomePage;
