import React from 'react';
import { useSelector } from 'react-redux';
import { selectTaskStats } from '../redux/tasksSlice';
import './Dashboard.css';

const Dashboard = () => {
  const stats = useSelector(selectTaskStats);

  return (
    <div className="dashboard">
      <h2 className="dashboard-title">📊 Analytics Dashboard</h2>
      
      <div className="stats-grid">
        <div className="stat-card total">
          <div className="stat-icon">📋</div>
          <div className="stat-content">
            <h3>Total Tasks</h3>
            <p className="stat-number">{stats.total}</p>
          </div>
        </div>

        <div className="stat-card completed">
          <div className="stat-icon">✅</div>
          <div className="stat-content">
            <h3>Completed</h3>
            <p className="stat-number">{stats.completed}</p>
          </div>
        </div>

        <div className="stat-card today">
          <div className="stat-icon">🎯</div>
          <div className="stat-content">
            <h3>Completed Today</h3>
            <p className="stat-number">{stats.completedToday}</p>
          </div>
        </div>

        <div className="stat-card overdue">
          <div className="stat-icon">⚠️</div>
          <div className="stat-content">
            <h3>Overdue</h3>
            <p className="stat-number">{stats.overdue}</p>
          </div>
        </div>

        <div className="stat-card pending">
          <div className="stat-icon">⏳</div>
          <div className="stat-content">
            <h3>Pending</h3>
            <p className="stat-number">{stats.pending}</p>
          </div>
        </div>

        <div className="stat-card in-progress">
          <div className="stat-icon">🔄</div>
          <div className="stat-content">
            <h3>In Progress</h3>
            <p className="stat-number">{stats.inProgress}</p>
          </div>
        </div>
      </div>

      <div className="progress-section">
        <div className="progress-header">
          <h3>Overall Completion</h3>
          <span className="progress-percentage">{stats.completionPercentage}%</span>
        </div>
        <div className="progress-bar-container">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${stats.completionPercentage}%` }}
          >
            {stats.completionPercentage > 10 && (
              <span className="progress-text">{stats.completionPercentage}%</span>
            )}
          </div>
        </div>
        <p className="progress-info">
          {stats.completed} of {stats.total} tasks completed
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
