import { useRef } from "react";
import { nanoid } from "nanoid";

export type TodoProp = {
    id: string;
    text: string;
}

type InputProps = {
  onAddTodo: (todo: TodoProp) => void;
}

export default function Input({onAddTodo}: InputProps) {
const inputRef = useRef<HTMLInputElement>(null);

const clickHandler = () => {
    const value = inputRef.current?.value.trim() || '';

    if(!value) return;

    onAddTodo({
        id: nanoid(),
        text: value
    });

    inputRef.current!.value = '';
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