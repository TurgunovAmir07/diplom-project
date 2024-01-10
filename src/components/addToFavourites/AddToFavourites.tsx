import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface IAddToFavourites {
  cityName: string;
  onToggleFavorite: (cityName: string) => void;
  isFavorite: boolean;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AddToFavourites = ({
  cityName,
  onToggleFavorite,
  isFavorite,
}: IAddToFavourites) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    onToggleFavorite(cityName);
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Button variant="outlined" onClick={handleClick}>
        <FavoriteIcon color={isFavorite ? "secondary" : "action"} />
      </Button>
      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={isFavorite ? "success" : "info"}
          sx={{ width: "100%" }}
        >
          {isFavorite ? "Добавлено в избранное!" : "Удалено из избранного!"}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default AddToFavourites;
