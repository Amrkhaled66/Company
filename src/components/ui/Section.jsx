import SectionTitle from "./SectionTitle";

export default function Section({ children, className = " ", bgColor, title }) {
  return (
    <div
      className={`${bgColor} py-section-padding-mobile md:py-section-padding ${className}`}
    >
      <div className="container flex flex-col gap-y-[40px] md:gap-y-[50px]">
        <SectionTitle title={title} />
        {children}
      </div>
    </div>
  );
}
