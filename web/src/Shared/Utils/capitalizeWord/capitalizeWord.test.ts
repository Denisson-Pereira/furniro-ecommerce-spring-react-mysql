import { describe } from "vitest";
import { capitalizeWord } from "./capitalizeWord";

describe("Capitalize Words", () => {
    it("Should capitalize words", () => {
        const first_result = capitalizeWord("teste");
        const second_result = capitalizeWord("sECOND");

        expect(first_result).toEqual("Teste");
        expect(second_result).toEqual("Second");
        expect(second_result).not.toEqual("second");
    })
})