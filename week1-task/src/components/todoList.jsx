import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./todoItem.jsx";

function TodoList() {
  const todos = useSelector((state) => state.todos.items);

  if (todos.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-8 text-center text-gray-500">
        No todos yet. Add one to get started! 
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
