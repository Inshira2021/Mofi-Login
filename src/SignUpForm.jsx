import React, { useState } from 'react';

// Reusable Input Field Component
const InputField = ({ label, id, type, placeholder, value, onChange, name }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-1">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name} // Added name prop for consistent change handling
      required
      value={value}
      onChange={onChange}
      className="appearance-none block w-full px-4 py-2 border border-gray-700 rounded-lg shadow-sm placeholder-gray-500 bg-gray-700 text-white focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm transition duration-150"
      placeholder={placeholder}
    />
  </div>
);

// --- Component now accepts the 'navigate' function ---
const SignUpForm = ({ navigate }) => {
  // Initialize state to hold all form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    nickname: '',
    email: 'aksheone@gmail.com',
    password: '',
    contactNumber: '',
    country: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    termsAccepted: false,
  });

  // Handler for all input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this formData to your backend.
    console.log('Form Data Submitted:', formData);
    
    // --- NAVIGATION: Redirect to the Email Verification page on success ---
    if (navigate) {
        navigate('verify');
    } else {
        alert('Account created! Check the console for the form data.');
    }
  };

  return (
    // Outer container: Dark background, centered content, full viewport height
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      
      {/* Form Card Container */}
      <div className="bg-gray-800 p-8 rounded-xl shadow-2xl max-w-lg w-full">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-teal-400 mb-2 tracking-wide">
            Join the Journey
          </h1>
          <p className="text-gray-400 text-lg">
            Create your account to unlock exclusive features.
          </p>
        </div>
        
        {/* Form Body */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          
          {/* Name & Nickname Group (Grid Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InputField label="First Name" id="firstName" type="text" placeholder="John" name="firstName" value={formData.firstName} onChange={handleChange} />
            <InputField label="Last Name" id="lastName" type="text" placeholder="Doe" name="lastName" value={formData.lastName} onChange={handleChange} />
            <InputField label="Nickname" id="nickname" type="text" placeholder="The Rock" name="nickname" value={formData.nickname} onChange={handleChange} />
          </div>

          {/* Email & Password Group */}
          <InputField label="Email Address" id="email" type="email" placeholder="you@example.com" name="email" value={formData.email} onChange={handleChange} />
          <InputField label="Password" id="password" type="password" placeholder="Min. 8 characters" name="password" value={formData.password} onChange={handleChange} />
          
          {/* Contact Number & Country Group (Grid Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField label="Contact Number" id="contactNumber" type="tel" placeholder="+1 555-123-4567" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
            <InputField label="Country" id="country" type="text" placeholder="USA" name="country" value={formData.country} onChange={handleChange} />
          </div>

          {/* Address Details Group */}
          <InputField label="Address" id="address" type="text" placeholder="123 Main St" name="address" value={formData.address} onChange={handleChange} />
          
          {/* City, State, Postal Code Group (Grid Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InputField label="City" id="city" type="text" placeholder="New York" name="city" value={formData.city} onChange={handleChange} />
            <InputField label="State" id="state" type="text" placeholder="NY" name="state" value={formData.state} onChange={handleChange} />
            <InputField label="Postal Code" id="postalCode" type="text" placeholder="10001" name="postalCode" value={formData.postalCode} onChange={handleChange} />
          </div>
          
          {/* Terms and Conditions Checkbox */}
          <div className="flex items-start">
            <input 
              id="termsAccepted" 
              name="termsAccepted"
              type="checkbox" 
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="mt-1 w-4 h-4 text-teal-400 bg-gray-700 border-gray-600 rounded focus:ring-teal-500"
              required
            />
            <label htmlFor="termsAccepted" className="ml-2 text-sm font-medium text-gray-400">
              I agree to the <a href="#" className="text-teal-400 hover:text-teal-300 transition duration-150">Terms of Service</a> and <a href="#" className="text-teal-400 hover:text-teal-300 transition duration-150">Privacy Policy</a>.
            </label>
          </div>

          {/* Sign Up Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-gray-900 bg-teal-400 hover:bg-teal-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-300"
            >
              🚀 Create Account
            </button>
          </div>
        </form>
        
        {/* Footer Link: Uses the navigate function to change the page */}
        <p className="mt-8 text-center text-gray-500">
          Already have an account? 
          <a 
            href="#" 
            onClick={(e) => {e.preventDefault(); navigate('signin');}} 
            className="text-teal-400 hover:text-teal-300 font-medium ml-1"
          >
            Sign In
          </a>
        </p>
        
      </div>
    </div>
  );
};

export default SignUpForm;