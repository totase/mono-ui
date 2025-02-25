import { HTMLAttributes } from 'react';
import cx from 'clsx';

import './styles.css';

export interface HorizontalProps extends HTMLAttributes<HTMLHRElement> {
  spacing?: 'sm' | 'md' | 'lg';
}

const Horizontal = ({ spacing, ...rest }: HorizontalProps) => {
  const classNames = cx('mono-ui__horizontal', {
    'mono-ui__horizontal--sm': spacing === 'sm',
    'mono-ui__horizontal--md': spacing === 'md',
    'mono-ui__horizontal--lg': spacing === 'lg',
  });

  return <hr className={classNames} {...rest} />;
};

export default Horizontal;
