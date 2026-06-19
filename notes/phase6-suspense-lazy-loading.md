# Suspense + Lazy Loading

**Phase 6** · 2026-06-19
Tags: #react #typescript #suspense #code-splitting

## TL;DR
`React.lazy` defers a component's download into its own bundle chunk; `<Suspense>` shows a fallback while that chunk loads. The magic: a not-ready lazy component *throws a Promise*, and Suspense catches it — same machinery as an Error Boundary, different payload.

## Mental model
Suspense and Error Boundary are **siblings** — both catch something a child *throws* during render:

- **ErrorBoundary** catches a thrown **Error** → something *failed* → show fallback (maybe retry).
- **Suspense** catches a thrown **Promise** → something *isn't ready yet* → show fallback, then re-render when it resolves.

A Suspense fallback is a **loading** state, not a *retry* state. Nothing failed — the chunk is just in transit for the first time.

## Key points
- Static `import x from './x'` at the top of a file = bundled eagerly, ships on page load.
- Dynamic `import('./x')` = a **function that returns a Promise**. The bundler splits that module into a separate chunk, fetched on demand.
- `lazy()` takes a *function* (`() => import(...)`) — a recipe to load later, not the loaded thing. Drop the arrow and it fires immediately, defeating the point.
- `lazy` only works with **default exports** out of the box: it reaches for `.default` on the resolved module object.

## Code
```tsx
import { lazy, Suspense, useState } from 'react';

const Dashboard = lazy(() => import('./Dashboard')); // default export

function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(true)}>Open Dashboard</button>
      {show && (
        <Suspense fallback={<>Loading…</>}>
          <Dashboard />
        </Suspense>
      )}
    </div>
  );
}
```

Named export? Remap it to `default` yourself:
```tsx
const Dashboard = lazy(() =>
  import('./stuff').then((m) => ({ default: m.Dashboard }))
);
```

## Gotchas / interview traps
- **Why default-only?** React grabs `.default` off the resolved module — named exports are `undefined` there unless you remap.
- **"Retrying" ≠ "Loading"** — Suspense fallback is the first-load state; nothing has failed.
- Forgetting the `() =>` wrapper → import fires eagerly, no code splitting.
- Suspense catches a **Promise**, not an Error — pairing it *with* an ErrorBoundary covers both "still loading" and "load failed."

## Connects to
- [[phase6-error-boundary]]
- [[phase7-code-splitting]]
- [[phase7-react-performance]]
