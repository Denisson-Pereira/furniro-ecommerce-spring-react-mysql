import { I18nextProvider } from "react-i18next";
import { Meta, StoryObj } from "@storybook/react";
import { ErrorPage } from ".";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "../../Context/authContext";
import i18n from "../../Translate";

export default {
    title: 'Error',
    component: ErrorPage,
    decorators: [
        (Story) => {
            return (
                <BrowserRouter>
                    <AuthContextProvider>
                        <I18nextProvider i18n={i18n}>
                            {Story()}
                        </I18nextProvider>
                    </AuthContextProvider>
                </BrowserRouter>
            )
        }
    ]
} as Meta

export const Default: StoryObj = {}