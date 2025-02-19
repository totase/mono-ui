import { ButtonHTMLAttributes } from 'react';
import cx from 'clsx';

import './styles.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  loading?: boolean;
  outline?: boolean;
}

const Button = ({ children, onClick, disabled, className, outline = false, loading = false, ...rest }: ButtonProps) => {
  const classNames = cx('mono-ui__button', className, {
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
