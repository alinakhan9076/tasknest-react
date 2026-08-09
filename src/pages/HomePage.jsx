import { useState } from "react";
import AddTaskForm from "../components/AddTaskForm";
import FilterBar from "../components/FilterBar";
import SearchBar from "../components/SearchBar";
import TaskList from "../components/TaskList";

function HomePage() {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    function addTask(taskData) {
        const newTask = {
            id: Date.now(),
            text: taskData.category,
            completed: false,
        };

        setTasks((currentTasks) => [
            ...currentTasks,
            newTask,
        ]);
    }

    function toggleTask(id) {
        setTasks((currentTasks) => 
        currentTasks.map((task) => 
        task.id === id
    ? { ...task, completed: ! task.completed}
          : task
        )
    );
    }

    function deleteTask(id) {
        setTasks((currentTasks) =>
        currentTasks.filter((task) =>
        task.id !== id)
    );
    }
    
    return(
        <div>
            <h1>TaskNest</h1>
            <AddTaskForm onAdd={addTask}/>

            <FilterBar filter={filter}
            onFilterChange={setFilter} />

            <SearchBar searchQuery={searchQuery}
            onSearchChange={setSearchQuery} />

            <TaskList tasks={tasks}
            onToggle={toggleTask}
            onDelete={deleteTask} />

        </div>
    );
}

export default HomePage;