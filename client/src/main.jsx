import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ErrorPage from "./pages/ErrorPage.jsx";
import LandingPage from "./pages/landingPage/index.jsx";
import Login from "./pages/Login.jsx";
import Onboarding from "./pages/Onboarding/Onboarding.jsx";
import Preferencias from "./pages/Onboarding/Preferencias.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import CategoriesPage from "./pages/CategoriesPage.jsx";

//estas son las rutas, para navegar a una ruta hay que usar el componente <Link>
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "signup",
    element: <RegisterPage />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "onboarding",
    element: <Onboarding />,
  },
  {
    path: "preferencias",
    element: <Preferencias />,
  },
  {
    path: "CategoriesPage",
    element: <CategoriesPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
