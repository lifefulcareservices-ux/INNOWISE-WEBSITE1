import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="text-center max-w-md">
        <p className="text-xs text-black/55 uppercase tracking-[0.2em] font-semibold mb-4">404</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4 leading-tight">Page not found.</h1>
        <p className="text-black/65 text-sm leading-relaxed mb-8">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-brand text-white rounded-md px-6 py-2.5 font-semibold text-sm hover:bg-brand-dark transition-all duration-200"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
