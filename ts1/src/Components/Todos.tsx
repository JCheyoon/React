import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodosContext } from "../Store/todo-context";

const Todos: React.FC = (props) => {
  const todoData = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todoData.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          removeTodo={todoData.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
