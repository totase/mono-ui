import { HTMLAttributes, useContext } from 'react';
import cx from 'clsx';

import { Heading, Button } from '../..';
import { PopoverContext } from '../context';

export interface PopoverTitleProps extends HTMLAttributes<HTMLDivElement> {
  heading: string;
}

const PopoverTitle = ({ heading, className, ...rest }: PopoverTitleProps) => {
  const context = useContext(PopoverContext);

  const classNames = cx('mono-ui-popover--title', className);

  // TODO omitProp util, omit children
  return (
    <div className={classNames} {...rest}>
      <Heading as="h6">{heading}</Heading>

      <Button onClick={() => context?.close()} appearance="flat" aria-label="Close popover">
        &#10005;
      </Button>
    </div>
  );
};

export default PopoverTitle;
