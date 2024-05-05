import ContactForm from "@/components/ContactForm/ContactForm";
import HeroSection from "@/components/UI/HeroSection/HeroSection";
import ProjectSection from "@/components/UI/ProjectSection/ProjectSection";
import Skill from "@/components/UI/Skill/Skill";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Skill />
      <ProjectSection />
      <ContactForm />
    </>
  );
};

export default HomePage;
