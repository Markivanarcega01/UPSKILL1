# Error Boundaries

**Phase 6** · 2026-06-18
Tags: #react #typescript #error-handling

## TL;DR

An error boundary is a React component that catches errors thrown **during render** in its child tree and shows a fallback UI instead of crashing the whole app. It's React's `try/catch` for the render phase.

## Mental model

Errors split by *where they fire*, not whether you predicted them:

- **During render / lifecycle** → React is running your component → only an **error boundary** can catch it.
- **In your own running code** (event handlers, `setTimeout`, async / rejected fetch) → *you* catch it (`try/catch` or a `status === 'error'` state).

You can't `try/catch` a render error because **React** is the one calling your component — there's no `try` block you own around it.

## Key points

- Must be a **class component** — no hook equivalent for `getDerivedStateFromError` / `componentDidCatch`.
- `static getDerivedStateFromError(error)` → return new state to flip into the fallback (triggers re-render).
- `componentDidCatch(error, info)` → side-effect slot (log to console / Sentry).
- `fallback` is a **prop** → the parent owns *what* to show; the boundary owns *the catching*. Reusable infra.
- **Placement = blast radius.** Wrap independent sections so one crash doesn't take down the whole page.

## Code

```tsx
import { Component, ReactNode, ErrorInfo } from "react";

interface Props { children: ReactNode; fallback: ReactNode; }
interface State { hasError: boolean; }

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(_error: Error): State {
    return { hasError: true };          // only called because a child threw
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info);           // log side-effect
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}
```

Usage:

```tsx
<ErrorBoundary fallback={<p>Couldn't load this section.</p>}>
  <Recommendations />
</ErrorBoundary>
```

## Gotchas / interview traps

- Does **NOT** catch: event handlers, `setTimeout`, async / rejected promises, or SSR errors.
- TanStack Query's `throwOnError: true` re-throws a failed fetch *during render* so a boundary can catch it — flips per-component error states into one centralized handler.
- In production most people use the `react-error-boundary` package (adds `resetErrorBoundary` for retry); hand-rolling it proves you understand the mechanism underneath.

## Connects to

- [[Suspense and lazy loading]] — siblings: Suspense handles "still loading," error boundary handles "it broke."
- [[Discriminated union fetch states]] — the async-error half of the story.
- [[Optimistic updates with TanStack Query]]
