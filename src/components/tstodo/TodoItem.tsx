import { FunctionComponent, memo } from "react";
import { Todo } from "./types";
import { BsTrash } from "react-icons/bs";

interface Props {
  todo: Todo;
  handleDone: (id: number) => void;
  handleDelete: (id: number) => void;
}

export const TodoItem: FunctionComponent<Props> = ({
  todo,
  handleDone,
  handleDelete,
}) => (
  <div
    className={`flex flex-row items-center border shadow p-2 ${
      todo.done && "bg-gray-300"
    }`}
    key={todo.id}
  >
    <div>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => {
          handleDone(todo.id);
        }}
        disabled={todo.done}
        className={`${!todo.done && "cursor-pointer"}`}
      />
    </div>
    <div className="flex-1 p-1 pl-3 text-lg">{todo.title}</div>
    <BsTrash
      className="text-gray-500 cursor-pointer hover:bg-red-100 rounded-full p-2 h-9 w-9"
      onClick={() => handleDelete(todo.id)}
    />
  </div>
);
