import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from './Input';

export default {
    title: 'Form/Input',
    component: Input,
    argTypes: {
        id: {
            control: 'text',
            defaultValue: 'testField',
        },
        type: {
            control: 'text',
            defaultValue: 'text',
        },
        label: {
            control: 'text',
            defaultValue: 'Label Text',
        },
        placeholder: {
            control: 'text',
            defaultValue: '',
        },
        disabled: {
            control: 'boolean',
            defaultValue: false,
        },
        required: {
            control: 'boolean',
            defaultValue: false,
        },
        touched: {
            description: 'formik touched object',
            control: 'object',
            defaultValue: {},
        },
        errors: {
            description: 'formik errors object',
            control: 'object',
            defaultValue: {},
        },
        handleChange: {
            description: 'formik handleChange handler',
            defaultValue: () => {}
        },
        handleBlur: {
            description: 'formik handleBlur handler',
            defaultValue: () => {}
        },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Error = Template.bind({});
Error.args = {
    touched: { testField: true },
    errors: { testField: 'Error message' },
};
