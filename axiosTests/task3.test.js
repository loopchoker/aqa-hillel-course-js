import { describe, test, expect, jest, afterEach } from "@jest/globals";
import axios from "axios";
import { getUserName, createPost } from "./task3.js";

afterEach(() => {
    jest.restoreAllMocks(); // put the real axios methods back after each test
});

describe("Task 3: mocked axios", () => {
    test("getUserName returns the name on success", async () => {
        jest.spyOn(axios, "get").mockResolvedValue({
            status: 200,
            data: { id: 1, name: "Mocked User" },
        });

        const name = await getUserName(1);

        expect(name).toBe("Mocked User");
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/users/1");
    });

    test("getUserName returns 'User not found' on 404", async () => {
        const error = new Error("Request failed with status code 404");
        error.response = { status: 404 };
        jest.spyOn(axios, "get").mockRejectedValue(error);

        const name = await getUserName(999);

        expect(name).toBe("User not found");
    });

    test("getUserName throws on a network failure", async () => {
        jest.spyOn(axios, "get").mockRejectedValue(new Error("Network Error"));

        await expect(getUserName(1)).rejects.toThrow("Service unavailable");
    });

    test("createPost returns the new id on success", async () => {
        const newPost = { title: "Test", body: "Mocked", userId: 1 };
        jest.spyOn(axios, "post").mockResolvedValue({
            status: 201,
            data: { ...newPost, id: 42 },
        });

        const id = await createPost(newPost);

        expect(id).toBe(42);
        expect(axios.post).toHaveBeenCalledWith(
            "https://jsonplaceholder.typicode.com/posts",
            newPost,
        );
    });

    test("createPost throws if the status is not 201", async () => {
        jest.spyOn(axios, "post").mockResolvedValue({ status: 500, data: {} });

        await expect(createPost({ title: "Test" })).rejects.toThrow("Post was not created");
    });
});
