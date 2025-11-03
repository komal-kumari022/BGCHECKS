import React from 'react';

const ModalTimeContent = () => {
  return (
    <div className="space-y-5">
      <select 
        className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:border-teal-500 transition shadow-sm"
        defaultValue="" // Added defaultValue for controlled/uncontrolled usage
      >
        <option value="" disabled>Select a state...</option>
        <option>Alabama</option>
        <option>Alaska</option>
        <option>Arizona</option>
        <option>New York</option>
        <option>Washington</option>
        {/* You should add all US states here */}
      </select>
      
      {/* Placeholder content for when no state is selected */}
      <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-500 bg-gray-50 text-sm sm:text-base">
        Select a state to view surcharges and estimated turnaround times.
      </div>
    </div>
  );
};

export default ModalTimeContent;