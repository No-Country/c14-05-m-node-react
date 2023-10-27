import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import UserProvider from "./components/UserProvider.jsx";
import "./index.css";
import ErrorPage from "./pages/ErrorPage.jsx";
import Login from "./pages/Login.jsx";
import Onboarding from "./pages/Onboarding/Onboarding.jsx";
import Preferencias from "./pages/Onboarding/Preferencias.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import CategoriesPage from "./pages/CategoriesPage.jsx";
import FindEvent from "./pages/findEvent/index.jsx";

//estas son las rutas, para navegar a una ruta hay que usar el componente <Link>
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    path: "categorias",
    element: <CategoriesPage />,
  },
  {
    path: "encontrar-evento",
    element: <FindEvent />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
);
