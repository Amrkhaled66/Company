import { IoMdArrowRoundForward } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

export default function BlogCard({
  bg,
  topic,
  interval,
  title,
  className = " ",
}) {
  return (
    <div
      style={{
        background: ` linear-gradient(0deg, rgba(98, 0, 238, 0.60) 0%, rgba(98, 0, 238, 0.60) 100%), url(${bg}) lightgray 50% / cover no-repeat`,
      }}
      className={`group relative flex h-[284px] w-[165px] overflow-hidden rounded-[55px] p-4 text-white sm:w-[330px] sm:items-center md:h-[300px] md:w-[610px] md:items-start md:rounded-[74px] md:px-[86px] md:py-[59px] ${className} `}
    >
      {/* Hover OverLay */}
      <div
        className="absolute inset-0 h-full w-full opacity-0 transition-all duration-300 group-hover:opacity-100"
        style={{
          background: "linear-gradient(90deg, #6200EE 5.34%, #9C56FF 104.19%)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-y-[12px] py-4 sm:items-start md:px-4">
        <div className="space-y-[8px]">
          <p className="flex flex-col gap-y-1 text-sm font-[400] sm:flex-row sm:items-center md:text-base">
            <p>{topic}</p>
            <GoDotFill className="h-[10px] w-[10px]" />
            <p>{interval}</p>
          </p>
          <h4 className="w-full font-semibold md:text-[22px]">{title}</h4>
        </div>
        <button className="text-main flex w-fit items-center gap-x-1 rounded-2xl bg-white px-2 py-2 font-semibold text-nowrap md:px-4">
          Learn More <IoMdArrowRoundForward />
        </button>
      </div>
    </div>
  );
}
