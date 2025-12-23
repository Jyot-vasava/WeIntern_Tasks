# Todo App 

A simple and clean todo application built with React, Redux Toolkit, and Tailwind CSS. All todos are automatically saved to localStorage.

**Live URL** : https://works-todo.vercel.app/

## Features

- ✅ Add new todos
- ✏️ Edit existing todos
- 🗑️ Delete todos
- ✔️ Mark todos as complete/incomplete
- 💾 Auto-save to localStorage
- 📊 View active and total todo counts

## Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Install required packages:**
```bash
npm install @reduxjs/toolkit react-redux lucide-react
```

3. **Run the app:**
```bash
npm run dev
```

## File Structure

```
src/
├── app/
│   └── store.js              # Redux store
├── features/
│       └── todoSlice.js      # Todo actions & reducers
├── components/
│   ├── TodoInput.jsx         # Add todo input
│   ├── TodoItem.jsx          # Individual todo
│   ├── TodoList.jsx          # Todo list
│   └── TodoStats.jsx         # Statistics
├── App.jsx                   # Main component
└── main.jsx                  # Entry point
```

## Usage

- **Add Todo**: Type in the input field and press Enter or click "Add"
- **Edit Todo**: Click the edit icon (pencil), modify text, and press Enter or click the checkmark
- **Delete Todo**: Click the trash icon
- **Toggle Complete**: Click the checkbox

## Technologies

- React 18
- Redux Toolkit
- Tailwind CSS
- Lucide React (icons)
- localStorage API
