import { useEffect, useState } from "react";
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage";
import StatsPage from "./pages/StatsPage";
import SettingsPage from "./pages/SettingsPage";
import api from "./api/api";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoute from "./components/ProtectedRoute";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App(){
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(!!localStorage.getItem("token"));
  const [error, setError] = useState("");

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {
      return;
    }
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
        <ProtectedRoute>
        <HomePage tasks={tasks}
    setTasks={setTasks} 
    loading={loading}
    error={error}/>
    </ProtectedRoute>
      } />

    <Route path="/stats"
    element={
      <ProtectedRoute>
    <StatsPage tasks={tasks} />
    </ProtectedRoute>
    } />

    <Route path="/settings"
    element={
      <ProtectedRoute>
    <SettingsPage />
    </ProtectedRoute>
    } />

    <Route path="/login"
    element={<LoginPage />
    } />

    <Route path="/register"
    element={<RegisterPage /> 
    } />
    
      </Routes>

    </BrowserRouter>
  );
}
 
export default App;