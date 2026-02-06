import { useState } from 'react'

import './App.css'

function App() {
  const [] = useState(0)

  return (
   <div className="app-container">
      <h1 className="app-title">📝 Мои задачи</h1>
      
      {/* Форма добавления задачи */}
      <div className="todo-form">
        <input
          type="text"
          className="todo-input"
          placeholder="Введите новую задачу..."
        />
        <button type="button" className="btn btn-add">
          Добавить
        </button>
      </div>
      
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
