import { CSSProperties, HTMLAttributes } from 'react';
import cx from 'clsx';

import Slot from '../../Slot';

export interface GridElementProps extends HTMLAttributes<HTMLElement> {
  columnSpanStart?: number;
  columnSpanWidth?: number;
}

const GridElement = ({ className, children, columnSpanStart, columnSpanWidth, style, ...rest }: GridElementProps) => {
  const classNames = cx('mono-ui-grid__element', className);

  return (
    <Slot
      className={classNames}
      style={
        {
          ...style,
          '--mono-ui-grid-column-start': columnSpanStart,
          '--mono-ui-grid-column-end': `span ${columnSpanWidth}`,
        } as CSSProperties
      }
      {...rest}
    >
      {children}
    </Slot>
  );
};

export default GridElement;
