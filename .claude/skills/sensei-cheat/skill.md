---
name: sensei-cheat
description: Quick C# syntax cheat sheet on demand. Use when the user says "cheat sheet", "remind me", "what's the syntax again", or needs a fast reference without a full explanation.
user-invocable: true
---

# TypeScript + React Cheat Sheet

Fast syntax reference — no questions, no coaching. Just the answer.

## If no argument given — show the most commonly forgotten things:
```
TypeScript
──────────────────────────────────────────────────────
Generic function:      function identity<T>(x: T): T { return x }
Utility types:         Partial<T>  Required<T>  Pick<T,'a'|'b'>  Omit<T,'a'>
Record type:           Record<string, number>
Type narrowing:        if (typeof x === 'string') { ... }
Discriminated union:   type Shape = { kind: 'circle'; r: number } | { kind: 'rect'; w: number; h: number }
Non-null assert:       element!.focus()    ← avoid if possible
Satisfies operator:    const config = { ... } satisfies Config
As const:              const roles = ['admin', 'viewer'] as const

React
──────────────────────────────────────────────────────
Typed props:           interface Props { name: string; count?: number }
useState with type:    const [user, setUser] = useState<User | null>(null)
Change event:          (e: React.ChangeEvent<HTMLInputElement>) => e.target.value
Click event:           (e: React.MouseEvent<HTMLButtonElement>) => { ... }
useEffect cleanup:     useEffect(() => { return () => cleanup() }, [dep])
useRef DOM:            const ref = useRef<HTMLInputElement>(null)
useRef mutable:        const count = useRef(0)   ← count.current++
Typed context:         const Ctx = createContext<User | undefined>(undefined)
forwardRef:            const Comp = forwardRef<HTMLDivElement, Props>((props, ref) => ...)
```

## If an argument is given (e.g. "generics", "useEffect", "utility types", "hooks")
Show a focused cheat sheet for just that topic — 8-12 lines max, code only, minimal prose.
After the code block, add a one-line **Why:** that explains when and why you'd reach for this pattern.

## Tone
- Zero fluff. Reference card energy.
- The **Why:** line is the exception — one sentence of context so the syntax sticks.
- If they want a deeper explanation, they'll use /sensei-syntax or /sensei-qa instead.
