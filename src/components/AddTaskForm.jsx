import { useState } from "react";

function AddTaskForm({ onAdd }) {
    const [text, setText] = useState("");
    const [category, setCategory] = useState("Study")

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
        setCategory("Study");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter a task"
            />

            <select value={category}
            onChange={(e) => setCategory(e.target.value)}>
                <option value="Study">Study</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
            </select>

            <button type="submit">
                Add Task
            </button>
        </form>
    );
}

export default AddTaskForm;