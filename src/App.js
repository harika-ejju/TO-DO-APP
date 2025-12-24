import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Dashboard from './components/Dashboard';
import TaskForm from './components/TaskForm';
import Filters from './components/Filters';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="app-header">
          <div className="container">
            <h1>✨ Task Manager Pro</h1>
            <p className="app-subtitle">Advanced Task Management with Analytics</p>
          </div>
        </header>

        <main className="container">
          <Dashboard />
          <TaskForm />
          <Filters />
          <TaskList />
        </main>

        <footer className="app-footer">
          <div className="container">
            <p>Built with React, Redux Toolkit & date-fns 🚀</p>
          </div>
        </footer>
      </div>
    </Provider>
  );
}

export default App;
