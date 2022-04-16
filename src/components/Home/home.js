import React, { useState, useMemo, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { HomeContainer } from "./home.styled";
import Card from "../Card/Card";
import initialAPICall from "../../services";
// import API_URL from "../../constants/constants";

const HomeComponent = () => {
  const history = useHistory();
  console.log({ history });
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

  const handleClick = (e) => {
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

  return (
    <>
      <div onClick={() => listGridSwitch(false)}>LIST</div>
      <div onClick={() => listGridSwitch(true)}>GRID</div>
      <HomeContainer role={HomeContainer}>
        {data.map((attributes) => {
          const { name, url } = attributes;
          return <Card key={url} name={name} url={url} />;
        })}
      </HomeContainer>
      <div style={{ margin: "1rem", padding: "1rem" }}>
        <button onClick={handleBackPage} disabled={page === 0}>
          Página Anterior
        </button>
        <button onClick={handleClick}>cambio de pagina</button>
      </div>
    </>
  );
};

export default HomeComponent;
