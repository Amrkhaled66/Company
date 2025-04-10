import hero11 from "src/assets/HeroSection/hero11.webp";
import hero12 from "src/assets/HeroSection/hero12.webp";
import hero21 from "src/assets/HeroSection/hero21.webp";
import hero22 from "src/assets/HeroSection/hero22.webp";

export default function ImageSection() {
  return (
    <div className="relative z-10 flex gap-x-3 sm:gap-x-[20px]">
      <div className="flex flex-col gap-y-[13px] sm:gap-y-5">
        <div className="h-[190px] w-[190px] overflow-hidden rounded-[50px] !rounded-ee-none sm:h-[280px] sm:w-[384px] sm:rounded-[74px] lg:h-[364px] lg:w-[364px] lg:self-stretch">
          <img className="h-full w-full object-cover" src={hero11} />
        </div>
        <div className="ml-auto flex h-[140px] w-[140px] overflow-hidden rounded-[50px] !rounded-se-none sm:h-[200px] sm:w-[276px] sm:rounded-[74px] lg:h-[264px] lg:w-[264px] lg:self-stretch">
          <img src={hero12} className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="space-y-[13px] sm:space-y-[20px]">
        <div className="bg-main-100 h-[120px] w-[120px] rounded-[50px] !rounded-es-none sm:h-[144px] sm:w-[200px] sm:rounded-[55px] lg:h-[200px] lg:w-[200px] lg:rounded-[74px]"></div>
        <div className="h-[140px] w-[140px] overflow-hidden rounded-[50px] !rounded-es-none sm:h-[200px] sm:w-[276px] sm:rounded-[74px] lg:h-[264px] lg:w-[264px] lg:self-stretch">
          <img src={hero21} className="h-full w-full object-cover" />
        </div>
        <div className="h-[120px] w-[120px] overflow-hidden rounded-[50px] !rounded-ss-none sm:h-[140px] sm:w-[200px] sm:rounded-[55px] lg:h-[200px] lg:w-[200px] lg:self-stretch lg:rounded-[74px]">
          <img src={hero22} className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
}
