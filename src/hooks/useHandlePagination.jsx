import { useState, useEffect } from "react";

export default function useHandlePagination({ elements, ELEMENTS_PER_PAGE }) {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastElement = currentPage * ELEMENTS_PER_PAGE;
  const indexOfFirstElement = indexOfLastElement - ELEMENTS_PER_PAGE;
  const currentElements = elements.slice(indexOfFirstElement, indexOfLastElement);

  const totalPages = Math.ceil(elements.length / ELEMENTS_PER_PAGE);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);


  return {
    currentPage,
    setCurrentPage,
    currentElements,
    totalPages,
    pageNumbers,
    hasNext: currentPage < totalPages,
    hasPrev: currentPage > 1,
    goToNext: () => {
      if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    },
    goToPrev: () => {
      if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    },
  };
}
