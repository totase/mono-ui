import type { Meta, StoryObj } from '@storybook/react';

import Textarea from '.';

const meta = {
  title: 'Components/Form/Textarea',
  component: Textarea,
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Omit<Story, 'args'> = {
  render: () => <Textarea id="story-textarea" label="Textarea" />,
};

export const Disabled: Omit<Story, 'args'> = {
  render: () => <Textarea id="story-textarea" label="Textarea" disabled />,
};

export const Description: Omit<Story, 'args'> = {
  render: () => <Textarea id="story-textarea" label="Textarea" description="Optional input description" />,
};
