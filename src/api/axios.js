import axios from "axios";

const URL = "http://localhost:8000";

export const axiosInstance = axios.create({
    baseURL: URL,
    headers: {
        "Content-Type": "application/json",
    },
});