import apiClient from "./instance";

export const accountService = {
  getProfile: async () => {
    const res = await apiClient.get("/profile");
    return res.data.data;
  },

  updateProfile: async (data: any) => {
    const res = await apiClient.put("/profile", data);
    return res.data.data;
  },
};
