import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ActionAreaCard from "./ActionAreaCard";

export default function MyContainer({ dataItems }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box
          sx={{ bgcolor: "#cfe8fc", height: "1000hv" }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            paddingTop: "1rem",
          }}>
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
        </Box>
      </Container>
    </React.Fragment>
  );
}
