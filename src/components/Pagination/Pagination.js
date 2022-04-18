import React from "react";
import { Button, Page } from "./Pagination.styled";
const Pagination = ({ page, setPage }) => {
  const handleNetxPage = (e) => {
    e.preventDefault();
    setPage((prev) => prev + 1);
  };
  const handleBackPage = (e) => {
    e.preventDefault();

    setPage((prev) => prev - 1);
  };
  return (
    <>
      <Button className="prev" onClick={handleBackPage} disabled={page === 1}>
        Previous page
      </Button>
      <Page>{page}</Page>
      <Button className="next" onClick={handleNetxPage}>
        Next page
      </Button>
    </>
  );
};

export default Pagination;
