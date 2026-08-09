function TaskItem({task, onToggle, onDelete}) {
    return (
        <div>
            <span>{task.text}</span>
            <button onClick={() =>
                onToggle(task.id)}>
                    {task.completed? "Undo" : "Completed"}
            </button>

            <button onClick={() =>
                onDelete(task.id)}>
                    Delete
            </button>
        </div>
    );
}

export default TaskItem;