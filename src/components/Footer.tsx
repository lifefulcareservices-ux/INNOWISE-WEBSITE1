import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          <div className="flex flex-col gap-6">
            <Link href="/" className="text-black font-medium text-lg tracking-tight">
              Innowise Solutions
            </Link>
            <p className="text-black/55 text-xs leading-relaxed">
              Smart technology for forward-thinking organisations. Cloud, security, ERP, and web solutions &mdash; all under one roof.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-black/55 text-xs uppercase tracking-widest">Product</h3>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="text-black/65 hover:text-black text-sm transition-all duration-200">About</Link>
              <Link href="/services" className="text-black/65 hover:text-black text-sm transition-all duration-200">Services</Link>            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-black/55 text-xs uppercase tracking-widest">Legal</h3>
            <div className="flex flex-col gap-2">
              <Link href="/legal/terms" className="text-black/65 hover:text-black text-sm transition-all duration-200">Terms &amp; Conditions</Link>
              <Link href="/legal/privacy" className="text-black/65 hover:text-black text-sm transition-all duration-200">Privacy Policy</Link>
              <Link href="/legal/cookies" className="text-black/65 hover:text-black text-sm transition-all duration-200">Cookie Policy</Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-black/55 text-xs uppercase tracking-widest">Contact</h3>
            <div className="flex flex-col gap-2 text-sm text-black/65">
              <p>Unit 112, THE DOCK, 75 Exploration Dr</p>
              <p>Leicester LE4 5NU</p>
              <a href="tel:+441162257865" className="text-black/65 hover:text-black transition-all duration-200">+44 116 225 7865</a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-black/5 text-center">
          <p className="text-black/35 text-xs">&copy; 2012&ndash;{new Date().getFullYear()} Innowise Solutions Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
