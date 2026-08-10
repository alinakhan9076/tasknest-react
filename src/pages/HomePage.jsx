import { useEffect, useState } from "react";
import AddTaskForm from "../components/AddTaskForm";
import FilterBar from "../components/FilterBar";
import SearchBar from "../components/SearchBar";
import TaskList from "../components/TaskList";

function HomePage() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");

        if(savedTasks) {
            return JSON.parse(savedTasks);
        }
        return [];
    });
    const [filter, setFilter] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredTasks = tasks.filter((task) => {
        if (filter === "active" && 
            task.completed) {
                return false;
        }
        if (filter === "completed" && 
            !task.completed) {
                return false;
            }
            if (
                searchQuery && !task.text.toLowerCase().includes(searchQuery.toLowerCase())
            ) {
                return false;
            }
        return true;
    });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    function addTask(taskData) {
        const newTask = {
            id: Date.now(),
            text: taskData.text,
            category: taskData.category,
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
    ? { ...task, completed: !task.completed}
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

            <TaskList tasks={filteredTasks}
            onToggle={toggleTask}
            onDelete={deleteTask} />

        </div>
    );
}

export default HomePage;