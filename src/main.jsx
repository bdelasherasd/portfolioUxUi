import React from "react";
import ReactDOM from "react-dom/client";

//import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./config/router";

//import { CssBaseline } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      {/* <CssBaseline /> */}
      <RouterProvider router={router} />
    </>
  </React.StrictMode>
);
