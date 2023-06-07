import { Meta, StoryObj } from '@storybook/react';
import TextInput from './text-input';

const meta: Meta<typeof TextInput> = {
    title: 'Components/TextInput',
    component: TextInput,
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
    args: {
        label: 'Label',
        placeholder: 'Enter text...',
    },
};
