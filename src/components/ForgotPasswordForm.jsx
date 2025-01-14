import { useState } from "react";
import { Link } from "react-router";

export default function ForgotPasswordForm() {
   const [email, setEmail] = useState("");

  return (
    <div className="bg-amber-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
      <h2 className="text-amber-900 text-2xl font-poppins font-bold mb-6 text-center">
            Forgot Password
          </h2>
        <form>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-800 font-lora font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-gray-50 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-600 placeholder-gray-400"
              placeholder="Enter Email..."
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className="mt-5">
            <button
              type="submit"
              className="w-full bg-amber-600 text-white font-poppins font-medium p-2 rounded-md hover:bg-amber-700"
            >
              Submit Email
            </button>
          </div>
          
          <div className="mt-3 text-center">
            <p className="text-center text-gray-800 font-lora text-sm mt-4">
              Return to Login Page{" "}
              <Link to=".." className="text-amber-600 hover:text-amber-700 font-medium">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
