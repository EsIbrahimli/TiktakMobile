import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const apiClient = axios.create({
  baseURL: "https://api.sarkhanrahimli.dev/api/tiktak",
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});


apiClient.interceptors.request.use(async(config) => {
  const token = await AsyncStorage.getItem("token");
  console.log(config.headers.Authorization);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default apiClient;
