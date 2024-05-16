import { axiosInstance } from "./axios";

export const login = async (user) => {
    try {
        const res = await axiosInstance.post("/login", user);
        return res;
    } catch (error) {
        return error.response;
    }
}

export const signup = async (user) => {
    try {
        const res = await axiosInstance.post("/signup", user);
        return res;
    } catch (error) {
        return error.response;
    }
}