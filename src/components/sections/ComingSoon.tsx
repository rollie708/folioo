"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, X as XIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ComingSoon() {
  return (
    <section id="coming-soon" className="w-full bg-bg py-24 lg:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[100px] -z-10" />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="text-xs font-bold text-primary tracking-wider uppercase">
            Coming Soon
          </span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6"
        >
          The Next Generation of Trading Starts Here.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted leading-relaxed mb-10 max-w-xl mx-auto"
        >
          Folio is building a smarter way to discover, analyze and trade on
          Robinhood Chain.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="w-full sm:w-auto bg-primary text-white hover:bg-opacity-90 shadow-[0_0_30px_rgba(25,199,132,0.4)] flex items-center justify-center gap-2">
            Join Our Community <ArrowRight className="w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto flex items-center justify-center gap-2"
            asChild
          >
            <Link href="#" target="_blank" rel="noopener noreferrer">
              Follow Folio on X <Globe className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
