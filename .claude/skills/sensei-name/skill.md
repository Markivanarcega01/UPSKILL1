---
name: sensei-name
description: Quick C# naming helper. Use when the user says "name this", "what should I call", "name for", or needs a name for a method, variable, test, class, or parameter.
user_invocable: true
arguments:
  - name: thing
    description: What needs naming — e.g. "test for useDebounce", "variable for selected user", "hook for window size"
    required: true
---

# Name It — TypeScript/React Naming Helper

The user gives you a thing that needs a name. You give back 1-2 good names. That's it.

## Rules
- Follow TypeScript/React conventions:
  - **Components:** PascalCase (`UserCard`, `TodoList`)
  - **Hooks:** camelCase with `use` prefix (`useDebounce`, `useLocalStorage`)
  - **Functions/methods:** camelCase (`getUserLabel`, `handleSubmit`)
  - **Variables:** camelCase (`isLoading`, `selectedUser`, `itemCount`)
  - **Types/Interfaces:** PascalCase (`UserProps`, `ApiResponse`, `TodoItem`)
  - **Constants:** SCREAMING_SNAKE_CASE for true constants (`MAX_RETRIES`), camelCase for config objects
  - **Test descriptions:** plain English sentence ("returns undefined when input is empty")
- Names should be self-documenting — no abbreviations unless universally understood (`id`, `url`, `ref`)
- Boolean names: prefix with `is`, `has`, `can`, `should` (`isOpen`, `hasError`, `canSubmit`)
- Event handlers: prefix with `handle` or `on` (`handleClick`, `onClose`)
- Max 2 suggestions. First one is your recommendation.
- No explanation unless the user asks why.

## Format
```
→ useDebounce
```

One line. Done.
