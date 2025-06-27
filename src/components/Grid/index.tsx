import { CSSProperties, HTMLAttributes } from 'react';
import cx from 'clsx';

import GridElement from './components/GridElement';
import { SpacingSize } from '../../types';

import './styles.css';

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: number | string;
  columnMinWidth?: number;
  gap?: SpacingSize;
  align?: 'start' | 'center' | 'end';
}

const Grid = ({
  className,
  children,
  gap,
  columns,
  style,
  align = 'start',
  columnMinWidth = 0,
  ...rest
}: GridProps) => {
  const classNames = cx('mono-ui-grid', `mono-ui-grid--align-${align}`, className, {
    [`mono-ui-grid--gap-${gap}`]: !!gap,
  });

  const formatGrid = (columns?: number | string) => {
    if (typeof columns === 'number') {
      return `repeat(${columns}, minmax(${columnMinWidth}px, 1fr))`;
    }

    if (typeof columns === 'string') {
      return columns;
    }

    return '';
  };

  return (
    <div
      className={classNames}
      style={
        {
          ...style,
          '--mono-ui-grid-columns': formatGrid(columns),
        } as CSSProperties
      }
      {...rest}
    >
      {children}
    </div>
  );
};

Grid.Element = GridElement;

export default Grid;
