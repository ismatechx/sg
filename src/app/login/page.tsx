"use client";

import { useState, FormEvent } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setError("Authentication backend not connected yet.");
    }, 600);
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center px-6 py-16 overflow-hidden bg-zinc-50">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e4e4e7 1px, transparent 1px), linear-gradient(to bottom, #e4e4e7 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, black 30%, transparent 100%)",
          opacity: 0.4,
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(74,124,95,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="relative w-full max-w-md">
        <a
          href="/"
          className="flex items-center justify-center gap-2.5 mb-8 group"
          aria-label="Sugam Gunam home"
        >
          <span className="w-7 h-7 rounded-full bg-sage-500 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M7 1C7 1 2 4 2 8C2 10.76 4.24 13 7 13C9.76 13 12 10.76 12 8C12 4 7 1 7 1Z"
                fill="white"
              />
            </svg>
          </span>
          <span className="text-sm font-semibold tracking-tight text-zinc-900">
            Sugam Gunam
          </span>
        </a>

        <div className="bg-white border border-zinc-200 rounded-2xl shadow-sm p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-2">
              Welcome back
            </h1>
            <p className="text-sm text-zinc-500">
              Sign in to access your patient portal
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-xs font-medium text-zinc-600"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="px-3.5 py-2.5 text-sm bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-100 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-xs font-medium text-zinc-600"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs text-sage-600 hover:text-sage-700 transition-colors"
                >
                  Forgot?
                </a>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-3.5 pr-11 py-2.5 text-sm bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-100 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-zinc-400 hover:text-zinc-700 transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M2 2L14 14M6.5 6.5C6.2 6.8 6 7.2 6 8C6 9.1 6.9 10 8 10C8.8 10 9.2 9.8 9.5 9.5M4 4.5C2.5 5.7 1.5 7.5 1.5 8C1.5 8 3.5 12.5 8 12.5C9.5 12.5 10.7 12 11.8 11.3M7.5 3.5C7.7 3.5 7.8 3.5 8 3.5C12.5 3.5 14.5 8 14.5 8C14.3 8.4 13.9 9.2 13.2 10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M1.5 8C1.5 8 3.5 3.5 8 3.5C12.5 3.5 14.5 8 14.5 8C14.5 8 12.5 12.5 8 12.5C3.5 12.5 1.5 8 1.5 8Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <label className="flex items-center gap-2 text-sm text-zinc-600 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-4 h-4 rounded border-zinc-300 text-sage-500 focus:ring-sage-400 accent-sage-500"
              />
              Keep me signed in
            </label>

            {error && (
              <div className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="mt-2 px-6 py-2.5 bg-sage-500 text-white text-sm font-medium rounded-full hover:bg-sage-600 transition-colors duration-200 shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Signing in…" : "Sign in"}
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-wider">
              <span className="bg-white px-3 text-zinc-400">or</span>
            </div>
          </div>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-2.5 px-6 py-2.5 bg-white text-zinc-700 text-sm font-medium rounded-full border border-zinc-200 hover:bg-zinc-50 transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 16 16">
              <path
                d="M15.68 8.18c0-.57-.05-1.11-.15-1.64H8v3.11h4.31c-.19 1-.75 1.85-1.6 2.42v2.01h2.59c1.52-1.4 2.39-3.46 2.39-5.9z"
                fill="#4285F4"
              />
              <path
                d="M8 16c2.16 0 3.97-.72 5.29-1.94l-2.59-2.01c-.72.48-1.63.76-2.7.76-2.08 0-3.84-1.4-4.47-3.29H.86v2.07C2.17 14.13 4.86 16 8 16z"
                fill="#34A853"
              />
              <path
                d="M3.53 9.52A4.8 4.8 0 0 1 3.28 8c0-.53.09-1.04.25-1.52V4.41H.86A8 8 0 0 0 0 8c0 1.29.31 2.51.86 3.59l2.67-2.07z"
                fill="#FBBC05"
              />
              <path
                d="M8 3.19c1.17 0 2.23.4 3.06 1.2l2.3-2.3C11.96.8 10.15 0 8 0 4.86 0 2.17 1.87.86 4.41l2.67 2.07C4.16 4.59 5.92 3.19 8 3.19z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </button>
        </div>

        <p className="text-center text-sm text-zinc-500 mt-6">
          New here?{" "}
          <a
            href="#"
            className="text-sage-600 hover:text-sage-700 font-medium transition-colors"
          >
            Create an account
          </a>
        </p>

        <p className="text-center text-xs text-zinc-400 mt-8">
          <a href="/" className="hover:text-zinc-700 transition-colors">
            ← Back to home
          </a>
        </p>
      </div>
    </main>
  );
}
