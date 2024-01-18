import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";

function TodoList({ showType }) {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <>
      {showType === "all" &&
        todos.map((todo) => <Todo key={todo.id} {...todo} />)}

      {showType === "completed" &&
        todos
          .filter((todo) => todo.isDone)
          .map((todo) => <Todo key={todo.id} {...todo} />)
      }
      {showType === "incomplete" &&
        todos
          .filter((todo) => !todo.isDone)
          .map((todo) => <Todo key={todo.id} {...todo} />)
      }
    </>
  );
}

export default TodoList;
