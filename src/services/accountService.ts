import apiClient from "./instance";

// export const accountService = {
//   getProfile: async () => {
//     const res = await apiClient.get("/profile");
//     return res.data.data;
//   },

//   updateProfile: async (data: any) => {
//     const res = await apiClient.put("/profile", data);
//     return res.data.data;
//   },
// };
export const accountService = {
  getProfile: async () => {
    return {
      id: 1,
      full_name: "Test User",
      phone: "0501234567",
      address: "Baku",
      img_url: null,
    };
  },

  updateProfile: async (data: any) => {
    return data; // sadəcə geri qaytarır
  },
};