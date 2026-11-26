import axios from "axios";

export async function fetchData(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(`Request failed with status ${error.response.status}`, {
                cause: error,
            });
        }
        throw new Error(`Network error: ${error.message}`, { cause: error });
    }
}
