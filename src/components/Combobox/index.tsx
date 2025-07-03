import { useRef, useState } from 'react';
import cx from 'clsx';

import Flex from '../Flex';
import { Label } from '../Typography';
import { useClickOutside } from '../../hooks';
import { ComboboxProps } from './types';
import ComboboxSelectedOptions from './components/ComboboxSelectedOptions';
import ComboboxOptions from './components/ComboboxOptions';
import ComboboxOptionsProvider from './context';

import './styles.css';
import '../Input/styles.css';

const MAX_SELECTION = 5;

const Combobox = ({
  id,
  label,
  description,
  disabled,
  readOnly,
  className,
  onChange,
  onOptionToggle,
  options,
  selectedOptions,
  emptyText = 'No results',
  maxSelection = MAX_SELECTION,
  ...rest
}: ComboboxProps) => {
  const [inputValue, setInputValue] = useState('');
  const [popupOpen, setPopupOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const classNames = cx('mono-ui-input', 'mono-ui-combobox', className, {
    'mono-ui-input--disabled': disabled,
  });

  const optionsId = `${id}-options`;

  useClickOutside([containerRef], () => {
    if (popupOpen) closePopup();
  });

  const openPopup = () => {
    if (!popupOpen) setPopupOpen(true);
  };

  const closePopup = () => {
    setInputValue('');
    setPopupOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(event);
    if (!popupOpen) setPopupOpen(true);

    setInputValue(event.target.value);
  };

  return (
    <div className="mono-ui-combobox__container" ref={containerRef}>
      <Flex direction="column" gap="xs">
        <Label id={id} disabled={disabled} description={description}>
          {label}
        </Label>

        <input
          id={id}
          className={classNames}
          disabled={disabled}
          readOnly={readOnly}
          aria-describedby={description ? `${id}-description` : undefined}
          {...rest}
          value={inputValue}
          onChange={handleChange}
          onClick={openPopup}
          type="text"
          role="combobox"
          autoComplete="off"
          aria-expanded={popupOpen}
          aria-controls={popupOpen ? optionsId : undefined}
        />
      </Flex>
      <ComboboxOptionsProvider value={{ inputValue, options, maxSelection, selectedOptions, onOptionToggle }}>
        {popupOpen && <ComboboxOptions id={optionsId} emptyText={emptyText} />}

        <ComboboxSelectedOptions />
      </ComboboxOptionsProvider>
    </div>
  );
};

export default Combobox;
