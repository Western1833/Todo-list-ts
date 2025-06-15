import  '../src/App.css';

import TodoList from './Todo-list.tsx';
import Input from './Input.tsx';
import { useState } from 'react';

export default function TodoApp() {
  const [todos, addTodos] = useState<string[]>([]);

  const addTodosHandler = (newTodo: string) => {
    if(newTodo.trim()){
      addTodos(prev => [...prev, newTodo]);
    }
  }
  return (
    <div className="app-container">
      <div className="todo-card">
        {/* Header */}
        <div className="header">
          <h1 className="title">✓ Todo List</h1>
          <p className="subtitle">Stay organized and productive</p>
        </div>

        {/* Input Section */}
        <Input onAddTodo={addTodosHandler}/>

        {/* Todo List */}
        <TodoList/>
        
      </div>
    </div>
  );
}