import CTAButton from "src/components/ui/CTAButton";
import { FiCheck } from "react-icons/fi";

export default function Card({ title, subTitle, price, pros, isPrimary }) {
  return (
    <div
      className={`flex flex-col gap-y-6 rounded-3xl ${isPrimary ? "bg-main text-white" : "text-main-900 bg-white"} p-6`}
    >
      <div className="space-x-2">
        <h4 className="text-2xl font-bold">{title}</h4>
        <p
          className={` ${isPrimary ? "text-white" : "text-subTitle"} w-[90%] font-[400]`}
        >
          {subTitle}
        </p>
      </div>
      <div className="flex items-center gap-x-3">
        <span className="text-[48px] font-bold">{price}</span>
        <span>/month</span>
      </div>
      <div className="space-y-[20px]">
        {pros.map((pro, index) => (
          <div key={index} className="flex items-center gap-x-2">
            <FiCheck />
            <span>{pro}</span>
          </div>
        ))}
      </div>
      <CTAButton
        className={`!h-[46px] ${isPrimary ? "!text-main bg-white hover:!bg-white focus:shadow-[inset_0_0_0_5px_#8F80D2]" : "bg-main text-white"} `}
      >
        Select This Plan
      </CTAButton>
    </div>
  );
}
