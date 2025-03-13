import { cloneElement, HTMLAttributes, isValidElement, RefObject } from 'react';
import cx from 'clsx';

export interface SlotProps extends HTMLAttributes<HTMLElement> {
  ref: RefObject<HTMLElement | null>;
}

const Slot = ({ children, className, ...rest }: SlotProps) => {
  if (isValidElement(children)) {
    const props = children.props as Record<string, unknown>;

    const childrenClassName = props?.className ?? '';
    const classNames = cx(className, childrenClassName);

    const mergedProps = { ...rest, ...(children.props as Record<string, unknown>), className: classNames };

    return cloneElement(children, {
      ...mergedProps,
    });
  }

  return null;
};

export default Slot;
