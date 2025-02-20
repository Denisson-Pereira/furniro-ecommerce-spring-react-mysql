import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "../../../../../Translate";
import { Meta, StoryObj } from "@storybook/react";
import { Funiro } from ".";

export default {
    title: 'Home/Components/Funiro',
    component: Funiro,
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