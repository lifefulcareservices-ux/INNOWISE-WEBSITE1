"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-4 md:p-6 shadow-lg">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-black/65 text-xs leading-relaxed flex-1">
          We use essential and analytics cookies to improve your experience. See our{" "}
          <Link href="/legal/cookies" className="text-brand underline underline-offset-2">Cookie Policy</Link> for details.
        </p>
        <button
          onClick={accept}
          className="shrink-0 bg-brand text-white rounded-md px-5 py-2 text-sm font-semibold hover:bg-brand-dark transition-all duration-200 cursor-pointer"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
