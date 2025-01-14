import { useState } from "react";

export default function ResetPasswordForm() {
  const [newPassword, setNewPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  return (
    <div className="bg-amber-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
      <h2 className="text-amber-900 text-2xl font-poppins font-bold mb-6 text-center">
            Reset Password
          </h2>
        <form>

          <div className="mb-4">
            <label
              htmlFor="new-password"
              className="block text-gray-800 font-lora font-medium mb-1"
            >
              New Password
            </label>
            <input
              type="password"
              id="new-password"
              className="w-full bg-gray-50 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-600 placeholder-gray-400"
              placeholder="Enter new password"
              onChange={(e) => setNewPassword(e.target.value)}
              value={newPassword}
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
              placeholder="Enter confirm password"
              onChange={(e) => setPasswordConfirm(e.target.value)}
              value={passwordConfirm}
            />
          </div>

          <div className="mt-5">
            <button
              type="submit"
              className="w-full bg-amber-600 text-white font-poppins font-medium p-2 rounded-md hover:bg-amber-700"
            >
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
