import { IoClose } from "react-icons/io5";
import Logo from "src/assets/Logo.svg?react";
import navItems from "./navItems";

import { TiArrowSortedUp } from "react-icons/ti";
import { IoSearchOutline } from "react-icons/io5";

import { useState } from "react";
import { Link } from "react-router";
export default function MobileMenu({ setOpenMenu }) {
  const [shownItems, setShownItems] = useState(navItems);

  const onSearch = (e) => {
    const value = e.target.value;
    const filteredItems = navItems.filter((item) =>
      item.text.toLowerCase().includes(value.toLowerCase()),
    );
    setShownItems(filteredItems);
  };

  return (
    <div className="fixed top-0 left-0 z-50 h-screen w-[293px] space-y-[32px] bg-white px-4 py-[50px]">
      <button
        className="text-main-900 absolute top-0 right-0 flex h-[36px] w-[36px] items-center justify-center bg-[#EFEFEF] text-2xl"
        onClick={() => setOpenMenu(false)}
      >
        <IoClose />
      </button>
      <div className="space-y-[20px]">
        <div className="text-main flex items-center gap-x-3 text-2xl font-bold">
          <Logo />
          Main
        </div>
        <div className="border-stroke flex items-center gap-x-2 rounded-2xl border px-3 py-2">
          <IoSearchOutline className="text-xl" />
          <input
            onChange={onSearch}
            placeholder="Search"
            className="placeholder:text-subTitle outline-none placeholder:text-sm"
            type="text"
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-3">
        {shownItems.map((item, index) => (
          <Link key={index} to={item.to}>
            <div
              className={`border-stroke flex items-center justify-between gap-x-3 border-b pb-2 ${index === navItems.length - 1 && "border-none"}`}
            >
              <span className="text-main-900 font-medium">{item.text}</span>
              {item.hasArrow && <TiArrowSortedUp className="rotate-90" />}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
