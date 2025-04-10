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
      className={`bg-second group relative flex flex-col items-center overflow-hidden rounded-2xl odd:items-start even:!items-end sm:w-[330px] lg:h-[400px] lg:w-[608px] lg:gap-y-[12px] lg:rounded-[74px] lg:p-8 ${className}`}
    >
      <div
        style={{
          background: `url(${serviceCircle}) lightgray ${objectTarget} `,
        }}
        className={`absolute hidden h-[260px] w-[260px] overflow-hidden lg:block ${imagePos}`}
      ></div>
      <div className="relative h-[280px] w-full lg:h-fit lg:w-fit">
        <div className="h-full w-full lg:hidden">
          <img src={mobileImg} className="h-full w-full object-cover" alt="" />
        </div>
        <div className="absolute -bottom-8 left-1/2 w-fit -translate-x-1/2 rounded-2xl bg-white p-4 lg:relative lg:inset-0 lg:translate-x-0 lg:p-[19px]">
          {icon}
        </div>
      </div>

      <div className="w-fit p-4 pt-[40px] lg:p-0">
        <div className="flex flex-col gap-y-[8px] text-center lg:text-left">
          <h4 className="text-main-900 text-[22px] font-bold text-nowrap lg:text-[28px]">
            {title}
          </h4>
          <p className="text-subTitle text-base lg:w-[316px] lg:text-xl">
            {subTitle}
          </p>
        </div>
      </div>
    </div>
  );
}
