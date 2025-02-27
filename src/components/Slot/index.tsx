import { cloneElement, HTMLAttributes, isValidElement, ReactNode, RefObject } from 'react';

export interface SlotProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  ref: RefObject<HTMLElement | null>;
}

const Slot = ({ children, ...rest }: SlotProps) => {
  if (isValidElement(children)) {
    const props = { ...rest, ...(children.props as Record<string, unknown>) };

    return cloneElement(children, {
      ...props,
    });
  }

  return null;
};

export default Slot;
