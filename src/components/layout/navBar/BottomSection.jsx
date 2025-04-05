import Logo from "src/assets/Logo.svg";

import { TiArrowSortedDown } from "react-icons/ti";
import { GoSearch } from "react-icons/go";
import { IoMenu } from "react-icons/io5";

import { Link } from "react-router";

import { useLocation } from "react-router";
const NavElement = ({ text, hasArrow, to = "/" }) => (
  <Link to={to} className="flex items-center gap-x-2 text-white">
    <span className="font-medium">{text}</span>
    {hasArrow && <TiArrowSortedDown className="h-6 w-6 font-black" />}
  </Link>
);

const NavigationMenu = () => {
  const navItems = [
    { text: "Home", hasArrow: true },
    { text: "Shop", hasArrow: false },
    { text: "Service", hasArrow: false },
    { text: "Portfolio", hasArrow: true },
    { text: "Blog", hasArrow: true },
    { text: "Pages", hasArrow: true },
    { text: "Contact", hasArrow: true },
  ];

  return (
    <div className="hidden gap-x-6 md:flex">
      {navItems.map((item) => (
        <NavElement key={item.text} {...item} />
      ))}
    </div>
  );
};

const CartIcon = () => (
  <div className="relative">
    <span className="bg-main-400 absolute top-0 right-0 flex h-[14px] w-[14px] items-center justify-center rounded-full text-[8px] font-bold">
      0
    </span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.131 5.95185C11.3099 5.73715 11.5319 5.56235 11.7826 5.43872C12.0333 5.31508 12.3071 5.24537 12.5863 5.23406C12.8656 5.22275 13.1442 5.27011 13.404 5.37307C13.6639 5.47604 13.8992 5.63232 14.095 5.83185L14.203 5.95185L18.135 10.6699H21.12C21.3298 10.6694 21.5374 10.7133 21.7291 10.7986C21.9208 10.884 22.0924 11.0089 22.2325 11.1651C22.3726 11.3214 22.4781 11.5054 22.5421 11.7053C22.6061 11.9052 22.6272 12.1163 22.604 12.3249L22.512 13.0909L22.412 13.8309L22.33 14.3849L22.235 14.9799L22.127 15.6049L22.005 16.2529L21.869 16.9139C21.797 17.2472 21.7196 17.5802 21.637 17.9129C21.4156 18.7909 21.1377 19.6537 20.805 20.4959L20.584 21.0359L20.37 21.5239L20.168 21.9579L20.074 22.1519L19.825 22.6419C19.505 23.2519 18.901 23.6119 18.262 23.6639L18.102 23.6699H7.22196C6.87236 23.6725 6.52862 23.5801 6.22744 23.4025C5.92627 23.225 5.67897 22.969 5.51196 22.6619L5.27996 22.2119L5.09996 21.8419L5.00496 21.6369L4.80496 21.1879C4.34826 20.1274 3.97773 19.0318 3.69696 17.9119C3.64268 17.6944 3.59067 17.4764 3.54096 17.2579L3.39896 16.6099L3.27196 15.9759L3.15996 15.3629L3.05996 14.7759L2.97296 14.2219L2.89896 13.7089L2.80896 13.0259L2.74296 12.4699L2.72596 12.3169C2.70528 12.1204 2.72387 11.9218 2.78065 11.7326C2.83743 11.5434 2.93127 11.3673 3.05671 11.2147C3.18215 11.0621 3.33668 10.936 3.51132 10.8436C3.68596 10.7513 3.87722 10.6946 4.07396 10.6769L4.20996 10.6699H7.19896L11.131 5.95185ZM10.628 15.3919C10.5603 15.1559 10.4083 14.9531 10.2007 14.822C9.99322 14.6909 9.74475 14.6407 9.50262 14.681C9.2605 14.7213 9.04164 14.8492 8.88773 15.0404C8.73382 15.2316 8.6556 15.4727 8.66796 15.7179L8.68096 15.8339L9.18096 18.8339L9.20596 18.9479C9.27361 19.1838 9.42567 19.3866 9.63319 19.5177C9.84071 19.6488 10.0892 19.699 10.3313 19.6587C10.5734 19.6184 10.7923 19.4905 10.9462 19.2993C11.1001 19.1081 11.1783 18.867 11.166 18.6219L11.153 18.5059L10.653 15.5059L10.628 15.3919ZM15.831 14.6839C15.5893 14.6435 15.3412 14.6934 15.1338 14.8239C14.9264 14.9544 14.7742 15.1565 14.706 15.3919L14.681 15.5059L14.181 18.5059C14.1392 18.7575 14.1952 19.0155 14.3374 19.2272C14.4796 19.4389 14.6974 19.5882 14.9461 19.6447C15.1948 19.7012 15.4557 19.6605 15.6754 19.5309C15.8951 19.4014 16.057 19.1928 16.128 18.9479L16.153 18.8339L16.653 15.8339C16.6963 15.5724 16.6341 15.3044 16.48 15.0887C16.3259 14.8731 16.0924 14.7275 15.831 14.6839ZM12.667 7.23185L9.80196 10.6699H15.532L12.667 7.23185Z"
        fill="white"
      />
    </svg>
  </div>
);

export default function BottomSection({ isHeroSectionVisible }) {
  const { pathname } = useLocation();

  return (
    <div
      className={`bg-main flex items-center justify-between transition-all duration-300 ${pathname === "/" && isHeroSectionVisible && "rounded-2xl"} px-4 py-5 text-white md:px-5`}
    >
      <div className="flex items-center gap-x-3">
        <img src={Logo} alt="Main" className="h-10" />
        <span className="text-2xl font-bold md:text-3xl">Main</span>
      </div>
      <NavigationMenu />
      <div className="flex items-center gap-x-6">
        <div className="flex items-center gap-x-3">
          <GoSearch className="h-6 w-6 font-black" />
          <CartIcon />
        </div>
        <IoMenu className="block md:hidden w-[30px] h-[30px] " />
      </div>
      <button className="text-main hidden rounded-2xl bg-white px-4 py-2 font-bold md:block">
        Get In Touch
      </button>
    </div>
  );
}
