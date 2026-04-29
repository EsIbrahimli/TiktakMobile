import { create } from "zustand";
import {
  getBasket,
  addToBasket,
  removeFromBasket,
  clearBasket,
  deleteAllFromBasket,
} from "../services/basketService";

interface BasketItem {
  product_id: number;
  name: string;
  quantity: number;
  total_price: number;
  img_url?: string;
}

interface BasketState {
  items: BasketItem[];
  total_price: number;
  loading: boolean;
  error: string | null;

  fetchBasket: () => Promise<void>;
  addItem: (id: number) => Promise<void>;
  removeItem: (id: number) => Promise<void>;
  removeAllOfItem: (id: number) => Promise<void>;
  clearAll: () => Promise<void>;
}

export const useBasketStore = create<BasketState>((set) => ({
  items: [],
  total_price: 0,
  loading: false,
  error: null,

  fetchBasket: async () => {
    set({ loading: true });
    try {
      const basket = await getBasket();
      set({
        items: basket.items || [],
        total_price: basket.total_price || 0,
      });
    } catch {
      set({ error: "Basket yüklənmədi" });
    } finally {
      set({ loading: false });
    }
  },

  addItem: async (id) => {
    const basket = await addToBasket(id);
    set({ items: basket.items, total_price: basket.total_price });
  },

  removeItem: async (id) => {
    const basket = await removeFromBasket(id);
    set({ items: basket.items, total_price: basket.total_price });
  },

  removeAllOfItem: async (id) => {
    const basket = await deleteAllFromBasket(id);
    set({ items: basket.items, total_price: basket.total_price });
  },

  clearAll: async () => {
    const basket = await clearBasket();
    set({ items: basket.items, total_price: basket.total_price });
  },
}));