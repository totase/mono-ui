import { HTMLAttributes } from 'react';
import cx from 'clsx';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {}

const ModalFooter = ({ className, children, ...rest }: ModalFooterProps) => {
  const classNames = cx('mono-ui-modal--footer', className);

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

export default ModalFooter;
