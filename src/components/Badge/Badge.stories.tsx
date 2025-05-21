import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from '..';
import Badge from '.';

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
    children: 'Badge',
  },
  argTypes: {
    appearance: {
      options: ['default', 'light', 'outline'],
      control: { type: 'radio' },
    },
    children: {
      control: { type: 'text' },
    },
  },
  render: (args) => <Badge>{args.children}</Badge>,
};

export const Default: Omit<Story, 'args'> = {
  render: () => <BadgeGrid />,
};
