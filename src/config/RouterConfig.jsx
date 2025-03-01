import { createBrowserRouter } from "react-router-dom";
import StaticPageComponent from "../components/StaticPageComponent";
import CartSection from "../components/CartSection"
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <StaticPageComponent/>,
        children: [
            {
                path: 'cart',
                element: <CartSection/>
            },
            // {
            //     path: 'checkout',
            //     element: 
            // }
            {
                path: 'login',
                element: <LoginForm/>
            },
            {
                path: 'register',
                element: <RegisterForm/>
            }
        ]
    }
])