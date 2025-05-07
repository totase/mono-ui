import { HTMLAttributes } from 'react';
import cx from 'clsx';

import Button from '../Button';
import { range } from '../../utils';
import PaginationItem from './components/PaginationItem';

import './styles.css';

export interface PaginationProps extends HTMLAttributes<HTMLUListElement> {
  setPage: (page: number) => void;
  currentPage: number;
  pages: number;
  pagesInView?: number;
}

const Pagination = ({ className, setPage, currentPage, pages, pagesInView = 5, ...rest }: PaginationProps) => {
  const halfWay = Math.floor(pagesInView / 2);
  const start = Math.max(1, Math.min(currentPage - halfWay, pages - pagesInView));
  const end = Math.min(pages, Math.max(start - 1 + pagesInView, currentPage + halfWay));

  const classNames = cx('mono-ui-pagination', className);

  return (
    <ul className={classNames} {...rest}>
      <li>
        <Button disabled={currentPage === 1} appearance="outline" onClick={() => setPage(currentPage - 1)}>
          Previous page
        </Button>
      </li>

      {range(start, end).map((page) => (
        <li key={`pagination-number-${page}`}>
          <PaginationItem
            aria-label={`Go to page ${page}`}
            selected={page === currentPage}
            onClick={() => setPage(page)}
          >
            {page}
          </PaginationItem>
        </li>
      ))}

      <li>
        <Button disabled={currentPage === pages} appearance="outline" onClick={() => setPage(currentPage + 1)}>
          Next page
        </Button>
      </li>
    </ul>
  );
};

export default Pagination;
