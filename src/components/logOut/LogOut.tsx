import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const LogOut = () => {
  function handleSubmit() {
    localStorage.removeItem("mockUser");
    console.log("click");
  }

  return (
    <Link to="/registration">
      <Button variant="contained" color="success" onClick={handleSubmit}>
        Log-out
      </Button>
    </Link>
  );
};
