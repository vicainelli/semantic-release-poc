import { expect, test } from "bun:test";
import { sayHello } from "./index.ts";

test("sayHello", () => {
	expect(sayHello("World")).toBe("Hello, World!");
});
