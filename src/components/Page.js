import React from "react";
import '../styles/page.css';
import Pagination from "react-js-pagination";
import { useState } from "react";

const Page = ({ page, setPage }) => {
  const [page, setPage] = useState(1);

  const handlePageChange = () => {
    setPage(page);
  };

  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={10}
      totalItemsCount={450}
      pageRangeDisplayed={10}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={handlePageChange}
    />
  );
};

export default Page;