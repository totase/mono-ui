import { HTMLAttributes } from 'react';
import cx from 'clsx';

import { isSelected } from '../utils';
import { ComboboxOptionType } from '../types';

export interface ComboboxOptionProps extends HTMLAttributes<HTMLLIElement> {
  option: ComboboxOptionType;
  disabled: boolean;
  toggleOption: (option: ComboboxOptionType) => void;
  selectedOptions: ComboboxOptionType[];
}

const ComboboxOption = ({ option, toggleOption, selectedOptions, disabled, ...rest }: ComboboxOptionProps) => {
  const classNames = cx('mono-ui-combobox__option', {
    'mono-ui-combobox__option--selected': isSelected(option, selectedOptions),
    'mono-ui-combobox__option--disabled': disabled && !isSelected(option, selectedOptions),
  });

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();

    toggleOption(option);
  };

  return (
    <li
      className={classNames}
      role="option"
      tabIndex={-1}
      aria-selected={isSelected(option, selectedOptions)}
      aria-disabled={disabled && !isSelected(option, selectedOptions)}
      onClick={handleClick}
      {...rest}
    >
      {option.label}
    </li>
  );
};

export default ComboboxOption;
