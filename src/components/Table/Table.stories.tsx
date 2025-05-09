import type { Meta, StoryObj } from '@storybook/react';

import Table from '.';

const meta = {
  title: 'Components/Table',
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Omit<Story, 'args'> = {
  render: () => (
    <Table>
      <Table.Head>
        <Table.HeadCell>Header 1</Table.HeadCell>
        <Table.HeadCell>Header 2</Table.HeadCell>
        <Table.HeadCell>Header 3</Table.HeadCell>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Row 1, Cell 1</Table.Cell>
          <Table.Cell>Row 1, Cell 2</Table.Cell>
          <Table.Cell>Row 1, Cell 3</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Row 2, Cell 1</Table.Cell>
          <Table.Cell>Row 2, Cell 2</Table.Cell>
          <Table.Cell>Row 2, Cell 3</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};
