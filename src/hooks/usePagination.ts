import { useState } from 'react';

/**
 * A hook that manages the pagination of items.
 *
 * @template T - Generic reference to the type of items.
 *
 * @param items - An array of items to be paginated.
 * @param itemsPerPage - The number of items per page (defaults to 10).
 *
 * @returns An object containing the current page of `items`, current page number, total number of pages, and a function to set the current page.
 */
const usePagination = <T>(items: T[], itemsPerPage = 10) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pages = Math.ceil(items.length / itemsPerPage);
  const currentItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return { currentItems, currentPage, setCurrentPage, pages };
};

export default usePagination;
