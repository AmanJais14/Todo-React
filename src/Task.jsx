import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './task.css'; // Import the CSS file

function Task() {
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState("");

    const handleName = (event) => {
        setTaskName(event.target.value);
    };

    const addTask = () => {
        if (taskName.trim()) {
            setTasks([...tasks, { name: taskName, id: uuidv4(), done: false }]);
            setTaskName(""); // Clear input after adding task
        }
    };

    const markDone = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, done: true } : task
        ));
    };

    const handleDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="task-container">
            <input
                className="input-field"
                type="text"
                placeholder="Enter task"
                value={taskName}
                onChange={handleName}
            />
            <button className="add-task-button" onClick={addTask}>Add Task</button>

            <ul className="task-list">
                {tasks.map((task) => (
                    <li className="task-item" key={task.id}>
                        <span className={`task-name ${task.done ? 'done' : ''}`}>
                            {task.name}
                        </span>
                        {!task.done && (
                            <button className="task-button" onClick={() => markDone(task.id)}>Mark as Done</button>
                        )}
                        <button className="task-button" onClick={() => handleDelete(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Task;
