import { useState } from "react";

function AddTaskForm({ onAdd }) {
    const [text, setText] = useState("");
    const [category, setCategory] = useState("study")

    function handleSubmit(e) {
        e.preventDefault();

        if (!text.trim()) {
            return;
        }

        onAdd({
            text: text.trim(),
            category: category,
        });

        setText("");
        setCategory("study");
    }

    return (
        <form className="mb-6 flex gap-3" onSubmit={handleSubmit}>
            <input className="flex-1 rounded-lg border border-slate-300 px-4 py-3
            outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            type="text" 
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter a task"
            />

            <select value={category}
            onChange={(e) => setCategory(e.target.value)}>
                <option value="study">Study</option>
                <option value="work">Work</option>
                <option value="personal">Personal</option>
            </select>

            <button className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white
            transition hover:bg-blue-700"
             type="submit">
                Add Task
            </button>
        </form>
    );
}

export default AddTaskForm;