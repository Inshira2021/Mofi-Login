import React, { useState } from 'react';

const ResetPassword = ({ navigate }) => {
  const userEmail = 'aksheone@gmail.com'; 
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // Simple validation checks
  const isMinLength = password.length >= 8;
  const containsEmail = password.includes(userEmail.split('@')[0]);
  const isMatch = password === confirmPassword && isMinLength;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isMatch) {
        // Handle successful password reset (e.g., call API)
        console.log('Password reset submitted!');
        alert('Your password has been reset successfully!');
        
        // --- NAVIGATION: Redirect to Sign In after reset ---
        if (navigate) navigate('signin');
    } else {
        alert('Please ensure your passwords match and meet the requirements.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      
      <div className="bg-gray-800 p-8 rounded-xl shadow-2xl max-w-lg w-full">
        
        <h2 className="text-3xl font-extrabold text-teal-400 mb-6">
          Reset your password
        </h2>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          
          {/* Email Address Field (Read-only) */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              readOnly
              value={userEmail}
              className="appearance-none block w-full px-4 py-2 border border-gray-700 rounded-lg shadow-sm bg-gray-700 text-gray-400 sm:text-sm cursor-not-allowed"
            />
          </div>

          {/* New Password Field */}
          <div>
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-300 mb-1">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none block w-full px-4 py-2 border border-gray-700 rounded-lg shadow-sm bg-gray-700 text-white focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            />
            
            {/* Validation Feedback */}
            <div className="mt-2 space-y-1 text-sm">
                <p className={`flex items-center ${isMinLength ? 'text-green-400' : 'text-red-400'}`}>
                    <span className="mr-2">✓</span> Must be at least 8 characters
                </p>
                <p className={`flex items-center ${!containsEmail ? 'text-green-400' : 'text-red-400'}`}>
                    <span className="mr-2">✓</span> Does not contain your email address
                </p>
            </div>
          </div>

          {/* Confirm New Password Field */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="appearance-none block w-full px-4 py-2 border border-gray-700 rounded-lg shadow-sm bg-gray-700 text-white focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            />
          </div>
          
          {/* Save Password Button */}
          <div>
            <button
              type="submit"
              disabled={!isMatch}
              className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-gray-900 transition duration-300 ${isMatch ? 'bg-teal-400 hover:bg-teal-300 focus:ring-teal-500' : 'bg-gray-600 cursor-not-allowed'}`}
            >
              Save Password
            </button>
          </div>
        </form>
        <p className="mt-8 text-center text-gray-500">
            <a 
                href="#" 
                onClick={(e) => {e.preventDefault(); navigate('signin');}} 
                className="text-teal-400 hover:text-teal-300 font-medium"
            >
                Back to Sign In
            </a>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;