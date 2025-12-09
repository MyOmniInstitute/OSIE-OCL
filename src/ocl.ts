// OSIE-OCL v1.0 — Public Coordination Layer
// Derived from OSIE Architecture © 2025 Chris Meadows / Omni Institute
// MIT License

export type Axes = {
  rage: number;      // 0-100
  euphoria: number;
  dread: number;
  copium: number;
  chaos: number;
};

export type OCLResult = {
  coherence: number;      // 0-100
  mismatch: number;       // 0-100
  volatility: "Stable" | "Tense" | "Critical";
  action: "Wait" | "Observe" | "Post" | "Meme" | "Thread";
  timestamp: number;
};

export const OCL = (current: Axes, baseline: Axes): OCLResult => {
  // 1. Coherence — directional alignment
  const coherence =
    100 - 
    Math.abs(current.rage - baseline.rage) * 0.4 -
    Math.abs(current.euphoria - baseline.euphoria) * 0.3 -
    Math.abs(current.chaos - baseline.chaos) * 0.3;

  // 2. Mismatch — total deviation (public-safe delta)
  const mismatch = Object.keys(current).reduce((sum, key) => 
    sum + Math.abs(current[key as keyof Axes] - baseline[key as keyof Axes]), 
  0) / 5;

  // 3. Volatility phase
  const volatility = coherence > 70 ? "Stable" 
                   : coherence > 40 ? "Tense" 
                   : "Critical";

  // 4. Action router (fun + functional)
  const action =
      volatility === "Stable" ? "Thread"
    : volatility === "Tense"  ? "Post"
    : coherence < 20          ? "Meme"
    : mismatch > 60           ? "Wait"
    : "Observe";

  return {
    coherence: Math.round(coherence),
    mismatch: Math.round(mismatch),
    volatility,
    action,
    timestamp: Date.now(),
  };
};
