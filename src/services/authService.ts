import apiClient from "./instance";

export const loginUser = async (data: {
  phone: string;
  password: string;
}) => {
  const response = await apiClient.post("/auth/login", data);
  return response.data;
};

export const registerUser = async (data: {
  full_name: string;
  phone: string;
  password: string;
}) => {
  const response = await apiClient.post("/auth/signup", data);
  return response.data;
};