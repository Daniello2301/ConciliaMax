import { axiosInstance } from "./axios";

export default async function getHistory() {
  try {
    const res = await axiosInstance.get("/api/conciliation_history/");
    return res;
  } catch (error) {
    return error.response;
  }
}

export const createHistory = async (data) => {
    try {
        const res = await axiosInstance.post("/api/conciliation_history/", data);
        return res;
    } catch (error) {
        return error.response;
    }
} 