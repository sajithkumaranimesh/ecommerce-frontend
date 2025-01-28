import { useState } from "react";
import authService from "../service/authService";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

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

      navigate("static-component");
    } catch (error) {
      throw new Error("Loggin faild!");
    }
  };

  return (
    <div className="bg-amber-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-amber-900 text-2xl font-poppins font-bold mb-6 text-center">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-800 font-lora font-medium mb-1"
            >
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

          <div className="mb-4 text-right">
            <Link
              to="forgot-password"
              className="text-amber-600 hover:text-amber-700 text-sm font-poppins"
            >
              Forgot Password?
            </Link>
          </div>

          <div className="mt-5">
            <button
              type="submit"
              className="w-full bg-amber-600 text-white font-poppins font-medium p-2 rounded-md hover:bg-amber-700"
            >
              Login
            </button>
          </div>

          <div className="mt-3 text-center">
            <p className="text-center text-gray-800 font-lora text-sm mt-4">
              Don't have an account ?{" "}
              <Link
                to="signup"
                className="text-amber-600 hover:text-amber-700 font-medium"
              >
                Signup
              </Link>
            </p>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
