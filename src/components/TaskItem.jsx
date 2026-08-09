function TaskItem({task, onToggle, onDelete}) {
    return (
        <div>
            <input type="checkbox"
            checked={task.completed} 
            onChange={() =>
                onToggle(task.id)} />

                <span>
                    {task.text}
                </span>
                <span>
                    {task.category}
                </span>

                <button onClick={() => onDelete(task.id)}>
                    Delete
                </button>
        </div>
    );
}

export default TaskItem;