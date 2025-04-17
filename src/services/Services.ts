import axios from "axios";

// Criando conexão com o backend
export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})