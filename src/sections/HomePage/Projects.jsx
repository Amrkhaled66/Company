import Section from "src/components/ui/Section";
import ProjectsCards from "src/components/HomePage/Projects/ProjectsCards";
import CTAButton from "src/components/ui/CTAButton";

export default function Projects() {
  return (
    <Section bgColor="bg-second" title="Explore our recent projects">
      <ProjectsCards />
      <CTAButton>View Our All Project</CTAButton>
    </Section>
  );
}
