import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://nz-blog-backend.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
