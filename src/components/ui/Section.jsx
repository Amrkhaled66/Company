import SectionTitle from "./SectionTitle";

export default function Section({ children, className = " ", bgColor, title }) {
  return (
    <div
      className={`${bgColor} py-section-padding-mobile lg:py-section-padding sm:py-[60px] ${className}`}
    >
      <div className="container flex flex-col gap-y-[40px] lg:gap-y-[50px]">
        <SectionTitle title={title} />
        {children}
      </div>
    </div>
  );
}
