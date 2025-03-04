import { ReactNode, useState } from 'react';
import TabButton, { TabButtonProps } from './components/TabButton';
import TabsPanel from './components/TabsPanel';

import './styles.css';

export interface TabsProps {
  tabs: Omit<TabButtonProps, 'active'>[];
  panels: {
    value: string;
    children: ReactNode;
  }[];
}

const Tabs = ({ tabs, panels }: TabsProps) => {
  const [active, setActive] = useState<TabButtonProps['value']>(tabs[0].value);

  return (
    <div className="mono-ui-tabs">
      <div className="mono-ui-tabs__tabslist" aria-orientation="horizontal" role="tablist">
        {tabs.map(({ label, value, ...rest }) => {
          return (
            <TabButton
              key={`tab-button-${value}`}
              {...rest}
              label={label}
              value={value}
              onClick={() => setActive(value)}
              active={active === value}
            />
          );
        })}
      </div>

      {panels.map(({ value, ...rest }) => (
        <TabsPanel key={`tab-panel-${value}`} {...rest} value={value} active={active === value} />
      ))}
    </div>
  );
};

export default Tabs;
