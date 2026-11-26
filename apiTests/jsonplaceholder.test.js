import axios from "axios";
import { describe, test, expect } from "@jest/globals";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

describe("JSONPlaceholder API", () => {
    test("GET /posts/1 returns a single post", async () => {
        const response = await api.get("/posts/1");

        expect(response.status).toBe(200);
        expect(response.data).toEqual({
            userId: 1,
            id: 1,
            title: expect.any(String),
            body: expect.any(String),
        });
    });

    test("GET /posts?userId=1 returns only that user's posts", async () => {
        const response = await api.get("/posts", { params: { userId: 1 } });

        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true);
        expect(response.data).toHaveLength(10);
        response.data.forEach((post) => {
            expect(post.userId).toBe(1);
        });
    });

    test("GET /users/1 returns the correct user", async () => {
        const response = await api.get("/users/1");

        expect(response.status).toBe(200);
        expect(response.data.id).toBe(1);
        expect(response.data.name).toBe("Leanne Graham");
        expect(response.data.email).toBe("Sincere@april.biz");
        expect(response.data).toHaveProperty("address.city");
        expect(response.data).toHaveProperty("company.name");
    });

    test("POST /posts creates a new post", async () => {
        const newPost = {
            title: "My test post",
            body: "Created with axios",
            userId: 1,
        };

        const response = await api.post("/posts", newPost);

        expect(response.status).toBe(201);
        expect(response.data).toEqual({ ...newPost, id: 101 });
    });

    test("POST /comments creates a new comment", async () => {
        const newComment = {
            postId: 1,
            name: "Test comment",
            email: "tester@example.com",
            body: "Great post!",
        };

        const response = await api.post("/comments", newComment);

        expect(response.status).toBe(201);
        expect(response.data).toMatchObject(newComment);
        expect(response.data.id).toBe(501);
    });
});
