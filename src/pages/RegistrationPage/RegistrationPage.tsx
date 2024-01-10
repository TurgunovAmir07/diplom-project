import { TextField, Button } from "@mui/material";
import React, { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/slices/userSlice";
import { RootState } from "../../store/store";
import { StyledRegistrationPage } from "./RegistrationPage.style";

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

  const name = useSelector((state: RootState) => state.name);
  const email = useSelector((state: RootState) => state.email);
  const password = useSelector((state: RootState) => state.password);
  const id = useSelector((state: RootState) => state.id);

  const onRegSubmit: SubmitHandler<IRegForm> = () => {
    dispatch(setUser(mockUser));

    localStorage.setItem("mockUser", JSON.stringify(mockUser));

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
    <StyledRegistrationPage>
      <div className="login-parent-container">
        <div className="login-container">
          <form className="login-form" onSubmit={handleSubmit(onRegSubmit)}>
            <h2 className="login-title">Registration</h2>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <TextField
                  className="Input"
                  fullWidth
                  color="info"
                  error={errors.username ? true : false}
                  helperText={errors.username?.message}
                  type="text"
                  variant="filled"
                  label="enter your name"
                  {...field}
                />
              )}
            />
            <Controller
              name="useremail"
              control={control}
              render={({ field }) => (
                <TextField
                  className="Input"
                  fullWidth
                  color="info"
                  error={errors.useremail ? true : false}
                  helperText={errors.useremail?.message}
                  type="email"
                  variant="filled"
                  label="enter your email"
                  {...field}
                />
              )}
            />
            <Controller
              name="userpassword"
              control={control}
              render={({ field }) => (
                <TextField
                  className="Input"
                  fullWidth
                  color="info"
                  error={errors.userpassword ? true : false}
                  helperText={errors.userpassword?.message}
                  type="password"
                  variant="filled"
                  label="enter your password"
                  {...field}
                />
              )}
            />
            <Button
              className="Button"
              variant="outlined"
              type="submit"
              fullWidth
              disabled={Object.keys(errors).length > 0}
            >
              submit
            </Button>
            <p className="paragraph">
              or{" "}
              <Link to="/login" className="Link">
                login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </StyledRegistrationPage>
  );
};

export default RegistrationPage;
