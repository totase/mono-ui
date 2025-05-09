import { HTMLAttributes } from 'react';
import cx from 'clsx';

import TableBody from './components/TableBody';
import TableCell from './components/TableCell';
import TableHead from './components/TableHead';
import TableHeadCell from './components/TableHeadCell';
import TableRow from './components/TableRow';

import './styles.css';

export interface TableProps extends HTMLAttributes<HTMLTableElement> {
  layout?: 'fixed' | 'auto';
}

const Table = ({ className, layout = 'auto', ...rest }: TableProps) => {
  const classNames = cx('mono-ui-table', className, `mono-ui-table--${layout}`);

  return <table className={classNames} {...rest} />;
};

Table.Body = TableBody;
Table.Cell = TableCell;
Table.Head = TableHead;
Table.HeadCell = TableHeadCell;
Table.Row = TableRow;

export default Table;
