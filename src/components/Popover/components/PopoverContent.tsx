import { HTMLAttributes } from 'react';
import cx from 'clsx';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface PopoverContentProps extends HTMLAttributes<HTMLDivElement> {}

const PopoverContent = ({ className, children, ...rest }: PopoverContentProps) => {
  const classNames = cx('mono-ui-popover--content', className);

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

export default PopoverContent;
