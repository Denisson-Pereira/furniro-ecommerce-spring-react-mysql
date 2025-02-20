import { I18nextProvider } from "react-i18next";
import { Meta, StoryObj } from "@storybook/react";
import { ContactForm } from ".";
import { BrowserRouter } from "react-router-dom";
import i18n from "../../../../../Translate";

export default {
    title: 'Contact/ContactForm',
    component: ContactForm,
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