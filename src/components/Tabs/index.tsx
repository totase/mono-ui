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
  const [selected, setSelected] = useState<string>(tabs[0].value);

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
              onClick={() => setSelected(value)}
              active={selected === value}
            />
          );
        })}
      </div>

      {panels.map(({ value, ...rest }) => (
        <TabsPanel key={`tab-panel-${value}`} {...rest} value={value} active={selected === value} />
      ))}
    </div>
  );
};

export default Tabs;
