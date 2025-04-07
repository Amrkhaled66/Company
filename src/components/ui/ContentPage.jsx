import { useLocation, Link } from "react-router";

export default function ContentPage({ children, title, img }) {
  let { pathname } = useLocation();
  pathname = pathname.slice(1)[0].toUpperCase() + pathname.slice(2);
  return (
    <div className="pt-[50px]">
      <div
        style={{
          background: ` linear-gradient(0deg, rgba(98, 0, 238, 0.88) 0%, rgba(98, 0, 238, 0.88) 100%), url(${img}) lightgray 50% / cover no-repeat`,
        }}
        className="py-[155px] text-center text-white"
      >
        <h3 className=" text-[36px] md:text-[66px] leading-relaxed font-bold">{title}</h3>
        <div className="space-x-2">
          <Link className="hover:underline" to="/">
            Home
          </Link>
          <span>&gt;</span>
          <Link className="hover:underline" to={`/${pathname}`}>
            {pathname}
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
}
