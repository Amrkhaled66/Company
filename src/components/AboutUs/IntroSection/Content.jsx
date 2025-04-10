import CTAButton from "src/components/ui/CTAButton";

import { FaCheck } from "react-icons/fa6";

const Feature = ({ text }) => {
  return (
    <p className="flex items-center gap-x-3">
      <FaCheck />
      {text}
    </p>
  );
};

const Content = () => {
  return (
    <div className="flex-1 space-y-6">
      <div className="space-y-4">
        <h2 className="text-main-900 text-[34px] font-bold lg:text-[48px]">
          Exclusive technology to provide IT solutions
        </h2>
        <p className="text-subTitle">
          Each demo built with Teba will look different. You can customize
          almost anything in the appearance of your website with only a few
          clicks. Each demo built with Teba will look different.
        </p>
      </div>
      <div className="space-y-8">
        <div className="text-main-900 space-y-4">
          <Feature text="Easily Build Custom Reports And Dashboards" />
          <Feature text="Legacy Software Modernization" />
          <Feature text="Software For The Open Enterprise" />
        </div>
        <CTAButton>More About Us</CTAButton>
      </div>
    </div>
  );
};

export default Content;
