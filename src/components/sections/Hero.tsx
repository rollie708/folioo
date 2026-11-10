"use client";

"use client";

import { motion } from "framer-motion";
import { Terminal, ArrowRight, Globe, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                Coming Soon to Robinhood Chain
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight"
            >
              Everything You Need to{" "}
              <span className="relative">
                Navigate the Market.
                <span className="absolute -bottom-3 left-0 w-full h-[3px] bg-primary/20 rounded" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg lg:text-xl text-muted leading-relaxed max-w-lg"
            >
              Discover emerging tokens, track smart wallets, analyze market
              activity and execute trades through one unified trading terminal
              built for Robinhood Chain.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-white hover:bg-opacity-90 shadow-[0_0_30px_rgba(25,199,132,0.3)]">
                Explore the Terminal
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto flex items-center justify-center gap-2"
                asChild
              >
                <Link href="#coming-soon">
                  Join the Community <Globe className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right: Terminal preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-panel rounded-2xl p-1 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
              <div className="relative z-10">
                {/* Terminal header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-bg-secondary/50">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-xs text-muted flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-primary" />
                    <span>folio.terminal.demo</span>
                  </div>
                </div>

                {/* Terminal content - candlestick chart preview */}
                <div className="h-[400px] w-full p-6">
                  <div className="flex items-end justify-between h-full gap-1">
                    {Array.from({ length: 28 }).map((_, i) => {
                      const seed = (i * 97 + 13) % 100;
                      const height = 20 + (seed % 60);
                      const isGreen = seed > 40;
                      return (
                                        <div
                          key={i}
                          className="w-full bg-transparent"
                          style={{
                            height: "100%",
                            display: "flex",
                            alignItems: "flex-end",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            className="w-[8px] rounded-t-sm transition-all duration-500"
                            style={{
                              height: `${height}px`,
                              background: isGreen ? "var(--color-primary)" : "var(--color-muted)",
                              opacity: isGreen ? 0.9 : 0.5,
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>

                  {/* Chart grid lines */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-0 right-0 h-[1px] bg-border/30" />
                    <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-border/20" />
                    <div className="absolute top-3/4 left-0 right-0 h-[1px] bg-border/30" />
                  </div>

                  {/* Volume bars at bottom */}
                  <div className="absolute bottom-6 left-0 right-0 h-12 flex items-end justify-between gap-1 opacity-40">
                    {Array.from({ length: 14 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-full bg-gradient-to-t from-transparent to-primary/30 rounded-t-sm"
                        style={{ height: `${20 + ((i * 53 + 7) % 60)}%` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Terminal footer - stats */}
                <div className="px-6 py-4 border-t border-border bg-bg-secondary/50 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-xs text-muted">24h Volume</div>
                    <div className="text-sm font-mono text-white">$4.2B</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-muted">Active Pairs</div>
                    <div className="text-sm font-mono text-white">847</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-muted">Market Status</div>
                    <div className="flex items-center justify-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-xs text-primary">Live (Demo)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-6 -right-6 px-4 py-2 rounded-lg border border-primary bg-primary/10 backdrop-blur">
              <span className="text-xs font-bold text-primary tracking-tighter">
                DEMO PREVIEW
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
