import { createBrowserRouter } from "react-router-dom";
import StaticPageComponent from "../components/StaticPageComponent";
import CartSection from "../components/CartSection"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <StaticPageComponent/>,
        children: [
            {
                path: 'cart',
                element: <CartSection/>
            }
        ]
    }
])