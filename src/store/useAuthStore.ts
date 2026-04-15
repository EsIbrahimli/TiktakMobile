import { create } from "zustand";

type AuthState = {
  user: any;
  accessToken: string | null;
  refreshToken: string | null;
  isLoggedIn: boolean;

  setAuth: (data: any) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,

  setAuth: (data) =>
    set({
      user: data.profile,
      accessToken: data.tokens.access_token,
      refreshToken: data.tokens.refresh_token,
      isLoggedIn: true,
    }),

  logout: () =>
    set({
      user: null,
      accessToken: null,
      refreshToken: null,
      isLoggedIn: false,
    }),
}));