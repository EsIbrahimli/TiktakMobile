import { create } from "zustand";
import { getFavorites } from "../services/favoritesService";

export interface FavoriteItem {
  id: number;
  title: string;
  price: number;
  img_url: string;
}

export interface FavoritesStore {
  favorites: FavoriteItem[];
  toggleFavorite: (item: FavoriteItem) => void;
  isFavorite: (id: number) => boolean;
  fetchFavorites: () => Promise<void>;
}

export const useFavoritesStore = create<FavoritesStore>((set, get) => ({
  favorites: [],

  toggleFavorite: (item: FavoriteItem) => {
    const exists = get().favorites.find((f) => f.id === item.id);

    if (exists) {
      set({
        favorites: get().favorites.filter((f) => f.id !== item.id),
      });
    } else {
      set({
        favorites: [...get().favorites, item],
      });
    }
  },

  isFavorite: (id: number) => {
    return get().favorites.some((f) => f.id === id);
  },

  fetchFavorites: async () => {
    try {
      const data = await getFavorites();
      set({ favorites: Array.isArray(data) ? data : [] });
    } catch (err) {
      console.log("Favorites fetch error:", err);
      set({ favorites: [] });
    }
  },
}));