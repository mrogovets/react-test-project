import React, { useEffect, useState } from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import "./App.css";
import SearchAppBar from "./Components/SearchAppBar";
import MyContainer from "./Components/MyContainer";
import MyPagination from "./Components/MyPagination";

function App() {
  const URL = "http://jsonplaceholder.typicode.com/photos";
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(URL);
        if (res.ok) {
          const data = await res.json();
          setData(data);
        } else {
          throw new Error(`Failed to get address data ${URL}`);
        }
      } catch (e) {
        console.error(e);
      }
    };
    getData();
  }, []);

  const getPage = (getPageNumber) => {
    setPageNumber(getPageNumber);
  };

  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <SearchAppBar />
        <MyContainer dataItems={data} pageNumber={pageNumber} />
        <div
          className="container-pagination"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}>
          <MyPagination
            fetchedDataLength={data.length}
            getPage={(page) => getPage(page)}
          />
        </div>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
