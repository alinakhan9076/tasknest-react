import { useEffect, useState } from "react";
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage";
import StatsPage from "./pages/StatsPage";
import SettingsPage from "./pages/SettingsPage";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

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
  
    <BrowserRouter>

    <Navbar title="TaskNest" />

    <Routes>

      <Route path="/"
      element={
        <HomePage tasks={tasks}
    setTasks={setTasks} />
      } />

    <Route path="/stats"
    element={<StatsPage tasks={tasks} />
    } />

    <Route path="/settings"
    element={<SettingsPage />
    } />
    
      </Routes>

    </BrowserRouter>
  );
}
 
export default App;