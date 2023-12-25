import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";

// yup:
interface ILoginForm {
  useremail: string;
  userpassword: string;
}

const loginFormSchema = yup.object().shape({
  useremail: yup.string().email().required("Email is required!"),
  userpassword: yup
    .string()
    .min(8, "The password must contain at least 8 characters!")
    .required("Password is required!"),
});

const ModalPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      useremail: "",
      userpassword: "",
    },
  });

  const [open, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        color="primary"
        variant="contained"
        onClick={onOpen}
        fullWidth
        sx={{
          borderRadius: "10px",
        }}
      >
        Log In
      </Button>
      <Dialog
        open={open}
        sx={{
          textAlign: "center",
        }}
      >
        <DialogTitle>Log in</DialogTitle>
        <DialogContent
          sx={{
            textAlign: "center",
            width: "300px",
          }}
        >
          <DialogContentText>
            <Controller
              name="useremail"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  error={errors.useremail ? true : false}
                  helperText={errors.useremail?.message}
                  variant="filled"
                  label="Enter your email"
                  sx={{
                    mb: "10px",
                    display: "block",
                  }}
                />
              )}
            />
            <Controller
              name="userpassword"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  error={errors.userpassword ? true : false}
                  helperText={errors.userpassword?.message}
                  variant="filled"
                  label="Enter your password"
                  sx={{
                    mb: "10px",
                    display: "block",
                  }}
                />
              )}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Button
            color="error"
            variant="contained"
            onClick={onClose}
            type="button"
          >
            close
          </Button>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            onClick={() => {
              handleSubmit((data) => {
                console.log(data);
                if (!Object.keys(errors).length) {
                  onClose();
                }
              })();
            }}
          >
            Log in
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ModalPage;
