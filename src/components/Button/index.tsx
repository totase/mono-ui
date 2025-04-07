import { ButtonHTMLAttributes, MouseEvent } from 'react';
import cx from 'clsx';

import { Appearance } from '@/types';

import './styles.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  loading?: boolean;
  outline?: boolean;
  appearance?: Appearance;
}

const Button = ({
  children,
  onClick,
  disabled,
  className,
  appearance = 'default',
  loading = false,
  ...rest
}: ButtonProps) => {
  const classNames = cx('mono-ui-button', className, {
    [`mono-ui-button--${appearance}`]: appearance,
    'mono-ui-button--disabled': disabled || loading,
    'mono-ui-button--loading': loading,
  });

  return (
    <button className={classNames} onClick={onClick} disabled={loading || disabled} {...rest}>
      {children}
    </button>
  );
};

export default Button;
