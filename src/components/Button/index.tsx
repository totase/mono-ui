import { ButtonHTMLAttributes } from 'react';
import cx from 'clsx';

import { Appearance } from '@/types';

import './styles.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
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
    'mono-ui-button--default': appearance === 'default',
    'mono-ui-button--outline': appearance === 'outline',
    'mono-ui-button--light': appearance === 'light',
    'mono-ui-button--loading': loading,
  });

  return (
    <button className={classNames} onClick={onClick} disabled={loading || disabled} {...rest}>
      {children}
    </button>
  );
};

export default Button;
