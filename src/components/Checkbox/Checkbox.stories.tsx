import type { Meta, StoryObj } from '@storybook/react';

import Flex from '../Flex';
import Checkbox from '.';

const meta = {
  title: 'Components/Form/Checkbox',
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CheckboxGrid = (props: any) => (
  <Flex gap="lg" direction="column">
    <Checkbox {...props} id="default-checkbox" label="Checkbox" />
    <Checkbox {...props} id="description-checkbox" label="Checkbox" description="Optional description" />
  </Flex>
);

export const Default: Omit<Story, 'args'> = {
  render: () => <CheckboxGrid />,
};

export const Disabled: Omit<Story, 'args'> = {
  render: () => <CheckboxGrid disabled />,
};
