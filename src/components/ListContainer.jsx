import React from 'react';
import ToDoCard from './ToDoCard';

export default function ListContainer({ list, onCompleted, onDeleted }) {
  
  return (
    <div>
      {list.map( (e, index) => (
        <ToDoCard key={index} toDo={e} onCompleted={onCompleted} onDeleted={onDeleted} />
      ))}
    </div>
  )
}
