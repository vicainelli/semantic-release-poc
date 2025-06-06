import { expect, test } from "bun:test";
import { sayHello } from "@/lib/say-hello";

test("sayHello", () => {
	expect(sayHello("World!")).toBe("Hello, World!");
});
