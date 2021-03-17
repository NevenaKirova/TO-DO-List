import React, {useState,useEffect} from 'react';
import './App.css';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList'


function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all"); 
  const [filtered, setFiltered] = useState([]);

useEffect(() => {
  getTodos();
},[]); 

  useEffect(() => {
    filterTodos();
    setTodosToLocalStorage();
  }, [todos, status]);


  const filterTodos = () => {
    switch (status){
      case "completed": 
        setFiltered(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFiltered(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFiltered(todos);
        break;
      }
    }

  const setTodosToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  } 

  const getTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
     let localToDos = JSON.parse(localStorage.getItem("todos", JSON.stringify(todos)))
     setTodos(localToDos);
    }
  }
  
 
  return (
    <div className="todo-App">
      <div className ="header">
        <h1>TO-DO LIST</h1>
      </div>
      <div className= "container">
         <ToDoForm  inputValue = {inputValue}
          todos = {todos}
           setTodos = {setTodos} 
           setInputValue = {setInputValue}
           setStatus = {setStatus}
          />
         <ToDoList setTodos = {setTodos} todos = {todos} filtered = {filtered}/>
      </div>
    </div>
  );
}

export default App;
