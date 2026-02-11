import { useState } from 'react'

import './App.css'
import TodoForm from './components/TodoForm';

export interface IExpense {
id: number,
completed: boolean,
text: string
}

export function App() {
  const [todos, setTodos ] = useState<IExpense[]>([])

  const addTodo = (text: string) => {
    const newTodo = {
      id : Date.now(),
      completed : false,
      text: text
    };

    setTodos([...todos, newTodo])
  };

  return (
   <div className="app-container">
      <h1 className="app-title">📝 Мои задачи</h1>
      <TodoForm onAdd={addTodo}/>
      
      {/* Форма добавления задачи */}
      
      
      {/* Кнопки фильтрации */}
      <div className="filter-buttons">
        <button className="btn btn-filter active">
          Все
        </button>
        <button className="btn btn-filter">
          Активные
        </button>
        <button className="btn btn-filter">
          Завершённые
        </button>
      </div>
      
      {/* Список задач */}
      <ul className="todo-list">
        <li className="todo-item">
          <input
            type="checkbox"
            className="todo-checkbox"
          />
          <span className="todo-text">
            Изучить React Hooks
          </span>
          <button className="btn btn-delete">
            Удалить
          </button>
        </li>
        
        <li className="todo-item">
          <input
            type="checkbox"
            className="todo-checkbox"
            checked
            readOnly
          />
          <span className="todo-text completed">
            Прочитать документацию
          </span>
          <button className="btn btn-delete">
            Удалить
          </button>
        </li>
        
        <li className="todo-item">
          <input
            type="checkbox"
            className="todo-checkbox"
          />
          <span className="todo-text">
            Создать Todo-приложение
          </span>
          <button className="btn btn-delete">
            Удалить
          </button>
        </li>
      </ul>
    </div>
  )
}

export default App
