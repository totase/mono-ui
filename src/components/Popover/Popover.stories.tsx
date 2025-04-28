import { useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Popover from '.';
import { Body } from '../Typography';

const meta = {
  title: 'Components/Popover',
  component: Popover,
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

const PopoverTrigger = () => {
  const [open, setOpen] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div>
      <button ref={buttonRef} onClick={() => setOpen(!open)}>
        Open Popover
      </button>

      <Popover anchor={buttonRef} open={open} onClose={() => setOpen(false)}>
        <Popover.Title heading="Popover" />
        <Popover.Content>
          <Body>This is the content of the popover.</Body>
        </Popover.Content>
      </Popover>
    </div>
  );
};

export const Default: Omit<Story, 'args'> = {
  render: () => {
    return <PopoverTrigger />;
  },
};
