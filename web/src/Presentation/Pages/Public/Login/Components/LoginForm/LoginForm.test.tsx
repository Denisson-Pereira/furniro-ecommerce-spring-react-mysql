import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, it } from "vitest";
import { AuthContextProvider } from "../../../../../Context/authContext";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "../../../../../Translate";
import { LoginForm } from ".";
import { Storage } from "../../../../../../Shared/Constants";

describe("LoginForm Component", () => {
    it("should show login process", async () => {
        render(
            <AuthContextProvider>
                <BrowserRouter>
                    <I18nextProvider i18n={i18n}>
                        <LoginForm />
                    </I18nextProvider>
                </BrowserRouter>
            </AuthContextProvider>
        );

        fireEvent.change(screen.getByPlaceholderText(i18n.t("login.emailInput")), {
            target: { value: Storage.EMAILTEST },
        });

        fireEvent.change(screen.getByPlaceholderText("******"), {
            target: { value: "wrongPassword" },
        });

        const buttonSubmit = screen.getByTestId("login-button");
        fireEvent.click(buttonSubmit);

        await waitFor(async () => {
            const erroMessage = await screen.findByText(i18n.t("login.btn"));
            expect(erroMessage).toBeInTheDocument();
        })
    });
})