import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleUp = (e) => {
    setCount(count + 1);
    // setCount((prev) => prev + 1);
  };

  const handleDown = () => {
    setCount(count - 1);
    // setCount((prev) => prev - 1);
  };

  return (
    <div className="p-4 broder rounded-lg bg-white">
      <div className="text-xl">カウント: {count}</div>

      <div className="flex flex-row space-x-2 mt-3">
        <button
          className="border p-2 bg-blue-500 text-white w-16"
          onClick={handleUp}
        >
          Up
        </button>

        <button
          className="border p-2 bg-gray-500 text-white w-16"
          onClick={handleDown}
        >
          Down
        </button>
      </div>
    </div>
  );
};
