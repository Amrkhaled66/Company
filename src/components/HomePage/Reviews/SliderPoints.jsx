export default function SliderPoints({
  currentIndex,
  onDotClick,
  length,
  className = "", // default empty string if not provided
}) {
  return (
    <div className={`flex w-fit gap-3 ${className}`}>
      {Array.from({ length }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          aria-label={`Go to slide ${index + 1}`}
          className={`h-[14px] w-[14px] cursor-pointer rounded-full bg-[#AFA9A9] p-[6px] outline-2 outline-offset-4 outline-transparent transition-all duration-300 ${
            currentIndex === index ? "bg-main !outline-main border" : " "
          }`}
        />
      ))}
    </div>
  );
}
