import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const [count, setCount] = useState([]);

  const addTodo= todo =>{
    if(!todo.text || /^\s*$/.test(todo.test)){
      return 
    }
    const newTodos=[todo,...todos]
    setTodos(newTodos)
    console.log(...todos);
  }

  return (
    <div className='todo-App'>
    <TodoList/>
    </div>
  )
}

export default App
