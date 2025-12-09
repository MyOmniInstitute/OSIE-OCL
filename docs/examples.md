# OSIE-OCL Example Evaluations

This document provides simple, public demonstrations of how the OCL module
evaluates axis states and produces a coordination recommendation.

---

## Example 1 — Calm Baseline

**Input**
```json
{
  "current":  { "rage": 10, "euphoria": 15, "dread": 8, "copium": 12, "chaos": 10 },
  "baseline": { "rage": 12, "euphoria": 14, "dread": 10, "copium": 12, "chaos": 12 }
}

Output
{
  "coherence": 92,
  "mismatch": 3,
  "volatility": "Stable",
  "action": "Thread",
  "timestamp": 1733870000000
}

Interpretation
Low divergence → Stable → Safe for structured action (threading, analysis).

⸻

Example 2 — Medium Divergence / Tense State

Input

{
  "current":  { "rage": 40, "euphoria": 22, "dread": 30, "copium": 50, "chaos": 32 },
  "baseline": { "rage": 15, "euphoria": 14, "dread": 12, "copium": 18, "chaos": 10 }
}
Output
{
  "coherence": 58,
  "mismatch": 29,
  "volatility": "Tense",
  "action": "Post",
  "timestamp": 1733870100000
}
Interpretation
Moderate mismatch → Tense → Use caution, limit complexity.

⸻

Example 3 — Critical Volatility

Input
{
  "current":  { "rage": 90, "euphoria": 5, "dread": 85, "copium": 10, "chaos": 92 },
  "baseline": { "rage": 12, "euphoria": 14, "dread": 10, "copium": 12, "chaos": 12 }
}
Output
{
  "coherence": 14,
  "mismatch": 72,
  "volatility": "Critical",
  "action": "Meme",
  "timestamp": 1733870200000
}
Interpretation
High mismatch + high chaos → Critical → Only lightweight expressive outputs.

⸻

Notes

These examples are purely demonstrative and do not expose or imply OSIE’s
internal physics, indices, or analytic laws.
They exist to show how the public-facing OCL module behaves under varying
input conditions.
