"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const MobilePaginationButton = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get current page from URL or default to 1
  const currentPageFromUrl = Number(searchParams.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(currentPageFromUrl);

  const pageItems = [1, "...", 10];

  const handlePageChange = (page) => {
    if (page === "..." || page === currentPage) return;
    setCurrentPage(page);
    router.push(`${pathname}?page=${page}`);
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
      router.push(`${pathname}?page=${prevPage}`);
    }
  };

  const handleNext = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    router.push(`${pathname}?page=${nextPage}`);
  };

  // keep state in sync when user uses browser back/forward
  useEffect(() => {
    setCurrentPage(currentPageFromUrl);
  }, [currentPageFromUrl]);

  return (
    <div className="block md:hidden">
      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="flex gap-2 items-center px-4 py-2 rounded-md text-semibold bg-lightGray hover:bg-primary disabled:opacity-50  hover:scale-95 transition-all duration-300 shadow-custom-secondary"
        >
          Previous
        </button>

        <div className="flex items-center gap-2">
          {pageItems.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => handlePageChange(item)}
                className={`px-3 py-2 rounded-md text-mainBlack hover:text-white hover:bg-primary   transition-all duration-300  ${
                  item === currentPage
                    ? "bg-primary text-white"
                    : "bg-transparent"
                }`}
              >
                {item}
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="flex gap-2 items-center px-4 py-2 rounded-md text-semibold bg-primary text-white hover:scale-95 transition-all duration-300 shadow-custom-secondary"
        >
          {" "}
          Next
        </button>
      </div>
    </div>
  );
};

const PaginationButton = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get current page from URL or default to 1
  const currentPageFromUrl = Number(searchParams.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(currentPageFromUrl);

  const pageItems = [1, 2, 3, "...", 8, 9, 10];

  const handlePageChange = (page) => {
    if (page === "..." || page === currentPage) return;
    setCurrentPage(page);
    router.push(`${pathname}?page=${page}`);
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
      router.push(`${pathname}?page=${prevPage}`);
    }
  };

  const handleNext = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    router.push(`${pathname}?page=${nextPage}`);
  };

  // keep state in sync when user uses browser back/forward
  useEffect(() => {
    setCurrentPage(currentPageFromUrl);
  }, [currentPageFromUrl]);

  return (
    <div className=" ">
      <div className="hidden md:flex items-center justify-center gap-4 mt-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="flex gap-2 items-center px-4 py-2 rounded-md text-semibold bg-lightGray hover:bg-primary disabled:opacity-50  hover:scale-95 transition-all duration-300 shadow-custom-secondary"
        >
          <FaArrowLeftLong size={15} />
          Previous
        </button>

        <div className="flex items-center gap-2">
          {pageItems.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => handlePageChange(item)}
                className={`px-3 py-2 rounded-md text-mainBlack hover:text-white hover:bg-primary   transition-all duration-300  ${
                  item === currentPage
                    ? "bg-primary text-white"
                    : "bg-transparent"
                }`}
              >
                {item}
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="flex gap-2 items-center px-4 py-2 rounded-md text-semibold bg-primary text-white hover:scale-95 transition-all duration-300 shadow-custom-secondary"
        >
          {" "}
          Next <FaArrowRightLong size={15} />
        </button>
      </div>{" "}
      <MobilePaginationButton />
    </div>
  );
};

export default PaginationButton;
