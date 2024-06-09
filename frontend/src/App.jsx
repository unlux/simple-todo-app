import { useState , useEffect } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from "./components/Todos";
import "./App.css";

// useEffect hook
function App() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:3000/todos")
      .then(async function(res) {
        const json = await res.json();
        setTodos(json);
      })
    console.log(todos);
  }, [])

  return (
    <div>
      <CreateTodo setTodos={setTodos}></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App