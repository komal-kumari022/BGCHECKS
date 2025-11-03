import React, { useState } from "react";
// Assuming Modal is in './Modal' and NationalCheckLists is in './NationalCheckLists'
import Modal from "./Modal";
import NationalCheckLists from "./NationalCheckLists";
// Updated import name to ModalTimeContent
import ModalTimeContent from "./ModalTimeContent";

// --- START: Icons for a more professional look (You'll need a library like lucide-react or a custom SVG setup) ---
// For this example, I'll use placeholders assuming you have a way to render icons.
// You might replace these with actual icons from a library like 'lucide-react' or 'react-icons'.
const Icon = ({ name, className = "" }) => {
  // Replace with an actual icon component based on 'name'
  const icons = {
    federal: "⚖️", // Gavel
    statewide: "🏛️", // Bank/Government building
    motor: "🚗", // Car
    employment: "🏢", // Building
    education: "🎓", // Graduation Cap
    bankruptcies: "💰", // Money/Finance
    drug: "🧪", // Test Tube
  };
  return <span className={`text-2xl ${className}`}>{icons[name] || '📦'}</span>;
};
// --- END: Icon Placeholders ---

const screeningOptions = [
  {
    id: "federal",
    title: "Federal Criminal Search",
    description:
      "Search across the 94 Federal District Courts nationwide. Reveal crimes not found in a national criminal or country-level search, and could include drug and firearm charges, terrorism, white-collar crimes, financial fraud and tax-evasion crimes and many more.",
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

// --- NEW Sub-Component for a clean, card-based option ---
const ScreeningCard = ({
  item,
  isSelected,
  onToggle,
}) => {
  return (
    <div
      className={`
        flex flex-col p-6 rounded-xl border-2 transition-all duration-200 cursor-pointer
        ${
          isSelected
            ? "border-teal-600 bg-teal-50 shadow-lg"
            : "border-gray-200 bg-white hover:border-teal-400 hover:shadow-md"
        }
      `}
      onClick={() => onToggle(item.id)}
    >
      <div className="flex items-start justify-between mb-4">
        {/* Icon and Title */}
        <div className="flex items-center space-x-3">
          <Icon name={item.id} className="text-teal-600" />
          <h3 className="text-lg font-semibold text-gray-900 leading-tight">
            {item.title}
          </h3>
        </div>

        {/* Checkbox */}
        <input
          type="checkbox"
          checked={isSelected}
          // The onChange is not strictly necessary here since the whole card is clickable, 
          // but it keeps the state synchronized and accessible.
          onChange={() => {}} 
          className="h-6 w-6 text-teal-600 border-gray-300 rounded-full focus:ring-teal-500 cursor-pointer transition-colors duration-150"
        />
      </div>

      <p className="text-sm text-gray-600 mb-4 flex-grow">
        {item.description}
      </p>

      {/* Price and Footer Links */}
      <div className="mt-auto pt-3 border-t border-gray-100">
        {item.price ? (
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-teal-700">
              {item.price}
            </div>
            {item.per && (
              <div className="text-sm text-gray-500">
                {item.per}
              </div>
            )}
          </div>
        ) : (
          (item.footerLink || item.footerLink2) ? (
            <div className="text-xs space-y-1">
              {item.footerLink && (
                <a
                  href={item.footerLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-800 block underline truncate"
                  // Stop propagation to prevent card's onToggle from firing
                  onClick={(e) => e.stopPropagation()} 
                >
                  {item.footerLink.text}
                </a>
              )}
              {item.footerLink2 && (
                <a
                  href={item.footerLink2.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-800 block underline truncate"
                  // Stop propagation to prevent card's onToggle from firing
                  onClick={(e) => e.stopPropagation()} 
                >
                  {item.footerLink2.text}
                </a>
              )}
            </div>
          ) : (
            <div className="text-sm text-gray-500 italic">No upfront cost</div>
          )
        )}
      </div>
    </div>
  );
};

const AdditionalScreen = ({ reportSelected = false, onProceed }) => {
  const [selectedItems, setSelectedItems] = useState(new Set());

  // State for the National Check Lists modal
  const [isNationalModalOpen, setIsNationalModalOpen] = useState(false);

  // State for the Surcharges & Time modal
  const [isTimecontentModalOpen, setIsTimecontentModalOpen] = useState(false);

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

  const openNationalModal = () => setIsNationalModalOpen(true);
  const closeNationalModal = () => setIsNationalModalOpen(false);
  const openTimecontentModal = () => setIsTimecontentModalOpen(true);
  const closeTimecontentModal = () => setIsTimecontentModalOpen(false);

  return (
    <>
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
        <header className="mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 pb-3">
            🔍 Additional Screening Checks
          </h1>
          <p className="text-lg text-gray-600 border-b border-teal-200 pb-4">
            Select supplementary checks to enhance the depth and scope of your background report.
          </p>
        </header>

        {/* --- Card Grid for Options --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {screeningOptions.map((item) => (
            <ScreeningCard
              key={item.id}
              item={item}
              isSelected={selectedItems.has(item.id)}
              onToggle={handleCheckboxChange}
            />
          ))}
        </div>
        {/* --- End Card Grid --- */}


        {/* Button Section */}
        <div className="mt-12 pt-6 flex justify-end border-t border-gray-200">
          <button
            onClick={handleActionButton}
            disabled={!reportSelected}
            className={`w-full sm:w-auto px-10 py-3 text-lg font-semibold rounded-lg shadow-xl text-white transition-all duration-300 transform hover:scale-[1.01] ${
              reportSelected
                ? "bg-teal-600 hover:bg-teal-700 active:bg-teal-800"
                : "bg-gray-400 cursor-not-allowed shadow-none"
            }`}
          >
            {reportSelected ? "Continue to Next Step" : "Please Select a Base Package First"}
          </button>
        </div>

        {/* Informational Notes and Modal Triggers */}
        <div className="mt-8 pt-4 flex flex-col items-start space-y-2 border-t border-gray-100">
          <div className="w-full text-left text-sm text-gray-500 leading-relaxed">
            <p className="mt-2">
              * National criminal & watchlists details:{" "}
              {/* Trigger for the National Check Lists Modal */}
              <span
                className="text-teal-600 hover:text-teal-800 hover:underline font-medium cursor-pointer"
                onClick={openNationalModal}
              >
                Click here for list of state coverage and lists searched
              </span>
              .
            </p>
            <p className="mt-1">
              ** Country criminal searches may add passthrough surcharges by jurisdictions.{" "}
              {/* Trigger for the Surcharges & Time Modal */}
              <span
                className="text-teal-600 hover:text-teal-800 hover:underline font-medium cursor-pointer"
                onClick={openTimecontentModal}
              >
                Click here to see surcharges and estimated turnaround times
              </span>
              .
            </p>
          </div>
        </div>
      </div>

      {/* 1. Modal for National Check Lists */}
      <Modal
        isOpen={isNationalModalOpen}
        onClose={closeNationalModal}
        title="National Background Check Lists"
      >
        <NationalCheckLists />
      </Modal>

      {/* 2. Modal for Surcharges and Estimated Time */}
      <Modal
        isOpen={isTimecontentModalOpen}
        onClose={closeTimecontentModal}
        title="Country and Statewide Surcharges & Est. Time"
      >
        {/* Use the new component name here */}
        <ModalTimeContent />
      </Modal>
    </>
  );
};

export default AdditionalScreen;



















