import * as React from 'react';
import './style.css';

export default function App() {
  const data = [{ str: 'hello' }, { str: 'Bye!!!!!!' }];
  const [lists, setLists] = React.useState(data);
  const [dragItem, setDragItem] = React.useState(null);
  const [dragTarget, setDragTarget] = React.useState(null);
  const onDragStart = (e) => {
    setDragItem(e.currentTarget);
  };
  const onDragOver = (e) => {
    e.preventDefault();
    if (e.currentTarget !== dragTarget) {
      setDragTarget(e.currentTarget);
    }
  };
  const onDragEnd = (e) => {
    e.preventDefault();
    const dragItemPos = +dragItem.dataset.position;
    const dragTargetPos = +e.currentTarget.dataset.position;
    setLists((current) => {
      const newLists = [...current];
      newLists[0] = current[1];
      newLists[1] = current[0];
      return newLists;
    });
  };

  return (
    <div>
      {lists.map((item, index) => {
        return (
          <h1
            key={index}
            data-position={index}
            draggable={true}
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDragEnd={onDragEnd}
          >
            {item.str}
          </h1>
        );
      })}
    </div>
  );
}
