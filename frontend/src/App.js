import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import "./styles/App.css";

function App() {
  const [status, setStatus] = useState();

  return (
    <div className="container">
      <h1>Todo App</h1>
      <TaskForm />
      <FilterBar setStatus={setStatus} />
      <TaskList status={status} />
    </div>
  );
}

export default App;
