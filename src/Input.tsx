import { useRef } from "react";

type InputProps = {
  onAddTodo: (todo: string) => void;
}

export default function Input({onAddTodo}: InputProps) {
const inputRef = useRef<HTMLInputElement>(null);

const clickHandler = () => {
    const value = inputRef.current?.value || '';

    onAddTodo(value);

    if(inputRef.current) inputRef.current.value = '';
}

    return (
        <div className="input-section">
          <div className="input-group">
            <input
              type="text"
              className="todo-input"
              placeholder="Add a new task..."
              ref={inputRef}
            />
            <button className="add-button" onClick={clickHandler}>Add Task</button>
          </div>
        </div>
    );
}