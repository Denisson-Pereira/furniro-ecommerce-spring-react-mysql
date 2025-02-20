import { BrowserRouter } from "react-router-dom";
import { LoginFormOr } from ".";
import { Meta, StoryObj } from "@storybook/react";

export default {
    title: 'Login/Components/LoginFormOr',
    component: LoginFormOr,
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