import Content from "src/components/AboutUs/IntroSection/Content";
import ImageSection from "src/components/AboutUs/IntroSection/ImageSection";

export default function IntroSection() {
  return (
    <div className="py-section-padding-mobile lg:py-section-padding sm:py-[60px]">
      <div className="container flex flex-col items-center gap-x-[50px] gap-y-8 lg:flex-row">
        <ImageSection />
        <Content />
      </div>
    </div>
  );
}
