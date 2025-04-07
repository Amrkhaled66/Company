import serviceCircle from "src/assets/serviceCircle.webp";

export default function ServiceCard1({
  icon,
  title,
  subTitle,
  className,
  imagePos,
  objectTarget,
  mobileImg,
}) {
  return (
    <div
      className={`bg-second group relative flex flex-col items-center overflow-hidden rounded-2xl md:h-[400px] md:w-[608px] odd:items-start sm:w-[330px] md:gap-y-[12px] md:rounded-[74px] md:p-8 even:!items-end ${className}`}
    >
      <div
        style={{
          background: `url(${serviceCircle}) lightgray ${objectTarget} `,
        }}
        className={`absolute hidden h-[260px] w-[260px] overflow-hidden md:block ${imagePos}`}
      ></div>
      <div className="relative  h-[280px] md:h-fit w-full md:w-fit ">
        <div className="h-full w-full md:hidden">
          <img src={mobileImg} className="h-full w-full object-cover" alt="" />
        </div>
        <div className="absolute -bottom-8 left-1/2 w-fit -translate-x-1/2 rounded-2xl bg-white p-4 md:relative md:inset-0 md:translate-x-0 md:p-[19px]">
          {icon}
        </div>
      </div>

      <div className="w-fit p-4 pt-[40px] md:p-0">
        <div className="flex flex-col gap-y-[8px] text-center md:text-left">
          <h4 className="text-main-900 text-[22px] font-bold text-nowrap md:text-[28px]">
            {title}
          </h4>
          <p className="text-subTitle text-base md:w-[316px] md:text-xl">
            {subTitle}
          </p>
        </div>
      </div>
    </div>
  );
}
