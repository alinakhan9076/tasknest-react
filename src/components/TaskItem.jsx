function TaskItem({task, onToggle, onDelete}) {
    return (
        <div className="mb-3 flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
            <input className="h-5 w-5 cursor-pointer"
            type="checkbox"
            checked={task.done} 
            onChange={() =>
                onToggle(task._id)} />

            <div className="flex min-w-0 flex-1 items-center gap-3">

                <span className={`wrap-break-word text-base ${
                    task.done ? "text-slate-400 line-through" :
                    "text-slate-700"
                }`}>
                    {task.text}
                </span>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                    {task.category}
                </span>

                </div>

                <button className="shrink-0 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium
                text-white transition hover:bg-red-600"
                onClick={() => onDelete(task._id)}>
                    Delete
                </button>
        </div>
    );
}

export default TaskItem;