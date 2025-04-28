import type { Meta, StoryObj } from '@storybook/react';

import Tooltip from '.';
import { Body } from '../Typography';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Omit<Story, 'args'> = {
  render: () => {
    return (
      <Tooltip content="Tooltip content">
        <Body>Hover to trigger tooltip</Body>
      </Tooltip>
    );
  },
};
