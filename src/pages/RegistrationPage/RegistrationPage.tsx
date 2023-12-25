import { TextField, Button } from "@mui/material";
import React, { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/slices/userSlice";
import { RootState } from "../../store/store";

interface IRegForm {
  username: string;
  useremail: string;
  userpassword: string;
}

const regFormSchema = yup.object({
  username: yup.string().required("username is required!"),
  useremail: yup.string().email().required("useremail is required!"),
  userpassword: yup
    .string()
    .min(4, "the password must be kept at least 4 characters long")
    .required("password is required!"),
});

const mockUser = {
  username: "test User",
  email: "mail@mail.com",
  password: "12345678",
  id: 1,
};

const RegistrationPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegForm>({
    resolver: yupResolver(regFormSchema),
    defaultValues: {
      username: "",
      useremail: "",
      userpassword: "",
    },
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useSelector((state: RootState) => state.userSlice.name);
  const email = useSelector((state: RootState) => state.userSlice.email);
  const password = useSelector((state: RootState) => state.userSlice.password);
  const id = useSelector((state: RootState) => state.userSlice.id);

  const onRegSubmit: SubmitHandler<IRegForm> = () => {
    dispatch(setUser(mockUser));
    console.log(
      mockUser.username,
      mockUser.email,
      mockUser.password,
      mockUser.id
    );
    navigate("/");
  };

  useEffect(() => {
    console.log(name, email, password, id);
  }, [name, email, password, id]);

  return (
    <div className="login-parent-container">
      <div className="login-container">
        <form
          className="login-form"
          style={{
            display: "block",
          }}
          onSubmit={handleSubmit(onRegSubmit)}
        >
          <h2
            className="login-title"
            style={{
              color: "#fff",
              fontFamily: "Roboto",
              fontSize: "32px",
            }}
          >
            Registration
          </h2>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                color="info"
                error={errors.username ? true : false}
                helperText={errors.username?.message}
                type="text"
                variant="filled"
                label="enter your name"
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
              to="/login"
              style={{
                color: "#fff",
                fontFamily: "Roboto",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
