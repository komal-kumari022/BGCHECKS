import React, { useState } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CheckIcon,
  RocketLaunchIcon, // Icon for visual appeal
} from "@heroicons/react/24/solid";
import Modal from "./Modal";
import ModalTimeContent from "./ModalTimeContent";

const ReportPersonal = ({ onSelectReport }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(true);
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

  // --- NEW: Applying the requested specific width and centering classes ---
  const customWidthClass = "relative left-1/2 -translate-x-1/2 w-full sm:w-[100%] md:w-[120%] lg:w-[125%] xl:w-[150%]"; 
  const paddingClass = "px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-10 sm:py-14";
  
  // Note: I've added xl:w-[170%] for modern screens and adjusted the padding logic
  // to apply to inner elements for better responsiveness within the expanded container.

  // --- Selected View (Enhanced) ---
  if (isSelected) {
    return (
      <>
        <div className={`${customWidthClass} mx-auto mb-12`}>
            {/* The inner div contains the background and content */}
            <div className={`w-full bg-white rounded-xl shadow-xl p-6 sm:p-10 border-4 border-teal-600 transition-all duration-500 ${paddingClass}`}>
                <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                    <div className="flex items-start space-x-4 text-center sm:text-left">
                        <CheckIcon className="h-8 w-8 text-teal-600 flex-shrink-0 mt-1" />
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                                Complete Report Selected
                            </h2>
                            <p className="text-sm text-gray-700 leading-snug">
                                Ready to proceed to **Additional Screening Checks**.
                            </p>
                        </div>
                    </div>
                    <p className="text-sm text-gray-500 whitespace-nowrap">
                        $24.99 / applicant (plus surcharges)
                    </p>
                </div>
                <p className="text-xs text-gray-500 mt-4 sm:mt-2 border-t border-gray-100 pt-3">
                    Country searches may add additional surcharge fees.
                    <button
                        onClick={openModal}
                        className="text-teal-600 hover:text-teal-700 ml-1 font-semibold underline-offset-4 hover:underline transition"
                    >
                        View surcharges and estimated time
                    </button>
                </p>
            </div>
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title="Country and Statewide Surcharges & Est. Time"
        >
          <ModalTimeContent/>
        </Modal>
      </>
    );
  }

  // --- Default Pricing Card (Enhanced and Full-Width) ---
  return (
    <>
      {/* Header section is also centered but uses standard max-width for text clarity */}
      <header className="w-full max-w-4xl mx-auto text-center px-4 sm:px-6 mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
          Simple, Transparent Pricing
        </h1>
        <p className="text-lg text-gray-600">
          Choose your foundational report package and customize with powerful add-ons.
        </p>
      </header>

      {/* Main container with your custom width and centering */}
      <div className={`${customWidthClass} mb-12`}>
        <div className={`flex flex-col md:flex-row border border-gray-200 rounded-xl overflow-hidden shadow-2xl bg-white w-full`}>
          
          {/* --- LEFT SIDE: Price & Call to Action (Applies custom padding) --- */}
          <div className={`md:w-1/3 bg-teal-50/70 flex flex-col justify-between items-center text-center ${paddingClass}`}>
            <div className="mb-6">
                <RocketLaunchIcon className="w-12 h-12 text-teal-600 mx-auto mb-3" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                    Complete Report
                </h3>
                <p className="text-sm text-gray-600">
                    The essential foundational screening package.
                </p>
            </div>

            <div className="mb-8">
                <span className="text-2xl sm:text-5xl font-bold text-teal-700">
                    $24.99
                </span>
                <span className="text-lg text-gray-500 ml-1">
                    /applicant
                </span>
            </div>

            <button
              onClick={handleSelectReport}
              className="w-full bg-teal-600 text-white font-semibold py-3 sm:py-3.5 rounded-lg hover:bg-teal-700 transition shadow-lg hover:shadow-xl active:scale-[0.99] text-lg"
            >
              Select Complete Report
            </button>
          </div>
          
          {/* --- RIGHT SIDE: Features & Details (Applies custom padding) --- */}
          <div className={`md:w-2/3 flex flex-col ${paddingClass}`}>
            <h4 className="text-xl font-semibold text-gray-800 border-b border-gray-100 pb-3 mb-4">
                What's Included
            </h4>

            {/* Feature Grid */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm text-gray-700 flex-grow">
              {packageItems.map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5 mr-2" />
                  <p className="font-medium">{item}</p>
                </li>
              ))}
            </ul>

            {/* Accordion Footer (Now more discreet) */}
            <button
              onClick={toggleDetails}
              className="mt-6 flex items-center w-full text-sm font-medium text-gray-700 border-t border-gray-100 pt-4 hover:text-teal-600 transition"
            >
                <span>
                    {isDetailsOpen ? "Hide Fine Print & Notes" : "Show Fine Print & Notes"}
                </span>
                {isDetailsOpen ? (
                    <ChevronUpIcon className="w-4 h-4 ml-2" />
                ) : (
                    <ChevronDownIcon className="w-4 h-4 ml-2" />
                )}
            </button>

            {isDetailsOpen && (
              <div className="mt-4 text-xs text-gray-500 space-y-2">
                <p>
                  * **7-Year Country Searches:** This package includes a search for criminal records in all counties associated with the applicant's addresses from the last 7 years.
                </p>
                <p>
                  ** **Surcharges & Timelines:** Country criminal searches may add passthrough surcharges and additional time.
                  <button
                    onClick={openModal}
                    className="text-teal-600 hover:text-teal-700 font-semibold ml-1 underline-offset-4 hover:underline"
                  >
                    View surcharges and estimated turnaround times
                  </button>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Country and Statewide Surcharges & Est. Time"
      >
        <ModalTimeContent/>
      </Modal>
    </>
  );
};

export default ReportPersonal;