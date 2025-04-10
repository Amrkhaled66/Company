import Content from "src/components/HomePage/CompanyPromo/Content";
import Images from "src/components/HomePage/CompanyPromo/Images";

export default function CompanyPromo() {
  return (
    <div className="py-section-padding-mobile lg:py-section-padding sm:py-[60px]">
      <div className="container flex flex-col items-center justify-between gap-x-[50px] gap-y-[40px] lg:flex-row">
        <Images />
        <Content />
      </div>
    </div>
  );
}
