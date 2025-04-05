import { GoStarFill } from "react-icons/go";

export default function Review({ content, name, img, position }) {
  return (
    <div className="overflow-hidden w-fit rounded-2xl">
      <div className="bg-main space-y-[24px] p-4 pt-7 text-white">
        <div className="flex gap-x-1">
          {Array.from({ length: 5 }).map(() => (
            <GoStarFill className="h-[24px] w-[24px]" color="#FF881B" />
          ))}
        </div>
        <p className="w-[90%] text-lg leading-[28px] font-[400]">{content}</p>
      </div>
      <div className="flex gap-x-4 bg-white px-4 py-7">
        <div className="h-[48px] w-[48px] overflow-hidden rounded-full">
          <img src={img} className="h-full w-full object-cover" alt={name} />
        </div>
        <div>
          <h4 className="text-main-900 leading-[24px] font-[600]">{name}</h4>
          <h4 className="text-subTitle leading-[24px] font-[400]">
            {position}
          </h4>
        </div>
      </div>
    </div>
  );
}
