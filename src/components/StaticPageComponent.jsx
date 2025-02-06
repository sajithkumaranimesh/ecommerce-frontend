import { useContext, useState } from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import ProductGrid from "./ProductGrid";
import CartSection from "./CartSection";
import { Cartcontext } from "../context/Cart";

export default function StaticPageComponent() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems } = useContext(Cartcontext);

    const openCartModal = () => {
        setIsCartOpen(true); // Open the cart modal
    };

    const closeCartModal = () => {
        setIsCartOpen(false); // Close the cart modal
    };

    // Calculate total item count in cart
    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);


  return <>
  <Navbar openCartModal={openCartModal}  cartItemCount={cartItemCount}/>
  <Hero/>
  <ProductGrid/>
  <CartSection isOpen={isCartOpen} closeModal={closeCartModal}/>
  </>;
}
