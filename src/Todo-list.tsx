import Item from "./Item.tsx";

export default function TodoList() {
    return (
        <div className="todo-list">
          {/* Empty State */}
          <div className="empty-state">
            <div className="empty-icon">📝</div>
            <p className="empty-title">No tasks yet. Add one above!</p>
            <p className="empty-subtitle">Stay organized and productive</p>
          </div>

          {/* Todo Items Container */}
          <div className="todos-container">
            <Item/>
          </div>
        </div>
    );
}