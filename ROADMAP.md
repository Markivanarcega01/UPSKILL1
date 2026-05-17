# UPSKILL1 Roadmap — Senior React/TypeScript

Goal: interview-ready for senior React/TypeScript roles.
Tooling: Vite + React 18 + TypeScript (strict) + Vitest + React Testing Library.

Progress key: `[x]` done · `[ ]` todo · `→` YOU ARE HERE

---

## Phase 1 — TypeScript Fundamentals

> Fill the type-system gaps. Senior TS devs think in types first.

- [x] Annotate variables and function signatures with explicit types
- [x] Write an `interface` vs `type` alias — know when to use each
- [x] Use union types and literal types (`'admin' | 'viewer'`)
- [x] Apply utility types: `Partial<T>`, `Required<T>`, `Pick<T, K>`, `Omit<T, K>`, `Readonly<T>`
- [x] Write a generic function — understand `<T>` and constraints (`T extends object`)
- [x] Use type narrowing: `typeof`, `instanceof`, `in`, discriminated unions
- [x] Read a `tsconfig.json` — understand `strict`, `noImplicitAny`, `strictNullChecks`

**Exit gate:** You can type a real-world data shape (e.g. API response) without using `any`, and explain the trade-off between `interface` and `type`.

---

## Phase 2 — React Core + JSX

> React without hooks. Master the foundation before layering on complexity.

- [x] Write a functional component with typed props
- [x] Use optional props with defaults (`name?: string`, `name = 'Guest'`)
- [x] Handle DOM events with correct TypeScript types (`React.MouseEvent`, `React.ChangeEvent<HTMLInputElement>`)
- [x] Build a controlled input (value + onChange pair)
- [x] Render a typed list with `.map()` — understand the `key` prop requirement
- [x] Use conditional rendering (`&&`, ternary, early return)
- [x] Lift state up between two sibling components

**Exit gate:** Build a typed todo list — add, toggle, delete — no hooks beyond `useState`.

---

## Phase 3 — Hooks Deep Dive

> The gap most mid-level devs have. Senior devs know exactly why each hook exists.

- [ ] → `useEffect` — sync with an external thing (timer, subscription, localStorage)
- [ ] Explain every case: no deps array vs `[]` vs `[value]`
- [ ] Write a `useEffect` cleanup function — when and why
- [ ] `useRef` — two uses: DOM ref and mutable value that doesn't re-render
- [ ] `useCallback` — when it helps, when it's premature optimization
- [ ] `useMemo` — same: when the cost justifies it
- [ ] Write a custom hook (`useLocalStorage`, `useDebounce`, `useWindowSize`)
- [ ] Know the rules of hooks — and why they exist (linked list internals, conceptually)

**Exit gate:** Build a `useDebounce` hook with tests. Explain why `useMemo`/`useCallback` are not free.

---

## Phase 4 — Component Architecture

> How senior devs think about component design. The patterns that scale.

- [ ] Explain the single responsibility principle applied to components
- [ ] Use composition over configuration — pass children and render props
- [ ] Build a compound component (e.g. `<Tabs>` + `<Tab>` + `<TabPanel>`)
- [ ] Use `React.Children` and `cloneElement` — understand when and why
- [ ] Implement the render prop pattern
- [ ] Understand when a HOC (higher-order component) is still the right call
- [ ] Know the prop drilling problem and when to solve it (and when not to)

**Exit gate:** Refactor a deeply-nested prop-drilling component into a compound component. Explain the trade-offs.

---

## Phase 5 — State Management

> Pick the right tool. Senior devs don't reach for Redux by default.

- [ ] `useContext` + `useReducer` as a lightweight global state solution
- [ ] Know the context re-render problem — and how to fix it (split contexts, memoization)
- [ ] Zustand: set up a store, read state, write actions, use slices
- [ ] Redux Toolkit: `createSlice`, `configureStore`, `useSelector`, `useDispatch`
- [ ] State co-location rule: keep state as close to where it's used as possible
- [ ] Identify when you don't need global state (server state ≠ client state)

**Exit gate:** Build a shopping cart with Zustand. Justify why you didn't use Redux.

---

## Phase 6 — Data Fetching & Async

> Most senior interviews include a question about async data and error handling.

- [ ] Type a `fetch` call end-to-end — request, response shape, error handling
- [ ] Write a generic `useFetch` hook (then understand why TanStack Query exists)
- [ ] TanStack Query: `useQuery`, `useMutation`, query keys, stale time
- [ ] Handle loading, error, and empty states explicitly — not just happy path
- [ ] Optimistic updates with TanStack Query
- [ ] Error boundaries — what they catch, what they don't, how to use them
- [ ] `Suspense` with lazy loading — code splitting at the component level

**Exit gate:** Build a paginated list with TanStack Query — loading skeleton, error retry, optimistic delete.

---

## Phase 7 — React Performance

> Senior devs profile before they optimize. Know the tools.

- [ ] Understand when React re-renders — the 4 triggers
- [ ] `React.memo` — what it does and when it actually helps
- [ ] `useCallback` and `useMemo` for referential equality — concrete example of the problem they solve
- [ ] Use React DevTools Profiler — identify a real render bottleneck
- [ ] Code splitting with `React.lazy` + `Suspense`
- [ ] Virtualization for long lists (`react-window` or `@tanstack/react-virtual`)
- [ ] Bundle analysis — run `vite build --report` and understand what it shows

**Exit gate:** Profile a slow list render, apply the fix, and explain what you measured before/after.

---

## Phase 8 — Testing

> The skill that separates "I wrote tests" from "I know how to test React."

- [ ] Understand RTL's core philosophy: test behavior, not implementation
- [ ] Query priorities: `getByRole` > `getByLabelText` > `getByText` > `getByTestId`
- [ ] Test a form: render, interact with `userEvent`, assert on output
- [ ] Test async behavior: `waitFor`, `findBy*` queries
- [ ] Mock a module (`vi.mock`) — and know when mocking is a code smell
- [ ] Test a custom hook with `renderHook`
- [ ] Write an integration test that crosses multiple components
- [ ] Accessibility testing with `@testing-library/jest-dom` matchers

**Exit gate:** Write tests for Phase 3's `useDebounce` hook and Phase 2's todo list without touching implementation code.

---

## Phase 9 — Advanced TypeScript + Patterns

> The stuff that shows up in senior interviews and makes PRs shine.

- [ ] Conditional types: `T extends U ? X : Y`
- [ ] Mapped types: transform every key of a type
- [ ] `infer` keyword — extract a type from another type
- [ ] Polymorphic components: a `<Box as="button">` that infers the right props
- [ ] `forwardRef` with TypeScript — type the ref correctly
- [ ] Portals — render outside the React root, typed
- [ ] Design system thinking: token-based spacing, component API contracts
- [ ] Module augmentation — extend a third-party type

**Exit gate:** Build a typed polymorphic `<Button>` component that accepts an `as` prop and infers its HTML attributes.

---

## Phase 10 — Interview Ready

> Ship it. The meta-skills that close the gap between "good dev" and "hired."

- [ ] Next.js: App Router vs Pages Router — know the trade-offs
- [ ] SSR vs SSG vs ISR vs CSR — when each is appropriate
- [ ] Frontend system design: component tree, data flow, state boundaries, API contract
- [ ] Lighthouse audit a real page — identify and fix one issue
- [ ] Write a GitHub Actions workflow: install → typecheck → test → build
- [ ] Live coding practice: implement a debounce, flatten an array, build a modal — under pressure
- [ ] Behavioral questions tied to real work: "tell me about a performance problem you solved"
- [ ] Code review simulation: review a junior's PR and give constructive written feedback

**Exit gate:** Do a full mock interview (45 min): 15 min system design + 30 min live coding. Record it.

---

## Quick Reference

| Phase | Topic | Key Deliverable |
|-------|-------|----------------|
| 1 | TypeScript Fundamentals | Type an API response with zero `any` |
| 2 | React Core + JSX | Typed todo list |
| 3 | Hooks Deep Dive | `useDebounce` with tests |
| 4 | Component Architecture | Compound component refactor |
| 5 | State Management | Zustand shopping cart |
| 6 | Data Fetching | Paginated list with TanStack Query |
| 7 | Performance | Profile + fix a render bottleneck |
| 8 | Testing | RTL test suite for phases 2–3 |
| 9 | Advanced Patterns | Polymorphic `<Button>` |
| 10 | Interview Ready | Full mock interview |
