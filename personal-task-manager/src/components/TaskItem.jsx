function TaskItem({ task, onToggle, onDelete, onEdit}) {
 return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
        <div className="task-content">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
            />

            <div>
                <h3>{task.title}</h3>
                <span className="category">{task.category}</span>

            </div>
        </div>

        <div className="task-actions">
            <button onClick={() => onEdit(task)}>Edit</button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>          
    </div>
 );
}

export default TaskItem;