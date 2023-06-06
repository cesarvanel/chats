import axios from "axios";
import { LocalStorageManager } from "../utils/localStorage/localStorage";
import { Api } from "../utils/constant/constant";

export const AxiosInstance = axios.create({});


AxiosInstance.interceptors.request.use(
  (config) => {
    const { origin } = new URL(config.url as string);
    const allowedOrigins = [Api];
    const token = LocalStorageManager.getUserAccessToken();
    if (allowedOrigins.includes(origin)) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
