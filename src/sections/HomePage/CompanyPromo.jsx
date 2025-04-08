import Content from "src/components/HomePage/CompanyPromo/Content";
import Images from "src/components/HomePage/CompanyPromo/Images";

export default function CompanyPromo() {
  return (
    <div className="py-section-padding-mobile sm:py-[60px] md:py-section-padding">
      <div className="container flex flex-col justify-between items-center gap-x-[50px] gap-y-[40px] md:flex-row">
        <Images />
        <Content />
      </div>
    </div>
  );
}
