import type { Meta, StoryObj } from '@storybook/react-vite';

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
  <Flex gap="md">
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
    size: {
      options: ['regular', 'small'],
      control: { type: 'radio' },
    },
    children: {
      control: { type: 'text' },
    },
  },
  render: (args) => <Badge {...args} />,
};

export const Default: Omit<Story, 'args'> = {
  render: () => <BadgeGrid />,
};

export const Small: Omit<Story, 'args'> = {
  render: () => <BadgeGrid size="small" />,
};
