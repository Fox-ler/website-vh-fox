import HeroSection from '@/components/resume/HeroSection';
import AboutSection from '@/components/resume/AboutSection';
import EducationSection from '@/components/resume/EducationSection';
import ExperienceSection from '@/components/resume/ExperienceSection';
import SkillsSection from '@/components/resume/SkillsSection';
import ProjectsSection from '@/components/resume/ProjectsSection';
import ContactSection from '@/components/resume/ContactSection';
import LanguageToggle from '@/components/LanguageToggle';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <LanguageToggle />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Index;