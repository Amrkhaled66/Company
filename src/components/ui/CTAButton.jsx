export default function CTAButton({ children, className = " " }) {
  return (
    <button
      className={`bg-main hover:bg-main-600 mx-auto h-[50px] py-2 md:h-[60px] rounded-2xl px-5 text-center font-bold text-white transition-all duration-300 ${className} `}
    >
      {children}
    </button>
  );
}
