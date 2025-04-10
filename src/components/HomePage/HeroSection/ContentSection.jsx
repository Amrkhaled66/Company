export default function ContentSection() {
  return (
    <div className="flex flex-col items-start justify-center gap-y-[16px] lg:gap-y-[24px]">
      <div className="space-y-[12px] lg:space-y-[16px]">
        <p className="text-subTitle font-[400] lg:text-[22px]">
          We provide professional IT services
        </p>

        <h2 className="text-main w-[343px] text-[36px] leading-[129.51%] font-bold sm:w-full lg:w-[522px] lg:text-[64px]">
          Delivering tech solutions for your startups
        </h2>
      </div>
      <div className="space-y-[32px]">
        <p className="text-subTitle w-[95%] font-[400] lg:w-[493px] lg:text-[22px]">
          We transform businesses of most major sectors with powerful and
          adaptable digital solutions that satisfy the needs of today.
        </p>

        <div className="flex justify-between sm:justify-start sm:gap-x-6 lg:gap-x-[16px]">
          <button className="bg-main hover:bg-main-600 w-[163px] rounded-2xl px-5 py-3 font-bold text-white transition-all duration-300 lg:py-4 lg:text-lg">
            Work with us
          </button>
          <button className="border-main hover:bg-main-600 text-main w-[163px] rounded-2xl border bg-transparent px-5 py-3 font-bold transition-all duration-300 hover:text-white lg:py-4 lg:text-lg">
            View service
          </button>
        </div>
      </div>
    </div>
  );
}
