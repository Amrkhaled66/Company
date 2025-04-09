import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";
import { Range } from "react-range";
import { categories, brands, colors } from "src/components/Shop/data";

import { IoClose } from "react-icons/io5";

const Section = ({ title, children }) => (
  <div className="border-stroke space-y-6 rounded-2xl border p-4">
    <h3 className="text-main-900 text-xl font-bold">{title}</h3>
    {children}
  </div>
);

const CheckboxList = ({ items }) => (
  <div className="flex flex-col gap-4">
    {items.map((item) => (
      <div class="inline-flex items-center gap-2">
        <label class="relative flex cursor-pointer items-center">
          <input
            type="checkbox"
            checked={false}
            class="peer checked:border-main checked:bg-main h-5 w-5 cursor-pointer appearance-none rounded-sm border border-slate-300 shadow transition-all hover:shadow-md"
            id="check7"
          />
          <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white opacity-0 peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        </label>
        <span>{item}</span>
      </div>
    ))}
  </div>
);

const ColorSelector = ({ colors }) => (
  <div className="flex items-center gap-3">
    {colors.map((color, i) => (
      <span
        key={i}
        className="h-6 w-6 cursor-pointer rounded-full"
        style={{ backgroundColor: color.hex }}
      ></span>
    ))}
  </div>
);

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const [price, setPrice] = useState([0, 9999]);

  return (
    <div
      className={`top-0  left-0 z-50 md:z-40 h-full space-y-6 overflow-y-scroll bg-white px-[32px] py-[50px] md:overflow-y-hidden md:rounded-2xl md:p-0 ${sidebarOpen ? "fixed md:block" : "hidden"} md:block`}
    >
      <button
        className="text-main-900 absolute top-0 right-0 flex h-[36px] w-[36px] items-center justify-center bg-[#EFEFEF] text-2xl"
        onClick={() => setSidebarOpen(false)}
      >
        <IoClose />
      </button>
      <Section title="Products Search">
        <form className="flex h-[46px] w-full items-center">
          <input
            className="placeholder:text-subTitle border-stroke h-full w-full rounded-2xl rounded-se-none rounded-ee-none border bg-white px-4 text-sm outline-none"
            placeholder="Search"
            type="text"
            name="search"
          />
          <button
            type="submit"
            className="bg-main flex h-full items-center rounded-2xl rounded-ss-none rounded-es-none p-4 text-white"
          >
            <IoSearchOutline className="h-[24px] w-[24px]" />
          </button>
        </form>
      </Section>

      <Section title="Filter Item">
        <div className="space-y-4">
          <div className="flex gap-x-2 text-sm">
            Price Range:
            <span className="mr-l text-main block font-semibold">
              ${price[0]}-${price[1]}
            </span>
          </div>
          <Range
            step={1}
            min={0}
            max={9999}
            values={price}
            onChange={setPrice}
            renderTrack={({ props, children }) => {
              const [minVal, maxVal] = price;
              const percentageLeft = (minVal / 9999) * 100;
              const percentageRight = (maxVal / 9999) * 100;

              return (
                <div
                  {...props}
                  className="relative h-2 w-full rounded"
                  style={{
                    background: `linear-gradient(
            to right,
            #ccc 0%, 
            #ccc ${percentageLeft}%,
            #6200ee ${percentageLeft}%, 
            #6200ee ${percentageRight}%,
            #ccc ${percentageRight}%, 
            #ccc 100%
          )`,
                  }}
                >
                  {children}
                </div>
              );
            }}
            renderThumb={({ props }) => (
              <div {...props} className="bg-main h-5 w-5 rounded-full" />
            )}
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-main text-xl font-[500]">
            Select Your Categories
          </h2>
          <CheckboxList items={categories} />
        </div>

        <div className="space-y-4">
          <h2 className="text-main text-xl font-[500]">Brand </h2>
          <CheckboxList items={brands} />
        </div>

        <div className="space-y-4">
          <h2 className="text-main text-xl font-[500]">Color </h2>

          <ColorSelector colors={colors} />
        </div>

        <button className="bg-main mt-4 h-[43px] w-full rounded-xl font-semibold text-white md:h-[60px]">
          Apply Now
        </button>
      </Section>
    </div>
  );
};

export default Sidebar;
