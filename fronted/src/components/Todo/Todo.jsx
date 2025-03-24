import React, { useState } from "react";
import "./Todo.css";
 
const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");
 
    const addTodo = () => {
        if (task.trim() === "") return;
        setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
        setTask("");
    };
 
    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };
 
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
 
    return (
        <div className="todo-container">
            <h1>Todo List</h1>
            <div className="todo-input">
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Add a new task..."
                />
                <button onClick={addTodo}>Add</button>
            </div>
            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo.id} className={`todo-item ${todo.completed ? "completed" : ""}`}>
                        <span
                            onClick={() => toggleComplete(todo.id)}
                            className="todo-text"
                        >
                            {todo.text}
                        </span>
                        <button
                            onClick={() => deleteTodo(todo.id)}
                            className="delete-btn"
                        >
                            ✖
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
 
export default Todo;