import  '../src/App.css';

import TodoList from './Todo-list.tsx';
import Input, { type TodoProp } from './Input.tsx';
import { useState } from 'react';

export default function TodoApp() {
  const [todos, addTodos] = useState<TodoProp[]>([]);

  const addTodosHandler = (newTodo: TodoProp) => {
    if(newTodo){
      addTodos(prev => [...prev, newTodo]);
    }
  }

  const deleteTodoHandler = (id: string) => {
    addTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
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
        <TodoList todos={todos} onDelete={deleteTodoHandler}/>
        
      </div>
    </div>
  );
}