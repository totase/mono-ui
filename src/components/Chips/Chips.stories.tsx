import { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react-vite';

import Chips from '.';

const meta = {
  title: 'Components/Chips',
  component: Chips,
} satisfies Meta<typeof Chips>;

export default meta;

const options = ['Banana', 'Apple', 'Orange', 'Grapes', 'Pineapple'];

export const Toggle: StoryFn = () => {
  const [selected, setSelected] = useState<string[]>(['Apple', 'Grapes']);

  const handleClick = (option: string) => {
    setSelected((prev) => (prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]));
  };

  return (
    <Chips>
      {options.map((option) => (
        <Chips.Toggle key={option} selected={selected.includes(option)} onClick={() => handleClick(option)}>
          {option}
        </Chips.Toggle>
      ))}
    </Chips>
  );
};

export const Removable: StoryFn = () => {
  const [selected, setSelected] = useState<string[]>(options);

  const handleRemove = (item: string) => {
    setSelected((prev) => prev.filter((i) => i !== item));
  };

  return (
    <Chips>
      {selected.map((item) => (
        <Chips.Removable key={item} onClick={() => handleRemove(item)}>
          {item}
        </Chips.Removable>
      ))}
    </Chips>
  );
};
