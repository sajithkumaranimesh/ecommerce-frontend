import { useState } from "react";
import authService from "../service/authService";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function LoginModal({ isOpen, onClose }) {
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
        pending: "Logging in...",
        success: "Login successful 😊",
        error: "Login failed! Please check your email and password.",
      });

      navigate("static-component");
      onClose();
    } catch (error) {
      throw new Error("Login failed!");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-amber-900 text-2xl font-bold text-center">
            Login
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-800 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-gray-50 border border-gray-300 rounded-md p-2 focus:ring-amber-600"
              placeholder="Enter Email..."
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-800 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full bg-gray-50 border border-gray-300 rounded-md p-2 focus:ring-amber-600"
              placeholder="Enter Password..."
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <div className="text-right">
            <Link to="forgot-password" className="text-amber-600 hover:text-amber-700 text-sm">
              Forgot Password?
            </Link>
          </div>

          <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700">
            Login
          </Button>

          <div className="text-center text-sm mt-4">
            Don't have an account?{' '}
            <Link to="signup" className="text-amber-600 hover:text-amber-700 font-medium">
              Signup
            </Link>
          </div>
        </form>
        <ToastContainer />
      </DialogContent>
    </Dialog>
  );
}
