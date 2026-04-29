import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.sarkhanrahimli.dev/api/tiktak",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
