import  '../src/App.css';

import TodoList from './Todo-list.tsx';
import Input from './Input.tsx';

export default function TodoApp() {
  return (
    <div className="app-container">
      <div className="todo-card">
        {/* Header */}
        <div className="header">
          <h1 className="title">✓ Todo List</h1>
          <p className="subtitle">Stay organized and productive</p>
        </div>

        {/* Input Section */}
        <Input/>

        {/* Todo List */}
        <TodoList/>
        
      </div>
    </div>
  );
}