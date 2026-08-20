"use client";

import Link from "next/link";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="text-center max-w-md">
        <p className="text-xs text-black/55 uppercase tracking-[0.2em] font-semibold mb-4">Error</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4 leading-tight">Something went wrong.</h1>
        <p className="text-black/65 text-sm leading-relaxed mb-8">
          An unexpected error occurred. Please try again or contact us if the problem persists.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-block bg-brand text-white rounded-md px-6 py-2.5 font-semibold text-sm hover:bg-brand-dark transition-all duration-200 cursor-pointer"
          >
            Try again
          </button>
          <Link
            href="/contact"
            className="inline-block border border-gray-200 text-black/65 rounded-md px-6 py-2.5 font-semibold text-sm hover:border-gray-300 transition-all duration-200"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
