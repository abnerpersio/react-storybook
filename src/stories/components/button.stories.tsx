import { Button } from '@/ui/components/button';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Default',
    variant: 'default',
    size: 'default',
    onClick: action('onClick'),
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['default', 'sm', 'lg', 'icon'],
    },
    variant: {
      control: 'inline-radio',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Padrão',
  args: {
    children: 'Default',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};
