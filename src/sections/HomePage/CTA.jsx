import Cta from "src/assets/cta.webp";
import CTAButton from "src/components/ui/CTAButton";
export default function CTA() {
  return (
    <div className="py-section-padding-mobile md:py-section-padding text-white">
      <div className="container">
        <div
          className="flex w-full flex-col items-center gap-y-8 rounded-3xl py-6 text-center"
          style={{
            background: `linear-gradient(0deg, rgba(98, 0, 238, 0.88) 0%, rgba(98, 0, 238, 0.88) 100%), url(${Cta}) lightgray 50% / cover no-repeat`,
          }}
        >
          <div className="flex flex-col items-center gap-y-4">
            <h4 className="w-[90%] text-[36px] font-bold md:w-full md:text-[48px]">
              Let’s work together
            </h4>
            <p className="w-[311px] text-base sm:w-[90%] md:w-[642px] md:text-xl">
              Each demo built with Teba will look different. You can customize
              anything appearance of your website with only a few clicks
            </p>
          </div>
          <CTAButton className="!text-main bg-white hover:!bg-white focus:shadow-[inset_0_0_0_5px_#8F80D2]">
            Let’s Start Project
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
