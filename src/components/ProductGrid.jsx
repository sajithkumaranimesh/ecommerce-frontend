import { useEffect } from "react";
import { useState } from "react";
import ProductCart from "./ProductCart";
import productService from "../service/productService";

export default function ProductGrid() {
    const [products, setProducts] = useState([]);

    async function getProducts() {
        const response = await productService.retrieve();
        setProducts(response.data)
    }

    useEffect(() => {
        getProducts();
    }, [] )


    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {products.map((product) => (
                <ProductCart key={product._id} product={product}/>
            ))}
        </div>
    );
}