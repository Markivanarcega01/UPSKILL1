---
name: sensei-fire
description: Run the React/TypeScript project tests and show output. Use when the user says "fire it", "fire", "run it", "test it", "try it", "run my code", or wants to see the output without typing npm test themselves.
user-invocable: true
---

# React/TypeScript Fire — Run Tests

Run `npm run test:run` from the repo root (`C:\Projects\UPSKILL1`) and report results.

## Steps
1. Run `npm run test:run` from the repo root
2. Show a **summary**: X passed, X failed, X skipped
3. For each **failing test**: show the test name, expected vs actual, and the line — then give one hint, don't fix it
4. For **TypeScript errors**: show the error, identify the line, give one hint about the type issue
5. If **all pass**: say so and ask "want to add more edge cases?"
6. If **no tests exist yet**: say "no tests written yet — try `/sensei-test` to get started"

## Tone
- Matter-of-fact about results
- Encouraging when tests pass
- Diagnostic (not fixing) when they fail — ask "what do you think the type mismatch is here?"
