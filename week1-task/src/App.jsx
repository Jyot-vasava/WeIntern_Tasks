import React from "react";
import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";
import TodoStats from "./components/todoStats";


function App() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">My Todos</h1>
          <p className="text-gray-600">Stay organized and productive</p>
        </div>

        <TodoInput />
        <TodoStats />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
