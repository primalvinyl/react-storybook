import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProgressIndet from './ProgressIndet';

export default {
    title: 'Misc/ProgressIndet',
    component: ProgressIndet,
    argTypes: {
        id: {
            control: 'text',
            defaultValue: 'progressTest',
        },
        className: {
            control: 'text',
            defaultValue: '',
        },
    },
} as ComponentMeta<typeof ProgressIndet>;

const Template: ComponentStory<typeof ProgressIndet> = (args) => <ProgressIndet {...args} />;

export const Default = Template.bind({});
Default.args = {};
