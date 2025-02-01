import { useState } from "react";

export default function CategorySelect({ categories, onSelectCategory }) {
    const [selectedCategory, setSelectedCategory] = useState("");

    function handleCategoryChange(event) {
        const category = event.target.value;
        setSelectedCategory(category);
        onSelectCategory(category);
    }

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Filter by Category:</label>
            <select 
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                value={selectedCategory} 
                onChange={handleCategoryChange}
            >
                <option value="">All</option>
                {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
        </div>
    );
}
