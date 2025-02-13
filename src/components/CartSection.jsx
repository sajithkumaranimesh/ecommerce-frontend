import { useContext } from "react";
import { Cartcontext } from "../context/Cart";

export default function CartSection({ isOpen, closeModal }) {
    const { cartItems, addToCart, removeFromCart, clearCart } = useContext(Cartcontext);

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleSubmit = async () => {
        const response = await fetch('http://localhost:3000/api/v1/order/create-checkout-session', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ cartItems }),
        });
        const data = await response.json();
        if (data) {
            window.location.href = data.data.url;
        }
    };

    return (
<dialog open={isOpen} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full mx-auto relative z-50 overflow-y-auto ">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Your Cart</h2>

        <div className="space-y-4 overflow-y-auto max-h-[50vh] px-4">
            {cartItems.map((item) => (
                <div key={item._id} className="flex items-center justify-between p-4 border border-gray-300 rounded-lg shadow-md">
                    <div className="flex items-center space-x-4">
                        <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                            <p className="text-gray-600">${item.price.toFixed(2)} each</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button onClick={() => removeFromCart(item)} className="bg-gray-200 p-1 rounded-full"> - </button>
                        <span className="text-lg font-semibold">{item.quantity}</span>
                        <button onClick={() => addToCart(item)} className="bg-gray-200 p-1 rounded-full"> + </button>
                        <button onClick={() => clearCart()} className="text-red-500 hover:text-red-700 transition-all">Remove</button>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md text-right">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Total: ${totalPrice.toFixed(2)}</h3>
            <button onClick={handleSubmit} className="bg-orange-500 text-white px-6 py-2 rounded-lg text-lg font-semibold transition-all hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400">
                Checkout
            </button>
        </div>

        <button onClick={closeModal} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
            ✖
        </button>
    </div>
</dialog>

    );
}
