import React, { useState } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CheckIcon,
} from "@heroicons/react/24/solid";
import Modal from "./Modal";

const ReportPersonal = ({ onSelectReport }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDetails = () => setIsDetailsOpen((prev) => !prev);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSelectReport = () => {
    setIsSelected(true);
    if (onSelectReport) onSelectReport("personal-report");
  };

  const packageItems = [
    "Identity verification with SSN trace",
    "Name, DOB & address validation",
    "Aliases & prior name match check",
    "National criminal record database search",
    "Global sanctions & watchlist screening",
    "Basic employment & education verification",
  ];

  // --- Selected View ---
  if (isSelected) {
    return (
      <>
        <div className="w-full mx-auto bg-white rounded-xl shadow-md p-5 sm:p-8 mb-8 border-2 border-teal-500 transition-all duration-300">
          <div className="flex items-start space-x-3">
            <CheckIcon className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                Complete Report
              </h2>
              <p className="text-sm text-gray-700 leading-snug mb-2">
                Includes SSN trace, address verification, national criminal, and
                7-year county search.
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                County searches may add additional surcharge fees.
                <button
                  onClick={openModal}
                  className="text-teal-600 hover:text-teal-700 ml-1 font-medium underline-offset-2 hover:underline transition"
                >
                  View surcharges
                </button>
              </p>
            </div>
          </div>
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title="County and Statewide Surcharges & Est. Time"
        >
          <div className="space-y-5">
            <select className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:border-teal-500 transition">
              <option value="">Select a state...</option>
              <option>India</option>
              <option>Washington</option>
              <option>New York</option>
            </select>
            <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-500 bg-gray-50">
              Select a state to view surcharges
            </div>
          </div>
        </Modal>
      </>
    );
  }

  // --- Default Pricing Card ---
  return (
    <>
      <header className="text-center mb-8 sm:mb-12 px-3">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
          Simple, transparent pricing
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          Choose a report package and customize with add-ons.
        </p>
      </header>

      <div className="flex justify-center px-3 pb-10">
        <div className="flex flex-col border border-gray-200 rounded-2xl overflow-hidden shadow-md bg-white w-full max-w-md sm:max-w-xl">
          <div className="p-5 sm:p-7">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
              Complete Report
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              SSN Trace, Watchlists, National & 7-Year County Searches
            </p>

            <div className="flex items-baseline mb-6">
              <p className="text-lg sm:text-xl font-semibold text-gray-900">
                $24.99
              </p>
              <span className="text-sm sm:text-base text-gray-500 ml-1">
                /applicant
              </span>
            </div>

            <button
              onClick={toggleDetails}
              className="flex items-center justify-between w-full p-3 sm:p-4 text-sm sm:text-base font-medium text-gray-700 border border-teal-500 rounded-lg hover:bg-teal-50 transition"
            >
              <span>
                {isDetailsOpen ? "Hide Package Details" : "See Package Details"}
              </span>
              {isDetailsOpen ? (
                <ChevronUpIcon className="w-5 h-5" />
              ) : (
                <ChevronDownIcon className="w-5 h-5" />
              )}
            </button>
          </div>

          {isDetailsOpen && (
            <>
              <div className="px-6 sm:px-8 pt-4 border-t border-gray-200">
                <ul className="space-y-3 text-sm text-gray-700">
                  {packageItems.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckIcon className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5 mr-2" />
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-6 sm:px-8 pt-4 pb-2">
                <p className="text-xs text-gray-500">
                  *Some checks may require additional time.{" "}
                  <button
                    onClick={openModal}
                    className="text-teal-600 hover:text-teal-700 font-medium underline-offset-2 hover:underline"
                  >
                    View timelines
                  </button>
                </p>
              </div>
            </>
          )}

          <div className="p-6 sm:p-8">
            <button
              onClick={handleSelectReport}
              className="w-full bg-teal-600 text-white font-medium py-2.5 sm:py-3 rounded-lg hover:bg-teal-700 transition shadow-md active:scale-[0.99]"
            >
              Select Complete Report
            </button>
          </div>

          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            title="County and Statewide Surcharges & Est. Time"
          >
            <div className="space-y-5">
              <select className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:border-teal-500 transition">
                <option value="">Select a state...</option>
                <option>India</option>
                <option>Washington</option>
                <option>New York</option>
              </select>
              <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-500 bg-gray-50">
                Select a state to view surcharges
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default ReportPersonal;
