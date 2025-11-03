import React, { useState } from "react";

const AddApplicants = ({ selectedAddOns = [], onBack, onNext }) => {
  const [emails, setEmails] = useState("");
  const [error, setError] = useState("");

  const validateEmails = (emailString) => {
    if (!emailString.trim()) {
      return "Please enter at least one email address";
    }

    const emailList = emailString
      .split(/[\n,]/)
      .map(email => email.trim())
      .filter(email => email.length > 0);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const invalidEmails = emailList.filter(email => !emailRegex.test(email));

    if (invalidEmails.length > 0) {
      return `Invalid email format for: ${invalidEmails.join(", ")}`;
    }

    return "";
  };

  const handleContinue = () => {
    const validationError = validateEmails(emails);
    if (validationError) {
      setError(validationError);
      return;
    }
    setError("");
    onNext(); // Navigate to next step only if validation passes
  };

  const handleEmailChange = (e) => {
    setEmails(e.target.value);
    if (error) setError(""); // Clear error when user starts typing
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
               <span className="text-teal-600 text-4xl">Who</span> are you screening?
        </h1>
        <p className="text-base md:text-lg text-gray-600">
          Enter the email address for each applicant to screen. We'll contact them
          to sign disclosures, consent, and collect required information for the
          background check.
        </p>
      </main>

      {/* --- Form Section --- */}
     {/* --- Enhanced Form Section --- */}
<div className="bg-white p-6 md:p-10 border border-gray-200 rounded-xl shadow-lg">
    {/* --- Header/Title --- */}
    <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <span className="mr-3 text-teal-600">📧</span> Invite Applicants
    </h2>
    <hr className="mb-6"/>

    {/* --- Email Input Area (Primary Focus) --- */}
    <div className="mb-8">
        <label htmlFor="applicantEmails" className="block text-base font-semibold text-gray-700 mb-2">
            Enter Applicant Emails
        </label>
        <p className="text-sm text-gray-500 mb-2">
            Type or paste emails below. Separate each with a **comma** or place on a **new line**.
        </p>
        <textarea
            id="applicantEmails"
            rows="4"
            value={emails}
            onChange={handleEmailChange}
            placeholder="e.g., jane@example.com, john@example.com"
            className={`block w-full border-2 ${error ? 'border-red-300' : 'border-gray-300'} rounded-lg shadow-inner p-4 focus:ring-teal-500 focus:border-teal-500 text-base transition duration-150 ease-in-out`}
            style={{ minHeight: '120px' }}
        />
        {error && (
          <p className="mt-2 text-sm text-red-600">{error}</p>
        )}
    </div>

    {/* --- Upload CSV (Secondary Action) --- */}
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 border border-dashed border-gray-300 rounded-lg bg-gray-50">
        <p className="text-sm font-medium text-gray-700">
            <span className="text-teal-600 font-bold">Import in Bulk:</span> Use a CSV file for large lists.
        </p>
        <div className="flex-shrink-0 flex items-center gap-3">
            <span className="text-sm text-gray-500 hover:text-teal-600 cursor-pointer font-medium transition duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Sample (.csv)
            </span>
            <button
                onClick={handleFileUpload}
                className="flex items-center justify-center px-4 py-2 border border-teal-500 text-sm font-semibold rounded-lg text-teal-600 bg-white hover:bg-teal-50 shadow-sm transition duration-150"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                Upload CSV
            </button>
        </div>
    </div>

    {/* --- Continue Button --- */}
    <div className="mt-8 flex justify-start">
        <button
            onClick={handleContinue}
            className="px-8 py-3 text-base font-semibold rounded-lg shadow-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-offset-2 transition duration-150 ease-in-out"
        >
            Continue to Next Step →
        </button>
    </div>
</div>

      {/* --- Back Button --- */}
      {onBack && (
        <div className="mt-8 flex justify-start">
          <button
            onClick={onBack}
            className="text-base md:text-lg font-bold text-teal-600  hover:underline"
          >
            ← Previous Step
          </button>
        </div>
      )}
    </div>
  );
};

export default AddApplicants;
