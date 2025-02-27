import { HTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react';

import { Position } from '@/types';
import { Slot, Typography } from '..';

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

const Tooltip = ({ content, children, ...rest }: TooltipProps) => {
  const [state, setState] = useState<TooltipState>({ active: false, position: { x: 0, y: 0 } });

  const triggerRef = useRef<HTMLElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    window.addEventListener('scroll', hide);

    return () => {
      window.addEventListener('scroll', hide);

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

      setState((prev) => {
        const posX = x + triggerWidth / 2 - tooltipWidth / 2;
        const posY = y - tooltipHeight;

        return { ...prev, position: { x: posX, y: posY } };
      });
    }
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
        className="mono-ui__tooltip__trigger"
        aria-describedby="test"
      >
        {children}
      </Slot>

      {state.active && (
        <div
          id="test"
          ref={tooltipRef}
          className="mono-ui__tooltip"
          style={{ top: state.position.y, left: state.position.x }}
          {...rest}
        >
          <div className="mono-ui__tooltip__arrow" />
          <Typography as="span" light tiny>
            {content}
          </Typography>
        </div>
      )}
    </>
  );
};

export default Tooltip;
