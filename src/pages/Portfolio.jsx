import ContentPage from "src/components/ui/ContentPage";
import portfolio from "src/assets/portfolio.webp";
import ProjectsCards from "src/components/HomePage/Projects/ProjectsCards";
import CTA from "src/sections/HomePage/CTA";

import project1 from "src/assets/project1.webp";
import project2 from "src/assets/project2.webp";
import project3 from "src/assets/project3.webp";
import project4 from "src/assets/project4.webp";
import project5 from "src/assets/project5.webp";
import project6 from "src/assets/project6.webp";
import project7 from "src/assets/project7.webp";
import project8 from "src/assets/project8.webp";
import project9 from "src/assets/project9.webp";

import useUpdatePageTitle from "src/hooks/useUpdatePageTitle";

const Cards = [
  {
    title: "Digital Product Design",
    subTitle: "Programming",
    img: project1,
  },
  {
    title: "Software Development",
    subTitle: "Business Style",
    img: project2,
  },
  {
    title: "Multifunction Technology",
    subTitle: "Business Style",
    img: project3,
  },
  {
    title: "CMS Software Solution",
    subTitle: "Electronics",
    img: project4,
  },
  {
    title: "Cyber Security Analysis",
    subTitle: "AI Services",
    img: project5,
  },
  {
    title: "Project for Marketing",
    subTitle: "Electronics",
    img: project6,
  },
  {
    title: "Marketing Agency Website",
    subTitle: "Home Appliances",
    img: project7,
  },
  {
    title: "Health App Development",
    subTitle: "AI Services",
    img: project8,
  },
  {
    title: "Flutter App Development",
    subTitle: "Home Appliances",
    img: project9,
  },
];

export default function Portfolio() {
  useUpdatePageTitle("Portfolio");
  return (
    <div>
      <ContentPage title="Portfolio" img={portfolio}>
        <div className="">
          <div className="bg-second py-[40px] sm:py-[60px] lg:py-[80px]">
            <div className="container">
              <ProjectsCards Cards={Cards} />
            </div>
          </div>
          <CTA />
        </div>
      </ContentPage>
    </div>
  );
}
