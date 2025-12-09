# OSIE-OCL Architecture Overview

OSIE-OCL (Coordination Layer) is a public-facing module derived from the broader
OSIE (Operational Structural Integrity Engine) conceptual framework.

This module does *not* contain OSIE’s internal indices, physics, or systemic
analytics. Instead, it provides a safe, open coordination layer that:
- receives simple directional signals,
- compares them against baselines,
- evaluates coherence and mismatch,
- classifies volatility,
- and recommends a lightweight coordination action.

## 1. Axes

The OCL analyzes five axes:

- rage – adversarial activation
- euphoria – positive destabilizing activation
- dread – anticipatory fear
- copium – cognitive denial
- chaos – unstructured noise

Each value is expressed on a 0–100 scale.

These axes do *not* correspond to OSIE’s internal indices (ELI, PEI, PLD).
They represent a simplified interface for experimentation and coordination.

---

## 2. Coherence Computation

Coherence represents directional alignment.  
Mismatch represents directional divergence.

Both are computed using a weighted deviation between current axes and the
baseline state.

Values: 0–100

---

## 3. Volatility Classification

Based on total mismatch + chaos:

- Stable – low divergence  
- Tense – medium divergence  
- Critical – high divergence  

This provides a simple behavioral envelope for downstream models.

---

## 4. Recommended Action

The OCL suggests one of the following:

- Wait  
- Observe  
- Post  
- Meme  
- Triage  

These are placeholders for public-safe experimentation and are not linked to
OSIE’s internal operational stack.

---

## 5. Timestamp

Each evaluation returns a Unix timestamp for synchronization with external
systems.

---

## Purpose of This Module

The OCL provides a *public coordination interface* for research and AI
experiments while preserving sovereignty over OSIE’s core engine.

This module:
- establishes authorship and namespace priority,
- defines a safe conceptual layer,
- and enables demonstration of coordination logic without exposing OSIE itself.
