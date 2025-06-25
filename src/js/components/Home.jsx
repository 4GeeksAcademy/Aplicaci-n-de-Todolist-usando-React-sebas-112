import React, { useState } from "react";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = (task) => {
    if (task.trim()) {
      setTasks((prevTasks) => [...prevTasks, task.trim()]);
    }
  };

  const removeTask = (indexToRemove) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== indexToRemove));
  };

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask(inputValue);
      setInputValue("");
    }
  };

  const renderTasks = () => {
    if (tasks.length === 0) {
      return <li className="list-group-item text-muted">No hay tareas, añadir tareas</li>;
    }

    return tasks.map((task, index) => (
      <li
        key={index}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span>{task}</span>
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={() => removeTask(index)}
        >
          ❌
        </button>
      </li>
    ));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center text-secondary display-1 mb-4">todos</h1>
      <div className="card shadow-sm mx-auto" style={{ maxWidth: "600px" }}>
        <div className="card-body">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="What needs to be done?"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <ul className="list-group mb-3">{renderTasks()}</ul>
          <div className="text-muted small">
            {tasks.length} {tasks.length === 1 ? "item" : "items"} left
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
