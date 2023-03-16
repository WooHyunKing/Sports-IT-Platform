import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "";

const axiosConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
};

export const baseApi = axios.create(axiosConfig);
