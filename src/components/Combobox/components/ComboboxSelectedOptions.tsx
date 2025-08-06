import { useContext } from 'react';

import Chips from '../../Chips';
import { ComboboxOptionsContext, ComboboxOptionsContextProps } from '../context';

const ComboboxSelectedOptions = () => {
  const { selectedOptions, removeSelectedOption } = useContext(ComboboxOptionsContext) as ComboboxOptionsContextProps;

  return (
    <Chips className="mono-ui-combobox__selected-options">
      {selectedOptions.map((option) => (
        <Chips.Removable
          key={option.value}
          onClick={(e) => {
            e.stopPropagation();
            removeSelectedOption(option);
          }}
        >
          {option.label}
        </Chips.Removable>
      ))}
    </Chips>
  );
};

export default ComboboxSelectedOptions;
