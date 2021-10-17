import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ImgMediaCard from "./ImgMediaCard";
import Preloader from "./Preloader";

export default function MyContainer({ dataItems, pageNumber }) {
  const [cardInfo, setCardInfo] = useState([]);

  useEffect(() => {
    setCardInfo(dataItems);
  }, [dataItems]);

  const filterData = (propsData, paginationPage) => {
    if (propsData.length) {
      const upIndex = 12 * paginationPage;
      const lowIndex = upIndex - 12;

      const arrayForRender = cardInfo.filter(
        (item) => item.id > lowIndex && item.id <= upIndex
      );
      return arrayForRender;
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" style={{ marginTop: "0.5rem" }}>
        <Box
          sx={{ bgcolor: "#cfe8fc", height: "1000hv" }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            paddingTop: "1rem",
          }}>
          {cardInfo.length ? (
            //----------------------------
            filterData(cardInfo, pageNumber).map((item) => {
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
            })
          ) : (
            //-----------------------
            <Preloader />
          )}
        </Box>
      </Container>
    </React.Fragment>
  );
}
