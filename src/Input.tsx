export default function Input() {

    return (
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
    );
}