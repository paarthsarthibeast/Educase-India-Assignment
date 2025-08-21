export default function Account() {
  return (
    <div className="p-6">
      <h2 className="text-sm font-medium text-gray-800 mb-4">Account Settings</h2>

      <div className="bg-gray-50 rounded-md p-4 mb-4 flex items-start gap-3">
        <div className="relative">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="profile"
            className="w-14 h-14 rounded-full object-cover"
          />
          <span className="absolute bottom-0 right-0 w-5 h-5 bg-[#6A38F1] text-white text-xs flex items-center justify-center rounded-full">
            ✎
          </span>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900">Marry Doe</h4>
          <p className="text-xs text-gray-600 mb-2">Marry@gmail.com</p>
          <p className="text-xs text-gray-600 leading-snug">
            Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat
          </p>
        </div>
      </div>
    </div>
  );
}
