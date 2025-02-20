import { I18nextProvider } from "react-i18next";
import i18n from "../../../../../Translate";
import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Browse } from ".";

export default {
    title: 'Home/Components/Browse',
    component: Browse,
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