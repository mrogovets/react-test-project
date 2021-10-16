import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ActionAreaCard from "./ActionAreaCard";

export default function MyContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          <ActionAreaCard />
        </Box>
      </Container>
    </React.Fragment>
  );
}
