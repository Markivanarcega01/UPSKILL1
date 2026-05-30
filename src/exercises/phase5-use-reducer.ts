// Phase 5 — useContext + useReducer
// Exercise: build a cart reducer hook
//
// YOUR TASK: fill in the TODOs. Don't touch the types — they're done for you.

import { useEffect, useReducer } from "react";

// --- Types (already done) ---

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export type CartState = {
  items: CartItem[];
};

export type CartAction =
  | { type: "ADD_ITEM"; payload: Omit<CartItem, "quantity"> }
  | { type: "REMOVE_ITEM"; payload: { id: string } }
  | { type: "CLEAR_CART" };

// --- Reducer (you write the logic) ---

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      // TODO: if item already exists, increment its quantity
      // TODO: if item is new, add it with quantity 1
      const exists = state.items.find((item) => item.id === action.payload.id);
      if (exists) {
        return {
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      } else {
        return {
          items: [
            ...state.items,
            {
              id: action.payload.id,
              name: action.payload.name,
              price: action.payload.price,
              quantity: 1,
            },
          ],
        };
      }
    }

    case "REMOVE_ITEM": {
      // TODO: filter out the item with matching id
      return {
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    }

    case "CLEAR_CART": {
      // TODO: return an empty cart
      return { items: [] };
    }

    default:
      return state;
  }
}

// --- Hook (you wire it up) ---

const initialState: CartState = {
  items: [],
};

export function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // TODO: return state and dispatch
  // Hint: what does the caller need to read the cart and trigger actions?
  return { state, dispatch };
}
