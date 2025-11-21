import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  const userEmail = "aksheone@gmail.com";

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isMinLength = password.length >= 8;
  const containsEmail = password.includes(userEmail.split("@")[0]);
  const isMatch = password === confirmPassword && isMinLength && !containsEmail;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isMatch) {
      alert("Your password has been reset successfully!");
      navigate("/signin");
    } else {
      alert("Please ensure your passwords match and meet the requirements.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 p-8 rounded-xl shadow-2xl max-w-lg w-full">

        <h2 className="text-3xl font-extrabold text-teal-400 mb-6">
          Reset your password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              readOnly
              value={userEmail}
              className="block w-full px-4 py-2 bg-gray-700 text-gray-400 rounded-lg cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              New Password
            </label>
            <input
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-2 bg-gray-700 text-white rounded-lg"
            />

            <div className="mt-2 text-sm space-y-1">
              <p className={isMinLength ? "text-green-400" : "text-red-400"}>
                ✓ At least 8 characters
              </p>
              <p className={!containsEmail ? "text-green-400" : "text-red-400"}>
                ✓ Must not contain your email
              </p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="block w-full px-4 py-2 bg-gray-700 text-white rounded-lg"
            />
          </div>

          <button
            type="submit"
            disabled={!isMatch}
            className={`w-full py-3 rounded-lg text-lg font-medium ${
              isMatch
                ? "bg-teal-400 hover:bg-teal-300 text-gray-900"
                : "bg-gray-600 cursor-not-allowed"
            }`}
          >
            Save Password
          </button>
        </form>

        <p className="mt-8 text-center">
          <button
            onClick={() => navigate("/signin")}
            className="text-teal-400 hover:text-teal-300 font-medium"
          >
            Back to Sign In
          </button>
        </p>

      </div>
    </div>
  );
};

export default ResetPassword;
