const ProgressElement = ({ title, percentage }) => {
  return (
    <div className="space-y-[12px]">
      <div className="flex justify-between">
        <h5 className="font-bold">{title}</h5>
        <span className="text-main-900 font-[400]">{percentage}%</span>
      </div>
      <div className="relative h-[10px] overflow-hidden rounded-2xl bg-[#B8B8B8]">
        <div
          style={{ width: `${percentage}%` }}
          className="bg-main absolute top-0 left-0 z-10 h-full rounded-2xl"
        ></div>
      </div>
    </div>
  );
};

export default function Content() {
  return (
    <div className="flex-1 space-y-[20px] lg:space-y-[16px]">
      <div>
        <h3 className="text-main-900 text-[34px] leading-relaxed font-bold lg:w-[95%] lg:text-5xl">
          Increasing business success with technology
        </h3>
      </div>
      <div className="space-y-[32px]">
        <p className="text-main-900 w-[343px] font-[400] sm:w-full lg:w-[525px]">
          Each demo built with Teba will look different. You can customize
          almost anything in the appearance of your website with only a few
          clicks. Each demo built with Teba will look different.
        </p>
        <div className="space-y-[20px] lg:space-y-[24px]">
          <ProgressElement title="IT Solution & Management" percentage={86} />
          <ProgressElement title="Website & App Development" percentage={74} />
          <ProgressElement title="SEO & Digital Marketing" percentage={86} />
        </div>
      </div>
    </div>
  );
}
