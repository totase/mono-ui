import type { Meta, StoryObj } from '@storybook/react';

import Card, { CardProps } from '.';
import Flex from '../Flex';

const meta = {
  title: 'Components/Card',
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

const variants = ['0', '100', '200', '300', '400', '500'] as CardProps['variant'][];

const CardGrid = (props: CardProps) => (
  <Flex direction="column" gap="lg">
    <Flex gap="md">
      {variants.map((variant) => (
        <Card key={variant} {...props} padding="sm" variant={variant}>
          Small - {variant}
        </Card>
      ))}
    </Flex>
    <Flex gap="md">
      {variants.map((variant) => (
        <Card key={variant} {...props} padding="md" variant={variant}>
          Medium - {variant}
        </Card>
      ))}
    </Flex>
    <Flex gap="md">
      {variants.map((variant) => (
        <Card key={variant} {...props} padding="lg" variant={variant}>
          Large - {variant}
        </Card>
      ))}
    </Flex>
  </Flex>
);

export const Controls: Story = {
  args: {
    padding: 'md',
    variant: '200',
    radius: 'md',
    panel: false,
  },
  argTypes: {
    padding: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    variant: {
      options: variants,
      control: { type: 'radio' },
    },
    radius: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    panel: {
      control: { type: 'boolean' },
    },
  },
  render: (args) => <Card {...args}>Card</Card>,
};

export const Default: Omit<Story, 'args'> = {
  render: () => <CardGrid radius="md" />,
};

export const Panel: Omit<Story, 'args'> = {
  render: () => <CardGrid radius="md" panel />,
};
