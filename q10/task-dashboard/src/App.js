import React, { useState, useEffect } from "react";

const users = ["Alice", "Bob", "John"];

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [assigned, setAssigned] = useState("Alice");
  const [search, setSearch] = useState("");

  // Load from localStorage (API simulation)
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Create Task
  const addTask = () => {
    const newTask = {
      id: Date.now(),
      title,
      assigned,
      status: "To Do",
    };
    setTasks([...tasks, newTask]);
    setTitle("");
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // Update Status (Drag simulation)
  const updateStatus = (id, status) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, status } : t)));
  };

  // Filter + Search
  const filteredTasks = tasks.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase()),
  );

  const renderColumn = (status) => (
    <div style={{ border: "1px solid black", padding: 10, width: "30%" }}>
      <h3>{status}</h3>
      {filteredTasks
        .filter((t) => t.status === status)
        .map((task) => (
          <div
            key={task.id}
            style={{ margin: 10, padding: 10, border: "1px solid gray" }}
          >
            <p>{task.title}</p>
            <p>👤 {task.assigned}</p>

            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <br />

            <button onClick={() => updateStatus(task.id, "To Do")}>
              To Do
            </button>
            <button onClick={() => updateStatus(task.id, "In Progress")}>
              In Progress
            </button>
            <button onClick={() => updateStatus(task.id, "Done")}>Done</button>
          </div>
        ))}
    </div>
  );

  return (
    <div style={{ padding: 20 }}>
      <h1>Task Dashboard</h1>

      {/* Create Task */}
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task"
      />

      <select onChange={(e) => setAssigned(e.target.value)}>
        {users.map((u) => (
          <option key={u}>{u}</option>
        ))}
      </select>

      <button onClick={addTask}>Add Task</button>

      <br />
      <br />

      {/* Search */}
      <input
        placeholder="Search task..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {renderColumn("To Do")}
        {renderColumn("In Progress")}
        {renderColumn("Done")}
      </div>
    </div>
  );
}

export default App;
