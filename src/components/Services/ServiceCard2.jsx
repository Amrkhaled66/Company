import { IoMdArrowRoundForward } from "react-icons/io";
export default function ServiceCard2({ icon, title, subTitle }) {
  return (
    <div className="mx-auto flex h-fit w-full gap-x-4 rounded-2xl bg-white p-4 lg:w-full">
      <div className="bg-second flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
        {icon}
      </div>
      <div className="flex h-full w-2/3 flex-col gap-y-2">
        <h4 className="text-main-900 text-[22px] font-bold lg:text-2xl">
          {title}
        </h4>
        <p className="text-subTitle lg:h-[48px]">{subTitle}</p>
        <button className="text-main flex items-center gap-x-1 font-semibold">
          Learn More <IoMdArrowRoundForward />
        </button>
      </div>
    </div>
  );
}
