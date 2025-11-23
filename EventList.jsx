import React from "react";
import EventCard from "./EventCard";

export default function EventList({ events, addTask, toggleTaskStatus, deleteTask }) {
  return (
    <div className="event-list">
      {events.map(event => (
        <EventCard
          key={event.id}
          event={event}
          addTask={addTask}
          toggleTaskStatus={toggleTaskStatus}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}
