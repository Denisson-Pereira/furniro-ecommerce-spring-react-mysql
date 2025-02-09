import { describe } from "vitest";
import { monetaryUnit } from "./monetaryUnit";

describe("Monetary Units function", () => {
    it("Should format products values", () => {
        const result = monetaryUnit("1000");
        const not_result = monetaryUnit("50");

        expect(result).toEqual("$1,000.00");
        expect(not_result).not.toEqual("$50");

    })
})