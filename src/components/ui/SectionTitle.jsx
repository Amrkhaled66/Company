export default function SectionTitle({ title, className }) {
  return (
    <h2
      className={`text-main-900 mx-auto text-center  text-[34px] md:text-[48px] font-bold ${className} `}
    >
      {title}
    </h2>
  );
}
