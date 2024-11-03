import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://nz-blog-backend.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
