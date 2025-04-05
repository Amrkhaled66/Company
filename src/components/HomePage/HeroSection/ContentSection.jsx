export default function ContentSection() {
  return (
    <div className="flex flex-col items-start justify-center gap-y-[16px] md:gap-y-[24px]">
      <div className="space-y-[12px] md:space-y-[16px]">
        <p className="text-subTitle font-[400] md:text-[22px]">
          We provide professional IT services
        </p>

        <h2 className="text-main w-[343px] sm:w-full text-[36px] leading-[129.51%] font-bold md:w-[522px] md:text-[64px]">
          Delivering tech solutions for your startups
        </h2>
      </div>
      <div className="space-y-[32px]">
        <p className="text-subTitle w-[95%] font-[400] md:w-[493px] md:text-[22px]">
          We transform businesses of most major sectors with powerful and
          adaptable digital solutions that satisfy the needs of today.
        </p>

        <div className=" flex justify-between sm:gap-x-6 sm:justify-start md:gap-x-[16px]">
          <button className="bg-main w-[163px] hover:bg-main-600 rounded-2xl px-5 py-3 font-bold text-white transition-all duration-300 md:py-4 md:text-lg">
            Work with us
          </button>
          <button className="border-main w-[163px] hover:bg-main-600 text-main rounded-2xl border bg-transparent px-5 py-3 font-bold transition-all duration-300 hover:text-white md:py-4 md:text-lg">
            View service
          </button>
        </div>
      </div>
    </div>
  );
}
