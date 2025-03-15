import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layout/RootLayout";
import Home from "../pages/home";
import Portafolio from "../pages/portafolio";
import Caso1 from "../pages/Caso1";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/Portafolio", element: <Portafolio /> },
      { path: "/Caso1", element: <Caso1 /> },
    ],
  },
]);
