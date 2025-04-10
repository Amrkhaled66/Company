import { BsTelephone } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const IconText = ({ icon, text }) => (
  <div className="flex items-center gap-x-2 font-medium">
    <span className="">{icon}</span>
    <span className="text-main-900">{text}</span>
  </div>
);

const CurrencySelector = () => (
  <div className="flex items-center gap-x-3">
    <div className="flex items-center gap-x-2">
      <span className="bg-main-900 flex h-[28px] w-[28px] items-center justify-center rounded-full text-white">
        <FaDollarSign />
      </span>
      <span className="font-medium">EGP</span>
    </div>
    <IoIosArrowDown className="text-main-900 font-bold" />
  </div>
);

const LanguageSelector = () => (
  <div className="flex items-center gap-x-3">
    <div className="flex items-center gap-x-2">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.6565 6.76161 15.1931 5.56611 14.59 4.44C16.4141 5.068 17.9512 6.33172 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.58455 18.9344 6.04674 17.67 5.08 16ZM8.03 8H5.08C6.04674 6.32995 7.58455 5.06561 9.41 4.44C8.80688 5.56611 8.34346 6.76161 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.9512 17.6683 16.4141 18.932 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z"
            fill="#1C0143"
          />
        </svg>
      </span>
      <span className="font-medium">English</span>
    </div>
    <IoIosArrowDown className="text-main-900 font-bold" />
  </div>
);

export default function TopSection({ isHeroSectionVisible }) {
  return (
    <div className={`hidden items-center justify-between py-3.5 lg:flex`}>
      {/* Left */}
      <div className="flex gap-x-7.5">
        <IconText
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.8159 20.6077C16.8509 18.5502 20 15.1429 20 11C20 6.58172 16.4183 3 12 3C7.58172 3 4 6.58172 4 11C4 15.1429 7.14909 18.5502 11.1841 20.6077C11.6968 20.8691 12.3032 20.8691 12.8159 20.6077Z"
                stroke="#1C0143"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z"
                stroke="#1C0143"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          text="Cairo, Egypt"
        />
        <IconText icon={<BsTelephone />} text="010974790--" />
        <IconText
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19.7055 6.29452C18.2618 4.99044 15.8298 4.5 12 4.5C8.1702 4.5 5.73816 4.99044 4.29452 6.29452M19.7055 6.29452C21.0003 7.46413 21.5 9.28823 21.5 12C21.5 17.7353 19.2647 19.5 12 19.5C4.73529 19.5 2.5 17.7353 2.5 12C2.5 9.28823 2.99972 7.46413 4.29452 6.29452M19.7055 6.29452L13.4142 12.5858C12.6331 13.3668 11.3668 13.3668 10.5858 12.5858L4.29452 6.29452"
                stroke="#1C0143"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          text="aaa.ss@gmail.com"
        />
      </div>

      {/* Right */}
      <div className="flex gap-x-6">
        <CurrencySelector />
        <LanguageSelector />
        <IconText
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z"
                fill="#1C0143"
              />
              <path
                d="M20 17.5C20 19.985 20 22 12 22C4 22 4 19.985 4 17.5C4 15.015 7.582 13 12 13C16.418 13 20 15.015 20 17.5Z"
                fill="#1C0143"
              />
            </svg>
          }
          text="English"
        />
      </div>
    </div>
  );
}
