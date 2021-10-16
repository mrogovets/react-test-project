import React, { useEffect, useState } from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import "./App.css";
import SearchAppBar from "./Components/SearchAppBar";
import MyContainer from "./Components/MyContainer";
import PaginationLink from "./Components/PaginationLink";

function App() {
  const URL = "http://jsonplaceholder.typicode.com/photos";

  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(URL);
        if (res.ok) {
          const data = await res.json();
          setData(data);
          setLoading(true);
        } else {
          throw new Error(`Failed to get address data ${URL}`);
        }
      } catch (e) {
        setError(e);
        setLoading(true);
        console.error(e);
      }
    };
    getData();
  }, []);

  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <SearchAppBar />
        <MyContainer dataItems={data} loading={loading} error={error} />
        <div
          className="container-pagination"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
          }}>
          <PaginationLink />
        </div>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
