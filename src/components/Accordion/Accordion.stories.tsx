import type { Meta, StoryObj } from '@storybook/react';

import Accordion from '.';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AccordionComponent = (props: any) => (
  <Accordion {...props}>
    <Accordion.Header>Header</Accordion.Header>
    <Accordion.Content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin, nunc in bibendum venenatis, nisi nisl
      aliquet nunc, nec tincidunt nisi nisl eget nunc. Donec sollicitudin, nunc in bibendum venenatis, nisi nisl aliquet
      nunc, nec tincidunt nisi nisl eget nunc.
    </Accordion.Content>
  </Accordion>
);

export const Default: Omit<Story, 'args'> = {
  render: () => <AccordionComponent />,
};

export const InitialOpen: Omit<Story, 'args'> = {
  render: () => <AccordionComponent initialOpen />,
};
