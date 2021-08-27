// import logo from './logo.svg';
import './App.css';
// import TodoList from './components/TodoList';
// import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoForm } from  './components/TodoForm'
import { useState } from 'react';

//We want threeish components: an actual list to input stuff, the todoitem view component, and the todo list component

const initialTodos : Todo[] = [
  {
    title: 'eat',
    dueDate: new Date("2021-09-31"),
    tagList: ["hi"],
    complete: true,
  },
]

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (title: string, dueDate: Date, tagList: string[]) => {
    const newTodo = { title, dueDate, tagList, complete: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </>
  );
}

export default App;
