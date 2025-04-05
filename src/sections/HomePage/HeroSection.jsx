import ContentSection from "src/components/HomePage/HeroSection/ContentSection";
import BigEllipse from "src/assets/BigEllipse.svg?react";
import Ellipse from "src/assets/Ellipse.svg?react";
import Dots from "src/assets/Dots.svg?react";
import ImageSection from "src/components/HomePage/HeroSection/ImageSections";

import { useIntersection } from "src/context/IntersectionCtx";

export default function HeroSection() {
  const { ref } = useIntersection();

  return (
    <div
      ref={ref}
      className="relative container flex flex-col items-start justify-between gap-y-[40px] !pt-[120px] !pb-[40px] sm:!pt-[140px] md:flex-row md:items-center md:!pt-[220px] md:!pb-[80px]"
    >
      <ContentSection />
      <ImageSection />
      <BigEllipse className="absolute top-12 -right-[200px] -z-10 rotate-[25deg] md:top-32 md:-right-32 md:-rotate-0" />
      <Ellipse className="absolute bottom-[50px] left-[20px] sm:bottom-[20px] sm:left-0 sm:-rotate-[35deg] md:bottom-[150px] md:left-[520px] md:rotate-0" />
      <Dots className="absolute bottom-[10px] left-[100px] opacity-55 sm:bottom-[170px] sm:left-0 md:bottom-[300px] md:left-[750px]" />
    </div>
  );
}
