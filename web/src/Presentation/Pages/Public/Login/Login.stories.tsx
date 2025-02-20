import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { Meta, StoryObj } from "@storybook/react";
import { Login } from ".";
import i18n from "../../../Translate";

export default {
    title: 'Login',
    component: Login,
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