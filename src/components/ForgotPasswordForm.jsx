import { useState } from "react";

export default function ForgotPasswordForm() {
   const [email, setEmail] = useState("");

  return (
    <div className="flex justify-center items-center h-screen bg-yellow-400">
      <div className="w-96 p-6 shadow-lg bg-white rounded-md">
        <form>
          <h1 className="text-3xl block text-center font-serif">
            Forgot Password
          </h1>
          <hr className="mt-3" />

          <div className="mt-3">
            <label htmlFor="email" className="block text-base mb-2 font-serif">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md"
              placeholder="Enter Email..."
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className="mt-5">
            <button
              type="submit"
              className="border-2 bg-amber-600 text-white py-1 w-full rounded-md hover:bg-amber-700 font-serif"
            >
              Submit Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
