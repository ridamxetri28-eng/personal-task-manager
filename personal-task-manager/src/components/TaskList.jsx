import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggle, onDelete, onEdit }) {
    if (tasks.length === 0){
        return(
            <div className="empty-state">
                <p>No tasks found.</p>
            </div>
        );
    }
    
    return (
        <div className="task-list">
            {tasks.map((task)=> (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}

        </div>
    );
}

export default TaskList;
