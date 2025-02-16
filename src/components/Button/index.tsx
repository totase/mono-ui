import { ButtonHTMLAttributes, ReactNode } from 'react';
import cx from 'clsx';

import './styles.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  loading?: boolean;
  outline?: boolean;
}

const Button = ({ children, onClick, disabled, outline = false, loading = false, ...rest }: ButtonProps) => {
  const classNames = cx('mono-ui__button', {
    'mono-ui__button--default': !outline,
    'mono-ui__button--outline': outline,
    'mono-ui__button--loading': loading,
  });

  return (
    <button className={classNames} onClick={onClick} disabled={loading || disabled} {...rest}>
      {children}
    </button>
  );
};

export default Button;
