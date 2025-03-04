import { AnchorHTMLAttributes, ReactNode } from 'react';
import cx from 'clsx';

import './styles.css';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

const Link = ({ href, children, className, ...rest }: LinkProps) => {
  const classNames = cx('mono-ui-link', className);

  return (
    <a href={href} className={classNames} {...rest}>
      {children}
    </a>
  );
};

export default Link;
