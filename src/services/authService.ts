import apiClient from "./instance";

export const loginApi = async (phone, password) => {
  return await apiClient.post("/auth/login", {
    phone,
    password,
  });
};

export const registerApi = async (fullName, phone, password) => {
  return await apiClient.post("/auth/signup", {
    full_name: fullName,
    phone,
    password,
  });
};