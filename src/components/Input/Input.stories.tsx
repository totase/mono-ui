import type { Meta, StoryObj } from '@storybook/react';

import Flex from '../Flex';
import Input from '.';

const meta = {
  title: 'Components/Form/Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InputGrid = (props: any) => (
  <Flex gap="md" align="end">
    <Input {...props} id="default-input" label="Input" />
    <Input {...props} id="description-input" label="Input" description="Optional description" />
  </Flex>
);

export const Default: Omit<Story, 'args'> = {
  render: () => <InputGrid />,
};

export const Disabled: Omit<Story, 'args'> = {
  render: () => <InputGrid disabled />,
};

export const ReadOnly: Omit<Story, 'args'> = {
  render: () => <InputGrid readOnly />,
};
