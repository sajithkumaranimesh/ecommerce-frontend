import { useEffect } from "react";
import { useState } from "react";
import ProductCart from "./ProductCart";

export default function ProductGrid() {
    const [products, setProducts] = useState([]);

    async function getProducts() {
        const response = await fetch('https://dummyjson.com/products')  // fetch the products
        const data = await response.json() // convert the response to json
        setProducts(data.products) // set the products in the state to the products we fetched
    }

    useEffect(() => {
        getProducts();
    }, [] )


    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {products.map((product) => (
                <ProductCart key={product.id} product={product}/>
            ))}
        </div>
    );
}