import React, { useCallback } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { UPDATE_TODO_ACTION } from "../store/todoReducer";
import { todosSelector, filtredTodosSelector } from "../store/todosSelectors";
import { toggleTodoAction, deleteTodoAction } from "../store/todosActions";
import { TodoFilterStore } from "./TodoFilter";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo)}
        />
        {todo.title}
        <button onClick={() => onDelete(todo)}>X</button>
      </label>
    </li>
  );
}

export const TodoList = ({ todos, onToggle, onDelete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          onToggle={onToggle}
          key={todo.id}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export const TodoListStore = () => {
  const todos = useSelector(filtredTodosSelector);
  const dispatch = useDispatch();
  const onToggle = useCallback(
    (todo) => {
      dispatch(toggleTodoAction(todo));
    },
    [dispatch]
  );
  const onDelete = useCallback(
    (todo) => {
      dispatch(deleteTodoAction(todo));
    },
    [dispatch]
  );

  return <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />;
};

/*
export const TodoListStore = connect(
  (state) => ({
    todos: todosSelector(state),
  }),
  (dispatch) => ({
    onToggle: (todo) => dispatch(toggleTodoAction(todo)),
  })
)(TodoList);
*/
