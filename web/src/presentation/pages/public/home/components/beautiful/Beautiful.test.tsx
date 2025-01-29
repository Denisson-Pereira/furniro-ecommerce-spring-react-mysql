import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import { Beautiful } from ".";

describe('Beautiful Component', () => {
    it('Should show a text', () => {
        render(
            <Beautiful />
        );

        const textBox = screen.getByText(/Beautiful rooms/);
        expect(textBox).toBeInTheDocument();
    })
})