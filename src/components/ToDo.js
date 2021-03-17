import React from "react";

const ToDo = ({ value, todos, setTodos,todo }) => {
    const deleteTodo = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
    }

    const checkTodo = () => { 
        setTodos(todos.map( item => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
  return (
    <div className="element">
      <li className = {`tasksToDo ${todo.completed ? "completed" : ""}`}> {value}</li>
      <button  onClick = {checkTodo} className = "tickBtn">
      <img className="tick" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPdrNL09nOpjjqaL2btv2RrLQFh-drL61VGsoO6AghWQxe_PDH&usqp=CAU" alt = "check task"/>
      </button>
      <button onClick = {deleteTodo} className = "deleteBtn">
      <img className="dustbin"  src="https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/user-trash-full-icon.png" alt="delete task"/>
      </button>
    </div>
  );
};

export default ToDo;
