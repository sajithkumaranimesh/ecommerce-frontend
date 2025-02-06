import "./App.css";
import CartSection from "./components/CartSection";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import Hero from "./components/Hero";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import RegisterForm from "./components/RegisterForm";
import { BrowserRouter, Route, Routes } from "react-router";
import StaticComponent from "./components/StaticComponent";
import OrderSuccess from "./components/OrderSuccess.jsx";
import OrderCancel from "./components/OrderCancel.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OrderCancel/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
