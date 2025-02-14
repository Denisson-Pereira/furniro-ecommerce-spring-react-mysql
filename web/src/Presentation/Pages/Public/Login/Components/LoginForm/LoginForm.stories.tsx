import { BrowserRouter } from "react-router-dom";
import { LoginForm } from "./LoginFormView";
import { I18nextProvider } from "react-i18next";
import i18n from "../../../../../Translate";
import { Meta, StoryObj } from "@storybook/react";

export default {
    title: 'Login/Components/LoginForm',
    component: LoginForm,
    decorators: [
        (Story) => {
            return (
                <BrowserRouter>
                    <I18nextProvider i18n={i18n}>
                        {Story()}
                    </I18nextProvider>
                </BrowserRouter>
            )
        }
    ]
} as Meta

export const Default: StoryObj = {}