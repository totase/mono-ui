import { HTMLAttributes, useContext } from 'react';

import ComboboxOption from './ComboboxOption';
import { ComboboxOptionsContext, ComboboxOptionsContextProps } from '../context';

export interface ComboboxOptionsProps extends HTMLAttributes<HTMLUListElement> {
  emptyText: string;
}

const ComboboxOptions = ({ id }: ComboboxOptionsProps) => {
  const { selectedOptions, filteredOptions, limitReached, handleSelect } = useContext(
    ComboboxOptionsContext,
  ) as ComboboxOptionsContextProps;

  return (
    <ul id={id} role="listbox" className="mono-ui-combobox__options">
      {filteredOptions.length === 0 && (
        <li className="mono-ui-combobox__option mono-ui-combobox__option--empty" role="option" tabIndex={-1}>
          No options found
        </li>
      )}

      {filteredOptions.map((option) => (
        <ComboboxOption
          key={`option-${option.value}`}
          option={option}
          toggleOption={handleSelect}
          selectedOptions={selectedOptions}
          disabled={limitReached}
        />
      ))}
    </ul>
  );
};

export default ComboboxOptions;
