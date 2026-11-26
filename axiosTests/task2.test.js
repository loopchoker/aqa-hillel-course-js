import { describe, test, expect } from "@jest/globals";
import { getPostsWithConfig } from "./task2.js";

describe("Task 2: custom headers and params", () => {
    test("sends custom headers", async () => {
        const response = await getPostsWithConfig();

        // What axios was configured with
        expect(response.config.headers["X-Custom-Header"]).toBe("hillel-test");
        expect(response.config.headers.Authorization).toBe("Bearer fake-token-123");

        // What was actually sent over the network
        expect(response.request.getHeader("x-custom-header")).toBe("hillel-test");
        expect(response.request.getHeader("authorization")).toBe("Bearer fake-token-123");
    });

    test("sends URL params", async () => {
        const response = await getPostsWithConfig();

        expect(response.config.params).toEqual({ userId: 1, _limit: 3 });
        expect(response.request.path).toBe("/posts?userId=1&_limit=3");
    });

    test("the server applied the params", async () => {
        const response = await getPostsWithConfig();

        expect(response.status).toBe(200);
        expect(response.data).toHaveLength(3);
        response.data.forEach((post) => expect(post.userId).toBe(1));
    });
});
