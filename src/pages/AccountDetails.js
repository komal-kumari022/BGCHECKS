import React from 'react';
import { 
    User, 
    Mail, 
    Briefcase, 
    MapPin, 
    CreditCard, 
    ChevronDown, 
    ShoppingCart, 
    UploadCloud,
    FileText,
} from 'lucide-react'; 


// --- Utility Components for Form Fields ---

// Reusable component for a standard text/email input field
const InputGroup = ({ label, placeholder, type = 'text', hint, IconComponent }) => (
  <div className="w-full relative">
    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">{label}</label>
    <div className="flex items-center">
      {/* Icon Integration: Use the passed IconComponent */}
      {IconComponent && <span className="absolute left-0 top-7 text-teal-600">
        <IconComponent size={20} />
      </span>}
      <input
        type={type}
        placeholder={placeholder}
        // Color change: focus:border-teal-600
        className="w-full border-b border-gray-300 pb-2 pl-6 text-base focus:border-teal-600 focus:ring-0 outline-none transition-colors placeholder-gray-400"
      />
    </div>
    {hint && <p className="mt-2 text-xs text-gray-400">{hint}</p>}
  </div>
);

// Reusable component for a dropdown/select field
const SelectGroup = ({ label, options, defaultValue = "Select Option" }) => (
  <div className="w-full relative">
    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">{label}</label>
    <select
      // Color change: focus:border-teal-600
      className="w-full border-b border-gray-300 pb-2 pr-6 appearance-none bg-white text-base focus:border-teal-600 focus:ring-0 outline-none transition-colors"
    >
      <option value="" disabled>{defaultValue}</option>
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
    {/* Custom Dropdown Arrow Integration */}
    <span className="absolute right-0 top-[3.25rem] transform -translate-y-1/2 pointer-events-none text-gray-400">
        <ChevronDown size={18} />
    </span>
  </div>
);

// Specific component for card number input with icons
const CardInput = () => (
    <div className="w-full relative">
        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Card Number</label>
        <div className="relative">
             {/* Icon Integration */}
             <span className="absolute left-0 top-0 text-teal-600 pt-1">
                 <CreditCard size={20} />
             </span>
             <input
                 type="text"
                 placeholder="**** **** **** ****"
                 // Color change: focus:border-teal-600
                 className="w-full border-b border-gray-300 pb-2 pl-6 text-base focus:border-teal-600 focus:ring-0 outline-none transition-colors placeholder-gray-400"
             />
             {/* AutoFill button: Color change to teal-600 */}
             <button className="absolute right-0 top-0 text-teal-600 text-sm font-semibold hover:text-teal-800 transition-colors pt-1">
                 AutoFill
             </button>
        </div>
        {/* Card Icons */}
        <div className="mt-3 flex space-x-3 justify-end">
            <span className="text-xs font-medium text-gray-500 border border-gray-300 px-1 rounded-sm">VISA</span>
            <span className="text-xs font-medium text-gray-500 border border-gray-300 px-1 rounded-sm">MC</span>
            <span className="text-xs font-medium text-gray-500 border border-gray-300 px-1 rounded-sm">AMEX</span>
        </div>
    </div>
);


// --- Main AccountDetails Component ---

const AccountDetails = ({onBack}) => {
  // Utility for section titles
  const SectionTitle = ({ children, IconComponent }) => (
    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
      {/* Icon Integration: Use the passed IconComponent and teal-600 color */}
      {IconComponent && <span className="mr-3 text-teal-600">
        <IconComponent size={24} />
      </span>}
      {children}
    </h2>
  );

  return (
    <div   className="
          relative left-1/2 -translate-x-1/2
          w-full sm:w-[120%] md:w-[140%] lg:w-[155%]
          px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20
          py-10 sm:py-14
          bg-transparent
        ">
      <div className="max-w-8xl mx-auto space-y-12">
        
        {/* Page Header: Clean and Direct */}
        <header className="py-6">
          <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
       Complete Your Account & Place Order
          </h1>
        
        </header>

        {/* --- Form Container: Modern Card Style --- */}
        <div className="bg-white p-8 lg:p-12 shadow-2xl rounded-xl space-y-12">

          {/* --- 1. Order Summary (Visually Integrated) --- */}
          {/* Color change: border-teal-100, bg-teal-50, text-teal-800 */}
          <div className="border border-teal-100  p-6 rounded-lg space-y-3">
            <h2 className="text-l font-bold text-teal-800 flex items-center">
              <ShoppingCart size={22} className="mr-2" /> Order Summary
            </h2>
            <div className="flex justify-between text-gray-700">
              <span className="font-medium">Complete Report License</span>
              <span className="font-bold text-lg">$39.99</span>
            </div>
            {/* Color change: text-teal-800, border-teal-200 */}
            <div className="flex justify-between text-l font-bold text-teal-800 border-t border-teal-200 pt-3">
              <span>TOTAL DUE NOW</span>
              <span>$39.99</span>
            </div>
          </div>

          {/* --- 2. Account Creation & Personal/Company Info --- */}
          <div>
            <SectionTitle IconComponent={User}>Create Account & Profile</SectionTitle>

            {/* Personal Information */}
            <div className="space-y-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-700">Personal Information</h3>
              {/* Color change: border-teal-400, bg-teal-50 */}
              <blockquote className="text-sm text-gray-600 border-l-4 border-teal-400 pl-3 italic bg-teal-50 p-3 rounded-md">
                  Use a permanent email address where you can receive mail.
              </blockquote>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Icons added to InputGroup */}
                <InputGroup label="First Name" placeholder="Jane" IconComponent={User}/>
                <InputGroup label="Last Name" placeholder="Doe" IconComponent={User}/>
                <InputGroup label="Email address" placeholder="jane@company.com" type="email" IconComponent={Mail}/>
                <InputGroup label="Confirm Email" placeholder="Re-enter email" type="email" IconComponent={Mail}/>
              </div>
            </div>
            
            {/* Company Information */}
            <div className="space-y-6 pt-6 border-t border-gray-100">
              <h3 className="text-lg font-semibold text-gray-700">Company & Credentialing Info</h3>
              {/* Color change: border-teal-400, bg-teal-50 */}
              <blockquote className="text-sm text-gray-600 border-l-4 border-teal-400 pl-3 italic bg-teal-50 p-3 rounded-md">
                  **Why this information?** FCRA regulations require us to collect this data to credential your account and ensure a **permissible purpose** for ordering reports.
              </blockquote>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Icons added to InputGroup */}
                <InputGroup label="Company Name" placeholder="Acme Corp" IconComponent={Briefcase}/>
                <SelectGroup 
                  label="Company Entity Type" 
                  options={['LLC', 'Corporation', 'Sole Proprietorship']}
                  defaultValue="Select Entity Structure"
                />
                <SelectGroup 
                  label="Company Registered State" 
                  options={['CA', 'TX', 'NY']} 
                  defaultValue="Select State"
                />
                <SelectGroup 
                  label="Organization Type" 
                  options={['Non-Profit', 'For-Profit']} 
                  defaultValue="Select Organization Type"
                />
                <InputGroup 
                  label="Federal Tax ID (EIN)" 
                  placeholder="Exc: 12-3456789"
                  hint="This is your SSN if a sole proprietorship." 
                  IconComponent={FileText}
                />
              </div>
            </div>
          </div>

          {/* --- 3. Supporting Document --- */}
          <div className="pt-8 border-t border-gray-100">
            <SectionTitle IconComponent={UploadCloud}>Supporting Document Upload</SectionTitle>
            
            {/* Color change: hover:border-teal-500, text-teal-600, hover:text-teal-700 */}
            <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-lg hover:border-teal-500 transition-colors cursor-pointer bg-gray-50">
              <UploadCloud size={32} className="text-teal-500 mb-3" />
              <p className="text-sm text-gray-700 font-semibold">
                  Drag & Drop or <span className="text-teal-600 font-bold hover:text-teal-700">Browse Files</span>
              </p>
              <p className="text-xs text-gray-500 mt-1">
                  Maximum file size 5MB. Accepted formats: PDF, JPG, PNG.
              </p>
            </div>

            <div className="text-sm text-gray-600 pt-4">
                <p className="font-semibold mb-1">Accepted Supporting Documents (Select 1):</p>
                <ul className="list-disc list-inside space-y-0.5 ml-4 text-gray-500">
                    <li>State or County business license;</li>
                    <li>Articles of incorporation or partnership agreement;</li>
                    <li>Federal tax ID (EIN) verification letter.</li>
                </ul>
            </div>
          </div>


          {/* --- 4. Billing Information --- */}
          <div className="pt-8 border-t border-gray-100">
            <SectionTitle IconComponent={CreditCard}>Billing & Payment</SectionTitle>
            
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Billing Address</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Icons added to InputGroup */}
              <InputGroup label="Street Address" placeholder="123 Main St" IconComponent={MapPin}/>
              <InputGroup label="City" placeholder="City" IconComponent={MapPin}/>
              <InputGroup label="State / Province" placeholder="State / Province" IconComponent={MapPin}/>
              <InputGroup label="Zipcode" placeholder="90210" IconComponent={MapPin}/>
            </div>

            <h3 className="text-lg font-semibold text-gray-700 pt-8 mb-4">Payment Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <CardInput /> {/* CardInput component already updated */}
              </div>
              <InputGroup label="Expiration Date" placeholder="MM/YY" IconComponent={CreditCard}/>
              <InputGroup label="Security Code (CVV)" placeholder="123" IconComponent={CreditCard}/>
            </div>
          </div>

          {/* --- 5. End-User Certification --- */}
          <div className="pt-8 border-t border-gray-100">
            <SectionTitle IconComponent={FileText}>End-User Certification</SectionTitle>
            
            <div className="border border-gray-200 p-5 rounded-lg h-56 overflow-y-scroll bg-gray-50 text-sm text-gray-700 leading-relaxed font-mono">
                {/* Certification text remains the same */}
                <p className='font-bold text-gray-800 mb-2'>CERTIFICATION AGREEMENT</p>
                <p>
                    ("Customer") hereby certifies and agrees to the following certifications now, and also agree that each order of a consumer report or investigative consumer report (collectively "Screening Report") by Customer from Clear Screening Technologies LLC ("BackgroundChecks.com") will constitute Customer's renewed agreement to, re-certification to, and re-affirmation of, each of the following certifications. Customer aver's, represents, and certifies that each individual user it has authorized to place orders of Screening Reports on its behalf with BackgroundChecks.com has the authority to act for Customer and to re-certify to the following statements by placing such orders:
                </p>
                <p className="mt-3 font-semibold">(a) Permissible Purpose: </p>
                <p>Customer ordered the Screening Report for employment purposes and will not use the Screening Report for any impermissible purposes. To the extent applicable, Customer will only use the Screening Report for purposes allowed by the Driver Protection Privacy Act, 18 U.S.C. § 2721 et seq. ("DPPA").</p>
                <p className="mt-3 font-semibold">(b) FCRA Compliance: </p>
                <p>Customer has complied with 15 U.S.C. § 1681b(b)(2) with respect to the Screening Report and maintains compliance with all federal, state, and local laws and regulations governing the use of consumer reports, including but not limited to the Fair Credit Reporting Act (FCRA).</p>
            </div>
            
            {/* Checkbox: Color change to text-teal-600, focus:ring-teal-500 */}
            <div className="flex items-start mt-6">
                <input
                    id="certification-checkbox"
                    name="certification-checkbox"
                    type="checkbox"
                    className="h-5 w-5 text-teal-600 border-gray-400 focus:ring-teal-500 rounded-sm mt-1 cursor-pointer"
                />
                <label htmlFor="certification-checkbox" className="ml-3 text-base text-gray-800 font-medium select-none">
                    I **certify and agree** to the End-User Certification.
                </label>
            </div>
          </div>
          
          {/* --- 6. Actions: Clearer hierarchy --- */}
          <div className="flex flex-col md:flex-row-reverse justify-between items-center pt-8 mt-12 border-t border-gray-200 space-y-4 md:space-y-0">
            {/* Primary Action Button: Color change to bg-teal-600, hover:bg-teal-700, focus:ring-teal-300 */}
            <button className="w-full md:w-auto px-10 py-4 text-l font-bold rounded-lg shadow-xl text-white bg-teal-600 hover:bg-teal-700 transition-all transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-teal-300">
                Submit Order & Create Account
            </button>
            
            {/* Color change: hover:text-teal-600 */}
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

        </div>
          
        {/* Footer/Trust Indicators */}
        <div className="text-center text-xs text-gray-400 pt-6">
            <p>Your payment is secured by **256-bit encryption**.</p>
            <p className="mt-1">Copyright © 2025 Clear Screening Technologies LLC.</p>
        </div>

      </div>
    </div>
  );
};

export default AccountDetails;