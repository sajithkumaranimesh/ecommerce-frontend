import CartSection from "./CartSection";
import Hero from "./Hero";
import Navbar from "./Navbar";
import ProductGrid from "./ProductGrid";

export default function StaticComponent() {
  return <>
  <Navbar/>
  <Hero/>
  <ProductGrid/>
  <CartSection/>
  </>;
}
