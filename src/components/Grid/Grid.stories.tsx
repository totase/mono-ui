import type { Meta, StoryObj } from '@storybook/react-vite';

import Grid from '.';

const meta = {
  title: 'Components/Grid',
  component: Grid,
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Omit<Story, 'args'> = {
  render: () => (
    <div style={{ width: '500px', height: '400px' }}>
      <Grid columns={`repeat(3, minmax(0, 1fr))`} gap="md">
        <div style={{ backgroundColor: 'black', color: 'white' }}>1</div>
        <div style={{ backgroundColor: 'black', color: 'white' }}>2</div>
        <div style={{ backgroundColor: 'black', color: 'white' }}>3</div>
        <div style={{ backgroundColor: 'black', color: 'white' }}>4</div>
        <div style={{ backgroundColor: 'black', color: 'white' }}>5</div>
        <div style={{ backgroundColor: 'black', color: 'white' }}>6</div>
      </Grid>
    </div>
  ),
};
