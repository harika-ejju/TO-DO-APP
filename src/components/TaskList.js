import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredTasks } from '../redux/tasksSlice';
import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = () => {
  const tasks = useSelector(selectFilteredTasks);

  if (tasks.length === 0) {
    return (
      <div className="task-list-container">
        <div className="empty-state">
          <div className="empty-icon">📭</div>
          <h3>No tasks found</h3>
          <p>Add your first task to get started!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="task-list-container">
      <h2>📝 Tasks ({tasks.length})</h2>
      <div className="task-list">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
