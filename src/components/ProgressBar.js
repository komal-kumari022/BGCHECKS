import React, { useMemo } from "react";

const ProgressBar = ({ steps, currentStep, onStepClick }) => {
  const progressWidth = useMemo(() => {
    if (steps.length <= 1) return "0%";
    return `${((currentStep - 1) / (steps.length - 1)) * 100}%`;
  }, [currentStep, steps.length]);

  return (
    <div className="mb-6 sm:mb-8 px-8 sm:px-12 py-4 sm:py-4 bg-white rounded-xl shadow-md border border-gray-100">
      <div className="relative flex items-start justify-between">
        {/* Track line */}
        <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200 rounded-full mx-3 sm:mx-6">
          <div
            className="h-1 rounded-full transition-all duration-700 ease-in-out bg-teal-600"
            style={{ width: progressWidth }}
          ></div>
        </div>

        {/* Step Circles */}
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;

          return (
            <div
              key={index}
              onClick={() => onStepClick(stepNumber)}
              className="flex flex-col items-center z-10 transition-all duration-300 w-1/3 cursor-pointer"
            >
              <div
                className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border-2 font-medium text-base transition-all duration-300
                  ${
                    isCompleted
                      ? "bg-teal-500 text-white border-teal-500"
                      : isActive
                      ? "bg-teal-600 text-white border-teal-600 ring-4 ring-teal-100"
                      : "bg-white text-gray-600 border-gray-300 hover:border-teal-400"
                  }
                `}
              >
                {isCompleted ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  stepNumber
                )}
              </div>

              <span
                className={`mt-2 text-center text-[12px] sm:text-sm font-medium transition-colors duration-300 leading-tight max-w-[80px] sm:max-w-[100px]
                  ${isActive ? "text-teal-700" : "text-gray-500"}
                `}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
