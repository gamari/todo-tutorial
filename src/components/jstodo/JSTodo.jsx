import React, { useState } from "react";

import { BsTrash } from "react-icons/bs";

export const JSTodo = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = (e) => {
    // 疑似的なID
    const randomInt = Math.random() * 10000;

    // 失敗例:
    // todos.push({title: title});
    // console.log(todos);

    // 追加するTODOの作成
    const newTodo = {
      id: randomInt,
      title: title,
      done: false,
    };

    // 新しいtodo配列
    const newTodos = [...todos, newTodo];

    // todosを更新する
    setTodos(newTodos);

    // titleを初期化
    setTitle("");
  };

  const handleDelete = (todo) => {
    const newTodos = todos.filter((item) => item.id != todo.id);
    setTodos(newTodos);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDone = (todo) => {
    const newTodos = todos.map((item) => {
      if (todo.id === item.id) {
        return {
          ...item,
          done: !todo.done,
        };
      }

      return item;
    });
    setTodos(newTodos);
  };

  return (
    <div className="border rounded-md px-5 py-3 shadow-sm bg-white w-[400px] h-[500px]">
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
          <div
            className={`flex flex-row items-center border shadow p-2 ${
              todo.done && "bg-gray-300"
            }`}
            key={todo.title}
          >
            <div>
              <input
                type="checkbox"
                defaultValue={todo.done}
                onChange={(e) => {
                  handleDone(todo);
                }}
                disabled={todo.done}
              />
            </div>
            <div className="flex-1 p-1 pl-3 text-lg">{todo.title}</div>
            <BsTrash
              className="text-gray-500 cursor-pointer hover:bg-red-100 rounded-full p-2 h-9 w-9"
              onClick={() => handleDelete(todo)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
