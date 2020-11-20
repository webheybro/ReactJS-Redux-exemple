import { combineReducers, createStore, applyMiddleware } from "redux";
import { TodoReducer } from "./todoReducer";
import { filterReducer } from "./filterReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
/*
const incr = function (state = 0, action) {
  if (action.type === "incr") {
    return state + 1;
  }
  return state;
};
*/
const store = createStore(
  combineReducers({
    todos: TodoReducer,
    filter: filterReducer,
    //  incr: incr,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

/*
Redux dev tools (a la place de composeWithDevTools): 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

thunk permet d'envoyer des données async (redux-saga same thing)
pour importer thunk à la place on met :

  composeWithDevTools(
    applyMiddleware(thunk),
  )

    install de thunk :
      npm install redux-thunk

    install de redux devtools extension pour composeWithDevTools :
      npm install --save redux-devtools-extension
*/

/*
window.setInterval(() => {
  store.dispatch({ type: "incr" });
}, 1000);
*/
export default store;
