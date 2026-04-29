import axios from "axios";

const API_URL = "http://10.0.2.2:8000"; 

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export const getBasket = async () => {
  const res = await axiosInstance.get("/basket");
  return res.data.data || res.data;
};

export const addToBasket = async (productId: number) => {
  const res = await axiosInstance.post(`/basket/${productId}/add`);
  return res.data.data || res.data;
};

export const removeFromBasket = async (productId: number) => {
  const res = await axiosInstance.post(`/basket/${productId}/remove`);
  return res.data.data || res.data;
};

export const clearBasket = async () => {
  const res = await axiosInstance.delete(`/basket/clear`);
  return res.data.data || res.data;
};

export const deleteAllFromBasket = async (productId: number) => {
  const res = await axiosInstance.delete(`/basket/${productId}/remove-all`);
  return res.data.data || res.data;
};