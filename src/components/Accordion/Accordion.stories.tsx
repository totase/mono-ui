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
    initialOpen: false,
  },
  argTypes: {
    initialOpen: {
      control: { type: 'boolean' },
    },
  },
  render: (props) => <AccordionComponent {...props} />,
};

export const Default: Omit<Story, 'args'> = {
  render: () => <AccordionComponent />,
};

export const InitialOpen: Omit<Story, 'args'> = {
  render: () => <AccordionComponent initialOpen />,
};
