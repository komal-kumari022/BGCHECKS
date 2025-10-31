import React from "react";

const StepCard = ({ title, children }) => (
  <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 mt-8 min-h-[300px]">
    <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
      {title}
    </h2>
    <div className="text-gray-600">{children}</div>
  </div>
);

export default StepCard;
