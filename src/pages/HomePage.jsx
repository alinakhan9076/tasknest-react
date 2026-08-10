import { useState } from "react";
import AddTaskForm from "../components/AddTaskForm";
import FilterBar from "../components/FilterBar";
import SearchBar from "../components/SearchBar";
import TaskList from "../components/TaskList";

function HomePage({ tasks, setTasks }) {
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
        <div className="min-h-screen bg-slate-100 px-4 py-8">
            <div className="mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-xl">
                <h1 className="mb-6 text-3xl font-bold text-slate-800">
                    TaskNest</h1>
            <AddTaskForm onAdd={addTask}/>

            <FilterBar filter={filter}
            onFilterChange={setFilter} />

            <SearchBar searchQuery={searchQuery}
            onSearchChange={setSearchQuery} />

            <TaskList tasks={filteredTasks}
            onToggle={toggleTask}
            onDelete={deleteTask} />

            </div>

        </div>
    );
}

export default HomePage;