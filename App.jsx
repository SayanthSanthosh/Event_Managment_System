import React, { useState } from "react";
import EventList from "./components/EventList";
import EventForm from "./components/EventForm";

export default function App() {
  const [events, setEvents] = useState([
    // { id: 1, title: "Music Concert", date: "2025-10-05", description: "Live band performance.", tasks: [] },
    // { id: 2, title: "Tech Meetup", date: "2025-11-12", description: "Discuss the latest in AI.", tasks: [] },
  ]);

  const addEvent = (newEvent) => {
    setEvents([...events, { ...newEvent, id: Date.now(), tasks: [] }]);
  };

  const addTask = (eventId, task) => {
    setEvents(events.map(ev =>
      ev.id === eventId ? { ...ev, tasks: [...ev.tasks, { ...task, id: Date.now(), status: "Pending" }] } : ev
    ));
  };

  const toggleTaskStatus = (eventId, taskId) => {
    setEvents(events.map(ev =>
      ev.id === eventId
        ? {
            ...ev,
            tasks: ev.tasks.map(t =>
              t.id === taskId ? { ...t, status: t.status === "Done" ? "Pending" : "Done" } : t
            )
          }
        : ev
    ));
  };

  const deleteTask = (eventId, taskId) => {
    setEvents(events.map(ev =>
      ev.id === eventId
        ? { ...ev, tasks: ev.tasks.filter(t => t.id !== taskId) }
        : ev
    ));
  };

  return (
    <div className="app">
      <h1>Event Management with Task Assignment</h1>
      <EventForm addEvent={addEvent} />
      <EventList
        events={events}
        addTask={addTask}
        toggleTaskStatus={toggleTaskStatus}
        deleteTask={deleteTask}
      />
    </div>
  );
}
