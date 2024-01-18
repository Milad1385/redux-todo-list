import {useState } from "react";
import "./App.css";
import TodoList from "./Components/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./Redux/todoSlice";

function App() {
  const [title, setTitle] = useState("");
  const [showType, setShowType] = useState("all");

  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    const newTodoObj = {
      id: crypto.randomUUID(),
      title,
      isDone: false,
    };
    dispatch(addTodo(newTodoObj));
    setTitle("");
  };

  const onChangeHandler = (event) => {
    setShowType(event.target.value);
  };
  return (
    <>
      <header>
        <h1>Redux To Do List</h1>
      </header>
      <form onSubmit={(e) => addTodoHandler(e)}>
        <input
          type="text"
          className="todo-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className="todo-button"
          type="submit"
          onSubmit={(e) => addTodoHandler(e)}
        >
          <i className="fas fa-plus-circle fa-lg"></i>
        </button>
        <div className="select">
          <select
            name="todos"
            className="filter-todo"
            onChange={onChangeHandler}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>
      </form>

      <div className="todo-container">
        <ul className="todo-list">
          <TodoList showType={showType} />
        </ul>
      </div>
    </>
  );
}

export default App;
