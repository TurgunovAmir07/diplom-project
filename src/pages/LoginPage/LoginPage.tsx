import { useEffect } from "react";
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
import { StyledLoginPage } from "./LoginPage.style";

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

  const email = useSelector((state: RootState) => state.email);
  const password = useSelector((state: RootState) => state.password);
  const id = useSelector((state: RootState) => state.id);

  const onLoginSubmit: SubmitHandler<ILoginForm> = () => {
    dispatch(setUser(mockUser));

    localStorage.setItem("mockUser", JSON.stringify(mockUser));

    console.log(mockUser.email, mockUser.password, mockUser.id);
    navigate("/");
  };

  useEffect(() => {
    console.log(email, password, id);
  }, [email, password, id]);

  return (
    <StyledLoginPage>
      <div className="login-parent-container">
        <div className="login-container">
          <form
            className="login-form"
            style={{
              display: "block",
            }}
            onSubmit={handleSubmit(onLoginSubmit)}
          >
            <h2 className="login-title">Login</h2>
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
              variant="outlined"
              type="submit"
              fullWidth
              className="Button"
              disabled={Object.keys(errors).length > 0}
            >
              submit
            </Button>
            <p className="Link-wrapper">
              or{" "}
              <Link className="Link" to="/registration">
                registration
              </Link>
            </p>
          </form>
        </div>
      </div>
    </StyledLoginPage>
  );
};

export default LoginPage;
