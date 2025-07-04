import { HTMLAttributes } from 'react';
import cx from 'clsx';

import { SpacingSize } from '../../types';

import './styles.css';

export interface HorizontalProps extends HTMLAttributes<HTMLHRElement> {
  spacing?: SpacingSize;
}

const Horizontal = ({ spacing, className, ...rest }: HorizontalProps) => {
  const classNames = cx('mono-ui-horizontal', className, {
    [`mono-ui-horizontal--${spacing}`]: !!spacing,
  });

  return <hr className={classNames} {...rest} />;
};

export default Horizontal;
