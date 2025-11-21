import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    // Simulated auth delay
    setTimeout(() => {
      setLoading(false);
      if (!email || !password) {
        setError("Please enter your email and password.");
        return;
      }
      // Mock success path
      navigate("/verify");
    }, 900);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-gray-800/90 backdrop-blur-md p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-700">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-400 to-cyan-300 text-transparent bg-clip-text">
          Welcome Back
        </h1>
        <p className="text-gray-400 mb-8 text-sm">
          Sign in to access your account
        </p>

        {error && (
          <div className="mb-4 text-sm text-red-400 bg-red-950/40 px-3 py-2 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700/80 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700/80 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold text-gray-900 transition shadow-sm shadow-teal-500/30 ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-teal-400 hover:bg-teal-300"
            }`}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="flex justify-between items-center mt-6 text-sm">
          <Link
            to="/reset-password"
            className="text-teal-400 hover:text-teal-300 transition"
          >
            Forgot password?
          </Link>
          <Link
            to="/signup"
            className="text-gray-300 hover:text-white transition"
          >
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
