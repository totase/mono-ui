import Button, { ButtonProps } from '../../Button';

export interface PaginationItemProps extends ButtonProps {
  selected?: boolean;
}

const PaginationItem = ({ children, selected = false, ...rest }: PaginationItemProps) => {
  return (
    <Button {...rest} aria-current={selected} appearance={selected ? 'light' : 'flat'}>
      {children}
    </Button>
  );
};

export default PaginationItem;
