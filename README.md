# OSIE-OCL

The **OSIE-OCL (Public Coordination Layer)** is the public-facing module derived from the OSIE Structural Architecture.  
It provides a simplified, open-source interface for evaluating emotional-volatility axes and generating safe,  
public coordination recommendations.

This layer does **not** expose OSIE’s internal physics, laws, indices, or systemic architecture.  
It is intentionally constrained to a lightweight, public-safe analytical surface.

---

## 📦 Features

- Computes **coherence** and **mismatch** between a current state and baseline state  
- Classifies **volatility levels**: `Stable`, `Tense`, `Critical`  
- Produces recommended **actions**: `Wait`, `Observe`, `Post`, `Thread`, `Meme`  
- Fully open-source TypeScript module  
- Safe for public research, demos, and educational use

---

## 📁 Repository Structure

```
src/
  ocl.ts          → Core OCL computation module
docs/
  architecture.md → Description of the public-facing design
  examples.md     → Example OCL evaluations
README.md         → You are here
```

---

## 🚀 Quick Example

```ts
import { OCL } from "./src/ocl";

const current = { rage: 40, euphoria: 22, dread: 30, copium: 50, chaos: 32 };
const baseline = { rage: 15, euphoria: 14, dread: 12, copium: 18, chaos: 10 };

const result = OCL(current, baseline);
console.log(result);
```

**Example output**
```json
{
  "coherence": 58,
  "mismatch": 29,
  "volatility": "Tense",
  "action": "Post",
  "timestamp": 1733870100000
}
```

---

## 🔍 Documentation

### Architecture Overview  
See: `docs/architecture.md`

### Example Evaluations  
See: `docs/examples.md`  
These examples demonstrate behavior but do not reveal internal OSIE mechanics.

---

## ⚖️ License

MIT License  
© 2025 Chris Meadows / Omni Institute
