import { FaArrowRight } from "react-icons/fa";
import ServiceIcon from "./ServiceIcon";

import service from "src/assets/service.webp";
const Service = ({ icon, title, subTitle, className = "" }) => {
  return (
    <div
      className={`group relative z-10 flex w-[165px] cursor-pointer flex-col justify-between gap-y-[44px] overflow-hidden rounded-[55px] bg-white px-4 py-7 transition-all hover:bg-purple-500 sm:w-[330px] sm:gap-y-[22px] sm:px-7 lg:h-[254px] lg:w-[300px] lg:rounded-[74px] lg:px-7 ${className}`}
    >
      {/* Overlay */}
      <div
        style={{
          background: `linear-gradient(0deg, rgba(98, 0, 238, 0.50) 0%, rgba(98, 0, 238, 0.50) 100%), url(${service}) center/cover no-repeat`,
        }}
        className="absolute inset-0 h-full w-0 transition-all duration-300 group-hover:w-full"
      ></div>

      {/* Content */}
      <div className="bg-main-100 relative z-10 flex h-[48px] w-[48px] items-center justify-center rounded-2xl sm:h-[64px] sm:w-[64px] lg:w-16">
        {icon}
      </div>
      <div className="relative z-10 space-y-2">
        <h3 className="text-main-900 text-sm font-semibold group-hover:text-white sm:text-base">
          {title}
        </h3>
        <p className="text-subTitle text-xs font-normal group-hover:text-white sm:text-sm">
          {subTitle}
        </p>
        <button className="text-main flex items-center gap-x-1 font-semibold group-hover:text-white">
          Learn More
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

const ServicesItems = [
  {
    icon: <ServiceIcon />,
    title: "Digital Marketing Services",
    subTitle: "Developing a comprehensive IT strategy that aligns.",
    className: " !rounded-ee-none ",
  },
  {
    icon: <ServiceIcon />,
    title: "Digital Marketing Services",
    subTitle: "Developing a comprehensive IT strategy that aligns.",
    className: " !rounded-es-none ",
  },
  {
    icon: <ServiceIcon />,
    title: "Digital Marketing Services",
    subTitle: "Developing a comprehensive IT strategy that aligns.",
    className: " !rounded-se-none ",
  },
  {
    icon: <ServiceIcon />,
    title: "Digital Marketing Services",
    subTitle: "Developing a comprehensive IT strategy that aligns.",
    className: " !rounded-ss-none ",
  },
];

export default function Services() {
  return (
    <div className="grid grid-cols-2 gap-5">
      {ServicesItems.map((item, index) => (
        <Service key={index} {...item} />
      ))}
    </div>
  );
}
