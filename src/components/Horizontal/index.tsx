import { HTMLAttributes } from 'react';
import cx from 'clsx';

import './styles.css';

export interface HorizontalProps extends HTMLAttributes<HTMLHRElement> {
  spacing?: 'sm' | 'md' | 'lg';
}

const Horizontal = ({ spacing, ...rest }: HorizontalProps) => {
  const classNames = cx('mono-ui-horizontal', {
    'mono-ui-horizontal--small': spacing === 'sm',
    'mono-ui-horizontal--medium': spacing === 'md',
    'mono-ui-horizontal--large': spacing === 'lg',
  });

  return <hr className={classNames} {...rest} />;
};

export default Horizontal;
