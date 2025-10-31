import React, { useState } from "react";

const screeningOptions = [
  {
    id: "federal",
    title: "Federal Criminal Search",
    description:
      "Search across the 94 Federal District Courts nationwide. Reveal crimes not found in a national criminal or county-level search, and could include drug and firearm charges, terrorism, white-collar crimes, financial fraud and tax-evasion crimes and many more.",
    price: "$9.99",
    per: "per applicant",
  },
  {
    id: "statewide",
    title: "Statewide Criminal Report",
    description:
      "Search statewide to identify records, which can include district courts, state police departments, bureaus of investigation, or combined statewide court systems across all counties within a state.",
    price: "$14.99",
    per: "per applicant",
  },
  {
    id: "motor",
    title: "Motor Vehicle Report",
    description:
      "Identify high-risk drivers and reduce insurance liability by validating applicants’ state driver’s licenses, status, restrictions, notes, points, & violations.",
    price: "$14.99",
    per: "per applicant",
  },
  {
    id: "employment",
    title: "Employment Verification",
    description:
      "Select a single verification of employment or full 7-year employment history.",
  },
  {
    id: "education",
    title: "Education Verification",
    description:
      "Verify degree or certification from over 5,300 universities, colleges, community & junior colleges, and technical or trade schools in the United States. Click here to search list of schools.",
    price: "$19.99",
    per: "per student",
  },
  {
    id: "bankruptcies",
    title: "Bankruptcies, Liens, and Judgments Search",
    description:
      "Search for bankruptcies filed as recently as yesterday and more than 100 million liens and judgments records at the federal, state and local level.",
    price: "$19.99",
    per: "per applicant",
  },
  {
    id: "drug",
    title: "Drug & Alcohol Testing",
    description:
      "Over 13,000+ drug testing labs located nationwide through Quest Diagnostics® & LabCorp®.",
    footerLink: {
      text: "View Quest Diagnostics locations",
      url: "https://appointment.questdiagnostics.com/find-location/as-location-finder-reason",
    },
    footerLink2: {
      text: "View LabCorp locations",
      url: "https://www.labcorpsolutions.com/ots/FindSite.do",
    },
  },
];

const AdditionalScreen = ({ reportSelected = false, onProceed }) => {
  const [selectedItems, setSelectedItems] = useState(new Set());

  const handleCheckboxChange = (itemId) => {
    setSelectedItems((prev) => {
      const newSet = new Set(prev);
      newSet.has(itemId) ? newSet.delete(itemId) : newSet.add(itemId);
      return newSet;
    });
  };

  const handleActionButton = () => {
    if (!reportSelected) {
      alert("Select a package first.");
      return;
    }
    const selected = Array.from(selectedItems);
    if (onProceed) onProceed(selected);
    else alert("Proceeding to next step (demo).");
  };

  return (
    <div
      className="
        relative left-1/2 -translate-x-1/2
        w-full sm:w-[120%] md:w-[140%] lg:w-[155%]
        px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20
        py-10 sm:py-14
        bg-transparent
      "
    >
      {/* Header */}
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 sm:mb-10 border-b border-teal-600 pb-4">
        Additional Screening Checks
      </h1>

      {/* Items */}
      <div className="divide-y divide-gray-200 bg-white rounded-lg shadow-sm">
        {screeningOptions.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-5 py-5 px-4 sm:px-6 md:px-8 lg:px-10 hover:bg-teal-50/40 transition-colors duration-150"
          >
            <div className="flex items-start pt-1 sm:pt-1.5">
              <input
                type="checkbox"
                id={item.id}
                checked={selectedItems.has(item.id)}
                onChange={() => handleCheckboxChange(item.id)}
                className="h-5 w-5 text-teal-600 border-gray-300 rounded focus:ring-teal-500 cursor-pointer"
              />
            </div>

            <label htmlFor={item.id} className="flex-1 cursor-pointer">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <span className="text-base sm:text-lg md:text-xl font-medium text-gray-900">
                  {item.title}
                </span>
                {item.price && (
                  <div className="text-right">
                    <div className="text-sm sm:text-base font-semibold text-gray-800">
                      {item.price}
                    </div>
                    {item.per && (
                      <div className="text-xs sm:text-sm text-gray-500">
                        {item.per}
                      </div>
                    )}
                  </div>
                )}
              </div>

              <p className="text-sm sm:text-base text-gray-500 leading-relaxed mt-1">
                {item.description}
              </p>

              {(item.footerLink || item.footerLink2) && (
                <div className="text-sm mt-2">
                  {item.footerLink && (
                    <a
                      href={item.footerLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 mr-3 underline"
                    >
                      {item.footerLink.text}
                    </a>
                  )}
                  {item.footerLink2 && (
                    <a
                      href={item.footerLink2.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      {item.footerLink2.text}
                    </a>
                  )}
                </div>
              )}
            </label>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-10 border-t border-gray-200 pt-6 flex justify-end">
        <button
          onClick={handleActionButton}
          className={`px-8 py-3 text-base sm:text-lg font-medium rounded-md shadow-sm text-white transition-all ${
            reportSelected
              ? "bg-teal-600 hover:bg-teal-700"
              : "bg-teal-400 cursor-not-allowed"
          }`}
        >
          {reportSelected ? "Continue to Next Step" : "Select a Package First"}
        </button>
      </div>
    </div>
  );
};

export default AdditionalScreen;
