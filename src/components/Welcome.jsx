import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="flex flex-col justify-end h-full p-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Welcome to PopX
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <Link to="/signup">
          <button className="w-full py-3 rounded-md bg-[#6A38F1] text-white text-sm font-medium mb-3 hover:bg-[#5b2fd1] transition">
            Create Account
          </button>
        </Link>

        <Link to="/login">
          <button className="w-full py-3 rounded-md bg-[#cdc3fc] text-[#000000] text-sm font-semibold">
            Already Registered? Login
          </button>
        </Link>
      </div>
    </div>
  );
}
