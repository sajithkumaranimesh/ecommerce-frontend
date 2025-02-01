import { useEffect, useState } from "react";
import ProductCart from "./ProductCart";
import productService from "../service/productService";
import CategorySelect from "./CategorySelect";

export default function ProductGrid() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    async function getProducts() {
        const response = await productService.retrieve();
        const productList = response.data;
        setProducts(productList);
        setFilteredProducts(productList);

        const uniqueCategories = [...new Set(productList.map(product => product.category))];
        setCategories(uniqueCategories);
    }

    useEffect(() => {
        getProducts();
    }, []);

    function handleCategorySelect(category) {
        if (category === "") {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(products.filter(product => product.category === category));
        }
    }

    return (
        <div className="p-4">
            <CategorySelect categories={categories} onSelectCategory={handleCategorySelect} />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
                    <ProductCart key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
}
