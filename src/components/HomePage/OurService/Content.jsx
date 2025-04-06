import CTAButton from "src/components/ui/CTAButton";

export default function Content() {
  return (
    <div className="w-full space-y-[20px] md:space-y-[16px] lg:w-1/2">
      <div className="space-y-[12px] md:space-y-[16px]">
        <h3 className="text-main text-xl font-bold tracking-[2.6px]">
          OUR SERVICE
        </h3>
        <h2 className="text-main-900 w-[85%] text-[34px] leading-[129.51%] font-bold md:text-5xl">
          Our awesome services to give you success
        </h2>
      </div>
      <div className="space-y-[32px]">
        <p className="text-main-900 w-[343px] sm:w-full md:w-[525px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        {/* <button className="bg-main hover:bg-main-600 h-[56px] w-[113px] rounded-2xl text-center font-bold text-white transition-all duration-300">
          View All
        </button> */}
        <CTAButton className="!text-main w-[160px] hover:bg-white bg-white">
          View All
        </CTAButton>
      </div>
    </div>
  );
}
