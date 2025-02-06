import { createBrowserRouter } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import StaticPageComponent from "../components/StaticPageComponent";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <StaticPageComponent/>
    }
])