import Products from "src/sections/Shop/Products";
import FilterBar from "src/sections/Shop/FilterBar";
import cover from "src/assets/shop/cover.webp";

import ContentPage from "src/components/ui/ContentPage";

import usePageTitle from "src/hooks/useUpdatePageTitle";
import useHandlePagination from "src/hooks/useHandlePagination";

import data from "src/components/Shop/data";

import Pagination from "src/components/ui/Pagination";
import { useState } from "react";
export default function Shop() {
  const {
    currentElements,
    currentPage,
    setCurrentPage,
    pageNumbers,
    hasNext,
    hasPrev,
    goToNext,
    goToPrev,
  } = useHandlePagination({
    elements: data,
    ELEMENTS_PER_PAGE: 9,
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);
  console.log(sidebarOpen)
  usePageTitle("Shop");
  return (
    <ContentPage img={cover} title="Shop">
      <div className="py-section-padding-mobile md:py-section-padding sm:py-[60px]">
        <div className="container space-y-[50px]">
          <div className="flex items-start gap-x-6">
            <FilterBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <Products setSidebarOpen={setSidebarOpen} Products={currentElements} />
          </div>
          <Pagination
            goToPrev={goToPrev}
            hasPrev={hasPrev}
            pageNumbers={pageNumbers}
            setCurrentPage={setCurrentPage}
            goToNext={goToNext}
            hasNext={hasNext}
            currentPage={currentPage}
          />
        </div>
      </div>
    </ContentPage>
  );
}
