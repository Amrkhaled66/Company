import { CiMail } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";
import { IoIosCalendar } from "react-icons/io";

export default function Content() {
  return (
    <div className="h-auto w-full space-y-[50px] lg:w-1/2">
      <div className="space-y-6">
        <h4 className="text-main-900 text-[34px] font-bold lg:text-[48px]">
          Let’s build some awesome project together with AI Image
        </h4>
        <p className="text-main-900">
          Each demo built will look different. You can customize almost anything
          in the appearance of your website with only a few clicks.
        </p>
      </div>
      <div className="space-y-[21px]">
        <div className="space-y-[40px]">
          <div className="flex gap-x-5">
            <div className="bg-second flex h-[66px] w-[66px] items-center justify-center rounded-2xl">
              <CiMail className="h-[32px] w-[32px]" />
            </div>
            <div className="space-y-3">
              <p className="text-main-900 text-xl font-bold">Address</p>
              <p className="text-subTitle">Cairo,Egypt</p>
            </div>
          </div>
          <div className="flex gap-x-5">
            <div className="bg-second flex h-[66px] w-[66px] items-center justify-center rounded-2xl">
              <FiMapPin className="h-[32px] w-[32px]" />
            </div>
            <div className="space-y-3">
              <p className="text-main-900 text-xl font-bold">Contact</p>
              <p className="text-subTitle">Ay-an.sss@gmail.com</p>
            </div>
          </div>
        </div>
        <p className="text-subTitle flex items-center gap-x-2 text-sm">
          <IoIosCalendar className="text-xl" />
          Office Hours: Sat– Fri: 10:00 AM – 06:30 PM
        </p>
      </div>
    </div>
  );
}
