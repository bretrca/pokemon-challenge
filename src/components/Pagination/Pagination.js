import React from "react";
import { Button, Page } from "./Pagination.styled";
const Pagination = ({ page, setPage, setOffset }) => {
  const handleNetxPage = (e) => {
    e.preventDefault();
    setPage((prev) => prev + 1);
    setOffset((prev) => prev + 10);
  };
  const handleBackPage = (e) => {
    e.preventDefault();

    setPage((prev) => prev - 1);
    setOffset((prev) => prev - 10);
  };
  return (
    <>
      <Button className="prev" onClick={handleBackPage} disabled={page === 0}>
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
