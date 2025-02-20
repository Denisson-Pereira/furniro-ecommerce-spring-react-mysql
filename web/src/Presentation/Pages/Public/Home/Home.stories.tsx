import { I18nextProvider } from "react-i18next";
import { Meta, StoryObj } from "@storybook/react";
import { Home } from ".";
import i18n from "../../../Translate";
import { AuthContextProvider } from "../../../Context/authContext";
import { BrowserRouter } from "react-router-dom";

export default {
    title: 'Home',
    component: Home,
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