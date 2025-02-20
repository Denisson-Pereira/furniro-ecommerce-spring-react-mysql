import { I18nextProvider } from "react-i18next";
import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "../../../../../Context/authContext";
import i18n from "../../../../../Translate";
import { Description } from ".";
import { CartContextProvider } from "../../../../../Context/cartContext";
import { FavoritiesContextProvider } from "../../../../../Context/favoritiesContext";

export default {
    title: 'ProductDetails/Components/Description',
    component: Description,
    decorators: [
        (Story) => {
            return (
                <BrowserRouter>
                    <CartContextProvider>
                        <FavoritiesContextProvider>
                            <AuthContextProvider>
                                <I18nextProvider i18n={i18n}>
                                    {Story()}
                                </I18nextProvider>
                            </AuthContextProvider>
                        </FavoritiesContextProvider>
                    </CartContextProvider>
                </BrowserRouter>
            )
        }
    ]
} as Meta

export const Default: StoryObj = {}