import { I18nextProvider } from 'react-i18next'
import { Beautiful } from './index'
import i18n from '../../../../../Translate'
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Home/Components/Beautiful',
    component: Beautiful,
    decorators: [
        (Story) => {
            return (
                <I18nextProvider i18n={i18n}>
                    {Story()}
                </I18nextProvider>
            )
        }
    ],
} as Meta

export const Default: StoryObj = {}