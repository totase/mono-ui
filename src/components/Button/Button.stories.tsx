import type { Meta, StoryObj } from '@storybook/react-vite';

import Button from '.';
import { Flex } from '..';

const meta = {
  title: 'Components/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ButtonGrid = (props: any) => (
  <Flex gap="md">
    <Button {...props} appearance="default">
      Default
    </Button>
    <Button {...props} appearance="light">
      Light
    </Button>
    <Button {...props} appearance="outline">
      Outline
    </Button>
    <Button {...props} appearance="flat">
      Flat
    </Button>
  </Flex>
);

export const Controls: Story = {
  args: {
    children: 'Button',
    onClick: console.log,
    appearance: 'default',
    disabled: false,
    loading: false,
  },
  argTypes: {
    appearance: {
      options: ['default', 'light', 'outline', 'flat'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    children: {
      control: { type: 'text' },
    },
    ref: {
      table: {
        disable: true,
      },
    },
  },
  render: (args) => <Button {...args} />,
};

export const Default: Omit<Story, 'args'> = {
  render: () => <ButtonGrid />,
};

export const Disabled: Omit<Story, 'args'> = {
  render: () => <ButtonGrid disabled />,
};

export const Loading: Omit<Story, 'args'> = {
  render: () => <ButtonGrid loading />,
};
