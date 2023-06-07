import { createBrowserRouter } from "react-router-dom";
import { SignUpPage } from "@/pages/signup";

export const appRouter = createBrowserRouter([
  {
    element: <SignUpPage />,
    path: "/cadastrar"
  }
])