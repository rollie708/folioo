/**
 * Mock data for the Folio trading terminal demo.
 * All data is illustrative and clearly marked as DEMO DATA.
 * No real wallet connection, real trading, or real blockchain transactions.
 */

export interface DemoToken {
  id: string;
  name: string;
  ticker: string;
  price: number;
  marketCap: number;
  volume24h: number;
  priceChange24h: number;
  liquidity: number;
  trending: boolean;
  category: string;
}

export interface DemoTrade {
  id: string;
  wallet: string;
  token: string;
  type: "BUY" | "SELL";
  amount: number;
  value: number;
  timestamp: string;
}

export interface DemoHolding {
  id: string;
  token: string;
  ticker: string;
  amount: number;
  value: number;
  costBasis: number;
  pnl: number;
  pnlPercent: number;
}

export interface DemoTransaction {
  id: string;
  type: "BUY" | "SELL" | "TRANSFER";
  token: string;
  amount: number;
  value: number;
  date: string;
  status: "completed" | "pending" | "failed";
}

export interface DemoWalletActivity {
  id: string;
  wallet: string;
  label: string;
  token: string;
  action: "ACCUMULATING" | "DISTRIBUTING" | "TRANSFER";
  amount: number;
  value: number;
  timestamp: string;
}

export interface DemoSignal {
  id: string;
  title: string;
  description: string;
  signal: string;
  confidence: number;
  type: "VOLUME" | "LIQUIDITY" | "PRICE" | "WHALE";
}

export interface DemoRoadmapPhase {
  phase: string;
  title: string;
  description: string;
  items: string[];
  status: "planned" | "in-progress" | "completed";
}

export interface DemoFeature {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

// MARKET OVERVIEW DATA
export const marketOverview = {
  totalMarketActivity: "$12.4B",
  totalMarketActivityChange: "+12.4%",
  trendingTokens: 847,
  trendingTokensChange: "+12",
  volume24h: "$4.2B",
  volume24hChange: "-3.2%",
  priceMovement: "Neutral",
  marketPerformance: {
    bullish: 58,
    bearish: 42,
  },
};

// TOKEN DISCOVERY DATA
export const demoTokens: DemoToken[] = [
  {
    id: "1",
    name: "Skye Finance",
    ticker: "SKYE",
    price: 0.0042,
    marketCap: 42000000,
    volume24h: 3800000,
    priceChange24h: 24.5,
    liquidity: 2100000,
    trending: true,
    category: "DeFi",
  },
  {
    id: "2",
    name: "Nexa Pulse",
    ticker: "NEXA",
    price: 1.24,
    marketCap: 124000000,
    volume24h: 15600000,
    priceChange24h: -8.3,
    liquidity: 8900000,
    trending: false,
    category: "Infrastructure",
  },
  {
    id: "3",
    name: "Aether Gaming",
    ticker: "AETH",
    price: 0.087,
    marketCap: 87000000,
    volume24h: 9200000,
    priceChange24h: 15.7,
    liquidity: 4300000,
    trending: true,
    category: "Gaming",
  },
  {
    id: "4",
    name: "Zenith Protocol",
    ticker: "ZEN",
    price: 3.15,
    marketCap: 315000000,
    volume24h: 28000000,
    priceChange24h: -2.1,
    liquidity: 15000000,
    trending: false,
    category: "DeFi",
  },
  {
    id: "5",
    name: "Lumen AI",
    ticker: "LUM",
    price: 0.156,
    marketCap: 15600000,
    volume24h: 2100000,
    priceChange24h: 42.8,
    liquidity: 980000,
    trending: true,
    category: "AI",
  },
  {
    id: "6",
    name: "Orbit Exchange",
    ticker: "ORB",
    price: 0.67,
    marketCap: 67000000,
    volume24h: 5400000,
    priceChange24h: -1.4,
    liquidity: 3200000,
    trending: false,
    category: "Exchange",
  },
  {
    id: "7",
    name: "Nova Chain",
    ticker: "NOVA",
    price: 15.80,
    marketCap: 1580000000,
    volume24h: 45000000,
    priceChange24h: 5.2,
    liquidity: 28000000,
    trending: false,
    category: "Layer 1",
  },
  {
    id: "8",
    name: "Flux Storage",
    ticker: "FLX",
    price: 0.023,
    marketCap: 23000000,
    volume24h: 1100000,
    priceChange24h: -12.6,
    liquidity: 750000,
    trending: false,
    category: "Storage",
  },
];

// WHALE TRACKER DATA
export const whaleActivity: DemoWalletActivity[] = [
  {
    id: "1",
    wallet: "0x7f3a...1c4e",
    label: "Whale Alpha",
    token: "SKYE",
    action: "ACCUMULATING",
    amount: 2450000,
    value: 10290,
    timestamp: "2m ago",
  },
  {
    id: "2",
    wallet: "0x9b2d...8e31",
    label: "Institutional B",
    token: "NEXA",
    action: "DISTRIBUTING",
    amount: 890000,
    value: 1103600,
    timestamp: "14m ago",
  },
  {
    id: "3",
    wallet: "0x44a1...0f99",
    label: "Smart Wallet C",
    token: "AETH",
    action: "ACCUMULATING",
    amount: 125000,
    value: 10875,
    timestamp: "28m ago",
  },
  {
    id: "4",
    wallet: "0x11e7...d2c5",
    label: "Whale Delta",
    token: "ZEN",
    action: "DISTRIBUTING",
    amount: 45000,
    value: 141750,
    timestamp: "1h ago",
  },
  {
    id: "5",
    wallet: "0x8c3b...7a12",
    label: "Institutional D",
    token: "LUM",
    action: "ACCUMULATING",
    amount: 450000,
    value: 70200,
    timestamp: "2h ago",
  },
];

// AI SCANNER DATA
export const aiSignals: DemoSignal[] = [
  {
    id: "1",
    title: "Unusual Volume Activity",
    description:
      "Trading volume has increased compared with the recent average, while liquidity has also grown. This may indicate renewed trader interest.",
    signal: "Volume +340% vs 24h average",
    confidence: 78,
    type: "VOLUME",
  },
  {
    id: "2",
    title: "Whale Accumulation Pattern",
    description:
      "Multiple large wallets have begun accumulating this token over the past 6 hours, with minimal distribution.",
    signal: "5 wallets accumulating",
    confidence: 65,
    type: "WHALE",
  },
  {
    id: "3",
    title: "Liquidity Expansion",
    description:
      "Total liquidity has expanded significantly, reducing slippage risk for larger position sizes.",
    signal: "Liquidity +62%",
    confidence: 82,
    type: "LIQUIDITY",
  },
];

// PORTFOLIO DATA
export const portfolioSummary = {
  totalValue: "$84,250.40",
  totalValueChange: "+3.4%",
  unrealizedPnL: "+$2,140.50",
  unrealizedPnLPercent: "+2.6%",
  assetAllocation: [
    { name: "DeFi", value: 34200, percent: 40.6, color: "#19C784" },
    { name: "Infrastructure", value: 18500, percent: 22.0, color: "#83E6B5" },
    { name: "Gaming", value: 12500, percent: 14.8, color: "#19C784" },
    { name: "AI", value: 9800, percent: 11.6, color: "#83E6B5" },
    { name: "Other", value: 9250, percent: 11.0, color: "#19C784" },
  ],
};

export const demoHoldings: DemoHolding[] = [
  {
    id: "1",
    token: "Skye Finance",
    ticker: "SKYE",
    amount: 450000,
    value: 1890,
    costBasis: 1440,
    pnl: 450,
    pnlPercent: 31.2,
  },
  {
    id: "2",
    token: "Nexa Pulse",
    ticker: "NEXA",
    amount: 12000,
    value: 14880,
    costBasis: 15600,
    pnl: -720,
    pnlPercent: -4.6,
  },
  {
    id: "3",
    token: "Aether Gaming",
    ticker: "AETH",
    amount: 85000,
    value: 7395,
    costBasis: 6800,
    pnl: 595,
    pnlPercent: 8.7,
  },
  {
    id: "4",
    token: "Zenith Protocol",
    ticker: "ZEN",
    amount: 3200,
    value: 10080,
    costBasis: 10560,
    pnl: -480,
    pnlPercent: -4.5,
  },
  {
    id: "5",
    token: "Lumen AI",
    ticker: "LUM",
    amount: 150000,
    value: 23400,
    costBasis: 18000,
    pnl: 5400,
    pnlPercent: 30.0,
  },
];

export const recentTransactions: DemoTransaction[] = [
  {
    id: "1",
    type: "BUY",
    token: "SKYE",
    amount: 250000,
    value: 1050,
    date: "2026-11-09",
    status: "completed",
  },
  {
    id: "2",
    type: "SELL",
    token: "NEXA",
    amount: 3000,
    value: 3720,
    date: "2026-11-08",
    status: "completed",
  },
  {
    id: "3",
    type: "BUY",
    token: "LUM",
    amount: 100000,
    value: 15600,
    date: "2026-11-07",
    status: "completed",
  },
  {
    id: "4",
    type: "TRANSFER",
    token: "ZEN",
    amount: 500,
    value: 1575,
    date: "2026-11-06",
    status: "pending",
  },
];

// COPY TRADING DATA
export const copyTraders = [
  {
    id: "1",
    wallet: "0x7f3a...1c4e",
    label: "Alpha Trader",
    totalReturn: "+142.5%",
    winRate: 78,
    maxDrawdown: 12.4,
    followers: 1240,
    totalTrades: 3420,
    recentTrades: [
      { token: "SKYE", type: "BUY", pnl: "+4.2%" },
      { token: "AETH", type: "BUY", pnl: "+8.1%" },
      { token: "ZEN", type: "SELL", pnl: "-1.3%" },
    ],
  },
  {
    id: "2",
    wallet: "0x9b2d...8e31",
    label: "Quantum Capital",
    totalReturn: "+89.2%",
    winRate: 71,
    maxDrawdown: 8.9,
    followers: 890,
    totalTrades: 2150,
    recentTrades: [
      { token: "NEXA", type: "SELL", pnl: "+3.8%" },
      { token: "LUM", type: "BUY", pnl: "+12.4%" },
      { token: "ORB", type: "BUY", pnl: "+2.1%" },
    ],
  },
];

// ROADMAP DATA
export const roadmap: DemoRoadmapPhase[] = [
  {
    phase: "Phase 01",
    title: "Foundation",
    description:
      "Core platform architecture, Robinhood Chain integration, market data infrastructure, and wallet connectivity.",
    items: [
      "Platform architecture",
      "Robinhood Chain integration",
      "Market data infrastructure",
      "Wallet connectivity",
    ],
    status: "planned",
  },
  {
    phase: "Phase 02",
    title: "Trading Terminal",
    description:
      "Trading interface, advanced charts, token discovery, and portfolio dashboard.",
    items: [
      "Trading interface",
      "Advanced charts",
      "Token discovery",
      "Portfolio dashboard",
    ],
    status: "planned",
  },
  {
    phase: "Phase 03",
    title: "Market Intelligence",
    description:
      "AI scanner, whale tracking, token safety analysis, and market alerts.",
    items: ["AI scanner", "Whale tracking", "Token safety analysis", "Market alerts"],
    status: "planned",
  },
  {
    phase: "Phase 04",
    title: "Advanced Tools",
    description:
      "Copy trading, advanced wallet analytics, and enhanced portfolio insights.",
    items: [
      "Copy trading",
      "Advanced wallet analytics",
      "Enhanced portfolio insights",
    ],
    status: "planned",
  },
];

// FEATURES DATA
export const features = [
  {
    id: 1,
    title: "Smart Token Discovery",
    description:
      "Find emerging tokens and monitor market activity across Robinhood Chain.",
    icon: "Search",
    color: "#19C784",
  },
  {
    id: 2,
    title: "AI-Powered Market Scanner",
    description:
      "Identify unusual market activity and explain potential opportunities using on-chain signals.",
    icon: "Zap",
    color: "#83E6B5",
  },
  {
    id: 3,
    title: "Whale Tracking",
    description:
      "Monitor large wallets, transactions, and accumulation patterns across the network.",
    icon: "Eye",
    color: "#19C784",
  },
  {
    id: 4,
    title: "Token Safety",
    description:
      "Analyze contract permissions, liquidity, and suspicious token activity before you trade.",
    icon: "Shield",
    color: "#83E6B5",
  },
  {
    id: 5,
    title: "Advanced Trading Charts",
    description:
      "Explore market movements with advanced charting tools, timeframes, and technical indicators.",
    icon: "BarChart3",
    color: "#19C784",
  },
  {
    id: 6,
    title: "Copy Trading",
    description:
      "Discover and follow wallet strategies with configurable limits and safeguards.",
    icon: "Copy",
    color: "#83E6B5",
  },
  {
    id: 7,
    title: "Portfolio Analytics",
    description:
      "Monitor holdings, performance, and trading history in one unified view.",
    icon: "PieChart",
    color: "#19C784",
  },
  {
    id: 8,
    title: "Unified Trading",
    description:
      "Bring token discovery, market analysis, and trading execution together in one place.",
    icon: "Terminal",
    color: "#83E6B5",
  },
];
