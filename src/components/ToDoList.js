import React from "react" ;
import ToDo from "./ToDo"


const ToDoList = ({todos, setTodos, filtered}) => {
  
    return (
        <div className="list"> 
            <ul>
                {filtered.map((todo) => (
                    <ToDo  key = {todo.id} value = {todo.value}  setTodos = {setTodos} todos = {todos} todo = {todo}/>
                ))}

            </ul>
        </div>
    )
} 

export default ToDoList;