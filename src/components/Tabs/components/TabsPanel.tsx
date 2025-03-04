import { HTMLAttributes } from 'react';
import { makeTabButtonId, makeTabPanelId } from '../utils';

export interface TabsPanelProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  active: boolean;
}

const TabsPanel = ({ active, value, children, ...rest }: TabsPanelProps) => {
  const id = makeTabPanelId(value);
  const labelledBy = makeTabButtonId(value);

  return (
    <div
      {...rest}
      id={id}
      hidden={!active}
      data-state={active ? 'active' : 'inactive'}
      role="tabpanel"
      aria-labelledby={labelledBy}
    >
      {children}
    </div>
  );
};

export default TabsPanel;
