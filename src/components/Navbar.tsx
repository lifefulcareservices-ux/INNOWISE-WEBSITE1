"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const { scrollY } = useScroll();
  const isHome = pathname === "/";
  const progress = useTransform(scrollY, [0, 200], [0, 1]);

  const navBg = useTransform(progress, [0, 1], ["rgba(255,255,255,0)", "rgba(255,255,255,0.95)"]);
  const navBlur = useTransform(progress, [0, 1], ["blur(0px)", "blur(12px)"]);
  const navBorder = useTransform(progress, [0, 1], ["1px solid rgba(229,231,235,0)", "1px solid rgba(229,231,235,1)"]);

  const textColor = useTransform(progress, [0, 1], isHome ? ["#ffffff", "#000000"] : ["#000000", "#000000"]);
  const hamburgerColor = useTransform(progress, [0, 1], isHome ? ["rgba(255,255,255,0.8)", "#000000"] : ["#000000", "#000000"]);
  const logoProgress = useTransform(progress, (v) => (isHome ? v : 1));

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        backgroundColor: navBg,
        backdropFilter: navBlur,
        borderBottom: navBorder,
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="w-full pl-6 pr-2 md:pr-4 h-24 md:h-28 flex items-center">
        <Link
          href="/"
          className="flex items-center gap-3 font-bold text-2xl md:text-3xl tracking-tight"
        >
          <motion.span style={{ color: textColor }} className="flex items-center gap-3">
            <Logo progress={logoProgress} size={44} />
            Innowise Solutions
          </motion.span>
        </Link>

        <div className="flex-1" />
          <div className="hidden md:flex items-center gap-10 mr-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className="relative text-lg font-semibold hover:text-brand transition-all duration-200 group px-2 py-1"
            >
              <motion.span style={{ color: textColor }}>{link.label}</motion.span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          style={{ color: hamburgerColor }}
          className="md:hidden transition-all duration-200 cursor-pointer p-3 hover:text-black"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <motion.line
              x1="4" y1="6" x2="20" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              style={{ originX: "12px", originY: "6px" }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            />
            <motion.line
              x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
              animate={{ opacity: isOpen ? 0 : 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.line
              x1="4" y1="18" x2="20" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              style={{ originX: "12px", originY: "18px" }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            />
          </svg>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
            <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-semibold text-black/65 hover:text-black transition-all duration-200 py-3"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
