import { BrowserRouter } from "react-router-dom";
import { LoginRedes } from ".";
import { Meta, StoryObj } from "@storybook/react";

export default {
    title: 'Login/Components/LoginRedes',
    component: LoginRedes,
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