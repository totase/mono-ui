import { ButtonHTMLAttributes, useContext } from 'react';
import cx from 'clsx';

import { AccordionContext } from '../context';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface AccordionHeaderProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const AccordionHeader = ({ children, className, onClick, ...rest }: AccordionHeaderProps) => {
  const context = useContext(AccordionContext);

  const classNames = cx('mono-ui-accordion__header', className, {
    'mono-ui-accordion__header--open': context?.open,
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);

    context?.toggleOpen(!context.open);
  };

  return (
    <button className={classNames} onClick={handleClick} aria-expanded={context?.open} {...rest}>
      {children}
      <span className="mono-ui-accordion__header__arrow" />
    </button>
  );
};

export default AccordionHeader;
