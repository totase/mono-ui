import { HTMLAttributes } from 'react';
import cx from 'clsx';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ModalBodyProps extends HTMLAttributes<HTMLDivElement> {}

const ModalBody = ({ className, children, ...rest }: ModalBodyProps) => {
  const classNames = cx('mono-ui-modal--body', className);

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

export default ModalBody;
