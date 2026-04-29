import { create } from "zustand";
import { accountService } from "../services/accountService";

type User = {
  id: number;
  full_name: string;
  phone: string;
  address: string | null;
  img_url: string | null;
};

type State = {
  user: User | null;
  loading: boolean;
  getUser: () => Promise<void>;
  updateUser: (data: any) => Promise<void>;
};

export const useUserStore = create<State>((set) => ({
  user: null,
  loading: false,

  getUser: async () => {
    set({ loading: true });
    try {
      const data = await accountService.getProfile();
      set({ user: data });
    }catch (err) {
    console.log("GET USER ERROR:", err?.response || err);
    }
     finally {
      set({ loading: false });
    }
   
  },

  updateUser: async (data) => {
    set({ loading: true });
    try {
      const updated = await accountService.updateProfile(data);
      set({ user: updated });
    } finally {
      set({ loading: false });
    }

  },
}));