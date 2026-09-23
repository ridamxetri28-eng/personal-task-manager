import { useState } from "react";

function TaskForm({ onAddTask }) {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("Personal");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (title.trim() === "" ) {
            return;
        }

        const newTask = {
            id: Date.now(),
            title: title.trim(),
            category: category,
            completed: false,
        };

        onAddTask(newTask);
        setTitle("");
        setCategory("Personal");
        
    
        };

        return (
            <form className="task-form" onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="enter a task..."
                value={title}
                onChange={(event) =>setTitle(event.target.value)}
                />

                <select
                value={category}
                onChange={(event)=> setCategory(event.target.value)}
                >
                    <option value="Personal">Personal</option>
                    <option value="Work">Work</option>
                    <option value="Study">Study</option>
                    <option value="Other">Other</option>
                </select>

                <button type="submit">Add Task</button>
                
                
            </form>
        );
    }

    export default TaskForm;
