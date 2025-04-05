export default function ContentSection() {
  return (
    <div className="space-y-[20px] md:space-y-[24px]">
      <div className="space-y-[12px] md:space-y-[16px]">
        <h2 className="text-main-900 text-[34px] font-bold md:text-[48px]">
          Exclusive technology to provide IT solutions
        </h2>
        <p className="text-main-900 text-lg font-[600] md:text-xl">
          During this time, we’ve built a reputation for excellent clients{" "}
          <br />
          satisfaction as evidenced by our
        </p>
      </div>
      <div className="flex flex-col gap-y-[32px]">
        <p className="text-main-900">
          Each demo built with Teba will look different. You can customize
          almost anything  in the appearance of your website with only a
          few clicks. Each demo built with  Teba will look different.
        </p>
        <button className="bg-main hover:bg-main-600 h-[50px] md:h-[60px] w-fit rounded-2xl px-5 font-bold text-white transition-all duration-300">
          More about us
        </button>
      </div>
    </div>
  );
}
