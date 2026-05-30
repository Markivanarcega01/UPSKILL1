// Phase 5 — useContext + useReducer as global state
// Exercise: wrap the cart reducer in a context so any component can access it
//
// YOUR TASK: fill in the three TODOs below.

import { createContext, useContext } from "react";
import { useCartReducer, CartState, CartAction } from "./phase5-use-reducer";

// --- Context shape ---

type CartStateContextValue = {
  state: CartState;
  //dispatch: React.Dispatch<CartAction>;
};

type CartDispatchContextValue = {
  dispatch: React.Dispatch<CartAction>;
};

// TODO 1: Create CartContext using createContext
// Hint: initial value is null — you'll guard against that in useCart()
export const CartStateContext = createContext<CartStateContextValue | null>(
  null,
);
export const CartDispatchContext =
  createContext<CartDispatchContextValue | null>(null);

// --- Provider ---

// TODO 2: Build CartProvider
// It should call useCartReducer() and pass state + dispatch into CartContext.Provider
export function CartProvider({ children }: { children: React.ReactNode }) {
  const { state, dispatch } = useCartReducer();
  return (
    <CartStateContext.Provider value={{ state }}>
      <CartDispatchContext.Provider value={{ dispatch }}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
}

// --- Consumer hook ---

// TODO 3: Build useCart()
// It should read from CartContext and throw if used outside CartProvider
export function useCartState() {
  const ctxstate = useContext(CartStateContext);
  if (!ctxstate) throw new Error("useCart must be used inside <CartProvider>");
  return ctxstate;
}
export function useCartDispatch() {
  const ctxdispatch = useContext(CartDispatchContext);
  if (!ctxdispatch)
    throw new Error("useCart must be used inside <CartProvider>");
  return ctxdispatch;
}
