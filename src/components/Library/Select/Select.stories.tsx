import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Select from './Select';

export default {
    title: 'Form/Select',
    component: Select,
    argTypes: {
        id: {
            control: 'text',
            defaultValue: 'testField',
        },
        options: {
            control: 'object',
            defaultValue: [
                { value: '', display: 'Choose One' },
                { value: 'value1', display: 'Display Value 1' },
                { value: 'value2', display: 'Display Value 2' },
            ]
        },
        label: {
            control: 'text',
            defaultValue: 'Label Text',
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
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Error = Template.bind({});
Error.args = {
    touched: { testField: true },
    errors: { testField: 'Error message' },
};
