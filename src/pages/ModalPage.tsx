import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";

const ModalPage = () => {
  const [open, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <h1>text</h1>
      <Button color="primary" variant="contained" onClick={onOpen}>
        open modal
      </Button>
      <Dialog open={open}>
        <DialogTitle>User Screen</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            voluptatum p`rovident quod amet ad excepturi molestiae voluptas
            eaque consectetur omnis, atque obcaecati enim saepe quasi cumque
            culpa beatae ipsum at!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="error" variant="contained" onClick={onClose}>
            close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ModalPage;
