import Services from "src/components/HomePage/OurService/Services";
import Content from "src/components/HomePage/OurService/Content";

export default function OurService() {
  return (
    <div className="bg-second py-section-padding-mobile lg:py-section-padding sm:py-[60px]">
      <div className="container flex flex-col-reverse items-center justify-between gap-y-[40px] lg:flex-row">
        <Content />
        <Services />
      </div>
    </div>
  );
}
