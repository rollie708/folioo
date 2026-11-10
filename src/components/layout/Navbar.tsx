"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Globe, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Overview", href: "#overview" },
  { name: "Features", href: "#features" },
  { name: "Terminal Preview", href: "#terminal-preview" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Roadmap", href: "#roadmap" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
  };

  // Use setTimeout to avoid hydration mismatch
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);
  }

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-colors",
        scrolled ? "bg-bg/80 backdrop-blur-md border-b border-border" : "bg-transparent",
      )}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-20 px-6 lg:px-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg border border-primary/30 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <svg
                className="w-6 h-6 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"
                  className="text-primary"
                />
                <path
                  d="M8 8l4 4M12 12l4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                />
              </svg>
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              Folio
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#coming-soon"
              className="px-5 py-2.5 rounded-md bg-primary text-white text-sm font-medium hover:bg-opacity-90 transition-colors"
            >
              Coming Soon
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary transition-colors"
              aria-label="Open menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden border-t border-border bg-bg/90 backdrop-blur-md"
          >
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm font-medium text-muted hover:text-primary px-4 py-3 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#coming-soon"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-primary border border-primary/20 rounded-lg bg-primary/5"
              >
                Community <Globe className="w-4 h-4" />
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
