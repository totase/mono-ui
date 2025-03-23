import { InputHTMLAttributes } from 'react';
import cx from 'clsx';

import './styles.css';

export type SelectOptionType = {
  label: string;
  value: string | number;
};

export interface SelectProps extends Omit<InputHTMLAttributes<HTMLSelectElement>, 'children'> {
  id: string;
  label: string;
  options: SelectOptionType[];
}

const Select = ({ id, label, disabled, className, options, placeholder = 'Select a value', ...rest }: SelectProps) => {
  const classNames = cx('mono-ui-select', className, {
    'mono-ui-select--disabled': disabled,
  });

  return (
    <div className="mono-ui-select__container">
      <label htmlFor={id}>{label}</label>

      <select id={id} disabled={disabled} className={classNames} {...rest}>
        <option value={undefined} className="mono-ui-select__placeholder">
          {placeholder}
        </option>

        {options.map(({ value, label }, i) => (
          <option key={`${value}-${i}`} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
