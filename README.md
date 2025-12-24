# Task Manager Pro 🚀

A powerful task management application with advanced analytics built using React, Redux Toolkit, and JavaScript.

## 🔧 Features

### Task Management
- ➕ **Add Tasks** - Create new tasks with detailed information
- ✏️ **Edit Tasks** - Update existing tasks
- 🗑️ **Delete Tasks** - Remove completed or unwanted tasks

### Task Properties
- **Status**: Pending | In Progress | Completed
- **Priority Levels**: Low | Medium | High
- **Due Dates**: Set deadlines for tasks
- **Descriptions**: Add detailed notes to tasks

### 📊 Dashboard Analytics
- **Tasks Completed Today** - Track daily productivity
- **Overdue Tasks** - Identify tasks that need immediate attention
- **Completion Percentage** - Visual progress bar showing overall task completion
- **Task Statistics** - Total, Completed, Pending, and In Progress counts

### 🔍 Filtering
- Filter by **Status** (All, Pending, In Progress, Completed)
- Filter by **Priority** (All, Low, Medium, High)

## 🧠 Redux Usage

The application uses Redux Toolkit for efficient state management:

- **Global State** - Centralized task data accessible throughout the app
- **Redux Slices** - Clean separation of concerns with `tasksSlice`
- **Actions** - Add, update, delete tasks and manage filters
- **Selectors** - Derived state for analytics (completed count, overdue count, filtering)
- **Immutability** - Built-in with Immer (no manual spreading)

## 🛠️ Tech Stack

### Frontend Core
- **React** (v18+) - Component-based UI
- **Hooks** - useState, useEffect, useSelector, useDispatch
- **JavaScript (ES6+)** - Arrow functions, destructuring, array methods

### State Management
- **Redux Toolkit (RTK)**
  - `createSlice` - Simplified reducer logic
  - `configureStore` - Store setup with good defaults
  - Built-in immutability with Immer
  - Cleaner than plain Redux

### Date & Utilities
- **date-fns** - Modern date utility library
  - Due date comparison
  - Overdue calculation
  - "Completed today" logic
  - Date formatting

## 📦 Installation

1. Clone or download this project
2. Install dependencies:
   ```bash
   npm install
   ```

## 🚀 Running the Application

Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
React-App/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Dashboard.js
│   │   ├── Dashboard.css
│   │   ├── TaskForm.js
│   │   ├── TaskForm.css
│   │   ├── TaskList.js
│   │   ├── TaskList.css
│   │   ├── TaskItem.js
│   │   ├── TaskItem.css
│   │   ├── Filters.js
│   │   └── Filters.css
│   ├── redux/
│   │   ├── store.js
│   │   └── tasksSlice.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## 🎨 Key Components

### Dashboard
Displays comprehensive analytics including task statistics and completion progress bar.

### TaskForm
Form for adding new tasks or editing existing ones with all task properties.

### TaskList & TaskItem
Displays all tasks with filtering applied, showing status badges, priority indicators, and due dates.

### Filters
UI controls for filtering tasks by status and priority.

## 🔥 Redux Features

### Actions
- `addTask` - Add a new task
- `updateTask` - Update existing task
- `deleteTask` - Remove a task
- `setStatusFilter` - Filter by status
- `setPriorityFilter` - Filter by priority
- `setEditingTask` - Set task for editing
- `clearEditingTask` - Clear editing mode

### Selectors
- `selectAllTasks` - Get all tasks
- `selectFilteredTasks` - Get tasks based on filters
- `selectTaskStats` - Get computed analytics
- `selectFilters` - Get current filter state
- `selectEditingTask` - Get task being edited

## 📱 Responsive Design

Fully responsive design that works on:
- 💻 Desktop
- 📱 Tablet
- 📱 Mobile

## 🎯 Usage Tips

1. **Add Tasks** - Fill out the form and click "Add Task"
2. **Edit Tasks** - Click the edit icon (✏️) on any task
3. **Delete Tasks** - Click the delete icon (🗑️) and confirm
4. **Filter Tasks** - Use the filter dropdowns to view specific tasks
5. **Track Progress** - Monitor your productivity in the Analytics Dashboard

## 🔮 Future Enhancements

- Search functionality
- Task categories/tags
- Task sorting options
- Export tasks to CSV/JSON
- Dark mode
- Task reminders
- Recurring tasks

## 📄 License

This project is open source and available for educational purposes.

---

Built with ❤️ using React, Redux Toolkit, and date-fns
# TO-DO-APP
