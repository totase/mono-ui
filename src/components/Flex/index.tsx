import { HTMLAttributes } from 'react';
import cx from 'clsx';

import { SpacingSize } from '../../types';

import './styles.css';

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  justify?: 'center' | 'start' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'center' | 'start' | 'end' | 'baseline' | 'stretch';
  gap?: SpacingSize;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  wrap?: boolean;
}

const Flex = ({ children, className, justify, align, gap, direction = 'row', wrap = true, ...rest }: FlexProps) => {
  const classNames = cx('mono-ui-flex', `mono-ui-flex--direction-${direction}`, className, {
    [`mono-ui-flex--gap-${gap}`]: !!gap,
    [`mono-ui-flex--justify-${justify}`]: !!justify,
    [`mono-ui-flex--align-${align}`]: !!align,
    'mono-ui-flex--wrap': wrap,
  });

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

export default Flex;
