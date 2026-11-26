import axios from "axios";

export async function getPostsWithConfig() {
    return axios.get("https://jsonplaceholder.typicode.com/posts", {
        headers: {
            "X-Custom-Header": "hillel-test",
            Authorization: "Bearer fake-token-123",
        },
        params: {
            userId: 1,
            _limit: 3,
        },
    });
}
