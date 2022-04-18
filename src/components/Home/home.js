import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  HomeContainerElements,
  Pagination as PaginationContainer,
  HomeContainerList,
  UnorderedList
} from "./Home.styled";
import Card from "../Card/Card";
import List from "../List/List";
import initialAPICall from "../../services";
import Pagination from "../Pagination/Pagination";
import ListGridSelector from "../ListGridSelector/ListGridSelector";
const useQuery = () => {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
};
const Home = () => {
  const history = useHistory();

  const query = useQuery();
  const pages = parseInt(query.get("page")) || 1;
  const grid = query.get("grid") === "true";

  const [page, setPage] = useState(pages);
  const [data, setData] = useState([]);
  const [isGrid, setIsGrid] = useState(grid);

  useEffect(() => {
    updateQuery();
  }, [page, isGrid]);

  useEffect(() => {
    initialAPICall(page).then(setData);
  }, [page]);

  const updateQuery = () => {
    history.replace({
      search: `?page=${page}&grid=${isGrid}`
    });
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
      <ListGridSelector setIsGrid={setIsGrid}></ListGridSelector>
      {tableVisual()}
      <PaginationContainer>
        <Pagination
          page={page}
          setPage={setPage}
          // setOffset={setPage}
        ></Pagination>
      </PaginationContainer>
    </>
  );
};

export default Home;
