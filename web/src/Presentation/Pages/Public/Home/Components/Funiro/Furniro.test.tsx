import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { describe, it, expect } from "vitest";
import i18n from "../../../../../Translate";
import { Funiro } from ".";
import { MemoryRouter } from "react-router-dom";

describe("Funiro Component", () => {
    it("should render Funiro component with translated text", () => {
        const { container } = render(
            <MemoryRouter>
                <I18nextProvider i18n={i18n}>
                    <Funiro />
                </I18nextProvider>
            </MemoryRouter>
        );

        expect(screen.getByText(i18n.t("home.title4"))).toBeInTheDocument();

        expect(screen.getByText("#FuniroFurniture")).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });
});
