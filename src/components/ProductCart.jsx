export default function ProductCart({ product }) {
    return (
        <div className="border rounded-lg shadow-md p-4 bg-white">
            <img src={product.image_url} alt={product.name} className="w-full h-32 object-cover rounded-md" />
            <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600 text-sm">{product.description}</p>
            <div className="mt-2 flex justify-between items-center">
                <span className="text-green-600 font-bold">${product.price}</span>
                <button className="bg-orange-400 text-white text-sm px-4 py-2 rounded-md hover:bg-orange-600">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}