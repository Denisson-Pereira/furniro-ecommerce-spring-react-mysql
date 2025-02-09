import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { describe, it } from "vitest";
import i18n from "../../../../../Translate";
import { BrowserRouter } from "react-router-dom";
import { Browse } from ".";

describe("Browse Component", () => {
    it("should render correctly and match snapshot", async () => {
        const { container } = render(
            <BrowserRouter>
                <I18nextProvider i18n={i18n}>
                    <Browse />
                </I18nextProvider>
            </BrowserRouter>
        );

        expect(screen.getByText(/Browse the Range/)).toBeInTheDocument();

        const text2 = await screen.findByText(/Living/);
        expect(text2).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });
});
