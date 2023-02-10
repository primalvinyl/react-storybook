import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';

export default {
    title: 'Form/Button',
    component: Button,
    argTypes: {
        type: {
            control: 'select',
            options: ['submit', 'button', 'reset'],
            defaultValue: 'submit',
        },
        children: {
            description: 'string or JSX',
            control: 'text',
            defaultValue: 'Submit',
        },
        className: {
            control: 'text',
            defaultValue: '',
        },
        outline: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
            defaultValue: false,
        },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    outline: false,
};

export const Outline = Template.bind({});
Outline.args = {
    outline: true,
};
