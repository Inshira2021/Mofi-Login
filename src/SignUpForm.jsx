import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const InputField = ({ label, id, type, placeholder, value, onChange, name }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-1">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      required
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="block w-full px-4 py-2 bg-gray-700 text-white rounded-lg"
    />
  </div>
);

const SignUpForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    nickname: "",
    email: "aksheone@gmail.com",
    password: "",
    contactNumber: "",
    country: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form:", formData);
    navigate("/verify");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 p-8 rounded-xl shadow-2xl max-w-lg w-full">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-teal-400">Join the Journey</h1>
          <p className="text-gray-400">
            Create your account to unlock exclusive features.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InputField label="First Name" id="firstName" type="text" name="firstName" value={formData.firstName} placeholder="John" onChange={handleChange} />
            <InputField label="Last Name" id="lastName" type="text" name="lastName" value={formData.lastName} placeholder="Doe" onChange={handleChange} />
            <InputField label="Nickname" id="nickname" type="text" name="nickname" value={formData.nickname} placeholder="The Rock" onChange={handleChange} />
          </div>

          <InputField label="Email" id="email" type="email" name="email" value={formData.email} placeholder="you@example.com" onChange={handleChange} />
          <InputField label="Password" id="password" type="password" name="password" value={formData.password} placeholder="Min 8 characters" onChange={handleChange} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField label="Contact Number" id="contactNumber" type="tel" name="contactNumber" value={formData.contactNumber} placeholder="+1 555 123 456" onChange={handleChange} />
            <InputField label="Country" id="country" type="text" name="country" value={formData.country} placeholder="USA" onChange={handleChange} />
          </div>

          <InputField label="Address" id="address" type="text" name="address" value={formData.address} placeholder="123 Main St" onChange={handleChange} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InputField label="City" id="city" type="text" name="city" value={formData.city} placeholder="New York" onChange={handleChange} />
            <InputField label="State" id="state" type="text" name="state" value={formData.state} placeholder="NY" onChange={handleChange} />
            <InputField label="Postal Code" id="postalCode" type="text" name="postalCode" value={formData.postalCode} placeholder="10001" onChange={handleChange} />
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="w-4 h-4 mt-1"
              required
            />
            <label className="ml-2 text-gray-400 text-sm">
              I agree to the Terms and Privacy Policy.
            </label>
          </div>

          <button type="submit" className="w-full py-3 rounded-lg bg-teal-400 text-gray-900 font-semibold hover:bg-teal-300">
            🚀 Create Account
          </button>
        </form>

        <p className="mt-8 text-center text-gray-500">
          Already have an account?
          <button
            onClick={() => navigate("/signin")}
            className="text-teal-400 hover:text-teal-300 ml-1"
          >
            Sign In
          </button>
        </p>

      </div>
    </div>
  );
};

export default SignUpForm;
