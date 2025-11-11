
// utils/api.ts
import axios from "axios";
console.log("Base URL:", process.env.NEXT_PUBLIC_API_URL);


const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
    ? `${process.env.NEXT_PUBLIC_API_URL}/api`
    : "http://127.0.0.1:8000/api",
  withCredentials: false, // keep this false if you're using JWT (not cookies)
});

export default API;
