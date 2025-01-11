export default function LoginForm() {
  return (
    <div className="flex justify-center items-center h-screen bg-yellow-400		">
      <div className="w-96 p-6 shadow-lg bg-white rounded-md">
        <h1 className="text-3xl block text-center font-serif">login</h1>
        <hr className="mt-3" />

        <div className="mt-3">
          <label htmlFor="username" className="block text-base mb-2 font-serif">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md"
            placeholder="Enter Username..."
          />
        </div>

        <div className="mt-3">
          <label htmlFor="password" className="block text-base mb-2 font-serif">
            Password
          </label>
          <input
            type="text"
            id="password"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md"
            placeholder="Enter Password..."
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
            className="border-2 bg-amber-600 text-white py-1 w-full rounded-md hover:bg-amber-700"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
