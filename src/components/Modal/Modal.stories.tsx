import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Modal, { ModalProps } from '.';
import { Button, Body } from '..';

const meta = {
  title: 'Components/Modal',
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

const ModalTrigger = (props: Partial<ModalProps>) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button appearance="default" onClick={() => setOpen(true)}>
        Open Modal
      </Button>

      <Modal {...props} isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export const Default: Omit<Story, 'args'> = {
  render: () => {
    return (
      <ModalTrigger>
        <Modal.Header heading="Modal Title" />
        <Modal.Body>
          <Body>This is the body of the modal.</Body>
        </Modal.Body>
      </ModalTrigger>
    );
  },
};
