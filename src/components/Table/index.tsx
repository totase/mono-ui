import { HTMLAttributes } from 'react';
import cx from 'clsx';

import TableBody from './components/TableBody';
import TableCell from './components/TableCell';
import TableHead from './components/TableHead';
import TableHeadCell from './components/TableHeadCell';
import TableRow from './components/TableRow';
import ExpandableRow from './components/ExpandableRow';

import './styles.css';

export interface TableProps extends HTMLAttributes<HTMLTableElement> {
  layout?: 'fixed' | 'auto';
  striped?: boolean;
}

const Table = ({ className, striped = true, layout = 'auto', ...rest }: TableProps) => {
  const classNames = cx('mono-ui-table', className, `mono-ui-table--${layout}`, {
    'mono-ui-table--striped': striped,
  });

  return <table className={classNames} {...rest} />;
};

Table.Body = TableBody;
Table.Cell = TableCell;
Table.Head = TableHead;
Table.HeadCell = TableHeadCell;
Table.Row = TableRow;
Table.ExpandableRow = ExpandableRow;

export default Table;
