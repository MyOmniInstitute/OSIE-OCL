//
// OSIE-OCL — Public Coordination Layer Kernel
// Deterministic, disclosure-safe, no OSIE internals exposed.
//

export type AxisState = {
  rage: number;
  euphoria: number;
  dread: number;
  copium: number;
  chaos: number;
};

export type OCLResult = {
  coherence: number;
  mismatch: number;
  volatility: "Stable" | "Tense" | "Critical";
  action: "Wait" | "Observe" | "Post" | "Thread" | "Meme";
  timestamp: number;
};

// ---------------------------------------------
// Helpers
// ---------------------------------------------

const clamp = (v: number, min = 0, max = 100) =>
  Math.max(min, Math.min(max, v));

const diff = (a: AxisState, b: AxisState) => ({
  rage: a.rage - b.rage,
  euphoria: a.euphoria - b.euphoria,
  dread: a.dread - b.dread,
  copium: a.copium - b.copium,
  chaos: a.chaos - b.chaos,
});

// ---------------------------------------------
// Core OCL Logic (Public-Safe)
// ---------------------------------------------

export function OCL(current: AxisState, baseline: AxisState): OCLResult {
  const d = diff(current, baseline);

  // mismatch = magnitude of divergence
  const mismatch =
    clamp(
      Math.sqrt(
        d.rage ** 2 +
        d.euphoria ** 2 +
        d.dread ** 2 +
        d.copium ** 2 +
        d.chaos ** 2
      ) / 5
    );

  // coherence = inverse of mismatch
  const coherence = clamp(100 - mismatch);

  // volatility classification
  let volatility: OCLResult["volatility"];
  if (mismatch < 20) volatility = "Stable";
  else if (mismatch < 50) volatility = "Tense";
  else volatility = "Critical";

  // action selection
  let action: OCLResult["action"];
  if (volatility === "Stable") action = coherence > 70 ? "Thread" : "Post";
  else if (volatility === "Tense") action = "Post";
  else action = "Meme"; // lightweight only

  return {
    coherence,
    mismatch,
    volatility,
    action,
    timestamp: Date.now(),
  };
}
