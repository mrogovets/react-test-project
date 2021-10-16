import React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import "./App.css";
import SearchAppBar from "./Components/SearchAppBar";
import MyContainer from "./Components/MyContainer";
import PaginationLink from "./Components/PaginationLink";

function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <SearchAppBar />
        <MyContainer />
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
