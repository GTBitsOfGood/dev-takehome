import logo from './logo.svg';
import './App.css';
// import TodoList from './components/TodoList';
import { TodoItem } from './components/TodoItem';

//We want threeish components: an actual list to input stuff, the todoitem view component, and the todo list component

const todos : Todo[] = [
  {
    title: 'eat',
    complete: true,
  },
  {
    title: 'Write bits4good app',
    complete: false,
  }
]

function App() {
  return (
    <div className="App">
      <TodoItem todo={todos[0]}/>
      <TodoItem todo={todos[1]}/>
    </div>
  );
}

export default App;
