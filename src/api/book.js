import { axiosInstance } from "./axios";

export const getBooks = async () => {
    try {
        const res = await axiosInstance.get("api/book_data/");
        return res;
    } catch (error) {
        return error.response;
    }

}

export const addElementBook = async (book) => {
    try {
        const res = await axiosInstance.post("api/book_data/", book);
        return res;
    } catch (error) {
        return error.response;
    }
}