import Section from "src/components/ui/Section";
import ProjectsCards from "src/components/HomePage/Projects/ProjectsCards";
import CTAButton from "src/components/ui/CTAButton";

import project1 from "src/assets/project1.webp";
import project2 from "src/assets/project2.webp";
import project3 from "src/assets/project3.webp";
import project4 from "src/assets/project4.webp";
import project5 from "src/assets/project5.webp";



const Cards = [
  {
    title: "Digital Product Design",
    subTitle: "Programming",
    img: project1,
    className: "col-span-1",
  },
  {
    title: "Software Development",
    subTitle: "Business Style",
    img: project2,
    className: "col-span-1",
  },
  {
    title: "Multifunction Technology",
    subTitle: "Business Style",
    img: project3,
    className: "col-span-1",
  },
  {
    title: "CMS Software Solution",
    subTitle: "Electronics",
    img: project4,
    className: "col-span-1",
  },
  {
    title: "Cyber Security Analysis",
    subTitle: "AI Services",
    img: project5,
    className: "sm:col-span-2",
  },
];
export default function Projects() {
  return (
    <Section bgColor="bg-second" title="Explore our recent projects">
      <ProjectsCards Cards={Cards} />
      <CTAButton>View Our All Project</CTAButton>
    </Section>
  );
}
