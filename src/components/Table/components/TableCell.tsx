import { TdHTMLAttributes } from 'react';
import cx from 'clsx';

import { Align } from '@/types';

export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  align?: Align;
}

const TableCell = ({ className, align = 'left', ...rest }: TableCellProps) => {
  const classNames = cx('mono-ui-table__cell', className, `mono-ui-table__cell--align-${align}`);

  return <td className={classNames} {...rest} />;
};

export default TableCell;
