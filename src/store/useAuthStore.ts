import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginApi, registerApi } from "./../services/authService";

export const useAuthStore = create((set) => ({
  loading: false,
  token: null,

  login: async (payload) => {
    set({ loading: true });

    try {
      const response = await loginApi(payload.phone, payload.password);

      const token = response?.data?.data?.tokens?.access_token;

      if (!token) {
        throw new Error("Token tapılmadı");
      }

      await AsyncStorage.setItem("token", token);

      set({ token });

      return { token };

    } finally {
      set({ loading: false });
    }
  },

  signup: async (payload) => {
    set({ loading: true });

    try {
      const response = await registerApi(
        payload.fullName,
        payload.phone,
        payload.password
      );

      const token = response?.data?.data?.tokens?.access_token;

      if (token) {
        await AsyncStorage.setItem("token", token);
        set({ token });
        return { token };
      }

      return null;

    } finally {
      set({ loading: false });
    }
  },

  logout: async () => {
    await AsyncStorage.removeItem("token");
    set({ token: null });
  },
}));