function StatsPage ({tasks}) {
    const totalTasks = tasks.length;

    const completedTasks = tasks.filter(
        (task) => task.completed
    ).length;

    const activeTasks = tasks.filter(
        (task) => !task.completed
    ).length;

    return (
        <div>
            <h1>Task Statistics</h1>
            <p>Total Tasks: {totalTasks}</p>
            <p>Active Tasks: {activeTasks} </p>
            <p>Completed Tasks: {completedTasks} </p>
        </div>
    );
}

export default StatsPage;