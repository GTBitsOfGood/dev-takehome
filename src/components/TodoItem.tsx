import React from 'react';

interface Props {
    todo: Todo;
}

export const TodoItem: React.FC<Props> = ({ todo }) => {
    return (
        <li>
        <label
          style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
        >
          <input type="checkbox" checked={todo.complete} /> {todo.title}
        </label>
      </li>  
    );
}




