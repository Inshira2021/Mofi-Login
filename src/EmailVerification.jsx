import React from "react";
import { useNavigate } from "react-router-dom";

const EmailVerification = () => {
  const navigate = useNavigate();
  const userEmail = "aksheone@gmail.com";

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 p-8 rounded-xl shadow-2xl max-w-lg w-full text-center">

        <div className="flex justify-center mb-6">
          <svg className="w-16 h-16 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 4v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7"></path>
          </svg>
        </div>

        <h2 className="text-3xl font-extrabold text-white mb-2">
          Great, now verify your email
        </h2>

        <p className="text-gray-400 text-lg mb-6">
          Check your inbox at <strong>{userEmail}</strong>.
        </p>

        <div className="space-y-4">
          <p className="text-gray-500 text-sm">
            Don’t see an email? Check your spam folder.
          </p>

          <button className="text-teal-400 hover:text-teal-300 font-medium text-sm">
            Resend verification email
          </button>

          <p className="pt-4">
            <button
              onClick={() => navigate("/signin")}
              className="text-gray-900 bg-teal-400 hover:bg-teal-300 px-4 py-2 rounded-lg font-medium transition"
            >
              Back to Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
