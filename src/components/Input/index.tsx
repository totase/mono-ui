import { InputHTMLAttributes } from 'react';
import cx from 'clsx';

import './styles.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  type?: 'text' | 'password' | 'email' | 'number';
}

const Input = ({ id, label, className, type = 'text', disabled, readOnly, ...rest }: InputProps) => {
  const classNames = cx('mono-ui__input', className, {
    'mono-ui__input--disabled': disabled,
    'mono-ui__input--readOnly': readOnly,
  });

  return (
    <div className="mono-ui__input__container">
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} className={classNames} disabled={disabled} readOnly={readOnly} {...rest} />
    </div>
  );
};

export default Input;
