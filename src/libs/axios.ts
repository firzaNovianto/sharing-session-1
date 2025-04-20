import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://pokeapi.co",
  headers: {
    "Content-Type": "application/json",
  },
});