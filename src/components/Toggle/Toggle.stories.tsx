import type { Meta, StoryObj } from '@storybook/react';

import Toggle from '.';
import Flex from '../Flex';

const meta = {
  title: 'Components/Form/Toggle',
  component: Toggle,
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ToggleGrid = (props: any) => (
  <Flex gap="lg" direction="column">
    <Toggle {...props} id="default-toggle" label="Toggle" />
    <Toggle {...props} id="description-toggle" label="Toggle" description="Optional description" />
  </Flex>
);

export const Default: Omit<Story, 'args'> = {
  render: () => <ToggleGrid />,
};

export const Disabled: Omit<Story, 'args'> = {
  render: () => <ToggleGrid disabled />,
};
