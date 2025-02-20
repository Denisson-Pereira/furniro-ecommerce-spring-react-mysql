import { BrowserRouter } from "react-router-dom";
import { ImageLogin } from ".";
import { Meta, StoryObj } from "@storybook/react";

export default {
    title: 'Login/Components/ImageLogin',
    component: ImageLogin,
    decorators: [
        (Story) => {
            return (
                <BrowserRouter>
                    {Story()}
                </BrowserRouter>
            )
        }
    ]
} as Meta

export const Default: StoryObj= {}