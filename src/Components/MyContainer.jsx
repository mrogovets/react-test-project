import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ImgMediaCard from "./ImgMediaCard";
import Preloader from "./Preloader";
import ModalWindow from "./ModalWindow";

export default function MyContainer({ dataItems, pageNumber, deleteItem }) {
  const [cardInfo, setCardInfo] = useState([]);
  const [id, setId] = useState(1);
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    setCardInfo(dataItems);
  }, [dataItems]);

  const filterData = (propsData, paginationPage) => {
    if (propsData.length) {
      const upIndex = 12 * paginationPage;
      const lowIndex = upIndex - 12;

      const arrayForRender = cardInfo.filter(
        (item, index) => index > lowIndex && index <= upIndex
      );
      return arrayForRender;
    }
  };

  const getInfoCard = (getId, getUrl, getTitle) => {
    setId(getId);
    setUrl(getUrl);
    setTitle(getTitle);
    setIsOpenModal(true);
  };

  const handleClose = (isClose) => {
    setIsOpenModal(false);
  };

  return (
    <React.Fragment>
      <ModalWindow
        id={id}
        url={url}
        title={title}
        isOpenModal={isOpenModal}
        handleClose={(isClose) => handleClose(isClose)}
      />
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
                  getIdCard={(getId, getUrl, getTitle) =>
                    getInfoCard(getId, getUrl, getTitle)
                  }
                  deleteItem={deleteItem}
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
