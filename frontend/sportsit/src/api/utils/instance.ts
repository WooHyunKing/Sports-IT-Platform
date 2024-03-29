import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "http://localhost:8080/api/";

const axiosConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
};

export const baseApi = axios.create(axiosConfig);
