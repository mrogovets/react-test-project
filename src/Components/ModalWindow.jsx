import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CardMedia from "@mui/material/CardMedia";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalWindow({
  id,
  url,
  title,
  isOpenModal,
  handleClose,
}) {
  return (
    <div>
      <Modal
        open={isOpenModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <CardMedia
            component="img"
            alt={`img ID: ${id}`}
            height="600"
            image={url}
          />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {`Element ID: ${id}`}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {title}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
