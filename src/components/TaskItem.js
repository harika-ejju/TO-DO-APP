import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, setEditingTask } from '../redux/tasksSlice';
import { format, isPast, startOfDay, isToday } from 'date-fns';
import './TaskItem.css';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(setEditingTask(task));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${task.title}"?`)) {
      dispatch(deleteTask(task.id));
    }
  };

  const isOverdue = () => {
    if (task.status === 'Completed' || !task.dueDate) return false;
    const dueDate = startOfDay(new Date(task.dueDate));
    const today = startOfDay(new Date());
    return isPast(dueDate) && dueDate < today;
  };

  const isDueToday = () => {
    if (!task.dueDate) return false;
    return isToday(new Date(task.dueDate));
  };

  const getStatusClass = () => {
    switch (task.status) {
      case 'Completed':
        return 'status-completed';
      case 'In Progress':
        return 'status-in-progress';
      case 'Pending':
        return 'status-pending';
      default:
        return '';
    }
  };

  const getPriorityClass = () => {
    switch (task.priority) {
      case 'High':
        return 'priority-high';
      case 'Medium':
        return 'priority-medium';
      case 'Low':
        return 'priority-low';
      default:
        return '';
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'No due date';
    try {
      return format(new Date(dateString), 'MMM dd, yyyy');
    } catch {
      return 'Invalid date';
    }
  };

  return (
    <div className={`task-item ${isOverdue() ? 'overdue' : ''}`}>
      <div className="task-header">
        <div className="task-title-section">
          <h3 className="task-title">{task.title}</h3>
          <div className="task-badges">
            <span className={`badge status ${getStatusClass()}`}>
              {task.status}
            </span>
            <span className={`badge priority ${getPriorityClass()}`}>
              {task.priority}
            </span>
          </div>
        </div>
        <div className="task-actions">
          <button onClick={handleEdit} className="action-btn edit-btn" title="Edit task">
            ✏️
          </button>
          <button onClick={handleDelete} className="action-btn delete-btn" title="Delete task">
            🗑️
          </button>
        </div>
      </div>

      {task.description && (
        <p className="task-description">{task.description}</p>
      )}

      <div className="task-footer">
        <div className="task-due-date">
          {isOverdue() && <span className="overdue-badge">⚠️ Overdue</span>}
          {isDueToday() && !isOverdue() && <span className="today-badge">🎯 Due Today</span>}
          <span className="due-date-text">
            📅 {formatDate(task.dueDate)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
