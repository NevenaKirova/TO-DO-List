import React from "react";
import { v4 as uuidv4 } from "uuid";

const ToDoForm = ({ inputValue, setInputValue, todos, setTodos, setStatus }) => {
  const onInputChange = (ev) => {
    setInputValue(ev.target.value);
  };

  const addToDo = (ev) => {
    ev.preventDefault();
    if (!inputValue) {
      return;
    }

    setTodos([{ value: inputValue, completed: false, id: uuidv4() }, ...todos]);
    setInputValue("");
  };

  const changeStatus = (ev) => {
    setStatus(ev.target.value);
  }

  return (
    <form>
      <div className="form-container">
        <div className ="input-container">
          <input
            onInput={onInputChange}
            type="text"
            placeholder="Add new task..."
            value={inputValue}
            className="addTxt"
          ></input>
          <button onClick={addToDo} className="addBtn">
            <img
              src="https://picaflor-azul.com/images/plus-circle1.png"
              alt="add button"
            />
          </button>
        </div>

        <div className="select">
          <select onChange = {changeStatus} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default ToDoForm;
