import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, doneTodo } from "../Redux/todoSlice";

function Todo({ title, id, isDone }) {
  const dispatch = useDispatch();
  const removeTodoHandler = (id) => {
    dispatch(removeTodo({ id }));
  };

  const doneTodoHandler = (id) => {
    dispatch(doneTodo({ id }));
  };
  return (
    <div className={`todo ${isDone && "completed"}`}>
      <li className="todo-item">{title}</li>
      <button className="complete-btn" onClick={() => doneTodoHandler(id)}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={() => removeTodoHandler(id)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
