import { create } from "zustand";
import {
  Product,
  getProductsByCategory,
  getProductById,
} from "../services/productService";

interface ProductsState {
  products: Product[];
  selectedProduct: Product | null;
  loading: boolean;

  fetchProductsByCategory: (categoryId: number) => Promise<void>;
  fetchProductById: (id: number) => Promise<void>;
  clearSelectedProduct: () => void;
}

export const useProductsStore = create<ProductsState>((set) => ({
  products: [],
  selectedProduct: null,
  loading: false,

  
  fetchProductsByCategory: async (categoryId) => {
    set({ loading: true });

    try {
      const data = await getProductsByCategory(categoryId);
      set({ products: data });
    } catch (err) {
      console.error("Products error:", err);
    } finally {
      set({ loading: false });
    }
  },

 
  fetchProductById: async (id) => {
    set({ loading: true });

    try {
      const product = await getProductById(id);
      set({ selectedProduct: product });
    } catch (err) {
      console.error("Product detail error:", err);
    } finally {
      set({ loading: false });
    }
  },


  clearSelectedProduct: () => {
    set({ selectedProduct: null });
  },
}));