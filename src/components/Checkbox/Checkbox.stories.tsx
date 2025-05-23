import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from '.';

const meta = {
  title: 'Components/Form/Checkbox',
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Omit<Story, 'args'> = {
  render: () => <Checkbox id="story-checkbox" label="Checkbox" />,
};

export const Disabled: Omit<Story, 'args'> = {
  render: () => <Checkbox id="story-checkbox" label="Checkbox" disabled />,
};

export const Description: Omit<Story, 'args'> = {
  render: () => <Checkbox id="story-checkbox" label="Checkbox" description="Optional description" />,
};
