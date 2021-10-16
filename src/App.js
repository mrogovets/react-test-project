import React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import "./App.css";
import SearchAppBar from "./Components/SearchAppBar";
import MyContainer from "./Components/MyContainer";

function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <SearchAppBar />
        <MyContainer />
      </StyledEngineProvider>
    </div>
  );
}

export default App;
