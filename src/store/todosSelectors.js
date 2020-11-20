import { createSelector } from "reselect";
import { filterSelector } from "./filterSelectors";

export const todosSelector = ({ todos }) => todos;

export const filtredTodosSelector = createSelector(
  todosSelector,
  filterSelector,
  (todos, filter) => {
    if (filter === null) {
      return todos;
    }
    return todos.filter((todo) => todo.completed === filter);
  }
);

/*
export const filtredTodosSelector = ({ todos, filter }) => {
  if (filter === null) {
    return todos;
  }
  return todos.filter((todo) => todo.completed === filter);
};
*/
