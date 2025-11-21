import { Routes, Route, Navigate } from "react-router-dom";

import SignUpForm from "./SignUpForm.jsx";
import SignIn from "./SignIn.jsx";
import EmailVerification from "./EmailVerification.jsx";
import ResetPassword from "./ResetPassword.jsx";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <Routes>
        {/* Default route → redirect to signup */}
        <Route path="/" element={<Navigate to="/signup" replace />} />

        {/* Auth pages */}
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/verify" element={<EmailVerification />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Fallback route */}
        <Route
          path="*"
          element={
            <div className="text-white text-center text-2xl">
              404 - Page Not Found
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
