import { describe, test, expect } from "@jest/globals";
import { fetchData } from "./task1.js";

describe("Task 1: error handling", () => {
    test("returns a 404 error message for a wrong endpoint", async () => {
        await expect(
            fetchData("https://jsonplaceholder.typicode.com/wrong-endpoint"),
        ).rejects.toThrow("Request failed with status 404");
    });

    test("returns a network error message for a non-existent domain", async () => {
        await expect(fetchData("https://this-domain-does-not-exist.invalid")).rejects.toThrow(
            "Network error",
        );
    });
});
