import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function Pagination({
  goToPrev,
  hasPrev,
  pageNumbers,
  setCurrentPage,
  goToNext,
    hasNext,
    currentPage
}) {
  return (
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
  );
}
