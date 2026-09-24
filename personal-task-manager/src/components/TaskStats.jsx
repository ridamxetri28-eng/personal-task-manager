function TaskStats({ tasks }) {
    const totalTasks = tasks.length;

    const completedTasks = tasks.filter(
        (task) => task.completed
    ).length;

    const remainingTasks = totalTasks - completedTasks;
    return (
        <div className='task-stats'>
            <p>Total: {totalTasks}</p>
            <p>Remaining: {remainingTasks}</p>
            <p>Completed: {completedTasks}</p>
        </div>
    );

}

export default TaskStats;