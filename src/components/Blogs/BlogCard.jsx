import { FaRegCalendar } from "react-icons/fa6";
import { IoMdPricetags } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

export default function BlogCard({ title, subTitle, data, category, img }) {
  return (
    <div className="border-stroke h-fit overflow-hidden rounded-2xl border">
      <div className="h-[200px] w-full overflow-hidden">
        <img src={img} className="h-full w-full object-cover" alt="" />
      </div>
      <div className="space-y-3 p-4 pt-6">
        <div className="text-subTitle flex gap-x-3 text-sm">
          <p className="flex items-center gap-x-1">
            <FaRegCalendar className="text-main h-[20px] w-[20px]" />
            {data}
          </p>
          <p className="flex items-center gap-x-1">
            <IoMdPricetags className="text-main h-[20px] w-[20px]" />
            {category}
          </p>
        </div>
        <h2 className="text-main-900 text-xl font-bold">{title}</h2>
        <p className="text-subTitle">{subTitle}</p>
        <button className="text-main flex items-center gap-x-2 font-semibold">
          Learn More <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
