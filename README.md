<p align="center">
  <img src="https://raw.githubusercontent.com/MyOmniInstitute/OSIE-OCL/main/1B859E78-68F9-4F8E-995C-8BBEC4320A27.png" 
       alt="OSIE-OCL Banner" 
       width="100%">
</p>
# OSIE-OCL — Public Coordination Layer

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)  
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)]()  
[![Status: Public Module](https://img.shields.io/badge/Status-Public%20Layer-brightgreen.svg)]()

The **OSIE-OCL (Public Coordination Layer)** is the open-source, public-facing module derived from the OSIE Structural Architecture.  
It provides a simplified interface for evaluating emotional-volatility axes and generating safe, deterministic  
public coordination recommendations.

This layer does **not** expose OSIE’s internal physics, proprietary indices, or systemic laws.  
It is intentionally restricted to a lightweight, public-safe analytical surface.

---

## 📦 Features

- Computes **coherence** and **mismatch** between a current and baseline state  
- Classifies **volatility phases**: `Stable`, `Tense`, `Critical`  
- Produces recommended **actions**: `Wait`, `Observe`, `Post`, `Thread`, `Meme`  
- Fully open-source TypeScript module  
- Deterministic execution, no training data, no proprietary physics  
- Safe for public demos, research, integrations, and agent experiments  

---

## 📥 Installation

Clone the repository:

```bash
git clone https://github.com/MyOmniInstitute/OSIE-OCL.git
cd OSIE-OCL
npm install
```

Import into a TypeScript project:

```ts
import { OCL } from "./src/ocl";
```

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

**Example Output**
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
These examples demonstrate the behavior of the public-facing layer but do **not** reveal OSIE’s internal mechanics.

---

## ⚖️ License

MIT License  
© 2025 Chris Meadows / Omni Institute
