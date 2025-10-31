import React from "react";

const AddApplicants = ({ selectedAddOns = [], onBack }) => {
  // --- Dummy Event Handlers ---
  const handleContinue = () => {
    console.log("Continue button clicked!");
  };

  const handleFileUpload = () => {
    console.log("CSV upload initiated!");
    // You can trigger file picker here if needed
  };

  return (
    <div className="
        relative left-1/2 -translate-x-1/2
        w-full sm:w-[120%] md:w-[140%] lg:w-[155%]
        px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20
        py-10 sm:py-14
        bg-transparent
      ">
      {/* --- Title & Description --- */}
      <main className="text-left mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Who are you screening?
        </h1>
        <p className="text-base md:text-lg text-gray-600">
          Enter the email address for each applicant to screen. We'll contact them
          to sign disclosures, consent, and collect required information for the
          background check.
        </p>
      </main>

      {/* --- Form Section --- */}
      <div className="bg-white p-6 md:p-8 border border-gray-200 rounded-lg shadow-sm">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          {/* --- Email Input --- */}
          <div className="flex-grow">
            <p className="text-sm md:text-base text-gray-600 font-medium mb-2">
              Enter each email, then press return or separate each with a comma
            </p>
            <input
              id="applicantEmails"
              placeholder="applicant1@email.com, applicant2@email.com, ..."
              className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500 text-base min-h-[80px]"
            />
          </div>

          {/* --- Upload CSV --- */}
          <div className="flex-shrink-0 flex flex-col items-start md:items-end gap-2">
            <p className="text-sm text-gray-600 font-semibold">
              Too many to type?{" "}
              <span className="text-blue-600 cursor-pointer hover:underline">
                Download sample file (.csv)
              </span>
            </p>
            <button
              onClick={handleFileUpload}
              className="flex items-center justify-center px-4 py-2 border border-gray-300 text-sm md:text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 shadow-sm"
            >
              <span className="mr-2">⬆️</span> Upload .csv
            </button>
          </div>
        </div>

        {/* --- Continue Button --- */}
        <div className="mt-8 flex justify-start">
          <button
            onClick={handleContinue}
            className="px-6 py-3 text-sm md:text-base border border-transparent font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Continue →
          </button>
        </div>
      </div>

      {/* --- Back Button --- */}
      {onBack && (
        <div className="mt-8 flex justify-start">
          <button
            onClick={onBack}
            className="text-base md:text-lg font-medium text-gray-600 hover:underline"
          >
            ← Previous Step
          </button>
        </div>
      )}
    </div>
  );
};

export default AddApplicants;
