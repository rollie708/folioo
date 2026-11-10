"use client";

export function WhyBuilding() {
  return (
    <section id="why-building" className="w-full bg-bg py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight mb-6">
              Why We Are Building Folio
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-8">
              Crypto traders often have to switch between multiple platforms to
              discover tokens, inspect contracts, monitor whales, analyze charts
              and execute trades.
            </p>

            <div className="space-y-5">
              {[
                "Rug pulls",
                "Malicious contract permissions",
                "Fake volume",
                "Suspicious wallet activity",
                "Poor visibility into liquidity and token distribution",
              ].map((risk) => (
                <div key={risk} className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-muted text-sm">{risk}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-primary/5 border border-primary/10 rounded-lg p-5">
              <p className="text-sm text-muted leading-relaxed">
                Folio aims to bring these tools into one place, helping traders
                understand market activity and make more informed decisions.
                Folio does not promise to eliminate scams or guarantee
                profitable trades.
              </p>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="glass-panel rounded-2xl p-8 border border-border">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">
                    System Status
                  </span>
                </div>
                <span className="text-xs text-muted">All Systems Operational</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted">Market Data Feed</span>
                  <span className="text-xs font-mono text-primary">12.4ms</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted">Token Discovery</span>
                  <span className="text-xs font-mono text-primary">Active</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted">Charting Engine</span>
                  <span className="text-xs font-mono text-primary">Active</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted">Safety Scanner</span>
                  <span className="text-xs font-mono text-primary">Standby</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
