import { Link } from 'react-router-dom';
import './Todo.css';
import useTodo from './useTodo';

export default function Todo() {


    const {
        todos,
        inputText,
        setInputText,
        handleTodo,
        handleDelete,
        handleToggle,

        handleEdit,
        editingId,
        handleUpdateTask
    } = useTodo()

    console.log(todos);

    return (
        <div className="todo-container">
            {/* Back Button */}
            <Link to="/" className="back-link">← Back to Dashboard</Link>

            <h1 className="todo-title">Todo List</h1>

            {/* Static Input Form */}
            <form className="todo-form" onSubmit={(e) => {
                e.preventDefault()
            }}>
                <input
                    type="text"
                    placeholder="What needs to be done?"
                    className="todo-input"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                {
                    !editingId && (
                        <button
                            type="button"
                            className="todo-add-btn"
                            onClick={handleTodo}
                        >
                            Add Task
                        </button>
                    )
                }
               {
                editingId && (
                     <button
                    type="button"
                    className="todo-add-btn"
                    onClick={handleUpdateTask}
                >
                    Update Task
                </button>
                )
               }
            </form>

            {/* Static List Items (Mock Data) */}
            <ul className="todo-list">

                {/* 1. Active Item (Uncompleted) */}

                {todos.map((todo) => (
                    <li key={todo.id} className={todo.isCompleted ? "todo-item completed" : "todo-item"}>
                        <div className="todo-content">
                            <input
                                type="checkbox"
                                checked={todo.isCompleted}
                                className="todo-checkbox"
                                onChange={() => handleToggle(todo.id)}
                            />
                            <span className="todo-text">{todo.text}</span>
                        </div>
                        <div className="todo-actions">
                            <button
                                className="edit-btn"
                                onClick={() => handleEdit(todo.id, todo.text)}
                            >
                                Edit
                            </button>

                            <button
                                className="delete-btn"
                                onClick={() => handleDelete(todo.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}



            </ul>
        </div>
    );
}
