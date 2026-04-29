import { create } from "zustand";
import apiClient from "../services/instance";

interface SearchState {
  query: string;
  results: any[];
  loading: boolean;
  setQuery: (q: string) => void;
  searchProducts: (q: string) => Promise<void>;
}

export const useSearchStore = create<SearchState>((set) => ({
  query: "",
  results: [],
  loading: false,

  setQuery: (q) => set({ query: q }),

 searchProducts: async (q) => {
  if (!q) {
    set({ results: [] });
    return;
  }

  try {
    set({ loading: true });

    const res = await apiClient.get(`/products/search?query=${q}`);

    set({
      results: res.data,
      loading: false,
    });
  } catch (error) {
    console.log(error);
    set({ loading: false });
  }
},
}));