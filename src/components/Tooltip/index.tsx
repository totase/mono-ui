import { HTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react';
import cx from 'clsx';

import { Position } from '@/types';
import { Body, Slot } from '..';

import './styles.css';

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  content: string;
  children: ReactNode;
}

interface TooltipState {
  active: boolean;
  position: Position;
}

const HIDE_TIMEOUT = 150;

const Tooltip = ({ content, className, children, ...rest }: TooltipProps) => {
  const [state, setState] = useState<TooltipState>({ active: false, position: { x: 0, y: 0 } });

  const triggerRef = useRef<HTMLElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const classNames = cx('mono-ui-tooltip', className);

  useEffect(() => {
    function hideOnEvent() {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      setState({ ...state, active: false });
    }

    window.addEventListener('scroll', hideOnEvent);
    window.addEventListener('resize', hideOnEvent);

    return () => {
      window.addEventListener('scroll', hideOnEvent);
      window.addEventListener('resize', hideOnEvent);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (state.active) {
      const { x, y, width: triggerWidth } = triggerRef.current?.getBoundingClientRect() || { x: 0, y: 0, width: 0 };
      const { height: tooltipHeight, width: tooltipWidth } = tooltipRef.current?.getBoundingClientRect() || {
        height: 0,
        width: 0,
      };

      const posX = x + triggerWidth / 2 - tooltipWidth / 2;
      // Subtract 5 (arrow height) to avoid overlap
      const posY = y - tooltipHeight - 5;

      setState({ ...state, position: { x: posX, y: posY } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.active]);

  const show = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    setState({ ...state, active: true });
  };

  const hide = () => {
    timeoutRef.current = setTimeout(() => {
      setState({ ...state, active: false });
    }, HIDE_TIMEOUT);
  };

  return (
    <>
      <Slot
        ref={triggerRef}
        onMouseEnter={show}
        onMouseLeave={hide}
        className="mono-ui-tooltip__trigger"
        // aria-describedby="tooltip"
      >
        {children}
      </Slot>

      {state.active && (
        <div
          // id="tooltip" // Todo: Add hook to generate unique id
          role="tooltip"
          ref={tooltipRef}
          className={classNames}
          style={{ top: state.position.y, left: state.position.x }}
          {...rest}
        >
          <Body as="span" light>
            {content}
          </Body>

          <div className="mono-ui-tooltip__arrow" />
        </div>
      )}
    </>
  );
};

export default Tooltip;
