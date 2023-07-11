import React, { useState, ChangeEvent, FunctionComponent } from "react";
import { Todo } from "./types";
import { TodoItem } from "./TodoItem";

export const TsTodo: FunctionComponent = () => {
  const [title, setTitle] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = () => {
    const randomInt = Math.random() * 10000;

    const newTodo: Todo = {
      id: randomInt,
      title,
      done: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setTitle("");
  };

  const handleDelete = (todoId: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
  };

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDone = (todoId: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === todoId ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <div className="border rounded-md px-5 py-4 shadow-sm bg-white w-[400px] h-[500px]">
      <h2 className="font-bold text-2xl">TODOアプリ</h2>

      <div className="mt-4 flex flex-row items-center justify-center space-x-2">
        <input
          type="text"
          className="flex-1 p-2 border-2 border-gray-400 rounded-md"
          placeholder="タイトル..."
          onChange={handleChangeTitle}
          value={title}
        />

        <button
          className="px-3 py-2 w-16 bg-blue-400 text-white"
          onClick={handleAdd}
        >
          追加
        </button>
      </div>

      <div className="mt-6 flex flex-col space-y-3">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDone={handleDone}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};
