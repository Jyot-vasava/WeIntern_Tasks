import React from "react";
import { useSelector } from "react-redux";

function TodoStats() {
  const todos = useSelector((state) => state.todos.items);
  const activeTodos = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="bg-white rounded-lg p-4 mb-4 flex justify-between items-center">
      <span className="text-gray-600">
        <span className="font-semibold text-indigo-600">{activeTodos}</span>{" "}
        active
      </span>
      <span className="text-gray-600">
        <span className="font-semibold text-gray-800">{todos.length}</span>{" "}
        total
      </span>
    </div>
  );
}

export default TodoStats;
