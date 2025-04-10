import AboutMain from "src/components/layout/footer/AboutMain";
import SiteMap from "src/components/layout/footer/SiteMap";

export default function Footer() {
  return (
    <div className="py-section-padding-mobile lg:py-section-padding bg-main-900 text-white sm:py-[60px]">
      <div className="container flex flex-col gap-y-8 lg:gap-y-[99px]">
        <div className="flex flex-col gap-y-8 lg:flex-row">
          <AboutMain />
          <SiteMap />
        </div>
        <div className="border-t-[.5px] border-white/60 pt-4 text-center text-sm lg:text-lg">
          Copyright 2025, Optech. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
