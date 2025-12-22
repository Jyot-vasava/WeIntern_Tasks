import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo, editTodo } from "../features/todoSlice";
import { Trash2, Edit2, Check, X } from "lucide-react";

function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const startEdit = () => {
    setIsEditing(true);
    setEditValue(todo.text);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditValue(todo.text);
  };

  const saveEdit = () => {
    if (editValue.trim() === "") return;
    dispatch(editTodo({ id: todo.id, text: editValue.trim() }));
    setIsEditing(false);
  };

  const handleEditKeyPress = (e) => {
    if (e.key === "Enter") {
      saveEdit();
    } else if (e.key === "Escape") {
      cancelEdit();
    }
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-sm p-4 transition-all ${
        todo.completed ? "opacity-75" : ""
      }`}
    >
      {isEditing ? (
        <div className="flex gap-2">
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleEditKeyPress}
            className="flex-1 px-3 py-2 border border-gray-300 rounded "
            autoFocus
          />
          <button
            onClick={saveEdit}
            className="bg-green-600 hover:bg-green-700 text-white p-2 rounded transition-colors"
            title="Save"
          >
            <Check size={20} />
          </button>
          <button
            onClick={cancelEdit}
            className="bg-gray-400 hover:bg-gray-500 text-white p-2 rounded transition-colors"
            title="Cancel"
          >
            <X size={20} />
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleToggle}
            className="w-5 h-5 text-indigo-600 rounded cursor-pointer"
          />
          <span
            className={`flex-1 ${
              todo.completed ? "line-through text-gray-500" : "text-gray-900"
            }`}
          >
            {todo.text}
          </span>
          <button
            onClick={startEdit}
            className="text-blue-600 hover:text-blue-700 p-2 hover:bg-blue-50 rounded transition-colors"
            title="Edit"
          >
            <Edit2 size={18} />
          </button>
          <button
            onClick={handleDelete}
            className="text-red-600 hover:text-red-700 p-2 hover:bg-red-50 rounded transition-colors"
            title="Delete"
          >
            <Trash2 size={18} />
          </button>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
