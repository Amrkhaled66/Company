import BlogCard from "src/components/Blogs/BlogCard";
import useHandlePagination from "src/hooks/useHandlePagination";

import Pagination from "src/components/ui/Pagination";
export default function BlogCards({ filteredBlogs }) {
  const {
    currentElements: paginatedBlogs,
    currentPage,
    setCurrentPage,
    pageNumbers,
    hasNext,
    hasPrev,
    goToNext,
    goToPrev,
  } = useHandlePagination({
    elements: filteredBlogs,
    ELEMENTS_PER_PAGE: 5,
  });

  return (
    <div className="flex flex-1 flex-col gap-y-[20px] lg:gap-y-[50px]">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
        {paginatedBlogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
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
  );
}
