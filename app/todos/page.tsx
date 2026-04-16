"use client";

import { useOptimistic, useState, useActionState } from "react";

const Todos = () => {
  const [todosList, setTodosList] = useState([]);
  const [optimisticTodosList, setoptimisticTodosList] = useOptimistic(
    todosList,
    (state, newTodo) => [
      ...state,
      { id: Math.random(), title: newTodo, pending: false },
    ]
  );
  const [state, handleTODO, isPending] = useActionState(handleSubmit, null);
  async function handleSubmit(previusState, formData) {
    const todoTitle = formData.get("title");
    if (todoTitle) {
      console.log(todoTitle);
      setoptimisticTodosList(todoTitle);
      await new Promise((resolve) => setTimeout(resolve, 5000));
      const newTodo = { id: Math.random(), title: todoTitle, pending: false };
      setTodosList((prev) => [...prev, newTodo]);
    } else {
      alert("add Title please");
    }
  }
  return (
    <>
      <form action={handleTODO}>
        <input
          type="text"
          id="title"
          name="title"
          className="text-gray-900"
          disabled={isPending}
        />
        <div className="flex space-x-4">
          <button type="reset" disabled={isPending}>
            Reset
          </button>
          <button type="submit" disabled={isPending}>
            Add
          </button>
        </div>
      </form>

      {optimisticTodosList ? (
        <div className="flex flex-col space-y-2">
          {optimisticTodosList?.map((todo) => (
            <span key={todo.id} className="flex">
              <input
                type="checkbox"
                checked={todo.pending}
                id={todo.id}
                className="me-2"
                readOnly
              />
              <label htmlFor={todo.id}>{todo.title}</label>
            </span>
          ))}
        </div>
      ) : (
        <>No todos</>
      )}
    </>
  );
};
export default Todos;
