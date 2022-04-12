import React, { useState, useMemo, useEffect } from "react";
import { HomeContainer } from "./home.styled";
import CardComponent from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import API_URL from "../../constants";

let PageSize = 10;

const HomeComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // const [apiResponse, setApiResponse] = useState([]);
  const [data, setData] = useState([]);

  console.log(data);

  useEffect(() => {
    fetch(`${API_URL}`, {
      method: "GET",
      headers: {
        protocol: "https"
      }
    })
      .then((res) => {
        if (res.ok) {
          console.log(res);
          return res.json();
        } else {
          throw res;
        }
      })
      .then((res) => setData(res.results))
      .catch(function () {
        alert("Can't connect to backend try latter");
      });
  }, []);
    const currentTableData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

  return (<>

    <HomeContainer role={HomeContainer}>
    {
    data.map((attributes)=>{
        
        return (<CardComponent attributes={attributes} />)
      })
    }
    </HomeContainer>
      <Pagination key = " aaaa"
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
  </>
  );
};

export default HomeComponent;
