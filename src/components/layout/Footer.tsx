import Link from "next/link";
import { ArrowRight, Mail, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="px-6 lg:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Top row: logo + description + community */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg border border-primary/30 bg-primary/10 flex items-center justify-center">
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
                <span className="text-2xl font-bold text-white">Folio</span>
              </div>
              <p className="text-muted text-sm leading-relaxed max-w-xs">
                The all-in-one trading and intelligence terminal for Robinhood
                Chain. Discover. Analyze. Trade.
              </p>
              <div className="mt-8 flex gap-4">
                <a
                  href="#"
                  className="flex items-center gap-2 w-fit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted hover:text-primary transition-colors">
                    Community
                  </span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 w-fit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted hover:text-primary transition-colors">
                    Follow on X
                  </span>
                </a>
              </div>
            </div>

            {/* Navigation links */}
            <div className="lg:col-span-8 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                  Platform
                </h4>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="#overview"
                      className="text-sm text-muted hover:text-primary transition-colors"
                    >
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#features"
                      className="text-sm text-muted hover:text-primary transition-colors"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#terminal-preview"
                      className="text-sm text-muted hover:text-primary transition-colors"
                    >
                      Terminal Preview
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                  More
                </h4>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="#how-it-works"
                      className="text-sm text-muted hover:text-primary transition-colors"
                    >
                      How It Works
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#roadmap"
                      className="text-sm text-muted hover:text-primary transition-colors"
                    >
                      Roadmap
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#coming-soon"
                      className="text-sm text-muted hover:text-primary transition-colors"
                    >
                      Coming Soon
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="border-t border-border pt-8 flex flex-col lg:flex-row justify-between items-center gap-6">
            <p className="text-xs text-muted">
              Folio is under development. All demo data on this site is
              illustrative and not financial advice.
            </p>
            <div className="flex items-center gap-6 text-xs text-muted">
              <span>Built for Robinhood Chain</span>
              <span>© 2026 Folio. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
