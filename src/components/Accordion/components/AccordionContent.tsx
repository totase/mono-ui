import { HTMLAttributes, useContext } from 'react';
import cx from 'clsx';

import { AccordionContext } from '../context';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {}

const AccordionContent = ({ children, className, ...rest }: AccordionContentProps) => {
  const context = useContext(AccordionContext);

  const classNames = cx('mono-ui-accordion__content', className, {
    'mono-ui-accordion__content--open': context?.open,
  });

  return (
    <div className={classNames} aria-hidden={!context?.open} {...rest}>
      {children}
    </div>
  );
};

export default AccordionContent;
