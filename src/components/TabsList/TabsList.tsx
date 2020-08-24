import React from 'react';
import Tab from '../Tab/Tab';
import Tabs from './tabsJson';
import { List } from './tabsListStyle';

interface ITabsListProps {
  onTabPress: (id: number) => void;
  activeTab: number;
}

const TabsList: React.FC<ITabsListProps> = ({ activeTab, onTabPress }) => {
  return (
    <List>
      {Tabs.map((data) => (
        <Tab
          key={data.id}
          name={data.name}
          id={data.id}
          activeId={activeTab}
          onClick={onTabPress}
        />
      ))}
    </List>
  );
};

export default TabsList;
