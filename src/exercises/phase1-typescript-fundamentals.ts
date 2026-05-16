// Phase 1 — TypeScript Fundamentals
// Each exercise has an `any` or loose type as a placeholder.
// Your job: replace them with correct, specific types.
// Run: npm test (watch) or /sensei-fire to check your work.

// ─── Exercise 1: Basic types ─────────────────────────────────────────────────
// Replace `any` with explicit primitive types
export let username: string = "ada";
export let age: number = 34;
export let isActive: boolean = true;

// ─── Exercise 2: Function signatures ─────────────────────────────────────────
// Replace `any` in params and return type with correct types
export function greet(name: string, greeting: string): string {
  return `${greeting}, ${name}!`;
}

// ─── Exercise 3: Interface ────────────────────────────────────────────────────
// Define a User interface above getUserLabel:
//   id: number, name: string, email: string, role: 'admin' | 'viewer'
// Then replace `any` in the parameter with it
interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "viewer";
}

export function getUserLabel(user: User): string {
  return `${user.name} (${user.role})`;
}

// ─── Exercise 4: Array types ──────────────────────────────────────────────────
// Replace `any[]` with the correct typed arrays
export const scores: number[] = [98, 72, 85, 100];
export const tags: string[] = ["typescript", "react", "vite"];

// ─── Exercise 5: Utility types ────────────────────────────────────────────────
// This type is given to you — don't change it
export type Product = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
};

// TODO: create these two derived types using utility types
export type ProductPreview = Pick<Product, "id" | "name">; //(only id and name — use Pick<>)
export type OptionalProduct = Partial<Product>; //(all fields optional — use Partial<>)

// ─── Exercise 6: Type narrowing ───────────────────────────────────────────────
// Fix `double` so it handles both string and number inputs correctly
// Hint: use typeof narrowing inside the function body
export function double(value: string | number): number {
  if (typeof value === "string") {
    let parsedInt = parseInt(value);
    return parsedInt * 2;
  }
  return value * 2; // broken for strings — fix me
}

// ─── Exercise 7: Generics ─────────────────────────────────────────────────────
// Replace `any` with a generic type parameter so the return type matches input
export function identity<T>(value: T): T {
  return value;
}
