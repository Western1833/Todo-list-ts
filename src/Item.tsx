import { useState } from "react";

type ItemProp = {
    text: string;
}

export default function Item({ text }: ItemProp) {
    const [checked, setChecked] = useState(false);

    const toggleCheck = () =>  setChecked(prev => !prev);

    return (
        <div className={`todo-item ${checked ? 'completed' : ''}`}>
            <input type="checkbox" className="todo-checkbox"
            checked={checked}
            onChange={toggleCheck}
            />
            <span className="todo-text">{text}</span>
            <button className="delete-button">🗑️</button>
        </div>
    );
}
// <div className="todo-item completed">
//   <input type="checkbox" className="todo-checkbox" checked />
//   <span className="todo-text">Completed task</span>
//   <button className="delete-button">🗑️</button>
// </div> */}