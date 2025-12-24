import { createSlice } from '@reduxjs/toolkit';
import { isToday, isPast, startOfDay } from 'date-fns';

const initialState = {
  tasks: [
    {
      id: 1,
      title: 'Sample Task',
      description: 'This is a sample task to get you started',
      status: 'Pending',
      priority: 'Medium',
      dueDate: new Date().toISOString().split('T')[0],
      createdAt: new Date().toISOString(),
    }
  ],
  filters: {
    status: 'All',
    priority: 'All',
  },
  editingTask: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        ...action.payload,
        id: Date.now(),
        createdAt: new Date().toISOString(),
      };
      state.tasks.push(newTask);
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = { ...state.tasks[index], ...action.payload };
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    setStatusFilter: (state, action) => {
      state.filters.status = action.payload;
    },
    setPriorityFilter: (state, action) => {
      state.filters.priority = action.payload;
    },
    setEditingTask: (state, action) => {
      state.editingTask = action.payload;
    },
    clearEditingTask: (state) => {
      state.editingTask = null;
    },
  },
});

export const {
  addTask,
  updateTask,
  deleteTask,
  setStatusFilter,
  setPriorityFilter,
  setEditingTask,
  clearEditingTask,
} = tasksSlice.actions;

// Selectors
export const selectAllTasks = (state) => state.tasks.tasks;

export const selectFilteredTasks = (state) => {
  const { tasks, filters } = state.tasks;
  
  return tasks.filter(task => {
    const statusMatch = filters.status === 'All' || task.status === filters.status;
    const priorityMatch = filters.priority === 'All' || task.priority === filters.priority;
    return statusMatch && priorityMatch;
  });
};

export const selectTaskStats = (state) => {
  const tasks = state.tasks.tasks;
  const total = tasks.length;
  
  if (total === 0) {
    return {
      total: 0,
      completed: 0,
      completionPercentage: 0,
      completedToday: 0,
      overdue: 0,
      pending: 0,
      inProgress: 0,
    };
  }
  
  const completed = tasks.filter(task => task.status === 'Completed').length;
  const completedToday = tasks.filter(task => {
    if (task.status === 'Completed' && task.completedAt) {
      return isToday(new Date(task.completedAt));
    }
    return false;
  }).length;
  
  const overdue = tasks.filter(task => {
    if (task.status === 'Completed') return false;
    if (!task.dueDate) return false;
    const dueDate = startOfDay(new Date(task.dueDate));
    const today = startOfDay(new Date());
    return isPast(dueDate) && dueDate < today;
  }).length;
  
  const pending = tasks.filter(task => task.status === 'Pending').length;
  const inProgress = tasks.filter(task => task.status === 'In Progress').length;
  
  return {
    total,
    completed,
    completionPercentage: Math.round((completed / total) * 100),
    completedToday,
    overdue,
    pending,
    inProgress,
  };
};

export const selectFilters = (state) => state.tasks.filters;
export const selectEditingTask = (state) => state.tasks.editingTask;

export default tasksSlice.reducer;
