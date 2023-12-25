import React from "react";
import MainPage from "./pages/MainPage/MainPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegistrationPage/RegistrationPage";
import Contries from "./components/iso/Contries";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/registration",
    element: <RegisterPage />,
  },
  {
    path: "/iso",
    element: <Contries />,
  },
]);
const App: React.FC = () => {
  return (
    <div className="App">
      <RouterProvider router={routerConfig} />
    </div>
  );
};

export default App;
