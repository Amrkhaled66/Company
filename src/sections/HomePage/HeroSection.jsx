import ContentSection from "src/components/HomePage/HeroSection/ContentSection";
import BigEllipse from "src/assets/BigEllipse.svg?react";
import Ellipse from "src/assets/Ellipse.svg?react";
import Dots from "src/assets/dots.svg?react";
import ImageSection from "src/components/HomePage/HeroSection/ImageSections";

import { useIntersection } from "src/context/IntersectionCtx";

export default function HeroSection() {
  const { ref } = useIntersection();

  return (
    <div
      ref={ref}
      className="relative container flex flex-col items-start justify-between gap-y-[40px] !pt-[120px] !pb-[40px] sm:!pt-[140px] lg:flex-row lg:items-center lg:!pt-[220px] lg:!pb-[80px]"
    >
      <ContentSection />
      <ImageSection />
      <BigEllipse className="absolute top-12 -right-[200px] -z-10 rotate-[25deg] lg:top-32 lg:-right-32 lg:-rotate-0" />
      <Ellipse className="absolute bottom-[50px] left-[20px] sm:bottom-[20px] sm:left-0 sm:-rotate-[35deg] lg:bottom-[150px] lg:left-[520px] lg:rotate-0" />
      <Dots className="absolute bottom-[10px] left-[100px] opacity-55 sm:bottom-[170px] sm:left-0 lg:bottom-[300px] lg:left-[750px]" />
    </div>
  );
}
