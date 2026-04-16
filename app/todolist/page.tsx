"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

interface todoListType {
  id: number;
  task: string;
}

const TodoList = () => {
  const [todoList, setTodoList] = useState<todoListType[]>([]);
  const [editID, seteditID] = useState<number | null>(null);
  const formSchema = z.object({
    task: z.string().min(3, "minimum 3 character").max(10, "10 bas he"),
  });

  type formData = z.infer<typeof formSchema>;

  const {
    handleSubmit,
    register,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<formData>({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = (data: formData) => {
    if (editID) {
      setTodoList((prev) =>
        prev.map((p) => (p.id === editID ? { ...p, task: data.task } : p))
      );
      seteditID(null);
    } else {
      setTodoList((prev) => [
        ...prev,
        {
          id: prev.length > 0 ? Math.max(...prev.map((t) => t.id)) + 1 : 1,
          task: data.task,
        },
      ]);
    }

    reset();
  };

  const handleEdit = (todo: todoListType) => {
    // reset({ task: todo.task });
    setValue("task", todo.task);
    seteditID(todo.id);
  };
  const handleDelete = (id: number) => {
    setTodoList((prev) => {
      return prev.filter((p) => p.id !== id);
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2">
          <input type="text" {...register("task")} className="text-gray-900" />
          {errors && <p>{errors?.task?.message}</p>}
          <div className="space-x-4">
            <button
              type="submit"
              className="px-4 py-2 border border-gray-900 text-black-800 hover:text-white-900 "
            >
              {isSubmitting ? "...Saving" : editID ? "Update" : "Add"}
            </button>
            <button
              type="button"
              onClick={() => reset()}
              className="px-4 py-2 border border-gray-900 text-black-800 hover:text-white-900 "
            >
              reset
            </button>
            {editID && (
              <button
                type="button"
                onClick={() => seteditID(null)}
                className="px-4 py-2 border border-gray-900 text-black-800 hover:text-white-900 "
              >
                cancel-Edit
              </button>
            )}
          </div>
        </div>
      </form>
      {todoList && (
        <table>
          <tbody>
            {todoList?.map((todo) => (
              <tr key={todo.id}>
                <td className="p-3">{todo.id}</td>
                <td className="p-3">{todo.task}</td>
                <td className="p-3">
                  <button type="button" onClick={() => handleEdit(todo)}>
                    Edit
                  </button>
                </td>
                <td className="p-3">
                  <button type="button" onClick={() => handleDelete(todo.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
export default TodoList;
