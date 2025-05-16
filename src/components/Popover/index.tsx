import { HTMLAttributes, RefObject, useEffect, useRef, useState } from 'react';
import cx from 'clsx';

import { Position } from '../../types';
import { useClickOutside } from '../../hooks';
import PopoverTitle from './components/PopoverTitle';
import PopoverContent from './components/PopoverContent';
import { PopoverContext } from './context';

import './styles.css';

export interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
  closeOnScroll?: boolean;
  ignoreClickOutside?: boolean;
  open: boolean;
  onClose?: () => void;
  anchor: RefObject<HTMLElement | null>;
}

interface PopoverState {
  dismissed: boolean;
  position: Position;
}

const Popover = ({
  anchor,
  open,
  className,
  children,
  onClose,
  ignoreClickOutside = false,
  closeOnScroll = true,
  ...rest
}: PopoverProps) => {
  const [state, setState] = useState<PopoverState>({ dismissed: false, position: { x: 0, y: 0 } });

  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open && state.dismissed) setState({ ...state, dismissed: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    function onScroll() {
      if (closeOnScroll) handleClose();
    }

    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (open) {
      const { x, y, width: anchorWidth } = anchor.current?.getBoundingClientRect() || { x: 0, y: 0, width: 0 };
      const { height: tooltipHeight, width: tooltipWidth } = popoverRef.current?.getBoundingClientRect() || {
        height: 0,
        width: 0,
      };

      const posX = x + anchorWidth / 2 - tooltipWidth / 2;
      // Subtract 8 to create gap
      const posY = y - tooltipHeight - 8;

      setState({ ...state, position: { x: posX, y: posY } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const handleClose = () => {
    if (!open) return;

    setState({ ...state, dismissed: true });

    if (onClose) onClose();
  };

  useClickOutside([popoverRef as RefObject<HTMLElement>, anchor as unknown as RefObject<HTMLElement>], () => {
    if (!ignoreClickOutside) handleClose();
  });

  const classNames = cx('mono-ui-popover', className, {
    'mono-ui-popover--hidden': state.dismissed || !open || !anchor,
  });

  return (
    <div
      {...rest}
      ref={popoverRef}
      className={classNames}
      style={{ top: state.position.y, left: state.position.x }}
      aria-hidden={state.dismissed || !open || !anchor}
    >
      <PopoverContext.Provider value={{ close: handleClose }}>{children}</PopoverContext.Provider>
    </div>
  );
};

Popover.Title = PopoverTitle;
Popover.Content = PopoverContent;

export default Popover;
