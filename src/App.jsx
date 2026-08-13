import { useEffect, useState } from "react";
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage";
import StatsPage from "./pages/StatsPage";
import SettingsPage from "./pages/SettingsPage";
import api from "./api/api";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App(){
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getTasks() {
      try {
        const response = await api.get("/tasks");
        setTasks(response.data);
      } catch {
        setError("Failed to load tasks");
      } finally {
        setLoading(false);
      }
    }
    getTasks();
  }, []);

  return (
  
    <BrowserRouter>

    <Navbar title="TaskNest" />

    <Routes>

      <Route path="/"
      element={
        <HomePage tasks={tasks}
    setTasks={setTasks} 
    loading={loading}
    error={error}/>
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