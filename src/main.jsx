import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MyRouter from "./MyRouter";
import { BrowserRouter } from "react-router";
import { ServicesController } from "./context/servicesContext.jsx";
import { AuthController } from "./context/authContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ServicesController>
      <AuthController>
        <MyRouter />
      </AuthController>
    </ServicesController>
  </BrowserRouter>
);
