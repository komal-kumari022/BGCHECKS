import React from "react";

const Header = () => (
  <header className="flex flex-col items-center pt-4 pb-3 border-b border-gray-200 bg-white">
    {/* Logo + Title */}
    <div className="flex items-center space-x-2 sm:space-x-3">
      <span className="text-teal-600">
        {/* Subtle checkmark icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 sm:h-7 sm:w-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <path d="M9 12l2 2 4-4"></path>
        </svg>
      </span>

      <h1 className="font-semibold text-lg sm:text-xl md:text-2xl tracking-tight text-gray-800">
        BackgroundChecks<span className="text-teal-600">.com</span>
      </h1>
    </div>

    {/* Subtitle */}
    <p className="text-gray-500 mt-1 font-normal text-[11px] sm:text-xs tracking-wide uppercase">
      A HireRight Company
    </p>
  </header>
);

export default Header;
