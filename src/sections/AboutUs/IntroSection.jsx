import Content from "src/components/AboutUs/IntroSection/Content";
import ImageSection from "src/components/AboutUs/IntroSection/ImageSection";

export default function IntroSection() {
  return (
    <div className="py-section-padding-mobile sm:py-[60px] md:py-section-padding">
      <div className="container flex flex-col items-center gap-x-[50px] gap-y-8 md:flex-row">
        <ImageSection />
        <Content />
      </div>
    </div>
  );
}
