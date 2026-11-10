"use client";

import { motion } from "framer-motion";
import {
  Search,
  Zap,
  Eye,
  Shield,
  BarChart3,
  Copy,
  PieChart,
  Terminal,
} from "lucide-react";
import { features } from "@/data/mockData";
import { Card } from "@/components/ui/card";

const featureIcons: Record<string, typeof Search> = {
  Search,
  Zap,
  Eye,
  Shield,
  BarChart3,
  Copy,
  PieChart,
  Terminal,
};

export function Features() {
  return (
    <section id="features" className="w-full bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Built for Modern Traders
          </h2>
          <p className="mt-4 text-muted">
            Everything you need to navigate the market, in one unified terminal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = featureIcons[feature.icon] || Search;
            return (
              <motion.div
                key={feature.id}
                whileHover={{ y: -4 }}
                className="group"
              >
                <Card className="p-6 hover:border-primary/50 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:border-primary transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
