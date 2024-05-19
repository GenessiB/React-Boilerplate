import "./styles/index.scss";
// DEPENDANCIES
import ReactDOM from "react-dom/client";
import { Routes, Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import { StrictMode } from "react";

// ROUTES
import HomePage from "./Routes/Home/home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
