import React, { useState } from "react";
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";

import ReportPersonal from "./pages/ReportPersonal";
import AdditionalScreen from "./pages/AdditionalScreen";
import AddApplicants from "./pages/AddApplicants";
import AccountDetails from "./pages/AccountDetails";

const App = () => {
  const steps = ["Select a Report & Add-Ons", "Add Applicants", "Account Details"];
  const [currentStep, setCurrentStep] = useState(1);
  const [reportSelected, setReportSelected] = useState(false);
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const handleStepClick = (stepNumber) => {
    if (stepNumber <= currentStep) setCurrentStep(stepNumber);
  };

  const handleReportSelect = (reportName) => {
    console.log("Selected Report:", reportName);
    setReportSelected(true);
  };

  const handleProceedFromAddOns = (selectedItems) => {
    console.log("Selected Add-ons:", selectedItems);
    setSelectedAddOns(selectedItems);
    setCurrentStep(2); // Move to AddApplicants page
  };

  const renderPage = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <ReportPersonal onSelectReport={handleReportSelect} />
            <div className="mt-6 sm:mt-10">
              <AdditionalScreen
                reportSelected={reportSelected}
                onProceed={handleProceedFromAddOns}
              />
            </div>
          </>
        );

      case 2:
        return (
          <AddApplicants
            selectedAddOns={selectedAddOns}
            onBack={() => setCurrentStep(1)}
            onNext={() => setCurrentStep(3)}
          />
        );

      case 3:
        return <AccountDetails onBack={() => setCurrentStep(2)} />;
      default:
        return null;
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <Header />
      <main className="flex-grow w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-5 sm:py-8">
        <ProgressBar
          steps={steps}
          currentStep={currentStep}
          onStepClick={handleStepClick}
        />
        <section className="mt-5 sm:mt-8">{renderPage()}</section>
      </main>
    </div>
  );
};

export default App;
