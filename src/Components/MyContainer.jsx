import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ImgMediaCard from "./ImgMediaCard";
import Preloader from "./Preloader";

export default function MyContainer({ dataItems }) {
  const [cardInfo, setCardInfo] = useState([]);

  useEffect(() => {
    setCardInfo(dataItems);
  }, [dataItems]);

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
          {cardInfo.length ? (
            cardInfo.map((item, index) => {
              while (index < 12) {
                return (
                  <ImgMediaCard
                    key={item.id}
                    id={item.id}
                    albumId={item.albumId}
                    title={item.title}
                    url={item.url}
                    thumbnailUrl={item.thumbnailUrl}
                  />
                );
              }
            })
          ) : (
            <Preloader />
          )}
        </Box>
      </Container>
    </React.Fragment>
  );
}
