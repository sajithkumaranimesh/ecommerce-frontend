import "./App.css";
import CartSection from "./components/CartSection";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import Hero from "./components/Hero";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import RegisterForm from "./components/RegisterForm";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    // <BrowserRouter>
    // <Routes>
    //   <Route index element={<ProductGrid/>}/>
    //   <Route path='signup' element={<RegisterForm/>}/>
    //   <Route path='forgot-password' element={<ForgotPasswordForm/>}/>
    // </Routes>
    // </BrowserRouter>
    <>
      <Navbar />
      <Hero/>
      <ProductGrid />
      <CartSection />
    </>
  );
}

export default App;
