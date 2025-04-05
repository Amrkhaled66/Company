import TopSection from "src/components/layout/navBar/TopSection";
import BottomSection from "src/components/layout/navBar/BottomSection";

import { useLocation } from "react-router";

import { useIntersection } from "src/context/IntersectionCtx";
export default function NavBar() {
  const { pathname } = useLocation();
  const { isVisible: isHeroSectionVisible } = useIntersection();

  const isinHome = pathname === "/";
  return (
    <div
      className={`fixed right-0 ${isHeroSectionVisible && "mt-6 md:mt-0"} left-0 z-50 mx-auto w-full transition-all duration-300 md:bg-white ${!isHeroSectionVisible && "!bg-main"}`}
    >
      <div className="container mx-auto">
        {isinHome && isHeroSectionVisible && <TopSection />}
        <BottomSection isHeroSectionVisible={isHeroSectionVisible} />
      </div>
    </div>
  );
}
