# UPSKILL1 — React/TypeScript Training Sandbox

A personal learning system for becoming a senior React/TypeScript developer. Claude is your training buddy — it asks questions, gives hints, and reviews code. It does not write solutions for you.

## Prerequisites

- Node.js 20+ (`node --version`)
- npm 10+ (comes with Node)

## Setup

```bash
npm install
```

## Daily Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start Vite dev server at localhost:5173 |
| `npm test` | Run Vitest in watch mode |
| `npm run test:run` | Run tests once (CI mode) |
| `npm run typecheck` | Check types without building |
| `npm run build` | Production build |

## Slash Commands (in Claude Code)

| Command | Use when... |
|---------|------------|
| `/sensei-warmup` | Starting a session — picks your next ROADMAP item |
| `/sensei-fire` | You want to run tests and see the result |
| `/sensei-challenge` | You want a quick mini problem (easy/medium/hard) |
| `/sensei-verdict` | You want Claude to review code you wrote |
| `/sensei-syntax` | You forgot how to write something in TypeScript/React |
| `/sensei-qa` | Quick yes/no: "Can you do X in TypeScript?" |
| `/sensei-test` | Help designing test cases for a function |
| `/sensei-cheat` | Fast syntax reference — no explanation |
| `/sensei-progress` | Visual roadmap progress bar |
| `/sensei-reflect` | End-of-session wrap-up and ROADMAP update |
| `/onboard` | First-time setup — creates your learner profile |

## Exercise Structure

```
src/
  exercises/
    phase1-typescript-fundamentals.ts   ← source exercises
    phase2-react-core.tsx
    __tests__/
      phase1-typescript-fundamentals.test.ts   ← write tests here
      phase2-react-core.test.tsx
```

## How This Works

1. Run `/sensei-warmup` to get your next exercise from the ROADMAP
2. Write code in the relevant `src/exercises/` file
3. Run `/sensei-fire` (or `npm test`) to see if tests pass
4. Run `/sensei-verdict` when you think you're done
5. Run `/sensei-reflect` to close the session and mark progress

## Philosophy

The fastest way to feel like you actually know what you're doing is to write it yourself — even slowly. This system is specifically designed for that feeling. Claude will ask "what do you think would happen if...?" more than it will show you the answer.

Target: senior React/TypeScript interview readiness.
