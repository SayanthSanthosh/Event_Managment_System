# Event_Managment_System

Got it! Here’s an **updated README** including the **EventList** component.

---

# 🗓️ Event Manager – React Project

A simple and interactive **Event Management** web application built using **React**.
This app allows users to create events, add tasks, assign team members, mark progress, and manage everything visually.

---

## 🚀 Features

### ✅ Event Management

* Add events with:

  * Title
  * Date
  * Optional description
* Events are displayed using the **EventList** component

### 📝 Task Management

Inside each event:

* Add tasks
* Assign tasks to a person
* Mark tasks as **Done / Pending**
* Delete tasks
* Real-time UI updates

---

## 📁 Project Structure

```
src/
│── components/
│     ├── EventForm.jsx        # Form to add new events
│     ├── EventCard.jsx        # Individual event with task management
│     └── EventList.jsx        # Lists all events using EventCard
│
│── App.jsx                    # Holds event state and passes props
│── index.js                   # App entry point
```

---

## 🧩 Component Details

### **EventForm.jsx**

* Inputs for: `title`, `date`, `description`
* Submits new event data to parent using `addEvent()`

### **EventCard.jsx**

* Displays a single event:

  * Title
  * Date
  * Description
  * Task List
* Allows:

  * Adding tasks
  * Toggling task status
  * Deleting tasks

### **EventList.jsx**

* Receives all events as props
* Iterates and renders each event using `<EventCard />`
* Acts as the main container for displaying the full event list

---

## 🛠️ How to Run the Project

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the dev server:

   ```bash
   npm start
   ```

3. Open in browser:

   ```
   http://localhost:3000
   ```

---



If you want, I can rewrite this README in **professional GitHub style**, add **badges**, or include **screenshots**.
