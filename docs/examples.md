# OSIE-OCL — Example Evaluations

These examples demonstrate how the public-facing OCL module behaves under
different volatility conditions.  
They do **not** reveal OSIE’s internal indices, physics, or structural laws.

---

## Example 1 — Stable

**Input**
```json
{
  "current":  { "rage": 10, "euphoria": 15, "dread": 8, "copium": 12, "chaos": 10 },
  "baseline": { "rage": 12, "euphoria": 14, "dread": 10, "copium": 12, "chaos": 12 }
}
```

**Output**
```json
{
  "coherence": 92,
  "mismatch": 3,
  "volatility": "Stable",
  "action": "Thread"
}
```

**Interpretation**  
Low divergence → Stable → Structured communication recommended.

---

## Example 2 — Tense

**Input**
```json
{
  "current":  { "rage": 40, "euphoria": 22, "dread": 30, "copium": 50, "chaos": 32 },
  "baseline": { "rage": 15, "euphoria": 14, "dread": 12, "copium": 18, "chaos": 10 }
}
```

**Output**
```json
{
  "coherence": 58,
  "mismatch": 29,
  "volatility": "Tense",
  "action": "Post"
}
```

**Interpretation**  
Moderate mismatch → Tense → Limit complexity, avoid escalation.

---

## Example 3 — Critical

**Input**
```json
{
  "current":  { "rage": 90, "euphoria": 5, "dread": 85, "copium": 10, "chaos": 92 },
  "baseline": { "rage": 12, "euphoria": 14, "dread": 10, "copium": 12, "chaos": 12 }
}
```

**Output**
```json
{
  "coherence": 14,
  "mismatch": 72,
  "volatility": "Critical",
  "action": "Meme"
}
```

**Interpretation**  
High volatility → Only lightweight, expressive actions are safe.

---

© 2025 Chris Meadows / Omni Institute
