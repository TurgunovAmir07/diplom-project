import { Button } from "@mui/material";
import React from "react";
import "../../index.css";

const CustomButton = () => {
  return (
    <Button
      fullWidth
      className="Button"
      style={{
        color: "#fff",
        background: "#003465",
        // border: "1px solid #fff",
      }}
    >
      text
    </Button>
  );
};

export default CustomButton;
