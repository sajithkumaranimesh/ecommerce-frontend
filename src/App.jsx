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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<CartSection/>}>
          <Route path="static-component" element={<StaticComponent />} />
        </Route>
        <Route path="signup" element={<RegisterForm />} />
        <Route path="forgot-password" element={<ForgotPasswordForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
