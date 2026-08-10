import { useEffect, useState } from "react";
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage";
import StatsPage from "./pages/StatsPage";

function App(){
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      return JSON.parse(savedTasks);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>

    <Navbar title="TaskNest" />

    <HomePage tasks={tasks}
    setTasks={setTasks} />

    <StatsPage tasks={tasks} />
    </>
  );
}
 
export default App;