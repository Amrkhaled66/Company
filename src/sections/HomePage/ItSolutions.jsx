import ContentSection from "src/components/HomePage/ItSolutions/ContentSection";
import ImageSection from "src/components/HomePage/ItSolutions/ImageSection";

export default function ItSolutions() {
  return (
    <div className="!py-section-padding-mobile md:!py-section-padding container flex flex-col gap-y-[40px] items-center justify-between md:flex-row">
      <ImageSection />
      <ContentSection />
    </div>
  );
}
