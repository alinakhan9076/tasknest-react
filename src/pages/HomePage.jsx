import { useState } from "react ";

function HomePage() {
    const [tasks, setTasks] = useState([]);
    return(
        <div>
            <h1>TaskNest</h1>
            <p>Total tasks: {tasks.length}</p>
            <button onClick={() =>{ 
            setTasks([...tasks, "Learn React"]);
            }}>
                Add Test Task
            </button>
        </div>
    );
}

export default HomePage;