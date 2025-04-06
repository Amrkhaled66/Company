export default function SectionTitle({ title, className }) {
  return (
    <h2
      className={`text-main-900 mx-auto text-center text-[34px] font-bold md:text-[48px] lg:w-[738px] ${className} `}
    >
      {title}
    </h2>
  );
}
