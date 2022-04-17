import React, { useState, useMemo, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  ButtonSelection,
  HomeContainerElements,
  Pagination,
  HomeContainerList,
  ButtonContainer,
  UnorderedList
} from "./home.styled";
import Card from "../Card/Card";
import List from "../List/List";
import initialAPICall from "../../services";
// import API_URL from "../../constants/constants";

const HomeComponent = () => {
  const history = useHistory();
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  // const [apiResponse, setApiResponse] = useState([]);
  const [data, setData] = useState([]);
  const [isGrid, setIsGrid] = useState(false);

  useEffect(() => {
    initialAPICall(offset).then(setData);
  }, [offset]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * offset;
    const lastPageIndex = firstPageIndex + offset;

    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data]);

  const listGridSwitch = (value) => {
    console.log(value);
    return setIsGrid(value);
  };

  useEffect(() => {
    updateQuery();
  }, [page]);

  const updateQuery = () => {
    history.replace({
      pathname: history.location.pathname,
      search: `?page=${page}`
    });
  };

  const handleNetxPage = (e) => {
    e.preventDefault();
    setPage((prev) => prev + 1);
    setOffset((prev) => prev + 10);
  };
  const handleBackPage = (e) => {
    console.log("back");
    e.preventDefault();

    setPage((prev) => prev - 1);
    setOffset((prev) => prev - 10);
  };
  const tableVisual = () => {
    return !isGrid ? (
      <HomeContainerList>
        <UnorderedList>
          <div>
            <span>Name</span>
            <span>Image</span>
            <span>Select</span>
          </div>
          {data.map((attributes) => {
            const { name, url } = attributes;
            return <List key={url + "list"} name={name} url={url}></List>;
          })}
        </UnorderedList>
      </HomeContainerList>
    ) : (
      <HomeContainerElements role={HomeContainerElements}>
        {data.map((attributes) => {
          const { name, url } = attributes;
          return <Card key={url} name={name} url={url} />;
        })}
      </HomeContainerElements>
    );
  };

  return (
    <>
      <ButtonContainer>
        <ButtonSelection onClick={() => listGridSwitch(false)}>
          LIST
        </ButtonSelection>
        <ButtonSelection onClick={() => listGridSwitch(true)}>
          GRID
        </ButtonSelection>
      </ButtonContainer>
      {tableVisual()}
      <Pagination>
        <button className="prev" onClick={handleBackPage} disabled={page === 0}>
          Previous page
        </button>
        <div>{page}</div>
        <button className="next" onClick={handleNetxPage}>
          Next page
        </button>
      </Pagination>
    </>
  );
};

export default HomeComponent;
