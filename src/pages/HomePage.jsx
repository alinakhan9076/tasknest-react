import { useState } from "react";
import AddTaskForm from "../components/AddTaskForm";
import FilterBar from "../components/FilterBar";
import SearchBar from "../components/SearchBar";
import TaskList from "../components/TaskList";
import api from "../api/api";

function HomePage({ tasks, setTasks, loading, error }) {
    const [filter, setFilter] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredTasks = tasks.filter((task) => {
        if (filter === "active" && 
            task.done) {
                return false;
        }
        if (filter === "done" && 
            !task.done) {
                return false;
            }
            if (
                searchQuery && !task.text.toLowerCase().includes(searchQuery.toLowerCase())
            ) {
                return false;
            }
        return true;
    });

    async function addTask(taskData){
        const response = await api.post("/tasks", taskData);

        setTasks((currentTasks) => [
            ...currentTasks, response.data,
        ]);
    }

    async function toggleTask(id) {
        const task = tasks.find((task) => task.id === id);

        const response = await api.put(`/tasks/${id}`, {
            text: task.text,
            category: task.category,
            done: !task.done,

        });

        setTasks((currentTasks) => currentTasks.map((task) => 
        task.id === id ? response.data : task
    )
);
    }

    async function deleteTask(id) {
        await api.delete(`/tasks/${id}`) ;

        setTasks((currentTasks) => currentTasks.filter((task) => 
        task.id !== id
    )
);
    }
    
    return(
        <div className="min-h-screen bg-slate-100 px-4 py-8">
            <div className="mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-xl">

            <AddTaskForm onAdd={addTask}/>

            <FilterBar filter={filter}
            onFilterChange={setFilter} />

            <SearchBar searchQuery={searchQuery}
            onSearchChange={setSearchQuery} />

            {loading && (
                <p className="text-center text-slate-500">
                    Loading tasks...
                </p>
            )}

            {error && (
                <p className="mb-4 text-center text-red-500">
                    {error}
                </p>
            )}

            <TaskList tasks={filteredTasks}
            onToggle={toggleTask}
            onDelete={deleteTask} />

            </div>

        </div>
    );
}

export default HomePage;