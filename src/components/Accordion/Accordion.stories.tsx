import type { Meta, StoryObj } from '@storybook/react-vite';

import Accordion from '.';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AccordionComponent = (props: any) => (
  <Accordion {...props}>
    <Accordion.Header>Header</Accordion.Header>
    <Accordion.Content>Content</Accordion.Content>
  </Accordion>
);

export const Controls: Story = {
  args: {
    title: 'Accordion',
    content: 'Accordion content',
    initialOpen: false,
  },
  argTypes: {
    initialOpen: {
      control: { type: 'boolean' },
    },
  },
  render: (args) => (
    <Accordion {...args}>
      <Accordion.Header>{args.title}</Accordion.Header>
      <Accordion.Content>{args.content}</Accordion.Content>
    </Accordion>
  ),
};

export const Default: Omit<Story, 'args'> = {
  render: () => <AccordionComponent />,
};

export const InitialOpen: Omit<Story, 'args'> = {
  render: () => <AccordionComponent initialOpen />,
};
