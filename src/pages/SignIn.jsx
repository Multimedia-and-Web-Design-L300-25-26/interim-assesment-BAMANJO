import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    if (!email) return "Email is required.";
    // simple email regex
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) return "Please enter a valid email address.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setSubmitting(true);
    // Placeholder sign-in flow. Replace with real auth call.
    try {
      await new Promise((res) => setTimeout(res, 700));
      setSuccess(true);
      setError(null);
    } catch {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <div className="p-4 sm:p-6">
        <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
          <title>Coinbase Logo</title>
          <circle cx="20" cy="20" r="20" fill="#0052FF" />
          <path
            d="M20 6C12.268 6 6 12.268 6 20s6.268 14 14 14 14-6.268 14-14S27.732 6 20 6zm-3.6 16.8a3.6 3.6 0 110-7.2h7.2a3.6 3.6 0 110 7.2h-7.2z"
            fill="white"
          />
        </svg>
      </div>

      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md lg:max-w-lg">
          <div className="bg-[#0b0b0b] border border-gray-800 rounded-lg p-8 shadow-xl">
            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl font-extrabold">
                Sign in to Coinbase
              </h1>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 border border-gray-700 rounded-2xl bg-transparent placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your email address"
                />
              </div>

              {error && (
                <div role="alert" className="text-sm text-red-500">
                  {error}
                </div>
              )}

              {success && (
                <output className="text-sm text-green-500">
                  Signed in (demo). Replace this with a real auth redirect.
                </output>
              )}

              <div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex justify-center py-3 px-6 rounded-full text-black bg-blue-400 hover:bg-blue-500 disabled:opacity-60 font-bold transition-colors"
                >
                  {submitting ? "Continuing..." : "Continue"}
                </button>
              </div>

              <div className="flex items-center my-4">
                <div className="flex-1 h-px bg-gray-700" />
                <div className="px-3 text-sm text-gray-400">OR</div>
                <div className="flex-1 h-px bg-gray-700" />
              </div>

              <div className="space-y-3">
                <button
                  type="button"
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-full bg-gray-800 hover:bg-gray-700"
                >
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-gray-700 rounded-full">
                    🔐
                  </span>
                  <span className="flex-1 text-left">Sign in with Passkey</span>
                </button>
                <button
                  type="button"
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-full bg-gray-800 hover:bg-gray-700"
                >
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-gray-700 rounded-full">
                    G
                  </span>
                  <span className="flex-1 text-left">Sign in with Google</span>
                </button>
                <button
                  type="button"
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-full bg-gray-800 hover:bg-gray-700"
                >
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-gray-700 rounded-full"></span>
                  <span className="flex-1 text-left">Sign in with Apple</span>
                </button>
              </div>

              <div className="text-center mt-6">
                <span className="text-sm text-gray-400">
                  Don't have an account?{" "}
                </span>
                <Link
                  to="/signup"
                  className="text-sm text-blue-400 hover:underline"
                >
                  Sign up
                </Link>
              </div>

              <div className="text-xs text-gray-500 mt-6">
                <p>
                  Not your device? Use a private window. See our{" "}
                  <a href="/privacy" className="text-gray-400 underline">
                    Privacy Policy
                  </a>{" "}
                  for more info.
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignIn;
