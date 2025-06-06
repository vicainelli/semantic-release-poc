import { expect, test } from "bun:test";
import { sayGoodbye } from "@/lib/say-goodbye";

test("sayGoodbye", () => {
	expect(sayGoodbye("World")).toBe("Goodbye, World!");
});
