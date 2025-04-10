export default function CTAButton({ children, className = " " }) {
  return (
    <button
      className={`bg-main hover:bg-main-600 mx-auto h-[50px] rounded-2xl px-5 py-2 text-center font-bold text-white transition-all duration-300 lg:h-[60px] ${className} `}
    >
      {children}
    </button>
  );
}
