"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search, ChartLine, Monitor } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Explore emerging tokens and identify market activity across Robinhood Chain.",
    icon: Search,
    color: "text-primary",
  },
  {
    number: "02",
    title: "Analyze",
    description:
      "Review charts, wallet activity, liquidity and token safety indicators before trading.",
    icon: ChartLine,
    color: "text-mint",
  },
  {
    number: "03",
    title: "Trade",
    description:
      "Execute trades and monitor your portfolio through one unified terminal.",
    icon: Monitor,
    color: "text-primary",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full bg-bg-secondary/30 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            How Folio Works
          </h2>
          <p className="mt-4 text-muted">
            Three simple steps to smarter trading on Robinhood Chain.
          </p>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center gap-6 relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-1 h-[60px] bg-border/50 lg:hidden" />
              )}

              {/* Step number */}
              <div className="w-12 h-12 rounded-full border border-primary/30 bg-primary/5 flex items-center justify-center z-10">
                <span className="text-sm font-bold text-primary">{step.number}</span>
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-lg border border-border bg-bg flex items-center justify-center z-10">
                <step.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-xl font-bold text-white">{step.title}</h3>
              <p className="text-sm text-muted text-center leading-relaxed max-w-xs">
                {step.description}
              </p>

              <a
                href="#terminal-preview"
                className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-white transition-colors"
              >
                Explore {step.title.toLowerCase()} <ArrowRight className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
