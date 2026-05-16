---
name: sensei-progress
description: Show roadmap progress. Use when the user says "progress", "where am I", "how far", "what have I done", or wants a summary of their learning status.
user-invocable: true
---

# React/TypeScript Progress Check

Read ROADMAP.md and summarize progress visually.

## Steps
1. Read ROADMAP.md
2. For each phase count checked `[x]` vs total `[ ]` items
3. Output a simple visual summary — one line per phase
4. Highlight the current active phase
5. End with one encouraging line about momentum

## Format
```
Phase 1 — TypeScript Fundamentals     [██░░░░░░░░] 2/7 ← current
Phase 2 — React Core + JSX            [░░░░░░░░░░] 0/7
Phase 3 — Hooks Deep Dive             [░░░░░░░░░░] 0/8
Phase 4 — Component Architecture      [░░░░░░░░░░] 0/7
Phase 5 — State Management            [░░░░░░░░░░] 0/6
Phase 6 — Data Fetching & Async       [░░░░░░░░░░] 0/7
Phase 7 — React Performance           [░░░░░░░░░░] 0/7
Phase 8 — Testing                     [░░░░░░░░░░] 0/8
Phase 9 — Advanced Patterns           [░░░░░░░░░░] 0/8
Phase 10 — Interview Ready            [░░░░░░░░░░] 0/8
```

Keep it tight — no explanations unless asked.
