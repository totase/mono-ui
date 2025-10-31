import { useState } from 'react';
import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

import ChipsInput, { ChipOptionType } from '.';

const meta = {
  title: 'Components/Form/ChipsInput',
  component: ChipsInput,
  decorators: [
    (Story) => (
      <div style={{ width: '230px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ChipsInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Omit<Story, 'args'> = {
  render: () => <ChipsInput id="default-chips-input" label="Chips Input" description="Optional description" />,
};

export const Disabled: Omit<Story, 'args'> = {
  render: () => <ChipsInput id="default-chips-input" label="Chips Input" description="Optional description" disabled />,
};

export const ExternalSelection: StoryFn = () => {
  const [selectedOptions, setSelectedOptions] = useState<ChipOptionType[]>(['Option 1', '123']);

  const handleRemove = (option: ChipOptionType) => {
    setSelectedOptions((prev) => prev.filter((selectedOption) => selectedOption !== option));
  };

  const handleAdd = (option: ChipOptionType[]) => {
    setSelectedOptions((prev) => [...prev, ...option]);
  };

  return (
    <ChipsInput
      id="external-selection-chips-input"
      label="Chips Input"
      selectedOptions={selectedOptions}
      onOptionRemove={handleRemove}
      onOptionAdd={handleAdd}
    />
  );
};
