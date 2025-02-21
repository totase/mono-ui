import { InputHTMLAttributes } from 'react';
import cx from 'clsx';

import Typography from '../Typography';

import './styles.css';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'readOnly'> {
  id: string;
  label: string;
  description?: string;
}

const Checkbox = ({ id, label, disabled, description, ...rest }: CheckboxProps) => {
  const classNames = cx('mono-ui__checkbox', {
    'mono-ui__checkbox--disabled': disabled,
  });

  return (
    <div className="mono-ui__checkbox__container">
      <span className={classNames} tabIndex={0}>
        <input
          id={id}
          type="checkbox"
          disabled={disabled}
          aria-describedby={description ? `${id}-description` : undefined}
          {...rest}
        />
      </span>

      <label className="mono-ui__checkbox__label" htmlFor={id}>
        {label}

        {description && (
          <Typography id={`${id}-description`} as="span" light>
            {description}
          </Typography>
        )}
      </label>
    </div>
  );
};

export default Checkbox;
