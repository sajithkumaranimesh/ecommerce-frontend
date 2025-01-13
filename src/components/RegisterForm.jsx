import { useState } from "react";
import authService from "../service/authService";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await authService.login({ email, password });
    const data = await response.json();
    if (data.success) console.log("regiter success!");
    localStorage.setItem("token", data.token);

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-yellow-400		">
      <div className="w-96 p-6 shadow-lg bg-white rounded-md">
        <form onSubmit={handleSubmit}>
          <h1 className="text-3xl block text-center font-serif">Register</h1>
          <hr className="mt-3" />

          <div className="mt-3">
            <label htmlFor="name" className="block text-base mb-2 font-serif">
              Name
            </label>
            <input
              type="name"
              id="name"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md"
              placeholder="Enter Name..."
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

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

          <div className="mt-3">
            <label
              htmlFor="password"
              className="block text-base mb-2 font-serif"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md"
              placeholder="Enter Password..."
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <div className="mt-3">
            <label
              htmlFor="confirm-password"
              className="block text-base mb-2 font-serif"
            >
              Confirm Password
            </label>
            <input
              type="confirm-password"
              id="confirm-password"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md"
              placeholder="Enter Confirm Password..."
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </div>

          <div className="mt-5">
            <button
              type="submit"
              className="border-2 bg-amber-600 text-white py-1 w-full rounded-md hover:bg-amber-700 font-serif"
            >
              Create Account
            </button>
          </div>

          <div className="mt-3 text-center">
            <p className="font-serif">Already have an account ? <a href="#" className="font-semibold">Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}
