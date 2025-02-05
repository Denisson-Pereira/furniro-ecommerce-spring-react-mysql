import { describe } from "vitest";
import { promotionValue } from "./promotionValue";

describe("Promotion values function", () => {
    it("Should promote products", () => {
        const promotion = promotionValue(50, "1000");

        expect(promotion).toEqual("500");
        expect(promotion).not.toEqual(500);
    })
})