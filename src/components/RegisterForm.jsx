import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import authService from "../service/authService";
import { Link } from "react-router";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = authService.register({
        name,
        email,
        password,
        passwordConfirm,
      });
      const data = await response;
      if (data.success) {
        console.log("Signing success!");
        localStorage.setItem("token", data.token);
      }
      setName("");
      setEmail("");
      setPassword("");
      setPasswordConfirm("");

      toast.promise(response, {
        pending: "Signing in...",
        success: "Signup successful 😊",
        error: "Signup failed! Please check your details.",
      });
    } catch (error) {
      throw new Error("Signing faild!");
    }
  };

  return (
    <div className="bg-amber-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
      <h2 className="text-amber-900 text-2xl font-poppins font-bold mb-6 text-center">Signup</h2>
        <form onSubmit={handleSubmit}>

          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-800 font-lora font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-gray-50 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-600 placeholder-gray-400"
              placeholder="Enter Name..."
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

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

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-800 font-lora font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full bg-gray-50 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-600 placeholder-gray-400"
              placeholder="Enter Password..."
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirm-password"
              className="block text-gray-800 font-lora font-medium mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="w-full bg-gray-50 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-600 placeholder-gray-400"
              placeholder="Enter Confirm Password..."
              onChange={(e) => setPasswordConfirm(e.target.value)}
              value={passwordConfirm}
            />
          </div>

          <div className="mt-5">
            <button
              type="submit"
              className="w-full bg-amber-600 text-white font-poppins font-medium p-2 rounded-md hover:bg-amber-700"
            >
              Create Account
            </button>
          </div>

          <div className="mt-3 text-center">
            <p className="text-center text-gray-800 font-lora text-sm mt-4">
              Already have an account ?{" "}
              <Link to=".." className="text-amber-600 hover:text-amber-700 font-medium">Login</Link>
            </p>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
