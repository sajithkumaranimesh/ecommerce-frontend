import React from "react";
import { useNavigate } from "react-router";

export default function OrderCancel(){
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-md">
        <svg
          className="text-red-500 w-16 h-16 mx-auto mb-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <h2 className="text-2xl font-bold mb-2">Order Cancelled</h2>
        <p className="text-gray-600 mb-6">Your order has been cancelled. If this was a mistake, please place a new order.</p>
        <button
          className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
          onClick={() => navigate("/")}
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};
