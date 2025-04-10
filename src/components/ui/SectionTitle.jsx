export default function SectionTitle({ title, className }) {
  return (
    <h2
      className={`text-main-900 mx-auto text-center text-[34px] font-bold lg:w-[738px] lg:text-[48px] ${className} `}
    >
      {title}
    </h2>
  );
}
