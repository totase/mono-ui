import type { Meta, StoryObj } from '@storybook/react-vite';

import Textarea from '.';
import Flex from '../Flex';

const meta = {
  title: 'Components/Form/Textarea',
  component: Textarea,
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TextareaGrid = (props: any) => (
  <Flex gap="lg" direction="column">
    <Textarea {...props} id="default-textarea" label="Textarea" />
    <Textarea {...props} id="description-textarea" label="Textarea" description="Optional description" />
  </Flex>
);

export const Default: Omit<Story, 'args'> = {
  render: () => <TextareaGrid />,
};

export const Disabled: Omit<Story, 'args'> = {
  render: () => <TextareaGrid disabled />,
};

export const ReadOnly: Omit<Story, 'args'> = {
  render: () => <TextareaGrid readOnly />,
};
