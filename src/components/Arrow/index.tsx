import { HTMLAttributes } from 'react';
import cx from 'clsx';

import './styles.css';

export interface ArrowProps extends HTMLAttributes<HTMLElement> {
  direction?: 'up' | 'down' | 'left' | 'right';
  animated?: boolean;
}

const Arrow = ({ className, animated, direction = 'down', ...rest }: ArrowProps) => {
  const classNames = cx('mono-ui-arrow', className, `mono-ui-arrow--${direction}`, {
    'mono-ui-arrow--animated': animated,
  });

  return <i className={classNames} {...rest} />;
};

export default Arrow;
