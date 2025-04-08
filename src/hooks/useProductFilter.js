import { useState } from "react";
import products from "src/components/Shop/data";

const useProductFilter = () => {
  const [filters, setFilters] = useState({
    brands: [],
    priceRange: { min: 0, max: 2000 },
    ratings: [],
    sizes: [],
    colors: [],
    productStates: [],
  });

  const filteredProducts = products.filter((product) => {
    if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
      return false;
    }

    if (
      product.price < filters.priceRange.min ||
      product.price > filters.priceRange.max
    ) {
      return false;
    }

    if (
      filters.ratings.length > 0 &&
      !filters.ratings.some(
        (r) => product.starts >= r && product.starts < r + 0.5,
      )
    ) {
      return false;
    }

    if (filters.sizes.length > 0 && !filters.sizes.includes(product.size)) {
      return false;
    }

    if (filters.colors.length > 0 && !filters.colors.includes(product.color)) {
      return false;
    }

    if (
      filters.productStates.length > 0 &&
      !filters.productStates.includes(product.productState)
    ) {
      return false;
    }

    return true;
  });

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => {
      if (filterType === "priceRange") {
        return { ...prev, priceRange: value };
      }

      return {
        ...prev,
        [filterType]: prev[filterType].includes(value)
          ? prev[filterType].filter((item) => item !== value)
          : [...prev[filterType], value],
      };
    });
    setCurrentPage(1);
  };

  return {
    filters,
    filteredProducts,
    handleFilterChange,
  };
};

export default useProductFilter;
