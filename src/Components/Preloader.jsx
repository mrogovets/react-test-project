import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Preloader() {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
      <h2>Loading...</h2>
    </Box>
  );
}
