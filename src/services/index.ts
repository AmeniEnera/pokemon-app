import axios from "axios";

export const baseURL = `https://api.pokemontcg.io/`;
export const httpClient = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
