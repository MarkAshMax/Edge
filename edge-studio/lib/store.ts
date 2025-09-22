import { create } from "zustand";

export type CartItem = {
  id: string;
  prompt: string;
  device: "iphone-15-pro";
  finish: "matte" | "gloss";
  magsafe: boolean;
  price: number;
  preview: string;
};

type CartState = {
  items: CartItem[];
  add: (item: CartItem) => void;
  remove: (id: string) => void;
  clear: () => void;
  total: () => number;
};

export const useCart = create<CartState>((set, get) => ({
  items: [],
  add: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),
  remove: (id) =>
    set((state) => ({
      items: state.items.filter((entry) => entry.id !== id),
    })),
  clear: () => set({ items: [] }),
  total: () => get().items.reduce((sum, item) => sum + item.price, 0),
}));
