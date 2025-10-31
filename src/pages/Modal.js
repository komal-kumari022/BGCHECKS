import React from "react";

const Modal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4 sm:px-6">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md sm:max-w-lg relative p-5 sm:p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Title */}
        {title && (
          <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 text-center">
            {title}
          </h2>
        )}

        {/* Content */}
        <div className="text-sm sm:text-base text-gray-700">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
