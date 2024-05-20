import { axiosInstance } from "./axios";

export const getConciliations = async () => {
    try {
        const res = await axiosInstance.get("/api/conciliation/");
        return res;
    } catch (error) {
        return error.response;
    }
}

export const createConciliation = async (data) => {
    try {
        const res = await axiosInstance.post("/api/conciliation/", data);
        return res;
    } catch (error) {
        return error.response;
    }
}