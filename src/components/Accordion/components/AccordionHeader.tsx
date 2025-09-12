import { ButtonHTMLAttributes, useContext } from 'react';
import cx from 'clsx';

import Arrow from '../../Arrow';
import { AccordionContext } from '../context';

export interface AccordionHeaderProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  /**
   * Optional function to call when accordion is toggled
   *
   * @param open - Whether the accordion is open or closed when clicked
   */
  onClick?: (open: boolean) => void;
}

const AccordionHeader = ({ children, className, onClick, ...rest }: AccordionHeaderProps) => {
  const context = useContext(AccordionContext);

  const classNames = cx('mono-ui-accordion__header', className, {
    'mono-ui-accordion__header--open': context?.open,
  });

  const handleClick = () => {
    if (onClick) onClick(!context?.open);

    context?.toggleOpen(!context.open);
  };

  return (
    <button className={classNames} onClick={handleClick} aria-expanded={context?.open} {...rest}>
      <span className="mono-ui-accordion__header-icon">
        <Arrow direction={context?.open ? 'up' : 'down'} />
      </span>

      {children}
    </button>
  );
};

export default AccordionHeader;
