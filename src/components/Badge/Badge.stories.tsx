import type { Meta, StoryObj } from '@storybook/react';

import Badge from '.';
import { Flex } from '..';

const meta = {
  title: 'Components/Badge',
  component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BadgeGrid = (props: any) => (
  <Flex>
    <Badge {...props} appearance="default">
      Default
    </Badge>
    <Badge {...props} appearance="light">
      Light
    </Badge>
    <Badge {...props} appearance="outline">
      Outline
    </Badge>
  </Flex>
);

export const Controls: Story = {
  args: {
    size: 'md',
    children: 'Default',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    appearance: {
      options: ['default', 'light', 'outline'],
      control: { type: 'radio' },
    },
    children: {
      control: { type: 'text' },
    },
  },
  render: (args) => <Badge size={args.size}>{args.children}</Badge>,
};

export const Small: Omit<Story, 'args'> = {
  render: () => <BadgeGrid size="sm" />,
};

export const Medium: Omit<Story, 'args'> = {
  render: () => <BadgeGrid size="md" />,
};

export const Large: Omit<Story, 'args'> = {
  render: () => <BadgeGrid size="lg" />,
};
