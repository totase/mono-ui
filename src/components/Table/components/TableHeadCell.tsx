import { ThHTMLAttributes } from 'react';
import cx from 'clsx';

import { Align } from '@/types';

export interface TableHeadCellProps extends ThHTMLAttributes<HTMLTableCellElement> {
  align?: Align;
}

const TableHeadCell = ({ className, align = 'left', ...rest }: TableHeadCellProps) => {
  const classNames = cx('mono-ui-table__head-cell', className, `mono-ui-table__cell--align-${align}`);

  return <th className={classNames} {...rest} />;
};

export default TableHeadCell;
