import React from "react";

// List data based on your screenshot
const nationalLists = [
  "United States (US) Federal Lists",
  "Drug Enforcement Agency - Diversion Control Administrative Actions Against Doctors",
  "US Air Force Fugitives",
  "Bureau of Alcohol, Tobacco, and Firearms",
  "Boy Scouts of America Exclusions List",
  "CIA Political Parties and Leaders",
  "CIA Political Pressure Groups and Leaders",
  "Drug Enforcement Agency - Diversion Control Criminal Cases Against Doctors",
  "Directorate of Defense Trade Controls - Lists of Parties Debarred for ITAR Convictions",
  // Add more lists as needed
];

const NationalCheckLists = () => {
  return (
    <div className="p-1"> {/* Minimal padding inside the modal content area */}
      {/* State Selection Dropdown (Mimicking the look from your image) */}
      <div className="mb-4">
        <label htmlFor="state-select" className="sr-only">
          Select State
        </label>
        <select
          id="state-select"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md shadow-sm cursor-pointer"
          defaultValue=""
        >
          <option value="" disabled>
            Select State
          </option>
          <option>United States (US)</option>
          <option>Alabama</option>
          <option>Alaska</option>
          {/* ... add all states here */}
        </select>
      </div>

      {/* The Scrollable List */}
      <div className="max-h-72 overflow-y-auto border border-gray-200 rounded-md">
        <ul className="divide-y divide-gray-100">
          {nationalLists.map((list, index) => (
            <li
              key={index}
              className="py-2.5 px-3 text-gray-700 text-sm hover:bg-teal-50/50 transition-colors"
            >
              {list}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NationalCheckLists;