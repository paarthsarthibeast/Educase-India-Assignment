import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-2">
        Sign in to your PopX account
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <form className="flex flex-col gap-4">
        <div>
          <label className="text-sm font-medium text-gray-800 mb-1 block">Email Address</label>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6A38F1]"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-800 mb-1 block">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6A38F1]"
          />
        </div>

        <button
          type="button"
          onClick={() => navigate("/account")}
          className="w-full py-3 rounded-md bg-[#6A38F1] text-white text-sm font-medium hover:bg-[#5b2fd1] transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
