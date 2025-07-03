import { useState } from 'react';
import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

import Combobox from '.';
import { ComboboxOptionType } from './types';

const meta = {
  title: 'Components/Form/Combobox',
  component: Combobox,
  decorators: [
    (Story) => (
      <div style={{ width: '230px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Combobox>;

export default meta;

type Story = StoryObj<typeof meta>;

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
  { value: 'option5', label: 'Option 5' },
  { value: 'option6', label: 'Option 6' },
  { value: 'option7', label: 'Option 7' },
  { value: 'option8', label: 'Option 8' },
  { value: 'option9', label: 'Option 9' },
  { value: 'option10', label: 'Option 10' },
];

export const Default: Omit<Story, 'args'> = {
  render: () => (
    <Combobox id="default-combobox" label="Combobox" description="Optional description" options={options} />
  ),
};

export const Disabled: Omit<Story, 'args'> = {
  render: () => <Combobox id="disabled-combobox" label="Combobox" options={options} disabled />,
};

export const ExternalSelection: StoryFn = () => {
  const [selectedOptions, setSelectedOptions] = useState<ComboboxOptionType[]>([]);

  const handleOptionToggle = (option, selected) => {
    if (selected) {
      setSelectedOptions([...selectedOptions, option]);
    } else setSelectedOptions(selectedOptions.filter((selectedOption) => selectedOption !== option));
  };

  return (
    <Combobox
      id="disabled-combobox"
      label="Combobox"
      options={options}
      selectedOptions={selectedOptions}
      onOptionToggle={handleOptionToggle}
    />
  );
};
