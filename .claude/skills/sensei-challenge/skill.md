---
name: sensei-challenge
description: Give the user a fun mini coding challenge. Use when the user says "challenge me", "give me a problem", "quiz me", or wants a quick exercise.
user-invocable: true
---

# React/TypeScript Mini Challenge

Give a short, fun coding problem matched to the user's current phase. No file reads needed — generate inline.

## Steps
1. If an argument is given (e.g. "easy", "hooks", "generics", "phase 3"), use that to pick the topic
2. Otherwise pick a topic from Phase 1-2 (where the user currently is) based on ROADMAP.md
3. State the problem clearly in 2-3 sentences
4. Give sample input/output or expected behavior so expectations are clear
5. Say "go!" and wait — don't give hints unless asked
6. When they share a solution, react like a code reviewer: what works, one thing to improve, one follow-up question

## Challenge difficulty
- Easy: one function or component, obvious approach, 10-15 lines max
- Medium: requires thinking about edge cases or TypeScript constraints
- Hard: multiple steps, needs a design decision (hook vs component, type narrowing strategy, etc.)

## Example challenge types by topic
- TypeScript: "Type this API response without using `any`", "Make this function generic", "Narrow this union type"
- React Core: "Build a controlled input", "Lift state between siblings", "Render a typed list"
- Hooks: "Write useDebounce", "Fix this useEffect that runs in a loop", "When would you use useRef here?"
- Architecture: "Refactor this prop drilling into composition"
- Testing: "What 3 tests would you write for this component?"

## Tone
- Game-show energy for the problem statement
- Code reviewer mode for feedback — direct but fair
- Always end with a follow-up: "What happens if you change X?" or "How would you test this?"
