import type { Meta, StoryObj } from '@storybook/react';

import Toggle from '.';

const meta = {
  title: 'Components/Inputs/Toggle',
  component: Toggle,
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Omit<Story, 'args'> = {
  render: () => <Toggle id="story-checkbox" label="Input" />,
};

export const Disabled: Omit<Story, 'args'> = {
  render: () => <Toggle id="story-checkbox" label="Input" disabled />,
};

export const Description: Omit<Story, 'args'> = {
  render: () => <Toggle id="story-checkbox" label="Input" description="Optional input description" />,
};
