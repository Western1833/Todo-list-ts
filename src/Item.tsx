export default function Item() {
    return (
        <div className="todo-item">
              <input type="checkbox" className="todo-checkbox" />
              <span className="todo-text">Sample task</span>
              <button className="delete-button">🗑️</button>
            </div>
    );
}

{/* <div className="todo-item">
              <input type="checkbox" className="todo-checkbox" />
              <span className="todo-text">Sample task</span>
              <button className="delete-button">🗑️</button>
            </div>
            
            {/* Completed Todo Item */}
            // <div className="todo-item completed">
            //   <input type="checkbox" className="todo-checkbox" checked />
            //   <span className="todo-text">Completed task</span>
            //   <button className="delete-button">🗑️</button>
            // </div> */}