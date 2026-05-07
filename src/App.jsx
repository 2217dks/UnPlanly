import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Weekly from "./pages/Weekly";
import AllTasks from "./pages/AllTasks";
import Notes from "./pages/Notes";

function App() {
  const savedTasks = localStorage.getItem("tasks");
  const initialTasks = savedTasks ? JSON.parse(savedTasks) : [];
  const [tasks, setTasks] = useState(initialTasks);
  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route index element={<Home tasks={tasks} setTasks = {setTasks}/>} />
          <Route path="weekly" element={<Weekly />} />
          <Route path="tasks" element={<AllTasks />} />
          <Route path="notes" element={<Notes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
