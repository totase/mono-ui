import { InputHTMLAttributes } from 'react';
import cx from 'clsx';

import { Label } from '../Typography';

import './styles.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  description?: string;
  type?: 'text' | 'password' | 'email' | 'number';
}

const Input = ({ id, label, description, className, type = 'text', disabled, readOnly, ...rest }: InputProps) => {
  const classNames = cx('mono-ui-input', className, {
    'mono-ui-input--disabled': disabled,
    'mono-ui-input--readOnly': readOnly,
  });

  return (
    <div className="mono-ui-input__container">
      <Label id={id} description={description}>
        {label}
      </Label>
      <input
        id={id}
        type={type}
        className={classNames}
        disabled={disabled}
        readOnly={readOnly}
        aria-describedby={description ? `${id}-description` : undefined}
        {...rest}
      />
    </div>
  );
};

export default Input;
