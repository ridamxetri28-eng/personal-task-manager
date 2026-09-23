function TaskFilter({ currentFilter, onFilterChange}) {
    return (
        <div className="task-filter">
            <button
                onClick={()=> onFilterChange("all")}
                className={currentFilter === "all" ? "active" : ""}
            >
                All
            </button>

            <button
                onClick={()=> onFilterChange("active")}
                className={currentFilter === "active" ? "active" : ""}
            >
                Active
            </button>

            <button
                onClick={()=> onFilterChange("completed")}
                className={currentFilter === "completed" ? "active" : ""}
            >
                Completed

            </button>
        </div>
    );    
        
}

export default TaskFilter;