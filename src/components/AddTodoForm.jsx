import React, { useRef, useState } from "react";
import { addTodoAction } from "../store/todosActions";
import { useDispatch } from "react-redux";

export const AddTodoForm = () => {
  const dispatch = useDispatch();
  const input = useRef(null);
  const [loading, setLoading] = useState(false);

  /*
    Exemple async await car addTodoAction async avec thunk voir index.js du store
    */

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await dispatch(addTodoAction(input.current.value));
    setLoading(false);
    input.current.value = "";
    input.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Tâche" ref={input} />
      <button disabled={loading}>Ajouter</button>
      {loading && "Chargement"}
    </form>
  );
};
