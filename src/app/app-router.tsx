import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "@/pages/home";

export const appRouter = createBrowserRouter([
  {
    element: <HomePage />,
    path: "/"
  }
])