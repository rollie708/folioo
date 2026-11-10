"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, X as XIcon } from "lucide-react";
import { roadmap } from "@/data/mockData";
import { Card } from "@/components/ui/card";

export function Roadmap() {
  return (
    <section id="roadmap" className="w-full bg-bg-secondary/30 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Product Roadmap
          </h2>
          <p className="mt-4 text-muted">
            Planned development milestones for the Folio trading terminal.
          </p>
        </div>

        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-16 bottom-16 w-px bg-border/30 lg:block hidden" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {roadmap.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                {/* Connector dot */}
                <div className="absolute left-1/2 -translate-x-1/2 top-8 w-3 h-3 rounded-full bg-primary border-2 border-bg-secondary group-hover:bg-mint group-hover:border-primary transition-colors" />

                <Card className="p-6 group-hover:border-primary/50 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">
                        {phase.phase}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-muted uppercase tracking-wider">
                      {phase.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-muted mb-6 leading-relaxed">
                    {phase.description}
                  </p>
                  <ul className="space-y-2">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted">
                        <span className="mt-1 w-1 h-1 rounded-full bg-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-muted">
            Roadmap represents planned development milestones, not completed
            features. Dates and scope may change.
          </p>
        </div>
      </div>
    </section>
  );
}
