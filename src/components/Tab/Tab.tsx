import React from 'react';
import { Item, Button } from './tabStyle';

interface ITabProps {
  name: string;
  id: number;
  activeId: number;
  onClick: (id: number) => void;
}

const Tab: React.FC<ITabProps> = ({ name, id, activeId, onClick }) => {
  return (
    <Item>
      <Button
        onClick={() => onClick(id)}
        active={activeId === id ? true : false}
      >
        {name}
      </Button>
    </Item>
  );
};

export default Tab;
