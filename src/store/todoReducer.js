let id = 5;

const initialState = [
  {
    id: 1,
    title: "save tuto",
    completed: false,
  },
  {
    id: 2,
    title: "prepare tuto",
    completed: true,
  },
  {
    id: 3,
    title: "prepare tuto",
    completed: false,
  },
  {
    id: 4,
    title: "prepare tuto",
    completed: false,
  },
  {
    id: 5,
    title: "prepare tuto",
    completed: false,
  },
];

export const ADD_TODO_ACTION = "ADD_TODO_ACTION";
export const UPDATE_TODO_ACTION = "UPDATE_TODO_ACTION";
export const DELETE_TODO_ACTION = "DELETE_TODO_ACTION";

export const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_ACTION:
      return [...state, { id: ++id, completed: false, ...action.payload }];

    case UPDATE_TODO_ACTION:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, ...action.payload };
        } else {
          return todo;
        }
      });
    case DELETE_TODO_ACTION:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
