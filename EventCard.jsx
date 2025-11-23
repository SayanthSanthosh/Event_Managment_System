import React, { useState } from "react";

export default function EventCard({ event, addTask, toggleTaskStatus, deleteTask }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [assignee, setAssignee] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!taskTitle) return;
    addTask(event.id, { title: taskTitle, assignee });
    setTaskTitle("");
    setAssignee("");
  };

  return (
    <div className="event-card">
      <h3>{event.title}</h3>
      <p><strong>Date:</strong> {event.date}</p>
      {event.description && <p>{event.description}</p>}

      <h4>Tasks</h4>
      <ul>
        {event.tasks.map(task => (
          <li key={task.id}>
            <span style={{ textDecoration: task.status === "Done" ? "line-through" : "none" }}>
              {task.title} – Assigned to: {task.assignee || "Unassigned"} ({task.status})
            </span>
            <button onClick={() => toggleTaskStatus(event.id, task.id)}>
              {task.status === "Done" ? "Mark Pending" : "Mark Done"}
            </button>
            <button onClick={() => deleteTask(event.id, task.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Task title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Assignee name"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}
