import { expect, test } from "bun:test";
import { sum } from "@/lib/sum";

test("sum", () => {
	expect(sum([])).toBe(0);
	expect(sum([1])).toBe(1);
	expect(sum([1, 2])).toBe(3);
	expect(sum([1, 2, 3])).toBe(6);
	expect(sum([1, 2, 3, 4])).toBe(10);
	expect(sum([1, 2, 3, 4, 5])).toBe(15);
});
