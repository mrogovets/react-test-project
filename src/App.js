import React, { useEffect, useState } from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import "./App.css";
import SearchAppBar from "./Components/SearchAppBar";
import MyContainer from "./Components/MyContainer";
import MyPagination from "./Components/MyPagination";
import { from } from "rxjs";
import { filter } from "rxjs/operators";

function App() {
  const URL = "http://jsonplaceholder.typicode.com/photos";
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [albumId, setAlbumId] = useState(0);

  const pipeFilter = (fetchedArr, id) => {
    let dataAfterFilter = [];
    const source = from(fetchedArr);
    const filteringData = source.pipe(filter((elem) => elem.albumId === id));
    filteringData.subscribe((val) => dataAfterFilter.push(val));
    return dataAfterFilter;
  };

  useEffect(() => {
    const getData = async () => {
      const id = parseInt(albumId);
      console.log(id);
      try {
        const res = await fetch(URL);
        if (res.ok) {
          const resData = await res.json();
          if (!id) {
            setData(resData);
          } else {
            // setData(resData.filter((item) => item.albumId === id)); // it is done!
            setData(pipeFilter(resData, id));
          }
        } else {
          throw new Error(`Failed to get address data ${URL}`);
        }
      } catch (e) {
        console.error(e);
      }
    };
    getData();
  }, [albumId]);

  const getPage = (getPageNumber) => {
    setPageNumber(getPageNumber);
  };

  const deleteItem = (id) => {
    const idxElDel = data.findIndex((el) => el.id === id);
    const before = data.slice(0, idxElDel);
    const after = data.slice(idxElDel + 1);
    const newData = [...before, ...after];
    setData(newData);
  };

  const getAlbumId = (id) => {
    setAlbumId(id);
  };

  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <SearchAppBar getAlbumId={(id) => getAlbumId(id)} />
        <MyContainer
          dataItems={data}
          pageNumber={pageNumber}
          deleteItem={(id) => deleteItem(id)}
          albumId={albumId}
        />
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
