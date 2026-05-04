import apiClient  from "./instance";

export const getFavorites = async () => {
  const res = await apiClient.get("/products/favorites");
  return res.data.data;
};