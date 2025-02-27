import { useEffect, useState } from "react";
import ProductCart from "./ProductCart";
import productService from "../service/productService";
import CategorySelect from "./CategorySelect";

export default function ProductGrid() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    async function getProducts() {
        const response = await productService.retrieve();
        const productList = response.data;
        setProducts(productList);
        setFilteredProducts(productList);
    }

    useEffect(() => {
        getProducts();
    }, []);

    function handleCategorySelect(category) {
        if (category === "") {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(products.filter(product => product.category === category._id));
        }
    }

    return (
        <div className="p-4">
            <CategorySelect onSelectCategory={handleCategorySelect} />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
                    <ProductCart key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
}
