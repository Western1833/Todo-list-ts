import  '../src/App.css';

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
        <div className="input-section">
          <div className="input-group">
            <input
              type="text"
              className="todo-input"
              placeholder="Add a new task..."
            />
            <button className="add-button">Add Task</button>
          </div>
        </div>

        {/* Todo List */}
        <div className="todo-list">
          {/* Empty State */}
          <div className="empty-state">
            <div className="empty-icon">📝</div>
            <p className="empty-title">No tasks yet. Add one above!</p>
            <p className="empty-subtitle">Stay organized and productive</p>
          </div>

          {/* Todo Items Container */}
          <div className="todos-container">
            {/* Sample Todo Item */}
            <div className="todo-item">
              <input type="checkbox" className="todo-checkbox" />
              <span className="todo-text">Sample task</span>
              <button className="delete-button">🗑️</button>
            </div>
            
            {/* Completed Todo Item */}
            <div className="todo-item completed">
              <input type="checkbox" className="todo-checkbox" checked />
              <span className="todo-text">Completed task</span>
              <button className="delete-button">🗑️</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}