"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  LayoutDashboard,
  BarChart3,
  Activity,
  Shield,
  Users,
  Brain,
  PieChart,
  Copy,
  Info,
} from "lucide-react";
import { createChart } from "lightweight-charts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  demoTokens,
  whaleActivity,
  aiSignals,
  portfolioSummary,
  demoHoldings,
  copyTraders,
  type DemoToken,
} from "@/data/mockData";

const demoTabs = [
  { id: "market", label: "Market Overview", icon: BarChart3 },
  { id: "tokens", label: "Token Discovery", icon: Activity },
  { id: "chart", label: "Advanced Charts", icon: Activity },
  { id: "safety", label: "Token Safety", icon: Shield },
  { id: "whales", label: "Whale Tracker", icon: Users },
  { id: "ai", label: "AI Scanner", icon: Brain },
  { id: "portfolio", label: "Portfolio", icon: PieChart },
  { id: "copy", label: "Copy Trading", icon: Copy },
];

export function TerminalDemo() {
  const [activeTab, setActiveTab] = useState("market");

  return (
    <section id="terminal-preview" className="w-full bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="text-center mb-16">
          <Card className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5">
            <span className="text-xs font-bold text-primary tracking-wider uppercase">
              Interactive Terminal Demo
            </span>
          </Card>
          <h2 className="mt-6 text-3xl font-bold text-white tracking-tight">
            Preview the Trading Terminal
          </h2>
          <p className="mt-4 text-muted">
            Explore a realistic preview of the Folio trading platform. All data
            shown is illustrative demo data.
          </p>
        </div>

        <div className="glass-panel rounded-3xl overflow-hidden shadow-2xl border border-border">
          <div className="flex border-b border-border bg-bg-secondary/50">
            {demoTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-all border-b-2 ${
                  activeTab === tab.id
                    ? "text-primary border-primary bg-primary/5"
                    : "text-muted hover:text-white hover:bg-white/5"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-8 lg:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8"
              >
                {activeTab === "market" && <MarketOverview />}
                {activeTab === "tokens" && <TokenDiscovery />}
                {activeTab === "chart" && <AdvancedChart />}
                {activeTab === "safety" && <TokenSafetyPanel />}
                {activeTab === "whales" && <WhaleTracker />}
                {activeTab === "ai" && <AIScanner />}
                {activeTab === "portfolio" && <PortfolioPanel />}
                {activeTab === "copy" && <CopyTradingPanel />}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="border-t border-border bg-bg-secondary/50 p-6 lg:p-8">
            <div className="flex items-start gap-3">
              <Info className="w-4 h-4 text-muted mt-0.5" />
              <div>
                <p className="text-xs text-muted">
                  <span className="font-medium text-white">DEMO DATA</span> — All
                  data shown is illustrative and for demonstration purposes only.
                  Folio is under development. No real wallet connection, real
                  trading, or real blockchain transactions are implied.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// MARKET OVERVIEW
function MarketOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard title="Total Market Activity" value="$12.4B" change="+12.4%" positive />
      <StatCard title="Trending Tokens" value="847" change="+12" positive />
      <StatCard title="24h Volume" value="$4.2B" change="-3.2%" positive={false} />
      <StatCard title="Market Performance" value="Neutral" change="58% Bullish" positive />
    </div>
  );
}

function StatCard({ title, value, change, positive }: { title: string; value: string; change: string; positive: boolean }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs text-muted">{title}</p>
          <span className={`text-xs font-medium ${positive ? "text-primary" : "text-red-400"}`}>
            {change}
          </span>
        </div>
        <p className="text-2xl font-bold text-white">{value}</p>
      </CardHeader>
      <CardContent>
        <div className="h-1 w-full bg-border/50 rounded-full overflow-hidden">
          <div className="h-full bg-primary" style={{ width: "65%" }} />
        </div>
      </CardContent>
    </Card>
  );
}

// TOKEN DISCOVERY
function TokenDiscovery() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("trending");

  const categories = [
    "all", "DeFi", "Infrastructure", "Gaming", "AI", "Exchange", "Layer 1", "Storage",
  ];

  const filteredTokens = demoTokens
    .filter((t) => {
      const matchesSearch =
        t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.ticker.toLowerCase().includes(search.toLowerCase());
      const matchesCat = category === "all" || t.category === category;
      return matchesSearch && matchesCat;
    })
    .sort((a, b) => {
      if (sort === "price") return b.price - a.price;
      if (sort === "change") return b.priceChange24h - a.priceChange24h;
      if (sort === "volume") return b.volume24h - a.volume24h;
      return (b.trending ? 1 : 0) - (a.trending ? 1 : 0);
    });

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        <div className="relative flex-1 max-w-md">
          <Activity className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
          <input
            type="text"
            placeholder="Search tokens..."
            className="w-full bg-bg border border-border rounded-lg px-4 pl-10 py-2.5 text-sm text-white focus:outline-none focus:border-primary transition-colors"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full lg:w-auto flex-wrap">
          <Button variant="outline" size="sm" onClick={() => setCategory("all")}>
            All Categories
          </Button>
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={category === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="pb-3 text-xs font-semibold text-muted uppercase tracking-wider">Token</th>
              <th className="pb-3 text-xs font-semibold text-muted uppercase tracking-wider">Price</th>
              <th className="pb-3 text-xs font-semibold text-muted uppercase tracking-wider">Market Cap</th>
              <th className="pb-3 text-xs font-semibold text-muted uppercase tracking-wider text-right">24h Volume</th>
              <th className="pb-3 text-xs font-semibold text-muted uppercase tracking-wider text-right">24h Change</th>
              <th className="pb-3 text-xs font-semibold text-muted uppercase tracking-wider text-right">Liquidity</th>
              <th className="pb-3 text-xs font-semibold text-muted uppercase tracking-wider text-center">Trending</th>
            </tr>
          </thead>
          <tbody>
            {filteredTokens.map((token: DemoToken) => (
              <tr
                key={token.id}
                className="border-b border-border/50 hover:bg-white/5 transition-colors group"
              >
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg border border-border flex items-center justify-center bg-bg-secondary">
                      <span className="text-xs font-bold">{token.ticker[0]}</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">{token.name}</div>
                      <div className="text-xs text-muted">{token.ticker}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 text-sm font-mono text-white">${token.price}</td>
                <td className="py-4 text-sm font-mono text-white">${token.marketCap.toLocaleString()}</td>
                <td className="py-4 text-sm font-mono text-white text-right">${token.volume24h.toLocaleString()}</td>
                <td className="py-4 text-right">
                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${token.priceChange24h >= 0 ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"}`}>
                    {token.priceChange24h >= 0 ? "+" : ""}{token.priceChange24h}%
                  </span>
                </td>
                <td className="py-4 text-sm font-mono text-white text-right">${token.liquidity.toLocaleString()}</td>
                <td className="py-4 text-center">
                  {token.trending ? (
                    <span className="flex items-center justify-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="text-xs text-primary font-medium">Trending</span>
                    </span>
                  ) : (
                    <span className="text-xs text-muted">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-xs text-muted mt-2">
        {filteredTokens.length} of {demoTokens.length} tokens
      </div>
    </div>
  );
}

// ADVANCED CHART
function AdvancedChart() {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: "solid" as const, color: "#0A1510" },
        textColor: "#91A49A",
      },
      grid: {
        vertLines: { color: "#19C78415" },
        horzLines: { color: "#19C78415" },
      },
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
      autoScale: true,
    } as any);

    const candleSeries = (chart as any).addCandlestickSeries({
      upColor: "#19C784",
      downColor: "#EF4444",
      borderVisible: false,
      wickUpColor: "#19C784",
      wickDownColor: "#EF4444",
    });

    const data = [];
    let price = 100;
    const now = Math.floor(Date.now() / 1000);
    for (let i = 0; i < 200; i++) {
      const open = price;
      const close = open + (Math.random() - 0.5) * 10;
      const high = Math.max(open, close) + Math.random() * 5;
      const low = Math.min(open, close) - Math.random() * 5;
      data.push({ time: now - (200 - i) * 3600, open, high, low, close });
      price = close;
    }

    candleSeries.setData(data);

    const volumeSeries = (chart as any).addHistogramSeries({
      color: "#19C784",
      style: "histogram",
      priceFormat: { type: "volume" },
      scaleMargins: { top: 0.8, bottom: 0 },
    });

    const volumeData = data.map((d: any) => ({
      time: d.time,
      value: Math.floor(Math.random() * 1000),
    }));
    volumeSeries.setData(volumeData);

    return () => chart.remove();
  }, []);

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold text-white uppercase tracking-wider">
              BTC/USDC — 1H
            </span>
          </div>
          <div className="flex gap-1">
            {["1H", "4H", "1D", "1W"].map((tf) => (
              <button
                key={tf}
                onClick={() => {}}
                className="w-8 h-8 rounded border border-border bg-transparent text-xs text-muted hover:text-primary hover:border-primary/50 transition-colors"
              >
                {tf}
              </button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div ref={chartContainerRef} className="h-[400px] w-full" />
      </CardContent>
    </Card>
  );
}

// TOKEN SAFETY
function TokenSafetyPanel() {
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <Card className="col-span-1 lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary" />
            Token Safety Analysis — SKYE
          </CardTitle>
          <p className="text-xs text-muted mt-1">
            Illustrative safety check for demo token. Not a guarantee against
            scams or rug pulls.
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SafetyCheck title="Contract Verification" status="Verified" positive />
            <SafetyCheck title="Ownership Privileges" status="Renounced" positive />
            <SafetyCheck title="Minting Permissions" status="Disabled" positive />
            <SafetyCheck title="Holder Concentration" status="Moderate" positive={false} />
            <SafetyCheck title="Liquidity Locked" status="Yes (6 months)" positive />
            <SafetyCheck title="Honeypot Risk" status="No" positive />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Risk Classification</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex flex-col items-center justify-center py-8">
            <div className="w-24 h-24 rounded-full border-8 border-primary/20 flex items-center justify-center mb-4 relative">
              <div className="absolute inset-0 rounded-full border-8 border-primary border-t-transparent" style={{ transform: "rotate(-90deg)" }} />
              <span className="text-2xl font-bold text-primary">LOW</span>
            </div>
            <p className="text-muted text-sm">
              This token shows low risk indicators based on illustrative checks.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function SafetyCheck({ title, status, positive }: { title: string; status: string; positive: boolean }) {
  return (
    <div className={`flex items-center justify-between py-3 border-b border-border/50 last:border-0`}>
      <span className="text-sm text-muted">{title}</span>
      <span className={`text-xs font-medium px-2 py-1 rounded ${positive ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-amber-500/10 text-amber-400 border border-amber-500/20"}`}>
        {status}
      </span>
    </div>
  );
}

// WHALE TRACKER
function WhaleTracker() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-white">Large Wallet Activity</h3>
          <p className="text-xs text-muted">Sample whale transactions (demo data)</p>
        </div>
        <span className="px-2 py-1 rounded text-xs font-bold text-primary bg-primary/10 border border-primary/20">
          DEMO
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="pb-3 text-xs font-semibold text-muted uppercase tracking-wider">Wallet</th>
              <th className="pb-3 text-xs font-semibold text-muted uppercase tracking-wider">Token</th>
              <th className="pb-3 text-xs font-semibold text-muted uppercase tracking-wider">Action</th>
              <th className="pb-3 text-xs font-semibold text-muted uppercase tracking-wider text-right">Amount</th>
              <th className="pb-3 text-xs font-semibold text-muted uppercase tracking-wider text-right">Value</th>
              <th className="pb-3 text-xs font-semibold text-muted uppercase tracking-wider text-right">Time</th>
            </tr>
          </thead>
          <tbody>
            {whaleActivity.map((w) => (
              <tr key={w.id} className="border-b border-border/50 hover:bg-white/5 transition-colors">
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center bg-bg-secondary">
                      <span className="text-[10px] font-bold text-muted">{w.label[0]}</span>
                    </div>
                    <span className="text-xs font-mono text-muted">{w.wallet}</span>
                  </div>
                </td>
                <td className="py-4 text-sm text-white">{w.token}</td>
                <td className="py-4">
                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${w.action === "ACCUMULATING" ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"}`}>
                    {w.action}
                  </span>
                </td>
                <td className="py-4 text-sm font-mono text-white text-right">{w.amount.toLocaleString()}</td>
                <td className="py-4 text-sm font-mono text-white text-right">${w.value.toLocaleString()}</td>
                <td className="py-4 text-sm font-mono text-muted text-right">{w.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// AI SCANNER
function AIScanner() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Brain className="w-5 h-5 text-primary" />
        <h3 className="text-sm font-semibold text-white">AI Market Intelligence</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {aiSignals.map((signal) => (
          <Card key={signal.id}>
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-2 h-2 rounded-full ${signal.type === "VOLUME" ? "bg-primary" : signal.type === "WHALE" ? "bg-mint" : "bg-blue-500"}`} />
                <span className="text-[10px] font-bold text-muted uppercase tracking-wider">{signal.type}</span>
              </div>
              <h4 className="text-sm font-medium text-white mb-2">{signal.title}</h4>
              <p className="text-xs text-muted mb-4 leading-relaxed">{signal.description}</p>
              <div className="w-full bg-border/50 rounded-full h-2 overflow-hidden">
                <div className="h-full bg-primary" style={{ width: `${signal.confidence}%` }} />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-muted">Signal Strength</span>
                <span className="text-xs font-mono text-white">{signal.confidence}%</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-primary/5 border border-primary/10 rounded-lg p-4">
        <p className="text-xs text-muted">
          <span className="font-medium text-primary">Disclaimer:</span> AI signals
          are illustrative and based on demo data. They do not constitute
          financial advice or real market predictions.
        </p>
      </div>
    </div>
  );
}

// PORTFOLIO PANEL
function PortfolioPanel() {
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <Card className="col-span-1 lg:col-span-2">
        <CardHeader className="flex items-center justify-between pb-3">
          <CardTitle>Portfolio Overview</CardTitle>
          <span className="text-xs font-medium text-primary">+3.4% (24h)</span>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <p className="text-xs text-muted">Total Value</p>
              <p className="text-lg font-mono font-bold text-white">{portfolioSummary.totalValue}</p>
            </div>
            <div>
              <p className="text-xs text-muted">Unrealized P&L</p>
              <p className="text-lg font-mono font-bold text-primary">+${portfolioSummary.unrealizedPnL.slice(1)}</p>
            </div>
            <div>
              <p className="text-xs text-muted">Holdings</p>
              <p className="text-lg font-mono font-bold text-white">{demoHoldings.length}</p>
            </div>
          </div>

          <div className="space-y-4">
            {portfolioSummary.assetAllocation.map((asset) => (
              <div key={asset.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: asset.color }} />
                  <span className="text-sm text-muted">{asset.name}</span>
                </div>
                <div className="flex items-center gap-2 text-right">
                  <span className="text-sm font-mono text-white">${asset.value.toLocaleString()}</span>
                  <span className="text-sm font-medium text-white">{asset.percent}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PieChart className="w-4 h-4 text-primary" />
            Token Holdings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {demoHoldings.map((h) => (
              <div key={h.id} className="flex items-center justify-between py-3 border-b border-border/50 last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg border border-border flex items-center justify-center bg-bg-secondary">
                    <span className="text-[10px] font-bold text-muted">{h.ticker[0]}</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">{h.token}</div>
                    <div className="text-xs text-muted">{h.ticker}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-mono text-white">${h.value.toLocaleString()}</div>
                  <span className={`text-xs font-medium ${h.pnl >= 0 ? "text-primary" : "text-red-400"}`}>
                    {h.pnl >= 0 ? "+" : ""}{h.pnlPercent}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// COPY TRADING PANEL
function CopyTradingPanel() {
  return (
    <div className="space-y-6">
      <div className="bg-primary/5 border border-primary/10 rounded-lg p-4">
        <p className="text-xs text-muted">
          <span className="font-medium text-primary">Planned Feature:</span>
          Automated copy trading is planned for Phase 04. This preview does not
          execute transactions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {copyTraders.map((trader) => (
          <Card key={trader.id}>
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-border bg-bg-secondary flex items-center justify-center">
                    <span className="text-xs font-bold text-muted">{trader.label[0]}</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">{trader.label}</div>
                    <div className="text-xs text-muted font-mono">{trader.wallet}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-mono font-bold text-primary">{trader.totalReturn}</div>
                  <div className="text-xs text-muted">Total Return</div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-6">
                <div>
                  <div className="text-[10px] uppercase text-muted font-bold">Win Rate</div>
                  <div className="text-sm text-white">{trader.winRate}%</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase text-muted font-bold">Max Drawdown</div>
                  <div className="text-sm text-white">{trader.maxDrawdown}%</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase text-muted font-bold">Followers</div>
                  <div className="text-sm text-white">{trader.followers}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase text-muted font-bold">Trades</div>
                  <div className="text-sm text-white">{trader.totalTrades}</div>
                </div>
              </div>

              <p className="text-[10px] uppercase text-muted font-bold mb-2">Recent Trades</p>
              {trader.recentTrades.map((t, i) => (
                <div key={i} className="flex items-center justify-between py-1.5 border-b border-border/50 last:border-0">
                  <span className="text-xs text-muted">{t.token}</span>
                  <span className={`text-xs font-mono ${t.type === "BUY" ? "text-primary" : "text-red-400"}`}>{t.type}</span>
                  <span className="text-xs font-medium text-white">{t.pnl}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
