import type { Meta, StoryObj } from '@storybook/react-vite';

import List from '.';

const meta = {
  title: 'Components/List',
  component: List,
} satisfies Meta<typeof List>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Omit<Story, 'args'> = {
  render: () => (
    <List>
      <List.Item>Item</List.Item>
      <List.Item>Item</List.Item>
      <List.Item>Item</List.Item>
      <List.Item title="Item title">Item</List.Item>
      <List.Item title="Item title">Item</List.Item>
    </List>
  ),
};
