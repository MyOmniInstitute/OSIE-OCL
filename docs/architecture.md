# OSIE-OCL — Public Architecture Overview

The **OSIE-OCL (Public Coordination Layer)** is a deterministic, disclosure-safe
subset of the full OSIE Structural Architecture.  
It provides a lightweight public mechanism for evaluating emotional-volatility 
axes and generating safe coordination recommendations without exposing any
internal OSIE physics, indices, or law-structures.

---

## 🧱 What OCL *Is*

- A minimal public layer for interpreting axis divergence  
- A stable, open-source TypeScript module  
- A deterministic evaluator (no machine learning, no training data)  
- A simplified surface for research, demos, and agent builders  

---

## 🔒 What OCL *Is Not*

- It does **not** reveal OSIE’s internal mathematics  
- It does **not** expose systemic fragility indices (ELI, PEI, PLD)  
- It does **not** include sovereign-scale or corporate-scale structural physics  
- It does **not** compute regenerative/extractive flows  

This ensures the core OSIE engine remains sovereign and protected.

---

## 📊 Public Axis Model

OCL evaluates five emotional-volatility axes:

- **rage**
- **euphoria**
- **dread**
- **copium**
- **chaos**

Each axis operates on a 0–100 range.

---

## 🧮 Core Mechanics

### 1. **Mismatch**
Measures magnitude of divergence between current and baseline state.

```
mismatch = sqrt(Σ (current_i - baseline_i)²) / 5
```

### 2. **Coherence**
Inverse of mismatch:

```
coherence = 100 - mismatch
```

### 3. **Volatility Classification**
- `< 20`  → **Stable**  
- `< 50`  → **Tense**  
- `>= 50` → **Critical**

### 4. **Action Selector**
Maps volatility → recommended behavior:
- Stable → Thread / Post  
- Tense → Post  
- Critical → Meme  

---

## 🧠 Why This Layer Exists

This module allows the public to work with a small, safe portion of OSIE without
exposing:

- internal indices  
- structural thresholds  
- multi-layer physics  
- regenerative flow models  
- sovereign diagnostic logic  

OCL provides *just enough* structure for experimentation, without leaking the
intellectual foundation that powers OSIE.

---

## 📌 Versioning Policy

- OCL follows semantic versioning (`v1.x.x`).  
- Breaking changes will only occur with explicit version bumps.  
- The internal OSIE engine may evolve independently and is not public.

---

© 2025 Chris Meadows / Omni Institute
