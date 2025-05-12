import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from '.';

const meta = {
  title: 'Components/Inputs/Checkbox',
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Omit<Story, 'args'> = {
  render: () => <Checkbox id="story-checkbox" label="Input" />,
};

export const Disabled: Omit<Story, 'args'> = {
  render: () => <Checkbox id="story-checkbox" label="Input" disabled />,
};

export const Description: Omit<Story, 'args'> = {
  render: () => <Checkbox id="story-checkbox" label="Input" description="Optional input description" />,
};
