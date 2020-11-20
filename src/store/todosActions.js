import {
  UPDATE_TODO_ACTION,
  DELETE_TODO_ACTION,
  ADD_TODO_ACTION,
} from "./todoReducer";
import wait from "../wait";

export const toggleTodoAction = (todo) => ({
  type: UPDATE_TODO_ACTION,
  payload: { ...todo, completed: !todo.completed },
});

export const deleteTodoAction = (todo) => ({
  type: DELETE_TODO_ACTION,
  payload: todo.id,
});

export const addTodoAction = (title) => async (dispatch) => {
  await wait(2000);
  dispatch({
    type: ADD_TODO_ACTION,
    payload: { title: title },
  });
};
/*
  ({
  type: ADD_TODO_ACTION,
  payload: { title: title },
  })
  */

//Exemple with thunk
