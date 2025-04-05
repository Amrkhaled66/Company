import project1 from "src/assets/project1.webp";
import project2 from "src/assets/project2.webp";
import project3 from "src/assets/project3.webp";
import project4 from "src/assets/project4.webp";
import project5 from "src/assets/project5.webp";

import { FaArrowUp } from "react-icons/fa6";

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

const Card = ({ title, subTitle, className = " ", img }) => {
  return (
    <div
      style={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.05) 31.97%, rgba(30, 0, 73, 0.90) 99.82%), url(${img}) lightgray 50% `,
      }}
      className={`group relative h-[343px] cursor-pointer overflow-hidden rounded-[55px] !bg-cover !bg-top md:h-[397px] md:rounded-[74px] ${className}`}
    >
      <div className="absolute right-1/2 bottom-0 z-10 mb-[20px] flex translate-x-1/2 flex-col gap-y-2 text-center text-white">
        <span className="text-[22px] font-bold text-nowrap">{title}</span>
        <span className="font-[400]">{subTitle}</span>
      </div>
      <div
        className="absolute inset-0 flex h-full w-full items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100"
        style={{
          background: ` linear-gradient(180deg, rgba(0, 0, 0, 0.05) -3.46%, rgba(98, 0, 238, 0.80) 97.59%)`,
        }}
      >
        <div className="flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-white transition-all duration-300 hover:rotate-0">
          <FaArrowUp className="h-[25px] w-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default function ProjectsCards() {
  return (
    <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-y-5 sm:gap-x-5 md:gap-x-6 md:grid-cols-3">
      {Cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}
