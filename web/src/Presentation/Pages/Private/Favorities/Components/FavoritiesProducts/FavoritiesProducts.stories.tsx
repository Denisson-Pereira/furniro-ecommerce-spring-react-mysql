import { I18nextProvider } from "react-i18next";
import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "../../../../../Context/authContext";
import i18n from "../../../../../Translate";
import { FavoritiesProducts } from ".";
import { FavoritiesContextProvider } from "../../../../../Context/favoritiesContext";

export default {
    title: 'Favorities/Components/FavoritiesProducts',
    component: FavoritiesProducts,
    decorators: [
        (Story) => {
            return (
                <BrowserRouter>
                    <FavoritiesContextProvider>
                        <AuthContextProvider>
                            <I18nextProvider i18n={i18n}>
                                {Story()}
                            </I18nextProvider>
                        </AuthContextProvider>
                    </FavoritiesContextProvider>
                </BrowserRouter>
            )
        }
    ]
} as Meta

export const Default: StoryObj = {}