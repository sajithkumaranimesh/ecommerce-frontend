import { useState } from "react";
import authService from "../service/authService";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = authService.login({ email, password });
      const data = await response;

      if (data.success) {
        console.log("login successful!");
        localStorage.setItem("token", data.token);
      }
      setEmail("");
      setPassword("");

      toast.promise(response, {
        pending: "Loggin in...",
        success: "Login successful 😊",
        error: "Login failed! Please check your email and password.",
      });
    } catch (error) {
      throw new Error("Loggin faild!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-yellow-400		">
      <div className="w-96 p-6 shadow-lg bg-white rounded-md">
        <form onSubmit={handleSubmit}>
          <h1 className="text-3xl block text-center font-serif">Login</h1>
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

          <div className="mt-3 text-end">
            <a className="font-sans text-red-400 hover:text-red-500 font-serif">
              Forgot Password?
            </a>
          </div>

          <div className="mt-5">
            <button
              type="submit"
              className="border-2 bg-amber-600 text-white py-1 w-full rounded-md hover:bg-amber-700 font-serif"
            >
              Login
            </button>
          </div>

          <div className="mt-3 text-center">
            <p className="font-serif">
              Don't have an account ?{" "}
              <Link to='signup' className="font-semibold">Signup</Link>
            </p>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
