import { ButtonHTMLAttributes, MouseEvent, RefObject } from 'react';
import cx from 'clsx';

import { Appearance } from '../../types';

import './styles.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  loading?: boolean;
  // TODO: Add 'flat' to 'appearance' type?
  appearance?: Appearance | 'flat';
  ref?: RefObject<HTMLButtonElement | null>;
}

const Button = ({ children, disabled, className, appearance = 'default', loading = false, ...rest }: ButtonProps) => {
  const classNames = cx('mono-ui-button', `mono-ui-button--${appearance}`, className, {
    'mono-ui-button--disabled': disabled || loading,
    'mono-ui-button--loading': loading,
  });

  return (
    <button className={classNames} disabled={loading || disabled} aria-disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

export default Button;
