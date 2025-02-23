import { HTMLAttributes } from 'react';
import cx from 'clsx';

import './styles.css';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: string;
  tiny?: boolean;
  outline?: boolean;
}

const Badge = ({ children, tiny = false, outline = false, ...rest }: BadgeProps) => {
  const classNames = cx('mono-ui__badge', {
    'mono-ui__badge--default': !outline,
    'mono-ui__badge--outline': outline,
    'mono-ui__badge--tiny': tiny,
  });

  return (
    <span className={classNames} {...rest}>
      {children}
    </span>
  );
};

export default Badge;
