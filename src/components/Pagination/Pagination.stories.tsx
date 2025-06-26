import type { Meta, StoryObj } from '@storybook/react-vite';

import Pagination from '.';
import { usePagination } from '../../hooks';

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

const PaginationWrapper = () => {
  const items = Array.from({ length: 50 }, (_, i) => i + 1);
  const { currentPage, setCurrentPage, pages } = usePagination(items, 10);

  return <Pagination pages={pages} currentPage={currentPage} setPage={setCurrentPage} />;
};

export const Default: Omit<Story, 'args'> = {
  render: () => <PaginationWrapper />,
};
