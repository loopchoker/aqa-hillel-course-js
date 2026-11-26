import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getUserName(id) {
    try {
        const response = await axios.get(`${BASE_URL}/users/${id}`);
        return response.data.name;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return "User not found";
        }
        throw new Error("Service unavailable", { cause: error });
    }
}

export async function createPost(post) {
    const response = await axios.post(`${BASE_URL}/posts`, post);
    if (response.status !== 201) {
        throw new Error("Post was not created");
    }
    return response.data.id;
}
