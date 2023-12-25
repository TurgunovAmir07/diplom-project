import { TextField, Button } from "@mui/material";
import React from "react";
import ModalPage from "../pages/Modal/ModalPage";

const LogInWindow = () => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "100px",
          right: "100px",
          width: "300px",
          height: "auto",
          background: "#e3e3e3",
          borderRadius: "20px",
          padding: "20px",
        }}
      >
        <div>
          <div
            style={{
              width: "100%",
              background: "#ffffff",
              borderRadius: "20px",
              marginBottom: "20px",
              height: "100px",
            }}
          />
          <div>
            <TextField
              size="small"
              label="type your email"
              fullWidth
              sx={{
                background: "#fff",
                marginBottom: "15px",
              }}
            />
            <Button
              color="primary"
              variant="contained"
              fullWidth
              sx={{
                borderRadius: "10px",
                marginBottom: "15px",
              }}
            >
              Go nomad
            </Button>
            <ModalPage />
          </div>
        </div>
      </div>
    </>
  );
};

export default LogInWindow;
