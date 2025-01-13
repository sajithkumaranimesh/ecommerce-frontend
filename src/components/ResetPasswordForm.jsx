import { useState } from "react";

export default function ResetPasswordForm() {
  const [newPassword, setNewPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  return (
    <div className="flex justify-center items-center h-screen bg-yellow-400">
      <div className="w-96 p-6 shadow-lg bg-white rounded-md">
        <form>
          <h1 className="text-3xl block text-center font-serif">
            Reset Password
          </h1>
          <hr className="mt-3" />

          <div className="mt-3">
            <label
              htmlFor="new-password"
              className="block text-base mb-2 font-serif"
            >
              New Password
            </label>
            <input
              type="password"
              id="new-password"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md"
              placeholder="Enter new password"
              onChange={(e) => setNewPassword(e.target.value)}
              value={newPassword}
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
              type="password"
              id="confirm-password"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md"
              placeholder="Enter confirm password"
              onChange={(e) => setPasswordConfirm(e.target.value)}
              value={passwordConfirm}
            />
          </div>

          <div className="mt-5">
            <button
              type="submit"
              className="border-2 bg-amber-600 text-white py-1 w-full rounded-md hover:bg-amber-700 font-serif"
            >
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
