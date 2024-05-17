import { axiosInstance } from "./axios";

export const addRowBank = async (bank) => {
    try {
        const res = await axiosInstance.post("api/bank_data/", bank);
        return res;
    } catch (error) {
        return error.response;
    }
}