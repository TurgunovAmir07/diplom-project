import { useEffect } from "react";
import MainPage from "./pages/MainPage/MainPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegistrationPage/RegistrationPage";
import Contries from "./components/iso/Countries";
import CardPage from "./pages/CardPage/CardPage";
import { ThemeProvider } from "./utils/theme/ThemeProvider";

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
  {
    path: "/card/:wikiDataId",
    element: <CardPage />,
  },
]);
const App = () => {
  useEffect(() => {
    const storedUser = localStorage.getItem("mockUser");

    if (!storedUser) {
      const currentPath = window.location.pathname;

      if (currentPath !== "/registration") {
        window.location.href = "/registration";
      }
    } else {
      const mockUser = JSON.parse(storedUser);
      console.log("user data:", mockUser);
    }
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        <RouterProvider router={routerConfig} />
      </div>
    </ThemeProvider>
  );
};

export default App;
