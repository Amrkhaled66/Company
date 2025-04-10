import Logo from "src/assets/Logo.svg?react";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const SocialIcon = ({ icon }) => {
  return (
    <div className="text-main-900 cursor-pointer rounded-full bg-white p-2.5">
      {icon}
    </div>
  );
};

export default function AboutMe() {
  return (
    <div className="w-[500px] space-y-[32px]">
      <div className="space-y-[27px]">
        <div className="flex items-center gap-x-2 lg:gap-x-1">
          <Logo />
          <span className="text-[30px] font-bold">Main</span>
        </div>
        <p className="w-[303px]">
          Hi Optech is a long established fact that a reader will be distracted
          by the readable content of a page when looking at its layout the point
          of using lorem varius sit amet ipsum.
        </p>
      </div>
      <div className="flex gap-x-3">
        <SocialIcon icon={<FaFacebookF className="h-[20px] w-[20px]" />} />
        <SocialIcon icon={<FaTwitter className="h-[20px] w-[20px]" />} />
        <SocialIcon icon={<FaLinkedinIn className="h-[20px] w-[20px]" />} />
        <SocialIcon icon={<RiInstagramFill className="h-[20px] w-[20px]" />} />
      </div>
    </div>
  );
}
