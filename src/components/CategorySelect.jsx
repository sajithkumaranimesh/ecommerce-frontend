import { useEffect, useState } from "react";
import categoryService from "../service/categoryService";

export default function CategorySelect({ onSelectCategory }) {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [categories, setCategories] = useState([]);

    async function getCategory(){
        const response = await categoryService.retrieve();
        const categoryList = response.data;
        setCategories(categoryList);
    }

    useEffect(() => {
        getCategory();
    }, []);

    function handleCategoryChange(category) {
        setSelectedCategory(category);
        onSelectCategory(category);
    }

    return (
        <div className="text-center mb-10">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Shop By Category</h2>
            <div className="flex justify-center gap-6">
                {categories.map((category) => (
                    <div 
                        key={category.id}
                        className={`flex flex-col items-center cursor-pointer transition transform ${
                            selectedCategory === category ? "scale-110" : ""
                        }`}
                        onClick={() => handleCategoryChange(category)}
                    >
                        <img 
                            src={category.image_url} 
                            alt={category.name} 
                            className="w-20 h-20 rounded-full object-cover border-2 border-gray-200 shadow-sm hover:border-orange-500"
                        />
                        <span className="mt-2 text-sm text-gray-700">{category.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
