import { useState } from "react";
import PlanetType from "../planet";

const usePaginate = (data: PlanetType[], limit: number) => {
  // define current page
  const [currentPage, setCurrentPage] = useState<number>(1);

  // define number of pages
  const totalPages = Math.ceil(data.length / limit);

  // define start and end index
  const startIndex = (currentPage - 1) * limit;
  const endIndex = Math.min(currentPage * limit - 1, data.length - 1);

  // define current page data
  const currentData = data.slice(startIndex, endIndex + 1);

  // define next page
  const handleNextPage = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  // define previous page
  const handlePrevPage = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };

  // return values
  return {
    currentData,
    handleNextPage,
    handlePrevPage,
    totalPages,
    currentPage,
  };
};

export default usePaginate;
