import { create } from "zustand";

type Product = {
  id: number;
  title: string;
  price: number;
};

type CartItem = Product & {
  quantity: number;
};

type CheckoutState = {
  items: CartItem[];
  addToCart: (product: Product) => void;
  clearCart: () => void;
};

export const useCheckoutStore = create<CheckoutState>((set) => ({
  items: [],

  addToCart: (product) =>
    set((state) => {
      const exist = state.items.find((i) => i.id === product.id);

      if (exist) {
        return {
          items: state.items.map((i) =>
            i.id === product.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }

      return {
        items: [...state.items, { ...product, quantity: 1 }],
      };
    }),

  clearCart: () => set({ items: [] }),
}));