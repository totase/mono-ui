import type { Meta, StoryObj } from '@storybook/react';

import Flex from '../Flex';
import Radio from '.';

const meta = {
  title: 'Components/Form/Radio',
  component: Radio,
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RadioGrid = (props: any) => (
  <Flex gap="lg" direction="column">
    <Radio {...props} name="story-radio" id="radio-blue" label="Blue" />
    <Radio {...props} name="story-radio" id="radio-green" label="Green" />
    <Radio {...props} name="story-radio" id="radio-red" label="Red" description="Optional description" />
  </Flex>
);

export const Default: Omit<Story, 'args'> = {
  render: () => <RadioGrid />,
};

export const Disabled: Omit<Story, 'args'> = {
  render: () => <RadioGrid disabled />,
};
