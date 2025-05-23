import type { Meta, StoryObj } from '@storybook/react';

import Input from '.';

const meta = {
  title: 'Components/Form/Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Omit<Story, 'args'> = {
  render: () => <Input id="story-input" label="Input" />,
};

export const Disabled: Omit<Story, 'args'> = {
  render: () => <Input id="story-input" label="Input" disabled />,
};

export const Description: Omit<Story, 'args'> = {
  render: () => <Input id="story-input" label="Input" description="Optional description" />,
};
