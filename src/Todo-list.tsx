import type { TodoProp } from "./Input.tsx";
import Item from "./Item.tsx";

type TodoListProps = {
    todos: TodoProp[];
    onDelete: (id: string) => void;
}

export default function TodoList({todos, onDelete}: TodoListProps) {
    return (
        <div className="todo-list">
            {todos.length === 0 ? (
                <div className="empty-state">
                    <div className="empty-icon">📝</div>
                    <p className="empty-title">No tasks yet. Add one above!</p>
                    <p className="empty-subtitle">Stay organized and productive</p>
                </div>
            ):(
                <div className="todos-container">
                    {todos.map(todo => (
                        <Item key={todo.id} id={todo.id} text={todo.text} onDelete={onDelete}/>
                    ))}
                </div>
            )}
        </div>
    );
}