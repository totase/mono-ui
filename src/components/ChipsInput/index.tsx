import { InputHTMLAttributes, useMemo, useRef, useState } from 'react';
import cx from 'clsx';

import Flex from '../Flex';
import { Label } from '../Typography';
import { useKeyDown } from '../../hooks';
import ChipsInputSelectedOptions from './components/ChipsInputSelectedOptions';

import './style.css';

export type ChipOptionType = string | number;

export interface ChipsInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  description?: string;
  /**
   * Maximum number of selections allowed
   *
   * @default 5
   */
  maxSelection?: number;
  selectedOptions?: ChipOptionType[];
  emptyText?: string;
  onOptionRemove?: (option: ChipOptionType) => void;
  onOptionAdd?: (option: ChipOptionType[]) => void;
}

const ChipsInput = ({
  id,
  label,
  description,
  disabled,
  className,
  onChange,
  onOptionRemove,
  onOptionAdd,
  selectedOptions: externalSelectedOptions,
  maxSelection = 5,
  ...rest
}: ChipsInputProps) => {
  const [inputValue, setInputValue] = useState('');
  const [internalSelectedOptions, setSelectedOptions] = useState<ChipOptionType[]>([]);

  const selectedOptions = useMemo(
    () => externalSelectedOptions ?? internalSelectedOptions,
    [externalSelectedOptions, internalSelectedOptions],
  );

  const inputRef = useRef<HTMLInputElement>(null);
  const chipsInputRef = useRef<HTMLDivElement>(null);

  const limitReached = selectedOptions.length >= maxSelection;
  const inputDisabled = disabled || limitReached;

  const classNames = cx('mono-ui-input', 'mono-ui-chips-input', className, {
    'mono-ui-input--disabled': inputDisabled,
  });

  const handleClick = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  const removeSelectedOption = (option: ChipOptionType) => {
    setSelectedOptions((prev) => prev.filter((selectedOption) => selectedOption !== option));
    onOptionRemove?.(option);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (limitReached) return;

    if (onChange) onChange(event);
    if (event.target.value.includes(',')) {
      const options = event.target.value.split(',');

      // remove empty strings
      const nonEmptyOptions = options.filter((opt) => opt.trim() !== '');

      // remove options already included in selectedOptions
      const filteredOptions = nonEmptyOptions.filter((opt) => !selectedOptions.includes(opt.trim()));

      // only keep options that don't exceed maxSelection
      const availableOptions = maxSelection - selectedOptions.length;
      if (filteredOptions.length > availableOptions) {
        filteredOptions.splice(availableOptions);
      }

      setSelectedOptions((prev) => [...prev, ...filteredOptions]);
      onOptionAdd?.(filteredOptions);

      setInputValue('');
    } else setInputValue(event.target.value);
  };

  const handleKeyDown = () => {
    if (inputValue === '' && selectedOptions.length > 0) {
      const lastOption = selectedOptions[selectedOptions.length - 1];
      removeSelectedOption(lastOption);
    }
  };

  const handleFocus = () => {
    if (chipsInputRef.current) chipsInputRef.current.classList.add('mono-ui-chips-input--focus');
  };

  const handleBlur = () => {
    if (chipsInputRef.current) chipsInputRef.current.classList.remove('mono-ui-chips-input--focus');
  };

  const onKeyDown = useKeyDown({ key: 'Backspace', action: handleKeyDown });

  return (
    <Flex direction="column" gap="xs">
      <Label id={id} disabled={disabled} description={description}>
        {label}
      </Label>

      <div
        className={classNames}
        role="group"
        aria-labelledby={id}
        aria-disabled={disabled || undefined}
        onClick={handleClick}
        ref={chipsInputRef}
      >
        <ChipsInputSelectedOptions selectedOptions={selectedOptions} removeSelectedOption={removeSelectedOption} />

        <input
          id={id}
          disabled={inputDisabled}
          aria-describedby={description ? `${id}-description` : undefined}
          className="mono-ui-chips-input__input"
          type="text"
          {...rest}
          value={inputValue}
          onChange={handleChange}
          autoComplete="off"
          ref={inputRef}
          onKeyDown={onKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    </Flex>
  );
};

export default ChipsInput;
