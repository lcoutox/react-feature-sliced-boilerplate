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

export const Email: Story = {
    args: {
        label: 'Email',
        placeholder: 'Enter email...',
        icon: 'email',
    },
};

export const Password: Story = {
    args: {
        label: 'Password',
        placeholder: 'Enter password...',
        icon: 'password',
        password: true,
    },
};
