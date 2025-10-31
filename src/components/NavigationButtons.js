import React from "react";

const NavigationButtons = ({ isStart, isComplete, isLastStep, onBack, onNext }) => (
  <div className="flex justify-between mt-8 p-4 bg-white rounded-xl shadow-md border border-gray-100">
    <button
      onClick={onBack}
      disabled={isStart || isComplete}
      className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200
        ${isStart || isComplete 
          ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
    >
      {isStart ? 'Start' : 'Back'}
    </button>
    
    <button
      onClick={onNext}
      disabled={isComplete}
      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-[1.02]
        ${isComplete
          ? 'bg-green-600 text-white cursor-not-allowed opacity-70'
          : 'bg-teal-600 text-white shadow-lg shadow-teal-500/50 hover:bg-teal-700'
        }`}
    >
      {isLastStep ? 'Submit Application' : 'Next Step'}
    </button>
  </div>
);

export default NavigationButtons;
