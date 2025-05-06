import { HTMLAttributes, useState } from 'react';
import cx from 'clsx';

import { AccordionContext } from './context';
import AccordionHeader from './components/AccordionHeader';
import AccordionContent from './components/AccordionContent';

import './styles.css';

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  initialOpen?: boolean;
}

const Accordion = ({ children, className, initialOpen = false, ...rest }: AccordionProps) => {
  const [open, setOpen] = useState(initialOpen);

  const classNames = cx('mono-ui-accordion', className);

  return (
    <div className={classNames} {...rest}>
      <AccordionContext.Provider value={{ open, toggleOpen: setOpen }}>{children}</AccordionContext.Provider>
    </div>
  );
};

Accordion.Header = AccordionHeader;
Accordion.Content = AccordionContent;

export default Accordion;
