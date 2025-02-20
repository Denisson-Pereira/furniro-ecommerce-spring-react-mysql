import { I18nextProvider } from "react-i18next";
import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Check } from ".";
import { AuthContextProvider } from "../../../../../Context/authContext";
import i18n from "../../../../../Translate";
import { CartContextProvider } from "../../../../../Context/cartContext";

export default {
    title: 'Cart/Components/Check',
    component: Check,
    decorators: [
        (Story) => {
            return (
                <BrowserRouter>
                    <CartContextProvider>
                        <AuthContextProvider>
                            <I18nextProvider i18n={i18n}>
                                {Story()}
                            </I18nextProvider>
                        </AuthContextProvider>
                    </CartContextProvider>
                </BrowserRouter>
            )
        }
    ]
} as Meta

export const Default: StoryObj = {}