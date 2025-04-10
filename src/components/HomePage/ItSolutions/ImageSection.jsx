import staff from "src/assets/staff.webp";
import staff2 from "src/assets/staff2.webp";

import { TbPlayerPlayFilled } from "react-icons/tb";

export default function ImageSection() {
  return (
    <div className="flex w-full gap-x-4 sm:justify-between lg:justify-start lg:gap-x-6">
      <div className="w-[164px] space-y-5 sm:w-[327px] lg:w-[260px]">
        <div className="border-stroke flex justify-between rounded-[30px] rounded-ee-none border px-8 py-4">
          <p className="-rotate-90 text-sm font-bold tracking-[2.38px]">
            INTRO
          </p>
          <div className="bg-main flex h-[46px] w-[46px] items-center justify-center rounded-full border-[5px] border-[#C5BBFF] text-white">
            <TbPlayerPlayFilled className="h-[24px] w-[24px] rounded-full" />
          </div>
        </div>
        <div className="h-[400px] overflow-hidden rounded-[74px] rounded-se-none sm:h-[653px] lg:h-[500px]">
          <img
            loading="lazy"
            src={staff}
            className="h-full w-full object-cover"
            alt=""
          />
        </div>
      </div>
      <div className="space-y-[17px]">
        <div className="h-[300px] w-[164px] overflow-hidden rounded-[74px] rounded-es-none sm:h-[522px] sm:w-[327px] lg:h-[400px] lg:w-[260px]">
          <img
            loading="lazy"
            src={staff2}
            className="h-full w-full object-cover"
            alt=""
          />
        </div>
        <div className="bg-main flex h-[87px] items-center justify-center gap-x-2 rounded-3xl rounded-ss-none px-2 py-4 text-white sm:h-[113px] sm:gap-x-6 sm:px-0 lg:gap-x-[20px]">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[28px] w-[28px] sm:h-[48px] sm:w-[48px]"
              viewBox="0 0 49 49"
              fill="none"
            >
              <g clipPath="url(#clip0_76_2720)">
                <path
                  d="M17.212 10.5H14.52L10.5 26.5H12.556L13.484 22.75H18.116L19.02 26.5H21.144L17.212 10.5ZM13.754 21.144L15.788 12.4H15.878L17.846 21.146L13.754 21.144ZM22.976 26.5V10.5H24.976V26.5H22.976ZM23.35 28.5H8.5V8.5H28.5V18.06C30.8669 16.5306 33.7304 15.9679 36.5 16.488V12.5H32.5V8.5C32.4968 7.44011 32.0744 6.42453 31.3249 5.67507C30.5755 4.92561 29.5599 4.50317 28.5 4.5H24.5V0.5H20.5V4.5H16.5V0.5H12.5V4.5H8.5C7.44011 4.50317 6.42453 4.92561 5.67507 5.67507C4.92561 6.42453 4.50317 7.44011 4.5 8.5V12.5H0.5V16.5H4.5V20.5H0.5V24.5H4.5V28.5C4.50317 29.5599 4.92561 30.5755 5.67507 31.3249C6.42453 32.0744 7.44011 32.4968 8.5 32.5H12.5V36.5H16.5V32.5H20.5V36.5H24.5V32.516C23.8682 31.2613 23.4781 29.8989 23.35 28.5ZM27.5 27.5C27.5 26.1155 27.9105 24.7622 28.6797 23.611C29.4489 22.4599 30.5421 21.5627 31.8212 21.0328C33.1003 20.503 34.5078 20.3644 35.8656 20.6345C37.2235 20.9046 38.4708 21.5713 39.4497 22.5503C40.4287 23.5292 41.0954 24.7765 41.3655 26.1344C41.6356 27.4922 41.497 28.8997 40.9672 30.1788C40.4373 31.4579 39.5401 32.5511 38.389 33.3203C37.2378 34.0895 35.8845 34.5 34.5 34.5C32.6435 34.5 30.863 33.7625 29.5503 32.4497C28.2375 31.137 27.5 29.3565 27.5 27.5ZM34.5 38.5C29.828 38.5 20.5 40.846 20.5 45.5V48.5H48.5V45.5C48.5 40.844 39.172 38.5 34.5 38.5Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_76_2720">
                  <rect
                    width="48"
                    height="48"
                    fill="white"
                    transform="translate(0.5 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </p>

          <p className="flex h-full flex-col justify-center gap-y-1 border-l border-l-white pl-[5px] text-center sm:pl-[20px]">
            <span className="text-2xl font-bold sm:text-[30px]">25+</span>
            <span className="text-xs font-[400] sm:text-base">
              Years Experience
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
