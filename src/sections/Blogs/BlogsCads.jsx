import BlogCard from "src/components/Blogs/BlogCard";
import useHandlePagination from "src/hooks/useHandlePagination";

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

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
    <div className="flex flex-1 flex-col  gap-y-[20px] md:gap-y-[50px]">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6">
        {paginatedBlogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
      <div className="mt-4 flex items-center justify-center gap-2">
        <button
          onClick={goToPrev}
          disabled={!hasPrev}
          className={`border-stroke text-main-900 rounded-[10px] border bg-white p-2.5 disabled:opacity-50`}
        >
          <FaArrowLeft />
        </button>

        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`rounded-[10px] px-4 py-2 ${
              currentPage === number ? "bg-main text-white" : "bg-gray-100"
            }`}
          >
            {number}
          </button>
        ))}

        <button
          onClick={goToNext}
          disabled={!hasNext}
          className={`border-stroke text-main-900 rounded-[10px] border bg-white p-2.5 disabled:opacity-50`}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
