import React, { useState } from 'react';
// Import all necessary components
import SignUpForm from './SignUpForm';
import EmailVerification from './EmailVerification';
import ResetPassword from './ResetPassword';

// --- Custom Hook for Simple Routing ---
const useRoute = (initialRoute) => {
  const [currentRoute, setCurrentRoute] = useState(initialRoute);
  // The navigate function will be passed to children components
  const navigate = (newRoute) => setCurrentRoute(newRoute);
  return { currentRoute, navigate };
};

function App() {
  // Initialize router state: starting page is 'signup'
  const { currentRoute, navigate } = useRoute('signup');

  // Function to render the correct component based on the current route
  const renderRoute = () => {
    switch (currentRoute) {
      case 'signup':
        // Pass 'navigate' so the form can redirect on submission/link click
        return <SignUpForm navigate={navigate} />;
      case 'verify':
        return <EmailVerification navigate={navigate} />;
      case 'reset-password':
        return <ResetPassword navigate={navigate} />;
      case 'signin':
        // **Sign In Page Placeholder**
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
                <div className="bg-gray-800 p-10 rounded-xl shadow-2xl text-center max-w-sm w-full">
                    <h1 className="text-4xl font-bold text-teal-400 mb-6">Welcome Back</h1>
                    <p className="text-gray-400 mb-8">Please sign in to continue your journey.</p>

                    <div className="space-y-4">
                        {/* Placeholder for Sign In form inputs */}
                        <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-teal-500 focus:border-teal-500" />
                        <input type="password" placeholder="Password" className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-teal-500 focus:border-teal-500" />

                        {/* Forgot Password Link (Navigates to reset-password) */}
                        <p className="text-right text-sm">
                            <a 
                                href="#" 
                                onClick={(e) => {e.preventDefault(); navigate('reset-password');}}
                                className="text-teal-400 hover:text-teal-300 transition"
                            >
                                Forgot Password?
                            </a>
                        </p>

                        <button 
                            // This would be the actual sign-in button
                            className="w-full text-gray-900 bg-teal-400 hover:bg-teal-300 py-2 rounded-lg font-medium transition duration-300"
                        >
                            Sign In
                        </button>
                    </div>

                    <p className="mt-8 text-gray-500 text-sm">
                        Need an account? 
                        <a 
                            href="#" 
                            onClick={(e) => {e.preventDefault(); navigate('signup');}} 
                            className="text-teal-400 hover:text-teal-300 font-medium ml-1"
                        >
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        );
      default:
        // Fallback page
        return <SignUpForm navigate={navigate} />;
    }
  };

  return (
    // The main app container will render the current route component
    <div className="App">
      {renderRoute()}
    </div>
  );
}

export default App;