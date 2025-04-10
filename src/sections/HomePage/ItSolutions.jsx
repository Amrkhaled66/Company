import ContentSection from "src/components/HomePage/ItSolutions/ContentSection";
import ImageSection from "src/components/HomePage/ItSolutions/ImageSection";

export default function ItSolutions() {
  return (
    <div className="!py-section-padding-mobile lg:!py-section-padding container flex flex-col items-center justify-between gap-y-[40px] sm:!py-[60px] lg:flex-row">
      <ImageSection />
      <ContentSection />
    </div>
  );
}
