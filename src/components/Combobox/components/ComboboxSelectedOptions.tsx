import { useContext } from 'react';

import { ComboboxOptionsContext, ComboboxOptionsContextProps } from '../context';

const ComboboxSelectedOptions = () => {
  const { selectedOptions, removeSelectedOption } = useContext(ComboboxOptionsContext) as ComboboxOptionsContextProps;

  return (
    <ul className="mono-ui-combobox__selected-options">
      {selectedOptions.map((option) => (
        <li key={option.value}>
          <button
            className="mono-ui-combobox__selected-option"
            aria-label={`Remove ${option.value}`}
            onClick={(e) => {
              e.stopPropagation();
              removeSelectedOption(option);
            }}
          >
            {option.label} &#10005;
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ComboboxSelectedOptions;
