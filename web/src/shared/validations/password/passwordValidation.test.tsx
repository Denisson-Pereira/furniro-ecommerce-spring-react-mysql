import { describe } from "vitest";
import { passwordValidation } from "./passwordValidation";


describe("Password validation function", () => {
    it("Should validate password", () => {
        const result_default = passwordValidation("");
        const result_weak = passwordValidation("1234");
        const result_normal = passwordValidation("123456");
        const result_strong = passwordValidation("1234567890");

        expect(result_default).toEqual("");
        expect(result_weak).toEqual("Weak");
        expect(result_normal).toEqual("Normal");
        expect(result_strong).toEqual("Strong");

    })
})