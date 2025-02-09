import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe } from "vitest";
import { Footer } from ".";

describe('Footer Component', () => {
    it('Should show text', () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        );

        const text = screen.getByText(/400 University Drive Suite 200 Coral Gables,/);
        expect(text).toBeInTheDocument();
    })
})