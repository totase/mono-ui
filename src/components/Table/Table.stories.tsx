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
        <Table.Row>
          <Table.Cell>Row 3, Cell 1</Table.Cell>
          <Table.Cell>Row 3, Cell 2</Table.Cell>
          <Table.Cell>Row 3, Cell 3</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};

export const ExpandableRows: Omit<Story, 'args'> = {
  render: () => (
    <Table>
      <Table.Head>
        <Table.HeadCell>Header 1</Table.HeadCell>
        <Table.HeadCell>Header 2</Table.HeadCell>
        <Table.HeadCell>Header 3</Table.HeadCell>
        <Table.HeadCell align="center" aria-label="Toggle expandable">
          ...
        </Table.HeadCell>
      </Table.Head>
      <Table.Body>
        <Table.ExpandableRow content="Expanded content for Row 1">
          <Table.Cell>Row 1, Cell 1</Table.Cell>
          <Table.Cell>Row 1, Cell 2</Table.Cell>
          <Table.Cell>Row 1, Cell 3</Table.Cell>
        </Table.ExpandableRow>
        <Table.ExpandableRow content="Expanded content for Row 2">
          <Table.Cell>Row 2, Cell 1</Table.Cell>
          <Table.Cell>Row 2, Cell 2</Table.Cell>
          <Table.Cell>Row 2, Cell 3</Table.Cell>
        </Table.ExpandableRow>
        <Table.ExpandableRow content="Expanded content for Row 3">
          <Table.Cell>Row 3, Cell 1</Table.Cell>
          <Table.Cell>Row 3, Cell 2</Table.Cell>
          <Table.Cell>Row 3, Cell 3</Table.Cell>
        </Table.ExpandableRow>
        <Table.ExpandableRow content="Expanded content for Row 4">
          <Table.Cell>Row 4, Cell 1</Table.Cell>
          <Table.Cell>Row 4, Cell 2</Table.Cell>
          <Table.Cell>Row 4, Cell 3</Table.Cell>
        </Table.ExpandableRow>
        <Table.ExpandableRow content="Expanded content for Row 5">
          <Table.Cell>Row 5, Cell 1</Table.Cell>
          <Table.Cell>Row 5, Cell 2</Table.Cell>
          <Table.Cell>Row 5, Cell 3</Table.Cell>
        </Table.ExpandableRow>
      </Table.Body>
    </Table>
  ),
};
