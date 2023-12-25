import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../index.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Button, TextField } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { setUser } from "../../store/slices/userSlice";

interface ILoginForm {
  useremail: string;
  userpassword: string;
}

const loginFormSchema = yup.object({
  useremail: yup.string().email().required("email is required!"),
  userpassword: yup
    .string()
    .min(4, "the password must be kept at least 4 characters long")
    .required("password is required!"),
});

const mockUser = {
  email: "mail@mail.com",
  password: "12345678",
  id: 1,
};

const LoginPage = () => {
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

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useSelector((state: RootState) => state.userSlice.email);
  const password = useSelector((state: RootState) => state.userSlice.password);
  const id = useSelector((state: RootState) => state.userSlice.id);

  const onLoginSubmit: SubmitHandler<ILoginForm> = () => {
    dispatch(setUser(mockUser));
    console.log(mockUser.email, mockUser.password, mockUser.id);
    navigate("/");
  };

  useEffect(() => {
    console.log(email, password, id);
  }, [email, password, id]);

  return (
    <div className="login-parent-container">
      <div className="login-container">
        <form
          className="login-form"
          style={{
            display: "block",
          }}
          onSubmit={handleSubmit(onLoginSubmit)}
        >
          <h2
            className="login-title"
            style={{
              color: "#fff",
              fontFamily: "Roboto",
              fontSize: "32px",
            }}
          >
            Login
          </h2>
          <Controller
            name="useremail"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                color="info"
                error={errors.useremail ? true : false}
                helperText={errors.useremail?.message}
                type="email"
                variant="filled"
                label="enter your email"
                {...field}
                sx={{
                  mt: "10px",
                  display: "block",
                  marginBottom: "10px",
                }}
              />
            )}
          />
          <Controller
            name="userpassword"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                color="info"
                error={errors.userpassword ? true : false}
                helperText={errors.userpassword?.message}
                type="password"
                variant="filled"
                label="enter your password"
                {...field}
                sx={{
                  display: "block",
                  marginBottom: "10px",
                }}
              />
            )}
          />
          <Button
            variant="outlined"
            type="submit"
            fullWidth
            className="Button"
            style={{
              color: "#fff",
              background: "#003465",
              marginBottom: "10px",
            }}
          >
            submit
          </Button>
          <p
            style={{
              color: "#fff",
              fontFamily: "Roboto",
              fontWeight: 100,
            }}
          >
            or{" "}
            <Link
              to="/registration"
              style={{
                color: "#fff",
                fontFamily: "Roboto",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              registration
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
