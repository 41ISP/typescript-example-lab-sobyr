import { useState } from "react"


function TodoForm({ onAdd }) {
    const [inputValue, setInputValue] = useState("")

const handleSubmit = (e) => {
    e.preventDefault();

    onAdd(inputValue);

    setInputValue("");
};


return(
    <div className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          placeholder="Введите новую задачу..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="button" className="btn btn-add">
          Добавить
        </button>
      </div>
);
}
export default TodoForm;