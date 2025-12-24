import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter, setPriorityFilter, selectFilters } from '../redux/tasksSlice';
import './Filters.css';

const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const handleStatusChange = (e) => {
    dispatch(setStatusFilter(e.target.value));
  };

  const handlePriorityChange = (e) => {
    dispatch(setPriorityFilter(e.target.value));
  };

  return (
    <div className="filters-container">
      <h3>🔍 Filter Tasks</h3>
      <div className="filters">
        <div className="filter-group">
          <label htmlFor="statusFilter">Status:</label>
          <select
            id="statusFilter"
            value={filters.status}
            onChange={handleStatusChange}
            className="filter-select"
          >
            <option value="All">All Status</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="priorityFilter">Priority:</label>
          <select
            id="priorityFilter"
            value={filters.priority}
            onChange={handlePriorityChange}
            className="filter-select"
          >
            <option value="All">All Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
