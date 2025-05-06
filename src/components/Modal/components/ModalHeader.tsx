import { HTMLAttributes, useContext } from 'react';
import cx from 'clsx';

import { Button } from '../..';
import { Heading } from '../../Typography';
import { ModalContext } from '../context';

export interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
  heading: string;
}

const ModalHeader = ({ heading, className, ...rest }: ModalHeaderProps) => {
  const context = useContext(ModalContext);

  const classNames = cx('mono-ui-modal--header', className);

  return (
    <div className={classNames} {...rest}>
      <Heading as="h5">{heading}</Heading>

      <Button onClick={() => context?.close()} appearance="flat" aria-label="Close modal">
        &#10005;
      </Button>
    </div>
  );
};

export default ModalHeader;
