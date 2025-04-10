import { FaArrowUp } from "react-icons/fa6";

export default function ProjectCard({ title, subTitle, className = " ", img }) {
  return (
    <div
      style={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.05) 31.97%, rgba(30, 0, 73, 0.90) 99.82%), url(${img}) lightgray 50% `,
      }}
      className={`group relative h-[343px] cursor-pointer overflow-hidden rounded-[55px] !bg-cover !bg-top lg:h-[397px] lg:rounded-[74px] ${className}`}
    >
      <div className="absolute right-1/2 bottom-0 z-10 mb-[20px] flex translate-x-1/2 flex-col gap-y-2 text-center text-white">
        <span className="text-[22px] font-bold text-nowrap">{title}</span>
        <span className="font-[400]">{subTitle}</span>
      </div>
      <div
        className="absolute inset-0 flex h-full w-full items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100"
        style={{
          background: ` linear-gradient(180deg, rgba(0, 0, 0, 0.05) -3.46%, rgba(98, 0, 238, 0.80) 97.59%)`,
        }}
      >
        <div className="flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-white transition-all duration-300 hover:rotate-0">
          <FaArrowUp className="h-[25px] w-[20px]" />
        </div>
      </div>
    </div>
  );
}
