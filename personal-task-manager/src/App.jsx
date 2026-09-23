import {useState} from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";


function App(){
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  
  const addTask = (newTask) => {
    setTasks((previousTasks) => {
      return [...previousTasks, newTask];
    });
  };
  
  const toggleTask = (taskId) => {
    setTasks((previousTasks) => {
      return previousTasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            completed: !task.completed, 
          };
        }
        return task;
      });
    });
  };

  const deleteTask = (taskId) => {
    setTasks((previousTasks) => {
      return previousTasks.filter((task) => task.id !== taskId);
    });
  };
  
  const editTask = (task) => {
    const newTitle = prompt("Edit task:", task.title);
    
    if (newTitle !== null && newTitle.trim() !== "") {
      setTasks((previousTasks) => {
        return previousTasks.map((item) => {
          if (item.id === task.id) {
            return {
              ...item,
              title: newTitle.trim(),
            };
          }

          return item;
        });
      });
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") {
      return !task.completed;
    }

    if (filter === "completed") {
     return task.completed;
      
    }
    return true;

  });

    
  return (
    <div className="app">
      <Header />
      <TaskForm onAddTask={addTask} />
      <TaskFilter
        currentFilter={filter}
        onFilterChange={setFilter}
      /> 
      
      <TaskList
        tasks={filteredTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onEdit={editTask}
      />
    </div>
  );
   
}

export default App;