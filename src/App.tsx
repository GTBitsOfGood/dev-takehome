// import logo from './logo.svg';
import './App.css';
// import TodoList from './components/TodoList';
// import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoForm } from  './components/TodoForm'
import { useState } from 'react';
import { DefaultButton } from '@fluentui/react';

//We want threeish components: an actual list to input stuff, the todoitem view component, and the todo list component

const initialTodos : Todo[] = [
  {
    title: 'eat',
    dueDate: new Date("2021-09-31"),
    tagList: ["hi"],
    complete: false,
  },
]

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [ dateSort, setDateSort ] = useState<boolean>(false);
  const [ finishedSort, setFinishedSort ] = useState<boolean>(false);

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

  const handleDateSort = () => {
    setDateSort(!dateSort)
  }

  const handleFinishedSort = () => {
    setFinishedSort(!finishedSort)
  }

  var sortFunc;
  if (finishedSort && dateSort) {
    sortFunc = (first: Todo, second: Todo) => 
      (first.complete ? 1 : 0) - (second.complete ? 1 : 0) ||
          first.dueDate.getTime() - second.dueDate.getTime();
  } else if (finishedSort) {
    sortFunc =  (first: Todo, second: Todo) => 
      (first.complete ? 1 : 0) - (second.complete ? 1 : 0);
  } else if (dateSort) {
    sortFunc =  (first: Todo, second: Todo) => 
      first.dueDate.getTime() - second.dueDate.getTime();
  } else {
    sortFunc =  (first: Todo, second: Todo) => 0;
  }

  const addTodo: AddTodo = (title: string, dueDate: Date, tagList: string[]) => {
    const newTodo = { title, dueDate, tagList, complete: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <TodoForm addTodo={addTodo}/>
      <div className='wrapper'>
        <DefaultButton id="dateSort" onClick={handleDateSort}>Sort By Date</DefaultButton>
        <DefaultButton id="finishedSort" onClick={handleFinishedSort}>Sort by Finished</DefaultButton>
      </div>
      <TodoList todos={todos.sort(sortFunc)} toggleTodo={toggleTodo} />
    </>
  );
}

export default App;
