import React from 'react';

interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

export const TodoItem: React.FC<Props> = ({ todo, toggleTodo }) => {
    return (
        <li>
        <label
          style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
        >
        <input type="checkbox" checked={todo.complete} onClick={() => {
          toggleTodo(todo);  
         }}/> 
        
         {todo.title}
         {todo.tagList}
         {/* {todo.dueDate} */}
        </label>
      </li>  
    );
}




