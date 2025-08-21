import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Create your PopX account
      </h2>

      <form className="flex flex-col gap-4">
        {[
          { label: "Full Name*", placeholder: "Marry Doe" },
          { label: "Phone number*", placeholder: "Enter phone number" },
          { label: "Email address*", placeholder: "Enter email address" },
          { label: "Password*", placeholder: "Enter password" },
          { label: "Company name", placeholder: "Enter company name" },
        ].map((field, i) => (
          <div key={i}>
            <label className="text-sm font-medium text-gray-800 mb-1 block">{field.label}</label>
            <input
              type="text"
              placeholder={field.placeholder}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6A38F1]"
            />
          </div>
        ))}

        <div>
          <p className="text-sm font-medium text-gray-800 mb-2">Are you an Agency?*</p>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 text-sm text-gray-800">
              <input type="radio" name="agency" className="accent-[#6A38F1]" defaultChecked /> Yes
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-800">
              <input type="radio" name="agency" className="accent-[#6A38F1]" /> No
            </label>
          </div>
        </div>

        <button
          type="button"
          onClick={() => navigate("/account")}
          className="w-full py-3 rounded-md bg-[#6A38F1] text-white text-sm font-medium hover:bg-[#5b2fd1] transition"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
